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
      '@acid-info/docusaurus-umami',
      {
        websiteId: '39016953-368d-4d5c-a5b9-601d105ce8d4',
        scriptSrc: 'https://umami.bi.status.im/script.js',
        dataDomains: 'logos.co',
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
      navbar: {
        items: [
          {
            type: 'search',
          },
          {
            href: 'https://discord.gg/logosnetwork',
            position: 'right',
            className: 'header-discord-link',
            title: 'Logos on Discord',
            'data-umami-event': 'Discord click',
            'data-umami-event-source': 'navbar',
          },
          {
            href: 'https://twitter.com/@logos_network',
            position: 'right',
            className: 'header-x-link',
            title: 'Logos on X',
            'data-umami-event': 'X click',
            'data-umami-event-source': 'navbar',
          },
          {
            href: 'https://www.youtube.com/@LogosNetwork',
            position: 'right',
            className: 'header-youtube-link',
            title: 'Logos on YouTube',
            'data-umami-event': 'Youtube click',
            'data-umami-event-source': 'navbar',
          },
        ],
      },
      footer: {
        copyright: 'Logos',
        links: [
          {
            items: [
              {
                href: 'https://github.com/logos-co',
                label: 'Github',
                'data-umami-event': 'Github click',
                'data-umami-event-source': 'navbar',
              },
              {
                href: 'https://press.logos.co/',
                label: 'Blog',
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
