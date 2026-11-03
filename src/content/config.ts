import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    quadrant: z.enum(['Educate', 'Inspire', 'Entertain', 'Convince']).optional(),
    tags: z.array(z.string()).default([]),
    featurePhoto: z.string().optional(),
    featureCaption: z.string().optional(),
    thumbnail: z.string().optional(),
    readingTime: z.number().optional(),
    faqSchema: z.record(z.any()).optional().nullable(),
    sources: z.array(
      z.object({
        title: z.string(),
        url: z.string(),
      })
    ).default([]),
  }),
});

export const collections = { blog };
