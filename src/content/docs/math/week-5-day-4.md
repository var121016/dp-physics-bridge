---
title: "Day 24: Geometric Series & Financial Modeling"
description: "Scaffolded Core Strategy Blueprint and 10-Problem Tiered Track focused on finite geometric summation formulas, factor isolation, and compound interest application."
---


Today we transition from analyzing individual exponential scaling steps to calculating their accumulated totals. A Geometric Series sums the terms of a geometric progression. This mathematical architecture is the exact engine behind real-world fractional decay totals, financial annuities, compound interest accruals, and long-term asset depreciation modeling.

---

## 🧭 The Core Strategy Blueprint

### 👥 Parent Analytics Summary
* **The Core Gap:** Students often view the geometric summation formula as an intimidating, arbitrary fraction. When applying it to real-world financial problems (like compound savings accounts), they easily trip over index alignments—frequently miscalculating whether a system has run for $n$ or $n-1$ compounding cycles.
* **The Target Objective:** We derive the geometric sum formula from absolute first principles using an elegant scaling elimination method. Your student will understand how the formula handles algebraic cancellation, master fraction tracking, and map out compound multi-step totals with clean structural confidence.

### 🎒 First-Principles Script (The Feynman Technique)
> **Read this aloud to lock in the structural intuition:**
>
> "Let's uncover where the finite geometric sum formula actually comes from. Suppose we want to find the total sum of the first $n$ terms of a geometric sequence. We can write this long sum out explicitly:
> 
> $$S_n = u_1 + u_1 r + u_1 r^2 + u_1 r^3 + \dots + u_1 r^{n-1}$$
> 
> Finding this total term-by-term is tedious. Let's use a brilliant algebraic move: multiply the entire equation by the common ratio $r$. This shifts every single term up by one power index:
> 
> $$r S_n = u_1 r + u_1 r^2 + u_1 r^3 + u_1 r^4 + \dots + u_1 r^n$$
> 
> Now, look at what happens if we subtract our second equation from our first equation ($S_n - r S_n$). Let's line up the terms vertically:
> 
> $$S_n = u_1 + u_1 r + u_1 r^2 + \dots + u_1 r^{n-1}$$
> $$- (r S_n = \quad \quad u_1 r + u_1 r^2 + \dots + u_1 r^{n-1} + u_1 r^n)$$
> 
> Look at the middle! Every single internal term cancels out completely! The only terms left standing are the very first term from the top line and the absolute final shifted term from the bottom line:
> 
> $$S_n - r S_n = u_1 - u_1 r^n$$
> 
> To isolate our sum variable $S_n$, we factor out $S_n$ on the left side and factor out $u_1$ on the right side:
> 
> $$S_n (1 - r) = u_1 (1 - r^n)$$
> 
> Finally, dividing both sides by $(1 - r)$ unmasks our universal finite geometric summation engine:
> 
> $$S_n = \frac{u_1 (1 - r^n)}{1 - r} \quad \text{or} \quad S_n = \frac{u_1 (r^n - 1)}{r - 1}$$
> 
> Both forms are structurally identical. We typically use the first form when our ratio $|r| < 1$ (decay patterns) and the second form when $|r| > 1$ (growth patterns) to keep our denominators clean and positive."

---

## 🛠️ The 10-Problem Tiered Track

Execute these tasks completely on physical paper. **Calculators are strictly prohibited.** Show every structural step cleanly.

### 🛑 Tier 1: Finite Summation Applications (Problems 1–4)
*Focus: Direct application of the geometric sum formulas and tracking fraction calculations.*

#### 1. Problem 1
Find the exact total sum of the first 6 terms of the geometric series: $4 + 12 + 36 + 108 + \dots$

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Direct evaluation of the expanded growth series engine.

