import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { listProfiles } from './src/lib/profiles.mjs';
import { remarkStripRuleH1 } from './src/lib/strip-rule-h1.mjs';

const profileSidebarItems = listProfiles().map((name) => ({
  label: name,
  link: `profiles/${name}/`,
}));

export default defineConfig({
  site: 'https://mrjk.github.io',
  base: '/ai-rules',
  image: {
    service: { entrypoint: 'astro/assets/services/noop' },
  },
  markdown: {
    remarkPlugins: [remarkStripRuleH1],
  },
  integrations: [
    starlight({
      title: 'AI Rules',
      description: 'Reusable AI agent rules composed with ai-rulesmith',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/mrjk/ai-rules' },
      ],
      sidebar: [
        {
          label: 'Start',
          items: [
            { label: 'Install and apply', slug: 'start/install' },
            { label: 'GitHub Pages', slug: 'start/github-pages' },
          ],
        },
        {
          label: 'Tools',
          items: [
            { label: 'Cursor', slug: 'start/cursor' },
            { label: 'Cursor user rule for git', slug: 'start/cursor-user-git' },
            { label: 'GitHub Copilot', slug: 'start/copilot' },
            { label: 'Codex', slug: 'start/codex' },
          ],
        },
        {
          label: 'Library',
          autogenerate: { directory: 'library' },
        },
        {
          label: 'Profiles',
          items: profileSidebarItems,
        },
        {
          label: 'Rules',
          autogenerate: { directory: 'rules' },
        },
      ],
    }),
  ],
});
