---
title: "Day 25: Infinite Geometric Series & Convergence"
description: "Scaffolded Core Strategy Blueprint and 10-Problem Tiered Track focused on infinite sums, the calculus concept of convergence, and domain restrictions."
---


Today we stand at the boundary line where algebra transforms into calculus. We have mastered how to add up fixed numbers of terms. Now, we ask a profound question: *What happens if we keep adding terms forever?* We will explore how an infinite sum can settle on a precise, finite boundary, master the strict structural conditions required for convergence, and unlock the elegant mathematics of $S_\infty$.

---

## 🧭 The Core Strategy Blueprint

### 👥 Parent Analytics Summary
* **The Core Gap:** The idea of adding an infinite list of numbers together and getting a clean, finite answer can feel deeply counterintuitive to students. They often try to apply the infinite sum formula $S_\infty = \frac{u_1}{1-r}$ blindly to every sequence, completely overlooking the strict structural restriction that the common ratio must satisfy ($|r| < 1$).
* **The Target Objective:** We ground the concept of an infinite limit using a first-principles geometric breakdown. Your student will understand the absolute difference between a sequence that explodes to infinity (divergence) and one that balances out at a precise mathematical wall (convergence), preparing them directly for formal derivative limits in DP1.

### 🎒 First-Principles Script (The Feynman Technique)
> **Read this aloud to lock in the structural intuition:**
>
> "Let's discover how an infinite number of steps can add up to a fixed, finite boundary. Imagine you are standing exactly 2 meters away from a wall. You decide to walk toward it using a strict mathematical rule: with each step, you cross exactly half of the remaining distance.
> 
> Let's look at your progress step by step:
> * Step 1: You travel half the distance: $1$ meter. (Remaining distance: 1m)
> * Step 2: You travel half of what's left: $\frac{1}{2}$ meter. (Remaining distance: 0.5m)
> * Step 3: You travel half again: $\frac{1}{4}$ meter. (Remaining distance: 0.25m)
> * Step 4: You travel half again: $\frac{1}{8}$ meter. (Remaining distance: 0.125m)
> 
> If we write your total distance traveled as an infinite series, it looks like this:
> 
> $$\text{Total Distance} = 1 + \frac{1}{2} + \frac{1}{4} + \frac{1}{8} + \frac{1}{16} + \dots$$
> 
> 
> 
> Notice what is happening. No matter how many millions of steps you take, you will never crash through that wall, because you only ever close half of the remaining gap. Your total distance gets infinitely close to exactly **2 meters**, but it can never exceed it. We call this fixed boundary a **limit**, and we say this infinite series **converges** to 2.
> 
> Let's look at the math underneath. Yesterday, we proved that a finite geometric sum matches this exact formula:
> 
> $$S_n = \frac{u_1(1 - r^n)}{1 - r}$$
> 
> Now, imagine the number of terms $n$ approaches infinity ($\infty$). What happens to that internal term $r^n$? 
> * If our common ratio is a fraction strictly between $-1$ and $1$ (written as $|r| < 1$), then multiplying that fraction by itself over and over causes it to shrink down to absolute zero ($\lim_{n \to \infty} r^n = 0$).
> 
> When we substitute $r^n = 0$ directly into our finite summation engine, the numerator collapses perfectly, unmasking our universal blueprint for an infinite geometric sum:
> 
> $$S_\infty = \frac{u_1(1 - 0)}{1 - r} = \frac{u_1}{1 - r}$$
> 
> If our ratio does *not* satisfy the constraint $|r| < 1$, the terms grow larger and larger. The series explodes toward infinity, it fails to settle on a fixed boundary, and we say the sequence **diverges**."

---

## 🛠️ The 10-Problem Tiered Track

Execute these tasks completely on physical paper. **Calculators are strictly prohibited.** Show every structural step cleanly.

### 🛑 Tier 1: Convergence Identification & Limits (Problems 1–4)
*Focus: Verifying domain restrictions and executing direct infinite sum calculations.*

#### 1. Problem 1
Consider the infinite geometric series: $18 + 6 + 2 + \frac{2}{3} + \dots$
* **Part A:** State the exact common ratio $r$ and explain why this series converges.
* **Part B:** Calculate the exact finite limit ($S_\infty$) of the entire series.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Direct application of the infinite convergence limit criteria.

