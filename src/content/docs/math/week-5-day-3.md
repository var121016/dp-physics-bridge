---
title: "Day 23: Geometric Progressions & Exponential Steps"
description: "Scaffolded Core Strategy Blueprint and 10-Problem Tiered Track focused on the nth term of geometric progressions, common ratios, and percentage-based growth tracking."
---


Today we shift from linear step additions to multiplicative scaling. In **Week 4**, we explored continuous exponential functions like $y = a \cdot b^x$. A Geometric Progression (GP) is simply the discrete counterpart to those curves. Instead of adding a constant difference, we multiply by a constant factor at every single step, allowing us to model population spikes, financial compound trends, and fractional division.

---

## 🧭 The Core Strategy Blueprint

### 👥 Parent Analytics Summary
* **The Core Gap:** Students frequently struggle to distinguish between linear growth (Arithmetic) and exponential growth (Geometric). A common tactical error occurs when dealing with percentage changes (e.g., "increases by 5%"), where students mistakenly try to calculate a static difference instead of identifying the underlying multiplier ratio ($r = 1.05$).
* **The Target Objective:** We ground the geometric sequence engine using structural index steps. Your student will learn to extract the common ratio ($r$) via consecutive term division, map out explicit term formulas ($u_n = u_1 r^{n-1}$), and execute flawless algebraic isolations using yesterday's logarithmic foundations.

### 🎒 First-Principles Script (The Feynman Technique)
> **Read this aloud to lock in the structural intuition:**
>
> "Let's build a geometric sequence from absolute first principles. Imagine you are observing a single biological cell that splits perfectly in half every hour. 
> 
> At the start, you have 1 cell—this is our initial baseline value, $u_1$. Let's watch what happens hour by hour:
> * Hour 1 ($u_1$): Exactly $1$ cell.
> * Hour 2 ($u_2$): It splits once, multiplying by 2: $1 \times 2 = 2$ cells.
> * Hour 3 ($u_3$): It multiplies by 2 again: $1 \times 2 \times 2 = 1 \times 2^2 = 4$ cells.
> * Hour 4 ($u_4$): It multiplies by 2 once more: $1 \times 2 \times 2 \times 2 = 1 \times 2^3 = 8$ cells.
> 
> 
>
> Notice the structural pattern: to find the population at any target hour $n$, we multiplied our initial value $u_1$ by our **common ratio** ($r$) exactly **$(n-1)$ times**. We write this universal rule as:
> 
> $$u_n = u_1 r^{n-1}$$
> 
> The index power is $(n-1)$ because the first term doesn't contain the ratio at all! If our common ratio $r$ is greater than 1, the sequence explodes toward infinity. If $r$ sits between 0 and 1, the sequence decays down toward zero. If $r$ is negative, the values alternate back and forth between positive and negative numbers with every single step."

---

## 🛠️ The 10-Problem Tiered Track

Execute these tasks completely on physical paper. **Calculators are strictly prohibited.** Show every structural step cleanly.

### 🛑 Tier 1: Core Ratio & Term Extraction (Problems 1–4)
*Focus: Isolating terms and ratios from explicit numerical patterns without calculator assistance.*

#### 1. Problem 1
A geometric progression is defined explicitly by the discrete pattern: $3, 6, 12, 24, \dots$
* **Part A:** State the exact value of the initial term $u_1$ and the common ratio $r$.
* **Part B:** Determine the exact numerical value of the 9th term ($u_9$).

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Basic application of the $n$th term exponential engine.

Find the common ratio $r$ by dividing any term by the term that immediately precedes it ($\frac{u_2}{u_1}$). Once you have $u_1$ and $r$, substitute them into the formula along with $n = 9$.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1 [Part A]:** Identify the baseline starting term directly: $\mathbf{u_1 = 3}$ **[1A]**
* **Step 2 [Part A]:** Compute the multiplier ratio via division: $r = \frac{6}{3} = \mathbf{2}$ **[1A]**
* **Step 3 [Part B]:** Deploy the general term formula for position $n = 9$: $u_9 = u_1 \cdot r^{9-1} = 3 \cdot 2^8$ **[1M]**
* **Step 4 [Part B]:** Evaluate the index power ($2^8 = 256$) and complete the calculation: $u_9 = 3 \times 256 = \mathbf{768}$ **[1A]**
</details>

---

#### 2. Problem 2
Find an explicit, simplified exponential expression in terms of $n$ for the $n$th term of the geometric sequence: $162, -54, 18, -6, \dots$

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Handles alternating sign progressions using negative fractional bases.