Extract your parameters ($u_1 = 4$, $r = 3$, and $n = 6$). Since the ratio is greater than 1, deploy the growth variant formula: $S_n = \frac{u_1(r^n - 1)}{r - 1}$ to calculate the exact integer sum.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Extract baseline parameters: $u_1 = 4$, $r = \frac{12}{4} = 3$, and $n = 6$ **[1A]**
* **Step 2:** Substitute these values into the geometric summation formula: $S_6 = \frac{4(3^6 - 1)}{3 - 1}$ **[1M]**
* **Step 3:** Evaluate the denominator and the index power ($3^6 = 729$): $S_6 = \frac{4(729 - 1)}{2} = 2(728)$ **[1M]**
* **Step 4:** Calculate the final product: $S_6 = 2 \times 728 = \mathbf{1456}$ **[1A]**
</details>

---

#### 2. Problem 2
Evaluate the exact fractional total value of the finite geometric sum:

$$32 - 16 + 8 - 4 + \dots + \frac{1}{2}$$

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Handles alternating sign inputs and fractional bounds.

Find the common ratio ($r = -\frac{1}{2}$). To find the exact number of terms $n$, set up the general term equation $32 \cdot (-\frac{1}{2})^{n-1} = \frac{1}{2}$ and solve for the integer index before running the sum.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Identify parameters: $u_1 = 32$ and $r = -\frac{16}{32} = -\frac{1}{2}$ **[1A]**
* **Step 2:** Find the term count $n$ by solving the boundary equation:
  $$32 \cdot \left(-\frac{1}{2}\right)^{n-1} = \frac{1}{2} \implies \left(-\frac{1}{2}\right)^{n-1} = \frac{1}{64} \implies \left(-\frac{1}{2}\right)^{n-1} = \left(-\frac{1}{2}\right)^6 \implies n - 1 = 6 \implies n = 7$$ **[1M]**
* **Step 3:** Substitute parameters into the decay variant sum formula:
  $$S_7 = \frac{32\left(1 - \left(-\frac{1}{2}\right)^7\right)}{1 - \left(-\frac{1}{2}\right)} = \frac{32\left(1 - \left(-\frac{1}{128}\right)\right)}{\frac{3}{3}}$$$$ **[1M]**
* **Step 4:** Simplify the rational terms step-by-step:
  $$S_7 = \frac{32\left(\frac{129}{128}\right)}{\frac{3}{2}} = \frac{\frac{129}{4}}{\frac{3}{2}} = \frac{129}{4} \cdot \frac{2}{3} = \frac{43}{2}$$ **[1M]**
* **Step 4:** State the final exact value: **$\frac{43}{2}$** or **$21.5$** **[1A]**
</details>

---

#### 3. Problem 3
Evaluate the exact total numerical value represented by the given Sigma expression:

$$\sum_{r=1}^{5} 3 \cdot 2^r$$

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Unpacks exponential arguments nested within Sigma notation.

Be careful when identifying the first term! Expand the first few values by substituting $r=1$ and $r=2$. Notice that for $r=1$, $u_1 = 3 \cdot 2^1 = 6$. The upper index tells you that $n=5$.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Generate the initial term by evaluating at the lower boundary index $r = 1$: $u_1 = 3 \cdot 2^1 = 6$ **[1A]**
* **Step 2:** Identify parameters: $r = 2$ and the total number of terms $n = 5 - 1 + 1 = 5$ **[1A]**
* **Step 3:** Substitute values into the growth variant sum formula: $S_5 = \frac{6(2^5 - 1)}{2 - 1}$ **[1M]**
* **Step 4:** Evaluate the power index ($2^5 = 32$) and complete the math: $S_5 = 6(32 - 1) = 6 \times 31 = \mathbf{186}$ **[1A]**
</details>

---

#### 4. Problem 4
A real estate developer buys a plot of land for \$100,000. Every year, the land's market value increases by exactly 10% over the previous year. Find an expression for the total combined valuation of the property across a tracking window of $n$ years.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Integrates percentage growth transformations with geometric parameters.

An annual increase of 10% establishes a common ratio multiplier of $r = 1.00 + 0.10 = 1.1$. Substitute $u_1 = 100000$ and $r = 1.1$ into the finite sum formula to build the expression.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Identify parameters: $u_1 = 100000$ and common ratio $r = 1.1$ **[1A]**
* **Step 2:** Set up the growth variant geometric summation formula: $S_n = \frac{100000(1.1^n - 1)}{1.1 - 1}$ **[1M]**
* **Step 3:** Simplify the decimal value in the denominator: $S_n = \frac{100000(1.1^n - 1)}{0.1}$ **[1M]**
* **Step 4:** Complete the division to isolate the expression coefficient ($\frac{100000}{0.1} = 100000 \times 10$): **$1,000,000 \cdot \left(1.1^n - 1\right)$** **[1A]**
</details>

