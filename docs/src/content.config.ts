import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

const ruleFields = z.object({
  name: z.string().optional(),
  category: z.string().optional(),
  tags: z.array(z.string()).optional(),
  vars: z.record(z.unknown()).optional(),
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
