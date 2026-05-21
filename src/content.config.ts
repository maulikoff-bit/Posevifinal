import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Allowed legal status values. Using a fixed list forces every post to
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

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    // The public figure the report is about.
    subject: z.string(),
    party: z.string().optional(),
    // Current legal status — REQUIRED so readers never confuse an
    // allegation with a conviction.
    status: z.enum(STATUS_VALUES),
    tags: z.array(z.string()).default([]),
    // Every factual claim must trace to a public source. Posts with an
    // empty sources list will fail the build (see refine below).
    sources: z
      .array(
        z.object({
          title: z.string(),
          url: z.string().url(),
          publisher: z.string().optional(),
          date: z.string().optional(),
        })
      )
      .min(1, 'Every report must cite at least one verifiable public source.'),
    author: z.string().optional(),
    heroImage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
