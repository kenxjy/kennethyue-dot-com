import { defineCollection, z } from 'astro:content';

export const collections = {
  work: defineCollection({
    schema: z.object({
      title: z.string(),
      role: z.string().optional(),
      timeText: z.string().optional(),
      description: z.string(),
      startDate: z.coerce.date(),
      endDate: z.nullable(z.coerce.date()),
      tags: z.array(z.string()),
      img: z.string(),
      img_alt: z.string().optional()
    })
  })
} as const;