---

### 🌀 Tier 2: Simultaneous System Extractions (Problems 5–7)
*Focus: Resolving sequence structures by linking term values to summation totals.*

#### 5. Problem 5
In a geometric progression, the common ratio is $r = 2$ and the sum of the first 4 terms is 75. Calculate the exact numerical value of the initial term $u_1$.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Reverses the summation formula to isolate a baseline parameter.

Set $S_4 = 75$, $r = 2$, and $n = 4$. Substitute these values into the growth variant sum formula to create a linear single-variable equation, then solve for $u_1$.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Set up the finite sum equation framework: $75 = \frac{u_1(2^4 - 1)}{2 - 1}$ **[1M]**
* **Step 2:** Evaluate the denominator and the exponent inside the brackets: $75 = \frac{u_1(16 - 1)}{1}$ **[1M]**
* **Step 3:** Simplify the linear balance line: $75 = 15 u_1$ **[1M]**
* **Step 4:** Divide to isolate the first term: $u_1 = \frac{75}{15} = \mathbf{5}$ **[1A]**
</details>

---

#### 6. Problem 6
The sum of the first 3 terms of a strictly positive geometric series ($r > 0$) is 26, and the initial starting term is $u_1 = 2$. Determine the exact value of the common ratio $r$.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Links geometric series totals to quadratic factoring loops from **Week 1, Day 2**.

Set up the sum equation $26 = \frac{2(r^3 - 1)}{r - 1}$. Notice that the cubic term $r^3 - 1$ can be factored as $(r-1)(r^2 + r + 1)$, which cleanly cancels out the denominator! Alternatively, write the sum out term-by-term: $2 + 2r + 2r^2 = 26$.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Write the finite sum out as an explicit polynomial sequence: $u_1 + u_1 r + u_1 r^2 = 26$ **[1M]**
* **Step 2:** Substitute $u_1 = 2$: $2 + 2r + 2r^2 = 26$ **[1M]**
* **Step 3:** Rearrange the terms into a standard quadratic equation equal to zero: $2r^2 + 2r - 24 = 0$ **[1M]**
* **Step 4:** Factor out the common constant multiplier: $2(r^2 + r - 12) = 0 \implies 2(r + 4)(r - 3) = 0$ **[1M]**
* **Step 5:** Extract the roots ($r = -4$ or $r = 3$). Enforce the strict positivity constraint ($r > 0$) to state the final answer: **$r = 3$** **[1A]**
</details>

---

#### 7. Problem 7
An investor deposits \$1,000 at the start of each year into a savings account that yields a guaranteed 5% compound interest annually. Calculate the total exact value of the investment account at the end of 3 years.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Links geometric series formulas directly to financial annuity structures.

Be careful tracking your terms! The first \$1,000 deposit compounds 3 times ($1000 \cdot 1.05^3$), the second deposit compounds 2 times ($1000 \cdot 1.05^2$), and the final deposit compounds once ($1000 \cdot 1.05^1$). This forms a geometric series where $u_1 = 1050$, $r = 1.05$, and $n = 3$.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Map out the values to identify the correct parameters:
  $$\text{Total Value} = 1000(1.05)^1 + 1000(1.05)^2 + 1000(1.05)^3$$
  This is a geometric series where $u_1 = 1000 \times 1.05 = 1050$, $r = 1.05$, and $n = 3$. **[2M]** *(Award [1M] for correct first term, [1M] for correct ratio).*
* **Step 2:** Substitute these parameters into the growth sum formula: $S_3 = \frac{1050(1.05^3 - 1)}{1.05 - 1}$ **[1M]**
* **Step 3:** Evaluate the denominator decimal and expand the cubing index ($1.05^3 = 1.157625$):
  $$S_3 = \frac{1050(1.157625 - 1)}{0.05} = \frac{1050(0.157625)}{0.05}$$ **[1M]**