Because the signs alternate between positive and negative values, your common ratio $r$ must be negative. Write it as a fraction in simplest form before setting up your general equation.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Extract baseline parameters from the pattern: $u_1 = 162$ **[1A]**
* **Step 2:** Compute the fractional ratio: $r = \frac{-54}{162} = -\frac{1}{3}$ **[1M]**
* **Step 3:** Substitute these parameters into the general term equation framework: **$u_n = 162 \cdot \left(-\frac{1}{3}\right)^{n-1}$** **[1A]**
</details>

---

#### 3. Problem 3
The first term of a geometric progression is $\frac{1}{4}$ and the 5th term is 64. Given that the common ratio $r$ must be strictly positive ($r > 0$), calculate its exact value.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Integrates index radical equations from **Week 1, Day 4** into sequence terms.

Set up the equation for $u_5$ ($u_1 r^4 = 64$). Substitute $u_1 = \frac{1}{4}$, clear the fraction by multiplying both sides by 4, and take the fourth root of the resulting integer.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Formulate the equation for the 5th step position: $u_5 = u_1 \cdot r^4$ **[1M]**
* **Step 2:** Substitute the known numerical boundary constraints: $64 = \frac{1}{4} \cdot r^4$ **[1M]**
* **Step 3:** Multiply by 4 to isolate the power term: $256 = r^4$ **[1M]**
* **Step 4:** Extract the real roots by taking the fourth root: $r = \pm\sqrt{\sqrt{256}} = \pm\sqrt{16} = \pm 4$ **[1M]**
* **Step 5:** Enforce the strict positivity constraint ($r > 0$) to state the final value: **$r = 4$** **[1A]**
</details>

---

#### 4. Problem 4
An industrial machine's monetary value depreciates by exactly 10% at the end of each year. Its initial factory purchase price is \$50,000. Write down an expression for the asset's value at the end of the 6th year.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Maps percentage-based decay models to geometric multipliers.

Be careful with your multiplier! A 10% depreciation means the machine retains exactly 90% of its value each year ($100\% - 10\% = 90\%$). This means your common ratio is $r = 0.9$.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Identify the starting value baseline parameter: $u_1 = 50000$ **[1A]**
* **Step 2:** Convert the percentage reduction into a multiplier ratio: $r = 1.00 - 0.10 = 0.9$ or $\frac{9}{10}$ **[1M]**
* **Step 3:** Apply the tracking formula for year index $n = 6$: $u_6 = 50000 \cdot (0.9)^{6-1}$ **[1M]**
* **Step 4:** State the final exact exponential expression form: **$50000 \cdot (0.9)^5$** **[1A]**
</details>

---

### 🌀 Tier 2: Simultaneous Parameter Mappings (Problems 5–7)
*Focus: Resolving simultaneous exponential systems using term ratios.*

#### 5. Problem 5
In a geometric progression, the 2nd term is 6 and the 5th term is 162. Find the exact value of the initial term $u_1$ and the common ratio $r$.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Solves non-linear simultaneous systems using term substitution ratios.

Write out your two equations: (1) $u_1 r = 6$ and (2) $u_1 r^4 = 162$. Instead of subtracting these equations, divide Equation 2 by Equation 1 to cancel out the initial term $u_1$ immediately.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Construct the non-linear simultaneous parameter framework:
  (1) $u_1 r = 6$
  (2) $u_1 r^4 = 162$ **[1A]**
* **Step 2:** Divide equation (2) by equation (1) to eliminate the initial term variable:
  $$\frac{u_1 r^4}{u_1 r} = \frac{162}{6} \implies r^3 = 27$$ **[1M]**
* **Step 3:** Take the cube root to find the common ratio: **$r = 3$** **[1A]**
* **Step 4:** Substitute $r = 3$ back into equation (1) to isolate $u_1$: $u_1(3) = 6 \implies \mathbf{u_1 = 2}$ **[1A]**
</details>

---

#### 6. Problem 6
The three consecutive terms of an unknown geometric progression are given explicitly as:

$$x - 1, \quad x + 2, \quad 2x + 7$$

Determine all exact possible numerical values for the real variable $x$.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Links the invariant geometric ratio property directly to quadratic factor distributions.

