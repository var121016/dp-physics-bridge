---
title: "Day 19: Solving Exponential Equations"
description: "Scaffolded Core Strategy Blueprint and 10-Problem Tiered Track focused on base manipulation, log transformations, and hidden quadratic substitutions."
---


Today we shift from purely expanding and collapsing logarithmic notation to solving advanced equations. We will master the techniques required to isolate variable fields trapped in powers, moving from simple uniform base matching to unmasking complex polynomial equations hiding inside exponential networks.

---

## 🧭 The Core Strategy Blueprint

### 👥 Parent Analytics Summary
* **The Core Gap:** When variable terms occupy the exponent position on both sides of an equation (e.g., $3^{x+1} = 5^{2x}$), students frequently panic because they cannot find a common integer base. They resort to invalid algebraic moves, such as taking logs of individual terms across an addition barrier.
* **The Target Objective:** We introduce two systematic isolation tracks: **Uniform Base Reduction** for clean matching bases, and **Transcendental Operator Extraction** (applying logs to both sides) for mismatched bases. Your student will also learn to spot and resolve hidden quadratic setups.

### 🎒 First-Principles Script (The Feynman Technique)
> **Read this aloud to lock in the structural intuition:**
>
> "Let's break down how to extract variables trapped in exponents from absolute first principles. When you look at an equation like $2^x = 16$, your brain automatically converts 16 into $2^4$, allowing you to drop the bases and solve $x = 4$. This is **Base Uniformity**.
> 
> But what happens when the bases don't match, like $2^x = 5$? There is no clean integer power that turns 2 into 5. To break this lock, we must apply our inverse operator—the logarithm—to both sides of the equation line:
> 
> $$\ln(2^x) = \ln(5)$$
> 
> By utilizing the log power rule we mastered on **Day 17**, that trapped variable $x$ drops straight down to the front line as a standard linear multiplier:
> 
> $$x \cdot \ln(2) = \ln(5)$$
> 
> Now, because $\ln(2)$ is just a constant number ($\approx 0.693$), we isolate $x$ using basic division: $x = \frac{\ln(5)}{\ln(2)}$. 
> 
> Finally, we must look out for **Hidden Polynomial Engines**. If you see an expression like $e^{2x} - 3e^x - 4 = 0$, you are looking at a classic quadratic polynomial in disguise. By using a temporary structural placeholder variable like $u = e^x$, the equation collapses into $u^2 - 3u - 4 = 0$, which we can dismantle using standard factoring."

---

## 🛠️ The 10-Problem Tiered Track

Execute these tasks completely on physical paper. **Calculators are strictly prohibited.** Show every structural step cleanly.

### 🛑 Tier 1: Uniform Base Reduction (Problems 1–4)
*Focus: Converting bases to uniform prime exponents to drop the base operators cleanly.*

#### 1. Problem 1
Solve for the exact value of the real variable $x$ by utilizing uniform base transitions:
* **Part A:** $3^{2x - 1} = 27$
* **Part B:** $4^{x + 3} = 32^{x - 1}$
* **Part C:** $\left(\frac{1}{9}\right)^{x} = 243$

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Directly connects back to the prime base decompositions mastered in **Week 1, Day 2**.

Identify the underlying prime base for each equation (Base 3 for Parts A and C, Base 2 for Part B). Rewrite all components using these prime bases, equate the exponents, and solve the remaining linear equations.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1 [Part A]:** Convert 27 to base 3: $3^{2x - 1} = 3^3 \implies 2x - 1 = 3$ **[1M]**
* **Step 2 [Part A]:** Isolate $x$: $2x = 4 \implies \mathbf{x = 2}$ **[1A]**
* **Step 3 [Part B]:** Decompose 4 and 32 to base 2: $(2^2)^{x+3} = (2^5)^{x-1} \implies 2(x + 3) = 5(x - 1)$ **[1M]**
* **Step 4 [Part B]:** Expand and solve: $2x + 6 = 5x - 5 \implies 3x = 11 \implies \mathbf{x = \frac{11}{3}}$ **[1A]**
* **Step 5 [Part C]:** Convert to prime base 3 using negative exponents: $(3^{-2})^x = 3^5 \implies -2x = 5$ **[1M]**
* **Step 6 [Part C]:** State final value: **$x = -\frac{5}{2}$** or **$-2.5$** **[1A]**
</details>

---

