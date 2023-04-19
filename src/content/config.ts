import { defineCollection, z } from 'astro:content';

export const collections = {
  work: defineCollection({
    schema: z.object({
      title: z.string(),
      pubDate: z.coerce.date(),
      lastModified: z.coerce.date().optional(),
      editorsNote: z.string().optional(),
      role: z.string().optional(),
      startDate: z.coerce.date(),
      endDate: z.nullable(z.coerce.date()),
      timeText: z.string().optional(),
      description: z.string(),
      img: z.string(),
      img_alt: z.string().optional(),
      tags: z.array(z.string()),
    }),
  }),
} as const;
