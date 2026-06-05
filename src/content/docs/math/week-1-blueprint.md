---
title: "Week 1 Master Blueprint: The Foundation Matrix"
description: "Syllabus mapping, parent-student execution matrix, and core DP-readiness conceptual refreshers."
---

## Week 1 Blueprint: The Foundation Matrix

The primary goal of Week 1 is **algebraic fluency and speed**. In MYP, students are often given ample time to solve isolated problems. In DP, algebra is merely the *language* used to solve much larger, multi-step modeling problems.

### Weekly Execution Schedule

| Day | Focus Area | High School Student Action | Parent Check-In Question |
| :--- | :--- | :--- | :--- |
| **Day 1** | Linear Transitions & Rearranging | Master substitution speed and multi-variable isolation. | "Can you easily change the subject of a formula when the variable is in the denominator?" |
| **Day 2** | Quadratics & The Discriminant | Memorize the 3 states of $\Delta$ and their exact geometric meanings. | "Show me what the graph looks like when the discriminant is exactly zero." |
| **Day 3** | Non-Linear Systems & AM-GM | Solve intersection points between circles and lines by hand. | "How does the AM-GM shortcut let you find a minimum value without using calculus?" |
| **Day 4** | Polynomials & Factor Theorem | Practice polynomial long division until it becomes muscle memory. | "What does it mean if you plug a root into a cubic function and the remainder isn't zero?" |
| **Day 5** | The Binomial Theorem | Expand combinations rapidly without relying on a calculator. | "How do you find a specific term of $x$ without expanding all the brackets?" |

---

## 🧠 The DP Physics & Math Refresher
### Concepts Absent from MYP That Are Essential for DP Readiness

While MYP touches on basic quadratics and linear graphing, several critical tools in this week's toolkit are completely fresh additions for the Diploma Programme. Mastery of these concepts is what prevents students from hitting a wall in the first term.

### 1. The Discriminant ($\Delta$) as a Geometric Toggle
In MYP, students learn the quadratic formula mechanically. In DP, they must treat the discriminant $\Delta = b^2 - 4ac$ as a strategic condition tool to solve intersection and optimization problems.

* **The Transition:** Students must shift from seeing $\Delta$ as just a part of a root-finding formula to using it as a constraint engine. For instance, forcing $\Delta = 0$ is the standard algebraic method to prove a line is perfectly **tangent** to a curve (a foundational skill for kinematics and optimization fields in DP Physics).

### 2. The Factor and Remainder Theorems
MYP relies almost entirely on factoring quadratics by tracking number pairs or using cross-multiplication. DP introduces polynomials of degree 3 and higher (cubics and quartics).

* **The New Tool:** Students cannot visually factor a cubic. They must use the **Factor Theorem**: if plugging a value $c$ into a function results in $f(c) = 0$, then $(x-c)$ is an absolute structural piece of that polynomial. They then use polynomial long division to strip that factor away and inspect the remaining quadratic.

### 3. Vieta’s Formulas (Symmetric Root Analysis)
In advanced DP math tracks, students are regularly asked to analyze the properties of an equation's roots *without actually solving the equation itself*.

* **The New Tool:** For a cubic equation $x^3 + bx^2 + cx + d = 0$, Vieta's formulas establish that the coefficients are directly constructed by symmetric sums and products of its roots ($\alpha, \beta, \gamma$):
  $$b = -(\alpha + \beta + \gamma)$$
  $$c = \alpha\beta + \beta\gamma + \gamma\alpha$$
  $$d = -\alpha\beta\gamma$$
  This shifts a student's mindset from "finding the answer" to analyzing the structural anatomy of functions.

### 4. The AM-GM Inequality (Non-Calculus Optimization)
Optimization in MYP is typically limited to finding the vertex of a basic parabola. While DP eventually uses calculus (derivatives) for this, early DP algebraic strategies require non-calculus bounds checks.

* **The New Tool:** The Arithmetic Mean-Geometric Mean Inequality states that for any positive real numbers:
  $$\frac{a + b}{2} \geq \sqrt{ab}$$
  This is a hidden superpower in optimization questions. If a student is asked to find the minimum value of $x + \frac{4}{x}$, they don't need to graph it or differentiate it; they map it directly to AM-GM to find the lower boundary instantly.

### 5. General Term Binomial Modeling
MYP student exposure to expanding brackets usually stops at $(a+b)^2$. DP jumps immediately to $(a+b)^n$ where $n$ can be large.

* **The Transition:** Instead of manually writing out massive expansion layouts, students learn to use the **General Term Formula**:
  $$T_{r+1} = \binom{n}{r} a^{n-r} b^r$$
  They must learn to extract a highly specific term (like finding just the coefficient of $x^7$ inside a massive expression) by setting up an index matching equation for $r$.

---

## 📊 Atomic Habits for the Student

1. **Ditch the Calculator for Arithmetic:** The DP non-calculator paper penalizes students who rely on a screen to compute fractions, fractional exponents, or basic factorizations. Do the Tier 1 checks completely by hand.
2. **Document the Constraint States:** When a problem says "has real roots" or "is a tangent," write down the mathematical condition ($\Delta \geq 0$ or $\Delta = 0$) in the margin *before* doing any algebra. It anchors your brain to the goal.
3. **Check for Extraneous Solutions:** Especially on Day 3 (radical equations), squaring both sides can introduce false answers. Always plug your final values back into the original starting expression to verify them.