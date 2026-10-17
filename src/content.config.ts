import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({
		loader: docsLoader(),
		// `date` marks a page as a post: it's shown under the title and used to sort section lists.
		schema: docsSchema({ extend: z.object({ date: z.coerce.date().optional() }) }),
	}),
};
