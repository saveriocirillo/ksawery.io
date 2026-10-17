import { getCollection } from 'astro:content';

/** Formats a post date like "October 17, 2026". Dates are calendar days, so format in UTC. */
export const formatDate = (date: Date) =>
	date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });

/** The posts in a section folder, such as "running", newest first. A post is a page with a `date`. */
export async function getPosts(section: string) {
	const posts = await getCollection('docs', (entry) => entry.id.startsWith(`${section}/`) && entry.data.date);
	return posts.sort((a, b) => b.data.date!.getTime() - a.data.date!.getTime());
}
