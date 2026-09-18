import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://mrjk.github.io',
  base: '/ai-rules',
  image: {
    service: { entrypoint: 'astro/assets/services/noop' },
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
            { label: 'Using with Cursor', slug: 'start/cursor' },
            { label: 'Cursor user rule for git', slug: 'start/cursor-user-git' },
            { label: 'GitHub Pages', slug: 'start/github-pages' },
          ],
        },
        {
          label: 'Library',
          autogenerate: { directory: 'library' },
        },
        {
          label: 'Rules',
          autogenerate: { directory: 'rules' },
        },
      ],
    }),
  ],
});
