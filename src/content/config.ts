import { defineCollection, z } from 'astro:content';

export const collections = {
  work: defineCollection({
    schema: z.object({
      title: z.string(),
      lastModified: z.coerce.date().optional(),
      editorsNote: z.string().optional(),
      role: z.string().optional(),
      timeText: z.string().optional(),
      description: z.string(),
      startDate: z.coerce.date(),
      endDate: z.nullable(z.coerce.date()),
      pubDate: z.coerce.date(),
      updateDate: z.coerce.date().optional(),
      tags: z.array(z.string()),
      img: z.string(),
      img_alt: z.string().optional()
    })
  })
} as const;