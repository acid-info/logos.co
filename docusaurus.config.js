// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
require('dotenv').config()

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Logos',
  url: 'https://logos.co/',
  baseUrl: '/',

  markdown: {
    mermaid: true,
  },

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@acid-info/logos-docusaurus-preset',
      /** @type {import('@acid-info/logos-docusaurus-preset').PluginOptions} */
      ({
        businessUnit: 'Logos',
        theme: {
          name: 'default',
          options: {
            customCss: [require.resolve('./src/css/custom.scss')],
          },
        },
        docs: {
          id: 'root-pages',
          routeBasePath: '/',
          path: 'docs',
          sidebarPath: './sidebars.js',
          breadcrumbs: false,
        },
        og: {},
      }),
    ],
  ],
  plugins: [
    [
      '@acid-info/docusaurus-fathom',
      {
        siteId: 'GSUEA',
        scriptUrl: 'https://fathom.bi.status.im/tracker.js',
        hostnames: ['logos.co'],
      },
    ],
    [
      '@acid-info/docusaurus-umami',
      {
        websiteId: '39016953-368d-4d5c-a5b9-601d105ce8d4',
        scriptSrc: 'https://umami.bi.status.im/script.js',
      },
    ],
  ],
  themeConfig:
    /** @type {import('@acid-info/logos-docusaurus-preset').ThemeConfig} */
    ({
      colorMode: {
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      footer: {
        copyright: 'Logos',
        links: [
          {
            items: [
              {
                href: 'https://twitter.com/@logos_network',
                label: 'Twitter',
              },
              {
                href: 'https://discord.gg/logosnetwork',
                label: 'Discord',
              },
              {
                href: 'https://lenster.xyz/u/logos-state',
                label: 'Lens',
              },
              {
                href: '/events',
                label: 'Events',
              },
              {
                href: 'https://github.com/logos-co',
                label: 'Github',
              },
            ],
          },
          {
            items: [
              {
                href: 'https://boards.greenhouse.io/logos',
                label: 'Work with us',
              },
              {
                href: 'https://guide.logos.co/',
                label: 'Brand Guidelines',
              },
              {
                href: '/terms',
                label: 'Terms & conditions',
              },
              {
                href: '/privacy-policy',
                label: 'Privacy Policy',
              },
              {
                href: '/security',
                label: 'Security',
              },
            ],
          },
        ],
      },
    }),
}

module.exports = config
