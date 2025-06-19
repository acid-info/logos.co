// ref: https://docusaurus.io/docs/sidebar/multiple-sidebars#generating-pagination
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  main: [
    {
      type: 'doc',
      id: 'index',
      label: 'Home',
    },
    {
      type: 'doc',
      id: 'about',
      label: 'About',
    },
    'technology',
    'consensus',
    'comms',
    'storage',
    'process',
    'contribute',
    'events/index',
    'history',
    'songs',
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
    {
      type: 'link',
      label: 'Blog',
      href: 'https://press.logos.co/',
    },
  ],
}

module.exports = sidebars
