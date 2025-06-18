import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    alt: z.string(),
    image: z
      .object({
        url: z.string(),
        alt: z.string(),
      })
      .optional(),
    pubDate: z.coerce.date(), // Accepts string or Date, coerces to Date
  }),
});

export const collections = { posts };