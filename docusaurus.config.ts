import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Brand Strategy',
  tagline: 'Personal brand strategy — building G.A.I.N in public at jitendersharma.dev',
  favicon: 'img/favicon.ico',

  url: 'https://jitendersharma.dev',
  baseUrl: '/',

  organizationName: 'iamsharmajitender',
  projectName: 'brand-strategy',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: ['@docusaurus/theme-mermaid'],

  markdown: {
    mermaid: true,
  },

  themeConfig: {
    image: 'img/jitender-sharma-social.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      logo: {
        alt: 'Jitender Sharma',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Brand Strategy',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Links',
          items: [
            {
              label: 'Overview',
              to: '/docs/overview',
            },
            {
              label: 'Insights',
              to: '/docs/insight/Overview',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://linkedin.com/in/iamsharmajitender',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/iamsharmajitender',
            },
            {
              label: 'X',
              href: 'https://x.com/msharmajitender',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Architects Handbook',
              href: 'https://jitendersharma.dev',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Jitender Sharma.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    mermaid: {
      theme: {light: 'default', dark: 'dark'},
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