Compute the common ratio $r = \frac{u_2}{u_1}$. Check if its absolute value falls strictly inside the required convergence boundary ($|r| < 1$). If it passes, substitute your parameters into the $S_\infty$ formula.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1 [Part A]:** Compute the common ratio parameter via fraction division: $r = \frac{6}{18} = \frac{1}{3}$ **[1A]**
* **Step 2 [Part A]:** Evaluate the convergence constraint condition: Since $|r| = \left|\frac{1}{3}\right| < 1$, the individual terms shrink toward zero as $n \to \infty$, meaning **the series converges**. **[1A]**
* **Step 3 [Part B]:** Deploy the infinite summation formula using $u_1 = 18$: $S_\infty = \frac{18}{1 - \frac{1}{3}}$ **[1M]**
* **Step 4 [Part B]:** Simplify the rational denominator fraction: $S_\infty = \frac{18}{\frac{2}{3}} = 18 \cdot \frac{3}{2} = 9 \times 3 = \mathbf{27}$ **[1A]**
</details>

---

#### 2. Problem 2
Explain explicitly from a first-principles structural standpoint why the given infinite geometric expression cannot be evaluated as a finite sum total:

$$\sum_{r=1}^{\infty} 2 \cdot \left(-\frac{5}{4}\right)^{r-1}$$

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Validates core domain boundaries before running automated calculations.

Look closely at the common ratio base inside the parentheses. Calculate its absolute magnitude value and compare it directly against the mandatory convergence inequality criterion.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Extract the underlying common ratio parameter from the expression base: $r = -\frac{5}{4}$ **[1A]**
* **Step 2:** Compute its absolute scalar magnitude value: $|r| = \left|-\frac{5}{4}\right| = \frac{5}{4} = 1.25$ **[1M]**
* **Step 3:** Evaluate against the required convergence criteria: The infinite series summation rule is only valid if and only if $|r| < 1$. Because $1.25 > 1$, the individual terms scale up in magnitude with every step rather than shrinking. **[1M]**
* **Step 4:** State the final structural conclusion: The series **diverges** toward infinity, making it mathematically impossible to calculate a finite sum value. **[1A]**
</details>

---

#### 3. Problem 3
Convert the infinite recurring decimal fraction $0.7777\dots$ (or $0.\dot{7}$) into an exact simplified rational fraction using an infinite geometric series framework.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Connects basic arithmetic decimals to formal infinite series models.

Break the decimal down into an expanded fractional sum string: $\frac{7}{10} + \frac{7}{100} + \frac{7}{1000} + \dots$ Extract your parameters ($u_1 = \frac{7}{10}$, $r = \frac{1}{10}$) and apply the infinite sum formula.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Expand the recurring decimal notation as an infinite sum string:
  $$0.7777\dots = \frac{7}{10} + \frac{7}{100} + \frac{7}{1000} + \dots$$ **[1M]**
* **Step 2:** Extract the sequence parameters: $u_1 = \frac{7}{10}$ and $r = \frac{1}{10}$ **[1A]**
* **Step 3:** Substitute these fractions into the infinite limit summation engine:
  $$S_\infty = \frac{\frac{7}{10}}{1 - \frac{1}{10}} = \frac{\frac{7}{10}}{\frac{9}{10}}$$ **[1M]**
* **Step 4:** Cancel the common denominators to state the exact simplified fraction: **$\frac{7}{9}$** **[1A]**
</details>

---

#### 4. Problem 4
The first term of an infinite geometric series is 12, and its total converged sum limit ($S_\infty$) is exactly 16. Calculate the exact value of the common ratio $r$.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Reverses the infinite sum formula to isolate a hidden base parameter.

Set up the equation $16 = \frac{12}{1-r}$. Cross-multiply to clear the denominator, isolate the variable term $r$, and double-check that your final ratio satisfies the required condition $|r| < 1$.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Set up the primary infinite sum equation framework: $16 = \frac{12}{1 - r}$ **[1M]**
* **Step 2:** Cross-multiply to shift the binomial denominator: $16(1 - r) = 12 \implies 16 - 16r = 12$ **[1M]**
* **Step 3:** Move terms across the balance line to isolate the variable block: $4 = 16r$ **[1M]**
* **Step 4:** Divide and simplify the fraction to state the final ratio: $r = \frac{4}{16} = \mathbf{\frac{1}{4}}$ or **$0.25$** **[1A]**
</details>

---

### 🌀 Tier 2: Simultaneous Parameter Mappings (Problems 5–7)
*Focus: Resolving non-linear systems where individual term rules intersect with infinite limits.*

