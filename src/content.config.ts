import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

// Author collection schema
const playersCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/players" }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    email: z.string().optional(),
    image: z.string().optional(),
    description: z.string().optional(),
    social: z
      .array(
        z
          .object({
            name: z.string().optional(),
            icon: z.string().optional(),
            link: z.string().optional(),
          })
          .optional(),
      )
      .optional(),
    draft: z.boolean().optional(),
  }),
});

// Pages collection schema
const pagesCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/pages" }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

// about collection schema
const aboutCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/about" }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

// Homepage collection schema
const homepageCollection = defineCollection({
  loader: glob({ pattern: "**/-*.{md,mdx}", base: "src/content/homepage" }),
  schema: z.object({
    banner: z.object({
      title: z.string(),
      content: z.string(),
      image: z.string(),
    })
  }),
});

// después de aboutCollection…
const sponsorsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/sponsors" }),
  schema: z.object({
    title:      z.string().optional(),
    meta_title: z.string().optional(),
    description:z.string().optional(),
    image:      z.string().optional(),
    name:       z.string().optional(),
    logo:       z.string().optional(),
    website:    z.string().url().optional(),
    draft:      z.boolean().optional(),
  }),
});

export const collections = {
  homepage: homepageCollection,
  players:  playersCollection,
  pages:    pagesCollection,
  about:    aboutCollection,
 sponsors: sponsorsCollection
};