#### 2. Problem 2
Solve for the exact real root of the matching exponential statement: $5^{x^2 - 4x} = \frac{1}{125}$.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Links base matching directly to the quadratic extraction paths from **Week 1, Day 2**.

Express $\frac{1}{125}$ as $5^{-3}$. Once the bases match on both sides, equate the exponents to build a standard quadratic equation, set it to zero, and factorize.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Transition the right-hand constant into a base-5 negative exponent: $5^{x^2 - 4x} = 5^{-3}$ **[1M]**
* **Step 2:** Equate the exponents to formulate a quadratic profile: $x^2 - 4x = -3 \implies x^2 - 4x + 3 = 0$ **[1M]**
* **Step 3:** Factorize the trinomial expression: $(x - 3)(x - 1) = 0$ **[1M]**
* **Step 4:** Extract both valid real roots: **$x = 3$ and $x = 1$** **[1A]**
</details>

---

#### 3. Problem 3
Solve for the variable parameter $t$ in the equation: $e^{2t - 5} = \sqrt{e^3}$.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Integrates fractional index radical definitions from **Week 1, Day 4** with base-$e$ systems.

Convert the square root on the right side into a fractional power ($\frac{3}{2}$). Because the bases are both $e$, equate the linear exponents directly to isolate $t$.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Transmute the radical right-hand side into a fractional index: $e^{2t - 5} = e^{3/2}$ **[1M]**
* **Step 2:** Equate the exponents directly across the balance line: $2t - 5 = \frac{3}{2}$ **[1M]**
* **Step 3:** Multiply the entire system by 2 to clear fractions: $4t - 10 = 3 \implies 4t = 13$ **[1M]**
* **Step 4:** State final parameter location: **$t = \frac{13}{4}$** or **$3.25$** **[1A]**
</details>

---

#### 4. Problem 4
Isolate the exact value of $x$ in the algebraic equation: $2^{3x+1} \cdot 8^{x-2} = 4^2$.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Employs index multiplication rules ($b^m \cdot b^n = b^{m+n}$) from **Week 1, Day 3**.

Convert all three distinct components to a common base of 2. Multiply the terms on the left side by adding their exponents together before equating the final expressions.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Convert all system elements to a clean base-2 architecture: $2^{3x+1} \cdot (2^3)^{x-2} = (2^2)^2 \implies 2^{3x+1} \cdot 2^{3x-6} = 2^4$ **[1M]**
* **Step 2:** Combine left terms using the index product law by summing exponents: $2^{(3x+1) + (3x-6)} = 2^4 \implies 2^{6x - 5} = 2^4$ **[1M]**
* **Step 3:** Equate the surviving exponent blocks: $6x - 5 = 4 \implies 6x = 9$ **[1M]**
* **Step 4:** Simplify the resulting fraction: $x = \frac{9}{6} = \mathbf{\frac{3}{2}}$ or **$1.5$** **[1A]**
</details>

---

### 🌀 Tier 2: Mismatched Transcendental Operator Extraction (Problems 5–7)
*Focus: Applying logs to both sides to extract variables from mismatched exponential bases.*

#### 5. Problem 5
Find the exact real solution for $x$ in the equation: $3^x = 7^{x-1}$. Express your answer using natural logarithms ($\ln$).

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Implements the core transcendental operator track using **Day 17 distributive expanding workflows**.

Because 3 and 7 share no common base, take the natural log ($\ln$) of both sides. Bring the powers to the front, expand the parenthesis cleanly, group all terms containing $x$ on one side, and factor out $x$.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Apply the natural log operator to both sides of the balance equation: $\ln(3^x) = \ln(7^{x-1})$ **[1M]**
* **Step 2:** Use the log power law to drop the exponents down to front coefficients: $x\ln(3) = (x - 1)\ln(7)$ **[1M]**
* **Step 3:** Expand the right-hand bracket expression carefully: $x\ln(3) = x\ln(7) - \ln(7)$ **[1M]**
* **Step 4:** Move all terms with variable $x$ to the left side: $x\ln(3) - x\ln(7) = -\ln(7)$ **[1M]**
* **Step 5:** Factor out the variable $x$ and solve via division: $x(\ln(3) - \ln(7)) = -\ln(7) \implies \mathbf{x = \frac{-\ln(7)}{\ln(3) - \ln(7)}}$ or **$\mathbf{\frac{\ln(7)}{\ln(7) - \ln(3)}}$** **[1A]**
</details>

