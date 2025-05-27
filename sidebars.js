// ref: https://docusaurus.io/docs/sidebar/multiple-sidebars#generating-pagination
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  main: [
    {
      type: 'doc',
      id: 'index',
      label: 'About',
    },
    'history',
    'technology',
    'consensus',
    'comms',
    'storage',
    'process',
    'culture',
    'participate',
    'exit',
    {
      type: 'html',
      value: '<div class="sidebar-menu-divider"></div>',
      defaultStyle: true,
    },
    {
      type: 'html',
      value: '<div class="sidebar-menu-divider"></div>',
      defaultStyle: true,
    },
    'manifesto',
    'farewell-to-westphalia',
  ],
}

module.exports = sidebars
