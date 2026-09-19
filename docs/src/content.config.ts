import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

const ruleFields = z.object({
  title: z.string().optional(),
  name: z.string().optional(),
  priority: z.union([z.string(), z.number()]).optional(),
  category: z.string().optional(),
  tags: z.array(z.string()).optional(),
  description: z.string().optional(),
});

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: (context) => {
      const starlight = docsSchema({ extend: ruleFields })(context);
      return z.preprocess((raw) => {
        if (!raw || typeof raw !== 'object') return raw;
        const data = raw as Record<string, unknown>;
        if (data.title == null && typeof data.name === 'string') {
          return { ...data, title: data.name };
        }
        return data;
      }, starlight);
    },
  }),
};
