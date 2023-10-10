// ref: https://docusaurus.io/docs/sidebar/multiple-sidebars#generating-pagination
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  main: [
    'manifesto',
    {
      type: 'html',
      value: '<div class="sidebar-menu-divider"></div>',
      defaultStyle: true,
    },
    'history',
    'technology',
    'consensus',
    'comms',
    'storage',
    'process',
    'culture',
    'participate',
  ],
}

module.exports = sidebars
