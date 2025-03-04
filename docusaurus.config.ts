import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'k8s-gh-action-toolkit',
  tagline: 'Collection of GitHub Actions to streamline Kubernetes deployments, security, and automation.',
  favicon: 'img/favicon.ico',

  url: "https://azure.github.io", // GitHub Pages URL for the organization
  baseUrl: "/k8s-gh-action-toolkit/", // Must match your repo name
  organizationName: 'Azure', // Usually your GitHub org/user name.
  projectName: 'k8s-gh-action-toolkit', // Usually your repo name.
  deploymentBranch: "gh-pages",

  trailingSlash: false, 
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'K8s GitHub Action Toolkit',
      // logo: {
      //   alt: 'My Site Logo',
      //   src: 'img/cloud-toolbox.png',
      // },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/Azure/k8s-gh-action-toolkit',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
