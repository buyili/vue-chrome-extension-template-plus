
module.exports = {
  name: 'Vue Extension',
  version: '1.0.0',
  description: 'Vue.js Chrome Extension Template Plus (wcerp)',
  author: 'yura',
  manifest_version: 3,
  icons: { '16': 'icons/16.png', '128': 'icons/128.png' },
  permissions: [
    'activeTab',
    'tabs',
    'cookies',
    'background',
    'contextMenus',
    'unlimitedStorage',
    'storage',
    'notifications',
    'identity',
    'identity.email',
    'offscreen'
  ],
  host_permissions: [
    '<all_urls>',
    '*://*/*'
  ],
  action: {
    default_title: 'title',
    default_popup: 'pages/popup.html'
  },
  background: {
    service_worker: 'js/service_worker.js'
  },
  devtools_page: 'pages/devtools.html',
  options_page: 'pages/options.html',
  content_scripts: [{
    js: [ 'js/inject.js' ],
    run_at: 'document_end',
    matches: ['<all_urls>'],
    all_frames: true
  }],
  content_security_policy: {
    extension_pages: "script-src 'self' 'unsafe-eval'; object-src 'self'",
    sandbox: "sandbox allow-scripts allow-forms allow-popups allow-modals; script-src 'self' 'unsafe-inline' 'unsafe-eval'; child-src 'self';"
  },
  web_accessible_resources: [
    {
      resources: [ 'panel.html', 'js/content.js' ],
      matches: [ '*://*/*' ]
    }
  ]
}