#### 5. Problem 5
An infinite geometric progression has a total converged sum of $S_\infty = 9$, and its second term value is exactly $u_2 = 2$. Find all possible exact values for the initial term $u_1$ and the common ratio $r$.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Re-engages non-linear simultaneous substitution methods from **Week 1, Day 2**.

Write down your two equations: (1) $u_1 r = 2 \implies u_1 = \frac{2}{r}$ and (2) $\frac{u_1}{1-r} = 9$. Substitute the expression for $u_1$ into the sum equation to create a quadratic in terms of $r$.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Construct the simultaneous mathematical equations:
  (1) $u_1 r = 2 \implies u_1 = \frac{2}{r}$
  (2) $\frac{u_1}{1 - r} = 9$ **[1A]**
* **Step 2:** Substitute the expression for $u_1$ into the infinite limit summation formula:
  $$\frac{\frac{2}{r}}{1 - r} = 9 \implies \frac{2}{r(1 - r)} = 9 \implies 2 = 9r(1 - r)$$ **[1M]**
* **Step 3:** Expand and rearrange the terms into a standard quadratic equation equal to zero:
  $$2 = 9r - 9r^2 \implies 9r^2 - 9r + 2 = 0$$ **[1M]**
* **Step 4:** Factorize the quadratic equation using split-coefficient methods:
  $$(3r - 1)(3r - 2) = 0 \implies r = \frac{1}{3} \quad \text{or} \quad r = \frac{2}{3}$$ **[1M]** *(Note: Both ratios satisfy the convergence rule $|r| < 1$).*
* **Step 5:** Substitute both valid ratios back into your equations to find their matching initial terms:
  * For **$r = \frac{1}{3}$**: $u_1 = \frac{2}{1/3} = \mathbf{6}$ **[1A]**
  * For **$r = \frac{2}{3}$**: $u_1 = \frac{2}{2/3} = \mathbf{3}$ **[1A]**
</details>

---

#### 6. Problem 6
The sum of the first two terms of a geometric progression is 15, and its infinite converged total sum ($S_\infty$) is exactly 16. Given that all terms in this series must be strictly positive ($u_n > 0$), find the exact value of $u_1$.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Connects partial sum segments to infinite limit boundaries using factor extraction.

Notice that the total sum $S_\infty$ is made up of the first two terms ($u_1 + u_1 r = 15$) plus the rest of the infinite series ($u_1 r^2 + u_1 r^3 + \dots$). We can rewrite this relationship elegantly as $S_\infty = (u_1 + u_1 r) + r^2 S_\infty$. Substitute your known values to solve for $r$, then find $u_1$.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Write out the explicit structural identities for both conditions:
  (1) $S_2 = u_1(1 + r) = 15$
  (2) $S_\infty = \frac{u_1}{1 - r} = 16 \implies u_1 = 16(1 - r)$ **[1M]**
* **Step 2:** Substitute the expression for $u_1$ directly into the first equation:
  $$16(1 - r)(1 + r) = 15$$ **[1M]**
* **Step 3:** Simplify using the difference of squares identity:
  $$16(1 - r^2) = 15 \implies 16 - 16r^2 = 15 \implies 1 = 16r^2 \implies r^2 = \frac{1}{16}$$ **[1M]**
* **Step 4:** Extract the roots: $r = \pm\frac{1}{4}$. Since all terms must be strictly positive ($u_n > 0$), select the positive ratio: $r = \frac{1}{4}$ **[1M]**
* **Step 5:** Substitute $r = \frac{1}{4}$ back into your equation to solve for the initial term:
  $$u_1 = 16\left(1 - \frac{1}{4}\right) = 16\left(\frac{3}{4}\right) = \mathbf{12}$$ **[1A]**
</details>

---

#### 7. Problem 7
A heavy pendulum is set in motion. On its first swing, it travels an arc length of exactly $40\text{ cm}$. Due to air resistance and joint friction, each subsequent swing covers exactly 85% of the arc distance of the swing before it. Calculate the total theoretical distance covered by the pendulum before it comes to a complete rest.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Maps physical decay systems to infinite convergence limits.