The common ratio must remain perfectly uniform throughout the sequence. Therefore, $\frac{u_2}{u_1}$ must equal $\frac{u_3}{u_2}$ exactly. Set up this rational balance equation, cross-multiply to clear the fractions, and solve the resulting quadratic.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Apply the invariant ratio rule ($\frac{u_2}{u_1} = \frac{u_3}{u_2}$):
  $$\frac{x + 2}{x - 1} = \frac{2x + 7}{x + 2}$$ **[1M]**
* **Step 2:** Cross-multiply across the balance line to eliminate the fractional denominators:
  $$(x + 2)(x + 2) = (2x + 7)(x - 1)$$ **[1M]**
* **Step 3:** Expand both polynomial expressions completely: $x^2 + 4x + 4 = 2x^2 + 5x - 7$ **[1M]**
* **Step 4:** Rearrange all terms onto one side to form a standard quadratic equation equal to zero:
  $$x^2 + x - 11 = 0$$ **[1M]**
* **Step 5:** Since this expression does not factor cleanly, solve using the quadratic formula:
  $$\mathbf{x = \frac{-1 \pm \sqrt{1^2 - 4(1)(-11)}}{2} = \frac{-1 \pm \sqrt{45}}{2} = \frac{-1 \pm 3\sqrt{5}}{2}}$$ **[1A]**
</details>

---

#### 7. Problem 7
A dynamic technology stock portfolio initially starts at a baseline valuation of \$10,000 and increases by exactly 8% every year. Write a formula tracking the portfolio's value at year $n$, and calculate its exact value at the start of the 3rd year ($n=3$).

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Connects geometric progression parameters directly to financial appreciation trends.

An 8% increase means your multiplier ratio is $r = 1.00 + 0.08 = 1.08$. Substitute $u_1 = 10000$, $r = 1.08$, and $n = 3$ into your term formula and calculate the product.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Extract the parameters from the problem: $u_1 = 10000$ and $r = 1.08$ **[1A]**
* **Step 2:** Formulate the tracking equation: $u_n = 10000 \cdot (1.08)^{n-1}$ **[1M]**
* **Step 3:** Evaluate the expression for the 3rd step position ($n = 3$): $u_3 = 10000 \cdot (1.08)^2$ **[1M]**
* **Step 4:** Complete the calculation step-by-step: $1.08^2 = 1.1664 \implies 10000 \times 1.1664 = \mathbf{\$11,664}$ **[1A]**
</details>

---

### 🏆 Tier 3: Logarithmic Bound Extractions (Problems 8–9)
*Focus: Deploying logarithms to isolate variable step indices trapped inside exponents.*

#### 8. Problem 8
Consider the geometric progression: $2, 6, 18, 54, \dots$ Determine the exact term index position $n$ at which the value of the sequence first reaches or exceeds $39,366$.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Deploys the transcendental log power rules from **Week 4, Day 19** to isolate index variables.

Set up your general term equation ($2 \cdot 3^{n-1}$) and make it equal to 39,366. Divide by 2 to isolate the base-3 exponential term, then use prime base matching or logarithms to isolate the index $n$.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Extract sequence parameters: $u_1 = 2$ and $r = 3$ **[1A]**
* **Step 2:** Set the general term formula equal to the target threshold value: $2 \cdot 3^{n-1} = 39366$ **[1M]**
* **Step 3:** Isolate the base exponential term by dividing by 2: $3^{n-1} = 19683$ **[1M]**
* **Step 4:** Use prime decomposition to rewrite 19,683 as a power of 3 (or take log base 3): $3^9 = 19683 \implies n - 1 = 9$ **[1M]**
* **Step 5:** Solve for the final index position: **$n = 10$** **[1A]**
</details>

---

#### 9. Problem 9
A certain chemical solution loses exactly half of its active strength every hour. If its starting concentration is 100%, find the exact number of hours required for its concentration to drop down to or below 1%. Express your answer using natural logarithms ($\ln$).

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Connects logarithmic inequality barriers directly to physical decay systems.

