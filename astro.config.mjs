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
                {
                    label: 'Week 3 Physics: Algebra under Physics Constraints',
                    items: [
                        { label: 'Day 9: Symbolic Rearrangement of Physics Formula', slug: 'week-3-day-9' },
                        { label: 'Day 10: Simultaneous Equations in Physics', slug: 'week-3-day-10' },
                        { label: 'Day 11: Limiting Case Analysis', slug: 'week-3-day-11' },
                        { label: '📊 Week 3 Strategic Blueprint', slug: 'week-3-blueprint' }

                        


                    ],
                },
                {
                    label: 'Week 4 Physics: Free Body Diagrams & Newtons Laws',
                    items: [
                        { label: 'Day 12: Free Body Foundations', slug: 'week-4-day-12' },
                        { label: 'Day 12: FBD Asset Cache', slug: 'week-4-day-12-fbd-assets' },
                        { label: 'Day 13: Newtons Laws — Equation Writing', slug: 'week-4-day-13' },
                        { label: 'Day 13: FBD Asset Cache', slug: 'week-4-day-13-fbd-assets' },
                        { label: 'Day 14: Dynamics in two dimensions', slug: 'week-4-day-14' },
                        { label: 'Day 14: FBD Asset Cache', slug: 'week-4-day-14-fbd-assets' },
                        { label: '📊 Week 4 Strategic Blueprint', slug: 'week-4-blueprint' }
                        
                

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
                    label: 'Week 3 Math: Graph Transformations & Coordinate Geometry',
                    items: [
                        { label: 'Day 1: Linear Transformations & Invariant Tracking ', slug: 'math/week-3-day-1' },
                        { label: 'Day 2: Stretches, Reflections, and Modulus Transformations', slug: 'math/week-3-day-2' },
                        { label: 'Day 3: Midpoints & Perpendicular Gradients', slug: 'math/week-3-day-3' },
                        { label: 'Day 4: Equations of Straight Lines', slug: 'math/week-3-day-4' },
                        { label: 'Day 5: Intercepts and Vector Translations of Graphs', slug: 'math/week-3-day-5' },
                        { label: '📊 Week 3 Strategic Blueprint', slug: 'math/week-3-blueprint' }
                    ],
                },
                {
                    label: 'Week 4 Math: Logarithms & Exponential Analysis',
                    items: [
                        { label: 'Day 1: Introduction to Logarithms', slug: 'math/week-4-day-1' },
                        { label: 'Day 2: Core Laws of Logarithms', slug: 'math/week-4-day-2' },
                        { label: 'Day 3: Natural Logarithms & Base e', slug: 'math/week-4-day-3' },
                        { label: 'Day 4: Solving Exponential Equations', slug: 'math/week-4-day-4' },
                        { label: 'Day 5: Change of Base & Logarithmic Modeling', slug: 'math/week-4-day-5' },
                        { label: '📊 Week 4 Strategic Blueprint', slug: 'math/week-4-blueprint' }
                        
                    ],
                },
                {
                    label: 'Week 5 Math: Advanced Sequences, Series and Limits',
                    items: [
                        { label: 'Day 1: Arithmetic Progressions & Linear Growth', slug: 'math/week-5-day-1' },
                        { label: 'Day 2: Arithmetic Series & Sigma Notation', slug: 'math/week-5-day-2' },
                        { label: 'Day 3: Geometric Progressions & Exponential Steps', slug: 'math/week-5-day-3' },
                        { label: 'Day 4: Geometric Series & Financial Modeling', slug: 'math/week-5-day-4' },
                        { label: 'Day 5: Infinite Geometric Series & Convergence', slug: 'math/week-5-day-5' },
                        { label: '📊 Week 5 Strategic Blueprint', slug: 'math/week-5-blueprint' }
                        
                        
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