Identify your parameters directly from the text description ($u_1 = 40$, $r = 0.85$). Since the pendulum swings indefinitely until its motion decays to zero, apply the infinite sum formula.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Extract the system parameters from the text: $u_1 = 40$ and common ratio $r = 0.85$ **[1A]**
* **Step 2:** Check the convergence condition: Since $|0.85| < 1$, the total distance settles on a finite limit. **[1M]**
* **Step 3:** Substitute these parameters into the infinite sum engine: $S_\infty = \frac{40}{1 - 0.85}$ **[1M]**
* **Step 4:** Simplify the decimal denominator and calculate the final total:
  $$S_\infty = \frac{40}{0.15} = \frac{40}{\frac{3}{20}} = 40 \cdot \frac{20}{3} = \frac{800}{3}\text{ cm}$$ **[1M]**
* **Step 5:** State the exact final value: **$\frac{800}{3}\text{ cm}$** or **$266.\dot{6}\text{ cm}$** **[1A]**
</details>

---

### 🏆 Tier 3: Variable Domain Inequalities (Problems 8–9)
*Focus: Finding the valid variable domains that allow complex parametric series to converge.*

#### 8. Problem 8
An infinite geometric series is generated explicitly by the parametric expression formula:

$$\sum_{r=1}^{\infty} 3 \cdot (2x - 5)^{r-1}$$

Determine the exact domain window of values for real variable $x$ that guarantees this series **converges**.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Integrates compound absolute value inequalities from **Week 1, Day 5** with convergence boundaries.

Isolate the variable common ratio expression ($r = 2x - 5$). Enforce the strict absolute value constraint required for convergence ($|2x - 5| < 1$). Split this into a three-part inequality string and solve for $x$.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Isolate the common ratio expression parameter directly: $r = 2x - 5$ **[1A]**
* **Step 2:** Enforce the mandatory structural convergence restriction boundary statement:
  $$|2x - 5| < 1$$ **[1M]**
* **Step 3:** Expand the absolute value statement into a double-ended compound inequality string:
  $$-1 < 2x - 5 < 1$$ **[1M]**
* **Step 4:** Add 5 across all three sections of the inequality to isolate the variable block:
  $$4 < 2x < 6$$ **[1M]**
* **Step 5:** Divide all sections by 2 to state the final valid domain window: **$2 < x < 3$** **[1A]**
</details>

---

#### 9. Problem 9
An infinite geometric progression has an initial starting term of $u_1 = 1$ and a common ratio defined by the trigonometric expression $r = \cos(\theta)$. 
* **Part A:** State the exact converged value of $S_\infty$ when $\theta = \frac{\pi}{3}$.
* **Part B:** Determine all values of angle $\theta$ within the tracking domain boundary $0 \le \theta \le \pi$ for which this infinite series **fails to converge**.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Connects infinite series convergence criteria to unit circle trigonometric boundaries.

For Part A, evaluate $\cos(\frac{\pi}{3})$ to find your common ratio value, then calculate $S_\infty$. For Part B, recall that a series fails to converge if $|r| \ge 1$. Identify the angles within the given domain where $\cos(\theta)$ reaches 1 or $-1$.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1 [Part A]:** Compute the specific common ratio using exact unit circle values: $r = \cos\left(\frac{\pi}{3}\right) = \frac{1}{2}$ **[1A]**
* **Step 2 [Part A]:** Apply the infinite sum formula using $u_1 = 1$: $S_\infty = \frac{1}{1 - \frac{1}{2}} = \frac{1}{1/2} = \mathbf{2}$ **[1A]**
* **Step 3 [Part B]:** State the condition for divergence or failure to converge: $|r| \ge 1 \implies |\cos(\theta)| \ge 1$ **[1M]**
* **Step 4 [Part B]:** Since the output value of a standard cosine function can never exceed 1, locate the exact boundary points where $\cos(\theta) = 1$ or $\cos(\theta) = -1$ within the domain window $0 \le \theta \le \pi$. **[1M]**
* **Step 5 [Part B]:** State the exact angular coordinates where divergence occurs: **$\theta = 0$** (where $\cos(0)=1$) and **$\theta = \pi$** (where $\cos(\pi)=-1$). **[1A]**
</details>

---

### 🧪 Tier 4: Junior Paper 3 Investigation (Problem 10)
*Focus: Infinite matrix series summation, geometric fraction optimization, and literal limit proofs.*

#### 10. Problem 10: The Convergence Limit Identity of Squared Series Blocks
Let us execute an investigation exploring how squaring individual terms transforms the convergence behavior of an infinite series. Consider an infinite geometric progression sequence $f_n$ that possesses a valid, strictly positive initial term $f_1 = a$ and a common ratio multiplier $r$. We are given that this original series cleanly converges to a fixed total sum limit of exactly $S_\infty = 4$.

