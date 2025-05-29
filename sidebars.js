// ref: https://docusaurus.io/docs/sidebar/multiple-sidebars#generating-pagination
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  main: [
    {
      type: 'doc',
      id: 'index',
      label: 'Home',
    },
    'about',
    'history',
    'technology',
    'consensus',
    'comms',
    'storage',
    'process',
    'culture',
    'participate',
    'events/index',
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
    {
      type: 'doc',
      id: 'farewell-to-westphalia',
      label: 'Book',
    },
  ],
}

module.exports = sidebars
