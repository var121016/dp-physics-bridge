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
                    label: 'Week 1 Physics: Units & Dimensions',
                    items: [
                        { label: 'Day 1 Practice', slug: 'week-1-day-1' },
						{ label: 'Day 2 Practice', slug: 'week-1-day-2' },	
						{ label: 'Day 3 Practice', slug: 'week-1-day-3' },
						{ label: 'Day 4 Practice', slug: 'week-1-day-4' },	
						{ label: 'Day 5 Practice', slug: 'week-1-day-5' },
						{ label: '📊 Week 1 Strategic Blueprint', slug: 'week-1-blueprint' }
                    ],
                },
                {
                    label: 'Week 2 Physics: Vector Fluency',
                    items: [
                        { label: 'Day 6: SOH CAH TOA & Components', slug: 'week-2-day-6' },
                        { label: 'Day 7: Conventions & Vector Addition', slug: 'week-2-day-7' },
                        { label: 'Day 8: Inclined Planes & Angles', slug: 'week-2-day-8' },
                        { label: '📊 Week 2 Strategic Blueprint', slug: 'week-2-blueprint' }


                    ],
                },
                // === 📐 MATH AA HL BRIDGING MODULES ===
                {
                    label: 'Week 1 Math: Algebra Foundations',
                    items: [
                        { label: 'Day 1: Indices & Surds', slug: 'math/week-1-day-1' },
                        { label: 'Day 2: Advanced Quadratics & The Discriminant', slug: 'math/week-1-day-2' },
                        { label: 'Day 3: Simultaneous Non-Linear Systems & Substitutions', slug: 'math/week-1-day-3' },
                        { label: 'Day 4: Polynomials & Factor/Remainder Theorem', slug: 'math/week-1-day-4' },
                        { label: 'Day 5: Binomial Theorem', slug: 'math/week-1-day-5' },
                        { label: '📊 Week 1 Strategic Blueprint', slug: 'math/week-1-blueprint' }

                
                    ],
                },
                {
                    label: 'Week 2 Math: Functions, Sets and Inverse Rigor',
                    items: [
                        { label: 'Day 1: Formal Concept of Functions and Domain Set', slug: 'math/week-2-day-1' },
                        { label: 'Day 2: Composite Functions and Domain Chaining', slug: 'math/week-2-day-2' }, 
                        { label: 'Day 3: Inverse Functions and Rigor', slug: 'math/week-2-day-3' }, 
                        { label: 'Day 4: Rational Functions and Structural Graphing', slug: 'math/week-2-day-4' },
                        { label: 'Day 5: Analytical Asymptotes', slug: 'math/week-2-day-5' },
                        { label: '📊 Week 2 Strategic Blueprint', slug: 'math/week-2-blueprint' }



                        
                
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