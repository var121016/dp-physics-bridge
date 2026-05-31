// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
	output: 'static', // Tells Astro to build optimized pre-rendered HTML files
    integrations: [
        starlight({
            title: 'My Docs',
            // We are pulling the styling directly from the web here—no local folder needed!
            customCss: [
                'katex/dist/katex.min.css',
            ],
            social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
            sidebar: [
                {
                    label: 'Week 1: Units & Dimensions',
                    items: [
                        { label: 'Day 1 Practice', slug: 'week-1-day-1' },
						{ label: 'Day 2 Practice', slug: 'week-1-day-2' },	
						{ label: 'Day 3 Practice', slug: 'week-1-day-3' },
						{ label: 'Day 4 Practice', slug: 'week-1-day-4' },	
						{ label: 'Day 5 Practice', slug: 'week-1-day-5' },
                    ],
                },
                {
                    label: 'Reference',
                    items: [{ autogenerate: { directory: 'reference' } }],
                },
            ],
        }),
    ],
    // This activates the equation processing engine
    markdown: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
    },
});