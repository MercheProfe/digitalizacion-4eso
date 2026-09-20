// // @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Digitalización 4º ESO',
  tagline: 'Aprende, crea y comprende el mundo digital',
  favicon: 'img/favicon.png',

  future: {
    v4: true,
  },

  // GitHub Pages
  url: 'https://mercheprofe.github.io',
  baseUrl: '/digitalizacion-4eso/',

  organizationName: 'MercheProfe',
  projectName: 'digitalizacion-4eso',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: undefined,
        },

        // No utilizaremos blog
        blog: false,

        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/social-card.jpg',

      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },

      navbar: {
        title: 'Digitalización',
        logo: {
          alt: 'Digitalización 4º ESO',
          src: 'img/logo.png',
        },

        items: [
          {
            type: 'docSidebar',
            sidebarId: 'digitalizacionSidebar',
            position: 'left',
            label: 'Apuntes',
          },
          {
            href: 'https://github.com/MercheProfe/digitalizacion-4eso',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },

      footer: {
        style: 'dark',

        links: [
          {
            title: 'Digitalización 4º ESO',
            items: [
              {
                label: 'Apuntes',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Recursos',
            items: [
              {
                label: 'Repositorio GitHub',
                href: 'https://github.com/MercheProfe/digitalizacion-4eso',
              },
            ],
          },
        ],

        copyright: `Material educativo · Digitalización 4º ESO`,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
