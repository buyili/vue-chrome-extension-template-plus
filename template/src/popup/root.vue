<template lang="pug">
    div(class='root-container')
      el-button(type="primary" @click="tab") New tab 
      el-button(type="primary" @click="onAddToClipboard") Add Text To Clipboard  
</template>
<script>
  export default {
    data: () => ({
    }),
    computed: { },
    created () { },
    mounted () { },
    methods: {
      tab () {
        chrome.tabs.create({ url: 'pages/app.html' })
      },
      async onAddToClipboard () {
        const value = 'Add text to clipboard success!!! ' + Date.now()
        // notice: Only a single offscreen document may be created.
        await chrome.offscreen.createDocument({
          url: 'offscreen/clipboard/index.html',
          reasons: [chrome.offscreen.Reason.CLIPBOARD],
          justification: 'Write text to the clipboard.'
        })

        // Now that we have an offscreen document, we can dispatch the
        // message.
        chrome.runtime.sendMessage({
          type: 'copy-data-to-clipboard',
          target: 'offscreen-doc',
          data: value
        })
      }
    }
  }
</script>
<style lang="less">
  .root-container{
    min-width: 500px;
  }
  div {
    color: blue
  }
</style>