Now, let us construct a brand new sequence, $g_n$, by squaring every single individual term of our original progression, such that:

$$g_n = (f_n)^2$$

* **Part A:** Write out explicit formulas for the first three terms of both sequences ($f_n$ and $g_n$) in terms of parameters $a$ and $r$.
* **Part B:** **Prove that** this newly transformed sequence $g_n$ is also a valid geometric progression. State its initial term $u_1$ and its common ratio multiplier $R$ explicitly, and explain why it is guaranteed to converge whenever the original series converges.
* **Part C:** Suppose we are given that the total converged sum limit of our new squared series is exactly $g_\infty = \frac{16}{5}$. Determine the explicit numerical values for both underlying parameters of our starting sequence: initial term $a$ and common ratio $r$.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** This advanced challenge serves as a bridge, linking **Week 5 infinite summation architectures** to **Week 1 non-linear simultaneous systems**.

For Part B, write out the explicit terms of sequence $g_n$ ($a^2, a^2 r^2, a^2 r^4$). Divide consecutive terms to verify that the common ratio is a constant value ($R = r^2$), and analyze why $|r| < 1$ guarantees that $|r^2| < 1$. For Part C, set up your two sum equations ($\frac{a}{1-r} = 4$ and $\frac{a^2}{1-r^2} = \frac{16}{5}$), and use algebraic manipulation and substitution to isolate and solve for $a$ and $r$.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1 [Part A]:** Map out the explicit term profiles for both tracking sequences:
  * Original sequence $f_n \implies \mathbf{a, \quad ar, \quad ar^2}$ **[1A]**
  * Squared sequence $g_n \implies (a)^2, \quad (ar)^2, \quad (ar^2)^2 \implies \mathbf{a^2, \quad a^2 r^2, \quad a^2 r^4}$ **[1A]**
* **Step 2 [Part B]:** Compute the ratio between consecutive terms of the new sequence $g_n$:
  $$\frac{g_2}{g_1} = \frac{a^2 r^2}{a^2} = r^2 \quad \text{and} \quad \frac{g_3}{g_2} = \frac{a^2 r^4}{a^2 r^2} = r^2$$
  Because the quotient yields a fixed value, sequence $g_n$ is verified as a valid geometric progression with an initial term of **$u_1 = a^2$** and a common ratio of **$R = r^2$**. **[1A]**
* **Step 3 [Part B]:** Prove the convergence guarantee: We know the original series converges, which means $|r| < 1$. Squaring any real number fraction that sits strictly between $-1$ and $1$ creates a positive fraction that is even closer to zero. Therefore, $|R| = |r^2| < 1$ is guaranteed to be true, meaning **the new series must also converge**. **[1M]**
* **Step 4 [Part C]:** Set up the two infinite sum equations based on the problem parameters:
  (1) $\frac{a}{1 - r} = 4 \implies a = 4(1 - r)$ **[1A]**
  (2) $\frac{a^2}{1 - r^2} = \frac{16}{5}$ **[1A]**
* **Step 5 [Part C]:** Factorize the denominator of the second equation using the difference of squares rule, then substitute your expression for $a$:
  $$\frac{a^2}{(1 - r)(1 + r)} = \frac{16}{5} \implies \left(\frac{a}{1 - r}\right) \cdot \left(\frac{a}{1 + r}\right) = \frac{16}{5}$$ **[1M]**
* **Step 6 [Part C]:** Substitute the value of the first sum ($\frac{a}{1-r} = 4$) straight into this rearranged equation:
  $$4 \cdot \left(\frac{a}{1 + r}\right) = \frac{16}{5} \implies \frac{a}{1 + r} = \frac{4}{5} \implies 5a = 4(1 + r)$$ **[1M]**
* **Step 7 [Part C]:** Substitute $a = 4(1-r)$ into this linear balance equation to isolate the ratio variable $r$:
  $$5[4(1 - r)] = 4(1 + r) \implies 20(1 - r) = 4(1 + r) \implies 5(1 - r) = 1 + r$$
  $$5 - 5r = 1 + r \implies 4 = 6r \implies \mathbf{r = \frac{2}{3}}$$ **[1A]**
* **Step 8 [Part C]:** Substitute $r = \frac{2}{3}$ back into your equation for $a$ to find the starting term:
  $$a = 4\left(1 - \frac{2}{3}\right) = 4\left(\frac{1}{3}\right) = \mathbf{\frac{4}{3}}$$ **[1A]**
</details>