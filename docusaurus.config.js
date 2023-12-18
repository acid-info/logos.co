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
          id: 'Logos',
          routeBasePath: '/',
          path: 'docs',
          sidebarPath: './sidebars.js',
          breadcrumbs: false,
        },
        og: {},
      }),
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
        links: [
          {
            items: [
              {
                href: 'https://twitter.com/@logos_network',
                label: 'Twitter',
              },
              {
                href: 'https://lenster.xyz/u/logos-state',
                label: 'Lens',
              },
              {
                href: 'https://astral.ninja/npub1ljkmma77fqr79f8wp28hx68lwkymmqztrsyaepdadujz252fak2sxxw4sl',
                label: 'Nostr',
              },
              {
                href: 'https://github.com/logos-co',
                label: 'Github',
              },
              {
                href: 'https://guide.logos.co/',
                label: 'Brand Guidelines',
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
                href: '/terms',
                label: 'Terms & conditions',
              },
            ],
          },
        ],
      },
    }),
}

module.exports = config