---

#### 6. Problem 6
Solve for the exact value of $y$: $5^{2y + 3} = 2$. Leave the final answer as a single condensed log term.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Blends multi-step variable isolation with the log base switching definitions from **Day 16**.

Convert this statement directly into its log equivalent: $\log_5(2) = 2y + 3$. Then, isolate $y$ using standard linear transformation steps.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Reframe the exponential structure directly as a log base statement: $2y + 3 = \log_5(2)$ **[1M]**
* **Step 2:** Transpose the integer constant 3: $2y = \log_5(2) - 3$ **[1M]**
* **Step 3:** Divide the entire system expression by 2: **$y = \frac{\log_5(2) - 3}{2}$** **[1A]**
</details>

---

#### 7. Problem 7
Isolate variable $x$ exactly: $e^{x+2} = 3^{-x}$.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Links base-$e$ identities with general logarithmic expansions.

Apply the natural log ($\ln$) operator to both sides. Remember that $\ln(e^{x+2})$ cancels perfectly to yield $x+2$. Bring down the right-hand exponent, collect like terms, and factor out $x$.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Apply the natural log operator to both sides: $\ln(e^{x+2}) = \ln(3^{-x})$ **[1M]**
* **Step 2:** Execute functional cancellation on the left and power drop on the right: $x + 2 = -x\ln(3)$ **[1M]**
* **Step 3:** Group all variable terms containing $x$ onto the left side line: $x + x\ln(3) = -2$ **[1M]**
* **Step 4:** Factor out variable $x$: $x(1 + \ln(3)) = -2$ **[1M]**
* **Step 5:** State final exact structural value: **$x = \frac{-2}{1 + \ln(3)}$** **[1A]**
</details>

---

### 🏆 Tier 3: Hidden Polynomial Substitutions (Problems 8–9)
*Focus: Identifying and dismantling quadratic trinomial systems hidden within exponential layers.*

#### 8. Problem 8
Solve the following equation for exact real values of $x$: $4^x - 6(2^x) + 8 = 0$.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Weaponizes the **Week 4 structural substitution protocol** to unmask hidden quadratic variables.

Notice that $4^x = (2^2)^x = (2^x)^2$. Substitute a placeholder variable $u = 2^x$. Solve the resulting quadratic equation for $u$, then substitute back to solve for the true variable $x$.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Define the structural placeholder variable to unmask the engine: Let $u = 2^x \implies u^2 = 4^x$ **[1M]**
* **Step 2:** Rewrite the equation system in terms of variable $u$: $u^2 - 6u + 8 = 0$ **[1M]**
* **Step 3:** Factorize the trinomial quadratic profile: $(u - 4)(u - 2) = 0 \implies u = 4 \text{ or } u = 2$ **[1M]**
* **Step 4:** Substitute the original exponential expression back into the solution branches: $2^x = 4$ or $2^x = 2$ **[1M]**
* **Step 5:** Solve both independent uniform base tracks: For $2^x = 4 \implies x = 2$. For $2^x = 2 \implies x = 1$. State both final valid real roots: **$x = 2$ and $x = 1$** **[1A]**
</details>

---

#### 9. Problem 9
Find all exact real values of $x$ that satisfy the equation: $e^x - 6e^{-x} = 1$.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Combines rational fraction equations from **Week 1, Day 1** with hidden quadratic profiles.

Rewrite $e^{-x}$ as $\frac{6}{e^x}$. To clear the exponential term out of the denominator, multiply every single term in the equation by $e^x$. Then use substitution ($u = e^x$) to solve.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Express the negative index component as a rational denominator: $e^x - \frac{6}{e^x} = 1$ **[1M]**
* **Step 2:** Multiply the entire equation by $e^x$ to eliminate the fractional barrier: $(e^x)^2 - 6 = e^x \implies e^{2x} - e^x - 6 = 0$ **[1M]**
* **Step 3:** Substitute placeholder $u = e^x \implies u^2 - u - 6 = 0$ **[1M]**
* **Step 4:** Factorize the equation: $(u - 3)(u + 2) = 0 \implies u = 3 \text{ or } u = -2$ **[1M]**
* **Step 5:** Re-evaluate the exponential terms: For $e^x = 3 \implies x = \ln(3)$. For $e^x = -2$, there are no real solutions since an exponential curve cannot yield a negative output. State final real root: **$x = \ln(3)$** **[1A]**
</details>