* **Step 4:** Simplify the division coefficient ($\frac{1050}{0.05} = 1050 \times 20 = 21000$):
  $$S_3 = 21000 \times 0.157625 = \mathbf{\$3,310.125}$$ **[1A]**
</details>

---

### 🏆 Tier 3: Transcendental Index Boundary Isolation (Problems 8–9)
*Focus: Deploying logarithms to isolate unknown term counts inside series summation limits.*

#### 8. Problem 8
Consider the geometric progression sequence defined by the template $u_n = 5 \cdot 2^{n-1}$. Determine the minimum number of terms that must be added together so that their total sum strictly exceeds $5,000$.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Connects series summation totals to the logarithmic power isolation tracking rules from **Week 4, Day 19**.

Set up the strict inequality condition $S_n > 5000$ using $u_1 = 5$ and $r = 2$. Simplify the expression to isolate the exponential term $2^n$, then use base-2 tracking or logarithms to find the minimum integer value for $n$.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Set up the geometric sum inequality statement: $\frac{5(2^n - 1)}{2 - 1} > 5000$ **[1M]**
* **Step 2:** Simplify the denominator and divide both sides by 5 to isolate the internal binomial term:
  $$5(2^n - 1) > 5000 \implies 2^n - 1 > 1000$$ **[1M]**
* **Step 3:** Move the constant across the inequality boundary: $2^n > 1001$ **[1M]**
* **Step 4:** Identify the bounding powers of 2 near 1000: we know that $2^9 = 512$ and $2^{10} = 1024$. **[1M]**
* **Step 5:** Since $n$ must be a whole counting integer to represent a valid step index, round up to the first integer that satisfies the inequality: **$n = 10$ terms** **[1A]**
</details>

---

#### 9. Problem 9
A positive geometric series has an initial term of $u_1 = 3$ and a common ratio of $r = x$. Given that the sum of its first 4 terms is exactly equal to $5 \times (1 + x^2)$, determine the exact real numerical value of the common ratio multiplier $x$.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Links geometric series expansions to polynomial factor cancellation loops.

Write out the sum of the first 4 terms explicitly as an algebraic expression: $3 + 3x + 3x^2 + 3x^3$. Set this equal to the right-hand expression ($5 + 5x^2$), collect all your terms onto one side, and use grouping to factorize the polynomial.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Write out the sum of the first 4 terms as an explicit polynomial sequence:
  $$S_4 = 3 + 3x + 3x^2 + 3x^3$$ **[1A]**
* **Step 2:** Set this equal to the given target polynomial condition: $3 + 3x + 3x^2 + 3x^3 = 5(1 + x^2) \implies 3 + 3x + 3x^2 + 3x^3 = 5 + 5x^2$ **[1M]**
* **Step 3:** Move all terms to one side to form an equation equal to zero: $3x^3 - 2x^2 + 3x - 2 = 0$ **[1M]**
* **Step 4:** Factorize the cubic polynomial by grouping the terms in pairs:
  $$x^2(3x - 2) + 1(3x - 2) = 0 \implies (x^2 + 1)(3x - 2) = 0$$ **[1M]**
* **Step 5:** Analyze the roots. The first block ($x^2 + 1 = 0$) has no real solutions. Solve the second block: $3x - 2 = 0 \implies \mathbf{x = \frac{2}{3}}$ **[1A]**
</details>

---

### 🧪 Tier 4: Junior Paper 3 Investigation (Problem 10)
*Focus: Parametric quotient sum identities, literal series substitutions, and variable elimination proofs.*

#### 10. Problem 10: The Parametric Quotient Identity of Nested Geometric Sums
Let us execute a rigorous algebraic proof exploring the structural ratios generated by nested blocks of geometric series totals. Consider a general geometric progression defined by the standard exponential sequence formula $u_n = u_1 r^{n-1}$, where $u_1 \in \mathbb{R}^+$ and common ratio $r > 1$.

Let $S_n$ represent the accumulated total sum of the first $n$ terms, let $S_{2n}$ represent the total sum of the first $2n$ terms, and let $S_{3n}$ represent the total sum of the first $3n$ terms.