Set up the geometric equation: $100 \cdot (0.5)^{n-1} \le 1$. Divide by 100 to isolate the fraction base, then apply natural logs ($\ln$) to both sides to bring the variable exponent down to the front line.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Set up the geometric inequality model: $100 \cdot \left(\frac{1}{2}\right)^{n-1} \le 1$ **[1M]**
* **Step 2:** Divide both sides by 100 to isolate the exponential base: $\left(\frac{1}{2}\right)^{n-1} \le \frac{1}{100}$ **[1M]**
* **Step 3:** Apply the natural log operator to both sides: $\ln\left[\left(\frac{1}{2}\right)^{n-1}\right] \le \ln\left(\frac{1}{100}\right)$ **[1M]**
* **Step 4:** Drop the exponent to the front line using the log power rule: $(n - 1)\ln\left(\frac{1}{2}\right) \le \ln\left(\frac{1}{100}\right)$ **[1M]**
* **Step 5:** Simplify using negative index properties: $-(n - 1)\ln(2) \le -\ln(100) \implies (n - 1)\ln(2) \ge \ln(100)$ *(Note: inequality flips when dividing by negative factors).* **[1M]**
* **Step 6:** Isolate the index value $n$: $n - 1 \ge \frac{\ln(100)}{\ln(2)} \implies \mathbf{n \ge \frac{\ln(100)}{\ln(2)} + 1}$ hours **[1A]**
</details>

---

### 🧪 Tier 4: Junior Paper 3 Investigation (Problem 10)
*Focus: Logarithmic transformations of geometric structures, parametric identities, and cross-topic proofs.*

#### 10. Problem 10: The Arithmetic Log Transformation Identity
Let us execute a rigorous proof connecting our current geometric progression tracking structures directly to the arithmetic sequence behaviors we mastered on **Day 21**. Consider a completely positive geometric progression sequence $g_n$ defined across all counting integers by the standard parameters:

$$g_n = g_1 \cdot r^{n-1}$$

where the initial term and common ratio satisfy $g_1, r \in \mathbb{R}^+$. 

Suppose we construct a brand new sequence, $a_n$, by applying a natural logarithm operator ($\ln$) to every single individual term of our original geometric progression, such that:

$$a_n = \ln(g_n)$$

* **Part A:** Substitute the explicit formula for $g_n$ into the expression for $a_n$, and expand it completely using the core log product and power laws.
* **Part B:** **Prove that** this newly constructed sequence $a_n$ is a valid **arithmetic progression**. State its initial term $u_1$ and its common difference $d$ explicitly in terms of the logarithmic parameters of our starting sequence.
* **Part C:** Suppose we are given that $g_1 = e^3$ and $r = e^5$. Find the simplified, explicit numerical linear formula for the arithmetic sequence $a_n$ as a function of index step $n$.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** This advanced synthesis challenge serves as a bridge, linking **Week 4 logarithmic expansions** to **Week 5 progression identities**.

For Part A, use the log product law to split $\ln(g_1 \cdot r^{n-1})$ into separate terms, then apply the power law to bring $(n-1)$ down. For Part B, look closely at the resulting structure and compare it directly to the general arithmetic formula form ($u_n = u_1 + (n-1)d$). Match the corresponding structural blocks to identify the arithmetic parameters.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1 [Part A]:** Write out the initial definition of the transformed sequence expression:
  $$a_n = \ln\left(g_1 \cdot r^{n-1}\right)$$ **[1M]**
* **Step 2 [Part A]:** Separate the multiplication terms inside the log argument using the product law:
  $$a_n = \ln(g_1) + \ln\left(r^{n-1}\right)$$ **[1M]**
* **Step 3 [Part A]:** Bring the exponent down to the front line using the log power rule:
  $$\mathbf{a_n = \ln(g_1) + (n - 1)\ln(r)}$$ **[1A]**
* **Step 4 [Part B]:** Analyze the mathematical structure of the expanded formula. Notice that it matches the exact linear layout of a standard arithmetic progression: $u_n = u_1 + (n - 1)d$. **[1M]**
* **Step 5 [Part B]:** Identify the corresponding sequence blocks to complete the proof:
  * The initial baseline term block is: **$u_1 = \ln(g_1)$** **[1A]**
  * The constant step difference block is: **$d = \ln(r)$** **[1A]**
  Because the common difference $d = \ln(r)$ is a fixed constant that depends only on the ratio parameter, the sequence is verified as a valid arithmetic progression. *(Q.E.D.)*
* **Step 6 [Part C]:** Substitute the given base-$e$ parameters ($g_1 = e^3$ and $r = e^5$) into your formulas:
  $$u_1 = \ln\left(e^3\right) = 3 \quad \text{and} \quad d = \ln\left(e^5\right) = 5$$ **[1M]**
* **Step 7 [Part C]:** Assemble and simplify the final numerical progression formula:
  $$a_n = 3 + (n - 1)5 = 3 + 5n - 5 \implies \mathbf{a_n = 5n - 2}$$ **[1A]**
</details>