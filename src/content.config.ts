import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Allowed legal status values. Using a fixed list forces every report to
// state, accurately, where a case stands — this is your main libel shield.
export const STATUS_VALUES = [
  'Allegation',
  'Complaint Filed',
  'Under Investigation',
  'Charged',
  'On Trial',
  'Convicted',
  'Acquitted',
  'Cleared',
  'Closed',
] as const;

const sourceSchema = z.object({
  title: z.string(),
  url: z.string().url(),
  publisher: z.string().optional(),
  date: z.string().optional(),
});

// REPORTS: pieces about a specific public figure. Sourcing is mandatory.
const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    subject: z.string(),
    party: z.string().optional(),
    status: z.enum(STATUS_VALUES),
    tags: z.array(z.string()).default([]),
    sources: z
      .array(sourceSchema)
      .min(1, 'Every report must cite at least one verifiable public source.'),
    author: z.string().optional(),
    heroImage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

// GUIDES: evergreen, non-accusatory explainers (e.g. "how to read an FIR").
// Great for steady search traffic and safe to publish. Sources optional.
const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    sources: z.array(sourceSchema).default([]),
    author: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts, guides };