---

### 🧪 Tier 4: Junior Paper 3 Investigation (Problem 10)
*Focus: Parametric exponential intersections, non-linear roots, and boundary constraint maps.*

#### 10. Problem 10: The Parametric Exponential Intersection Threshold
Let us execute an investigation into the intersection characteristics of dual exponential systems under parametric modulation. Consider two functional paths defined across all real domains:

$$f(x) = a^{2x} \quad \text{and} \quad g(x) = k \cdot a^x$$

where the common base value is a fixed constant satisfying $a \in \mathbb{R}^+ \setminus \{1\}$, and $k$ acts as a dynamically scaling real parameter ($k \in \mathbb{R}$).

* **Part A:** Derive a general algebraic formula for the exact coordinate location of the intersection point where $f(x) = g(x)$, writing your answer as a function of parameters $a$ and $k$.
* **Part B:** State the exact structural restriction boundaries that must be placed on parameter $k$ to guarantee that a physical intersection point **exists** in real space.
* **Part C:** Suppose we introduce a linear disturbance factor, transforming our parent equations into a combined system equation of the profile:

$$a^{2x} - k \cdot a^x + \omega = 0$$

where $\omega \in \mathbb{R}$ represents a secondary constant offset line. **Prove that** this system will possess exactly **two distinct real intersection roots** if and only if the parameters satisfy the strict constraint matrix:

$$k > 2\sqrt{\omega} \quad \text{and} \quad \omega > 0$$

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** This complex problem bridges **Week 4 quadratic substitutions** with the **Week 4 Weekend Hub discriminant analysis**.

For Part A, equate the two parent functions, divide by $a^x$ (which is safe since $a^x > 0$), and take log base $a$. For Part B, observe what happens to the log argument if $k \le 0$. For Part C, substitute $u = a^x$ to convert the system into a quadratic equation ($u^2 - ku + \omega = 0$). For two distinct real roots to exist, the discriminant must be strictly positive ($\Delta > 0$). Furthermore, both solved roots for $u$ must be strictly positive ($u > 0$) for the inverse exponential step to succeed.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1 [Part A]:** Equate the two system equations to track their shared coordinate intersection node:
  $$a^{2x} = k \cdot a^x$$ **[1M]**
* **Step 2 [Part A]:** Divide both sides by the non-zero exponential term $a^x$:
  $$a^x = k$$ **[1M]**
* **Step 3 [Part A]:** Convert directly into a logarithmic format using base $a$:
  $$\mathbf{x = \log_a(k)}$$ **[1A]**
* **Step 4 [Part B]:** Analyze the domain constraints of the resulting logarithmic coordinate. Since a logarithm cannot process a negative value or zero, the real intersection path exists if and only if:
  $$\mathbf{k > 0}$$ **[1A]**
* **Step 5 [Part C]:** Apply a structural placeholder variable to handle the combined system profile: Let $u = a^x \implies u^2 - ku + \omega = 0$ **[1M]**
* **Step 6 [Part C]:** To ensure the system yields two distinct roots, apply the discriminant operator ($\Delta = b^2 - 4ac > 0$):
  $$\Delta = (-k)^2 - 4(1)(\omega) = k^2 - 4\omega > 0 \implies k^2 > 4\omega \implies \mathbf{k > 2\sqrt{\omega}}$$ **[1M]**
* **Step 7 [Part C]:** Enforce the secondary hidden exponential constraint. For these two quadratic roots to translate into real $x$ coordinates, the solved values for $u$ must be strictly positive (since $u = a^x > 0$). Analyze the roots using Vieta’s formulas or the quadratic formula:
  $$u = \frac{k \pm \sqrt{k^2 - 4\omega}}{2}$$
  To guarantee that the smaller root ($u = \frac{k - \sqrt{k^2 - 4\omega}}{2}$) remains strictly greater than zero, we require:
  $$k > \sqrt{k^2 - 4\omega} \implies k^2 > k^2 - 4\omega \implies 0 > -4\omega \implies \mathbf{\omega > 0}$ shift boundary matrix.** **[1M]**
* **Step 8 [Part C]:** Confirm that if $\omega > 0$, then $2\sqrt{\omega}$ yields a valid real number. Thus, the system maps out exactly two distinct real roots if and only if $k > 2\sqrt{\omega}$ and $\omega > 0$ simultaneously. **[1A]** *(Q.E.D.)*
</details>