* **Part A:** Write down the explicit algebraic formulas for $S_n$, $S_{2n}$, and $S_{3n}$ using the standard finite geometric sum equation layout.
* **Part B:** Construct an algebraic expression for the difference value pairs $(S_{2n} - S_n)$ and $(S_{3n} - S_{2n})$. Factorize these expressions cleanly to isolate the binomial power term $(r^n - 1)$.
* **Part C:** **Prove that** if we create a rational fraction comparing these consecutive sum blocks, the initial term parameter $u_1$ and the base ratio element $r$ simplify out of the fraction engine cleanly, leaving an invariant identity that depends only on the index power block:

$$\frac{S_{3n} - S_{2n}}{S_{2n} - S_n} = r^n$$

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** This advanced synthesis challenge bridges **Week 5 geometric series definitions** with **Week 1 literal fraction elimination methods**.

For Part B, write out the formulas for $S_{2n}$ and $S_n$, subtract them, and look for common factors like $\frac{u_1}{r-1}$. Remember that you can factor the difference of squares term $r^{2n} - 1$ as $(r^n - 1)(r^n + 1)$, and the difference of cubics term $r^{3n} - 1$ as $(r^n - 1)(r^{2n} + r^n + 1)$. For Part C, set up your rational fraction using these factorized expressions and cancel out all identical numerator and denominator terms.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1 [Part A]:** State the standard geometric sum equations for all three index boundaries:
  $$S_n = \frac{u_1(r^n - 1)}{r - 1}, \quad S_{2n} = \frac{u_1(r^{2n} - 1)}{r - 1}, \quad S_{3n} = \frac{u_1(r^{3n} - 1)}{r - 1}$$ **[1A]**
* **Step 2 [Part B]:** Set up the subtraction layout to calculate the first block difference $(S_{2n} - S_n)$:
  $$S_{2n} - S_n = \frac{u_1(r^{2n} - 1)}{r - 1} - \frac{u_1(r^n - 1)}{r - 1} = \frac{u_1}{r - 1}\left[(r^{2n} - 1) - (r^n - 1)\right]$$ **[1M]**
* **Step 3 [Part B]:** Simplify and factor out the common power term $r^n$ inside the brackets:
  $$S_{2n} - S_n = \frac{u_1}{r - 1}\left[r^{2n} - r^n\right] = \mathbf{\frac{u_1 r^n(r^n - 1)}{r - 1}}$$ **[1A]**
* **Step 4 [Part B]:** Set up the subtraction layout to calculate the second block difference $(S_{3n} - S_{2n})$:
  $$S_{3n} - S_{2n} = \frac{u_1(r^{3n} - 1)}{r - 1} - \frac{u_1(r^{2n} - 1)}{r - 1} = \frac{u_1}{r - 1}\left[(r^{3n} - 1) - (r^{2n} - 1)\right]$$ **[1M]**
* **Step 5 [Part B]:** Simplify and factor out the common power term $r^{2n}$ inside the brackets:
  $$S_{3n} - S_{2n} = \frac{u_1}{r - 1}\left[r^{3n} - r^{2n}\right] = \mathbf{\frac{u_1 r^{2n}(r^n - 1)}{r - 1}}$$ **[1A]**
* **Step 6 [Part C]:** Construct the target rational fraction comparing these two factorized difference expressions:
  $$\frac{S_{3n} - S_{2n}}{S_{2n} - S_n} = \frac{\frac{u_1 r^{2n}(r^n - 1)}{r - 1}}{\frac{u_1 r^n(r^n - 1)}{r - 1}}$$ **[1M]**
* **Step 7 [Part C]:** Cancel out all identical terms from the numerator and denominator to finalize the proof:
  $$\frac{S_{3n} - S_{2n}}{S_{2n} - S_n} = \frac{r^{2n}}{r^n} = r^{2n - n} = r^n$$
  Because the multipliers $\frac{u_1}{r-1}$ and $(r^n - 1)$ appear identically in both the top and bottom of the fraction, they eliminate cleanly. This leaves an invariant identity that depends only on the ratio power, completing the proof. **[1A]** *(Identity verified completely—Q.E.D.)*
</details>