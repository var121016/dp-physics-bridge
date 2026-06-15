---
title: "Day 17: Core Laws of Logarithms"
description: "Scaffolded Core Strategy Blueprint and 10-Problem Tiered Track focused on the product, quotient, and power laws of logarithms."
---


Today we weaponize our logarithmic foundations. Now that we understand a logarithm as an exponent extractor, we introduce the operational properties that govern log manipulation. We are shifting from simple definition switches to multi-stage algebraic reduction.

---

## 🧭 The Core Strategy Blueprint

### 👥 Parent Analytics Summary
* **The Core Gap:** Students frequently treat the laws of logarithms as arbitrary formulas to memorize, leading to systemic structural errors. Without anchoring these laws back to index rules, students create illegal mutations (such as splitting arguments across addition).
* **The Target Objective:** We ground log laws as the exact functional reflections of index laws. Your student will learn to instinctively use the product, quotient, and power laws to contract or expand multi-term algebraic expressions with absolute accuracy.

### 🎒 First-Principles Script (The Feynman Technique)
> **Read this aloud to lock in the structural intuition:**
>
> "Let's look at log laws from absolute first principles. Remember: **a log is simply an exponent**. Therefore, the rules for handling logarithms must behave exactly like the rules for handling exponents, just written in reverse.
> 
> Think about what happens when you multiply two powers with identical bases, like $b^m \cdot b^n$. You add the exponents together to get $b^{m+n}$. Because logs *are* the exponents, the log of a product turns into the *addition* of those individual logs:
> 
> $$\log_b(xy) = \log_b(x) + \log_b(y)$$
> 
> Similarly, dividing powers means you subtract the exponents ($b^m / b^n = b^{m-n}$). So, the log of a quotient turns into the *subtraction* of those logs:
> 
> $$\log_b\left(\frac{x}{y}\right) = \log_b(x) - \log_b(y)$$
> 
> Finally, raising a power to another power means you multiply the exponents together ($(b^m)^n = b^{mn}$). So, if you have a power inside a log argument, that exponent drops down to the front as a multiplier:
> 
> $$\log_b(x^k) = k \cdot \log_b(x)$$
> 
> Logs turn multiplication into addition, division into subtraction, and powers into multiplication. They are index operations working inside out."

---

## 🛠️ The 10-Problem Tiered Track

Execute these tasks completely on physical paper. **Calculators are strictly prohibited.** Show every structural step cleanly.

### 🛑 Tier 1: Core Law Mechanics (Problems 1–4)
*Focus: Executing clean, single-step expansions and contractions using product, quotient, and power rules.*

#### 1. Problem 1
Express each of the following as a single logarithm in its simplest form:
* **Part A:** $\log_3(5) + \log_3(4)$
* **Part B:** $\log_2(72) - \log_2(9)$
* **Part C:** $3\log_5(2)$

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Tests direct mastery of the three foundational log rules in isolation.

For Part A, apply the product rule. For Part B, use the quotient rule. For Part C, run the power rule in reverse by pulling the leading coefficient up as an exponent.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1 [Part A]:** Apply product rule: $\log_3(5 \cdot 4) = \mathbf{\log_3(20)}$ **[1A]**
* **Step 2 [Part B]:** Apply quotient rule: $\log_2\left(\frac{72}{9}\right) = \mathbf{\log_2(8)}$ **[1M]** Evaluate further: $2^3 = 8 \implies \mathbf{3}$ **[1A]**
* **Step 3 [Part C]:** Apply power rule: $\log_5(2^3) = \mathbf{\log_5(8)}$ **[1A]**
</details>

---

#### 2. Problem 2
Expand the following expression completely into a sum and/or difference of linear logarithmic terms, ensuring no powers remain within the arguments:

$$\log_b\left(\frac{x^3 y^2}{z^5}\right)$$

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Combines expansion mechanics with the index distributions established in **Week 1, Day 3**.

Treat the numerator items as positive log components and the denominator items as subtracted log components. Once separated, bring all variable exponents down to the front using the power rule.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Separate the quotient boundary into independent terms: $\log_b(x^3 y^2) - \log_b(z^5)$ **[1M]**
* **Step 2:** Split the numerator product into addition: $\log_b(x^3) + \log_b(y^2) - \log_b(z^5)$ **[1M]**
* **Step 3:** Drop all internal power parameters down to leading coefficients: **$3\log_b(x) + 2\log_b(y) - 5\log_b(z)$** **[2A]**
</details>

---

#### 3. Problem 3
Given that $\log_a(2) = p$ and $\log_a(3) = q$, find an expression in terms of $p$ and $q$ for $\log_a(54)$.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Re-engages prime factor decomposition from **Week 1, Day 2**.

Deconstruct the target number 54 entirely into factors of 2 and 3. Expand the resulting expression using log laws, then substitute $p$ and $q$ directly into the expanded terms.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Decompose 54 into its prime factors: $54 = 2 \cdot 27 = 2 \cdot 3^3$ **[1M]**
* **Step 2:** Expand using the product rule: $\log_a(2 \cdot 3^3) = \log_a(2) + \log_a(3^3)$ **[1M]**
* **Step 3:** Apply the power rule to isolate the linear components: $\log_a(2) + 3\log_a(3)$ **[1M]**
* **Step 4:** Substitute given parameters $p$ and $q$: **$p + 3q$** **[1A]**
</details>

---

#### 4. Problem 4
Simplify the following multi-term expression down to a single integer value:

$$2\log_{10}(5) + \log_{10}(8) - \log_{10}(2)$$

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Links multi-term consolidation pipelines to Base-10 metric evaluations.

You cannot combine logs while coefficients sit in front of them. Apply the power rule to $2\log_{10}(5)$ first, then read from left to right combining via product and quotient rules.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Retract leading coefficients into exponents: $\log_{10}(5^2) + \log_{10}(8) - \log_{10}(2) = \log_{10}(25) + \log_{10}(8) - \log_{10}(2)$ **[1M]**
* **Step 2:** Execute product law combination on the first two terms: $\log_{10}(25 \cdot 8) - \log_{10}(2) = \log_{10}(200) - \log_{10}(2)$ **[1M]**
* **Step 3:** Execute quotient law combination: $\log_{10}\left(\frac{200}{2}\right) = \log_{10}(100)$ **[1M]**
* **Step 4:** Evaluate final Base-10 integer value ($10^2 = 100$): **$2$** **[1A]**
</details>

---

### 🌀 Tier 2: Composition and Equation Reductions (Problems 5–7)
*Focus: Eliminating logarithms from equations cleanly to isolate internal variable fields.*

#### 5. Problem 5
Solve for the exact value of $x$ in the algebraic system: $\log_4(x) + \log_4(x - 6) = 2$.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Integrates quadratic factoring loops from **Week 1, Day 2** with argument domain safety checks.

Condense the left side using the product law. Once condensed into a single log statement, convert to exponential form to yield a standard quadratic equation. **Crucial:** Validate your answers against the original domain.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Compress the dual log statements into a single product structure: $\log_4(x(x - 6)) = 2 \implies \log_4(x^2 - 6x) = 2$ **[1M]**
* **Step 2:** Convert the expression into its equivalent exponential form: $4^2 = x^2 - 6x \implies x^2 - 6x - 16 = 0$ **[1M]**
* **Step 3:** Factorize the resulting quadratic profile: $(x - 8)(x + 2) = 0 \implies x = 8 \text{ or } x = -2$ **[1M]**
* **Step 4:** Enforce domain restrictions on original arguments ($x > 0$ and $x - 6 > 0 \implies x > 6$). The solution $x = -2$ is extraneous. State final valid root: **$x = 8$** **[1A]**
</details>

---

#### 6. Problem 6
Solve for the variable parameter $y$ purely in terms of $x$: $\log_3(y) = 2\log_3(x) + \log_3(5) - 1$.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Evaluates literal variable transposition and expression matching.

To eliminate logs safely, every single term must be wrapped inside a log of the same base. Convert the standalone constant $1$ into $\log_3(3)$, condense the right side completely, then drop the logs from both sides.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Convert the integer constant into an equivalent base-3 logarithm: $1 = \log_3(3)$ **[1M]**
* **Step 2:** Apply power and law rewrites to the right-side statement: $\log_3(y) = \log_3(x^2) + \log_3(5) - \log_3(3)$ **[1M]**
* **Step 3:** Condense the right side using product and quotient laws: $\log_3(y) = \log_3\left(\frac{5x^2}{3}\right)$ **[1M]**
* **Step 4:** Equate arguments directly to state the explicit model equation: **$y = \frac{5x^2}{3}$** **[1A]**
</details>

---

#### 7. Problem 7
Simplify the complex rational expression down to a single constant fraction:

$$\frac{\log_a(64)}{\log_a(16)}$$

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Resolves the common error of treating fraction logs as subtraction.

**Do not apply the quotient rule here.** This is a division of two separate log statements, not a single log of a fraction. Instead, decompose both 64 and 16 into a shared prime base (base 2), bring their powers to the front, and cancel out the common log factor.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Decompose both numerical arguments to a common base profile ($2$): $64 = 2^6$ and $16 = 2^4$ **[1M]**
* **Step 2:** Rewrite the rational expression using these prime parameters: $\frac{\log_a(2^6)}{\log_a(2^4)}$ **[1M]**
* **Step 3:** Drop the exponents down to the front as multipliers via the power rule: $\frac{6\log_a(2)}{4\log_a(2)}$ **[1M]**
* **Step 4:** Cancel out the common matching functional factor $\log_a(2)$ and reduce the remaining fraction: $\frac{6}{4} = \mathbf{\frac{3}{2}}$ **[1A]**
</details>

---

### 🏆 Tier 3: Analytical Proofs and Invariance (Problems 8–9)
*Focus: Executing literal variable proofs and tracking invariant conditions under functional transformation.*

#### 8. Problem 8
**Prove that** the following expression evaluates to a constant value of zero for all real positive domains of $x, y, z$:

$$\log_b\left(\frac{x}{y}\right) + \log_b\left(\frac{y}{z}\right) + \log_b\left(\frac{z}{x}\right) = 0$$

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Evaluates cyclic algebraic balance properties first encountered in **Week 1, Day 5**.

Combine all three separate log statements into a single unified log statement using the product rule. Multiply the fractions inside the argument and watch how the variables interact.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Apply the product rule to chain the three separate addition terms together:
  $$\log_b\left(\frac{x}{y} \cdot \frac{y}{z} \cdot \frac{z}{x}\right)$$ **[2M]**
* **Step 2:** Execute the internal fractional multiplication steps across the system domain:
  $$\log_b\left(\frac{xyz}{yzx}\right)$$ **[1M]**
* **Step 3:** Cancel out the common factors to evaluate the remaining internal argument scalar:
  $$\log_b(1)$$ **[1M]**
* **Step 4:** Apply zero-power rule logic to finalize proof: Since $b^0 = 1$, $\log_b(1) = 0$. The expression evaluates to zero identically across all positive real domains. **[1A]** *(Q.E.D.)*
</details>

---

#### 9. Problem 9
Consider the curve $f(x) = \log_5(x)$. Suppose this graph undergoes an axial scaling expansion of factor 3 vertical stretch, followed immediately by a vertical translation of vector $\vec{T} = \begin{pmatrix} 0 \\ \log_5(8) \end{pmatrix}$, forming a new curve $g(x)$. **Prove that** $g(x)$ can be compressed into a single log term of the form $\log_5(8x^3)$.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Unifies the transformation mapping rules from **Week 3 Weekend Hub** with log laws.

Build the equation step-by-step. Multiply $f(x)$ by 3 to model the vertical stretch, then add $\log_5(8)$ to handle the translation vector. Use the power rule followed by the product rule to compress the final statement.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Apply the vertical stretch component multiplier to the parent model: $y' = 3\log_5(x)$ **[1M]**
* **Step 2:** Apply the vertical translation component from the vector parameter: $g(x) = 3\log_5(x) + \log_5(8)$ **[1M]**
* **Step 3:** Retract the leading multiplier back into the variable argument via the power rule: $g(x) = \log_5(x^3) + \log_5(8)$ **[1M]**
* **Step 4:** Combine the two addition terms into a unified single log statement using the product law:
  $$g(x) = \log_5(8 \cdot x^3) = \mathbf{\log_5(8x^3)}$$ **[1A]** *(Target structure verified cleanly—Q.E.D.)*
</details>

---

### 🧪 Tier 4: Junior Paper 3 Investigation (Problem 10)
*Focus: Parametric geometric progressions, algebraic proofs, and system invariance.*

#### 10. Problem 10: The Logarithmic Arithmetic Progression Locus
Let us investigate the algebraic patterns generated when geometric sequences are mapped through logarithmic filters. Suppose we have a sequence of numbers defined by the parameters:

$$u_1 = k, \quad u_2 = k \cdot r, \quad u_3 = k \cdot r^2, \quad \dots, \quad u_n = k \cdot r^{n-1}$$

where the initial scaling coefficient satisfies $k \in \mathbb{R}^+$ and the constant common multiplier ratio satisfies $r \in \mathbb{R}^+$. We construct a completely new transformed sequence $v_n$ by taking the base-$b$ logarithm of each individual term in the sequence, such that $v_n = \log_b(u_n)$.

* **Part A:** Write down explicit, fully expanded expressions for the first three terms of our new sequence ($v_1$, $v_2$, and $v_3$) in terms of parameters $b$, $k$, and $r$.
* **Part B:** **Prove that** the transformed sequence $v_n$ forms a flawless **Arithmetic Progression** (a sequence where the difference between any two consecutive terms remains completely constant and invariant).
* **Part C:** Derive a simplified formula for the sum of the first $n$ terms of the transformed sequence ($S_n = \sum_{i=1}^n v_i$) written as a single, condensed logarithm expression containing only parameters $b$, $k$, $r$, and index length $n$.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** This problem forms an elegant bridge between **Week 4 log condensation properties** and advanced sequence structures.

For Part B, show that the step difference $(v_2 - v_1)$ matches $(v_3 - v_2)$ exactly by utilizing the quotient rule. For Part C, write out the sum of terms, group the log constants together via product rules, and apply the classic summation pattern for consecutive integers ($1 + 2 + 3 + \dots + (n-1) = \frac{n(n-1)}{2}$) inside the final condensed log argument.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1 [Part A]:** Map the sequence elements through the log filter and expand using the product rule:
  $$v_1 = \log_b(k)$$ **[1A]**
  $$v_2 = \log_b(kr) = \mathbf{\log_b(k) + \log_b(r)}$$ **[1A]**
  $$v_3 = \log_b(kr^2) = \mathbf{\log_b(k) + 2\log_b(r)}$$ **[1A]**
* **Step 2 [Part B]:** Calculate the step difference between the first two terms:
  $$d_1 = v_2 - v_1 = (\log_b(k) + \log_b(r)) - \log_b(k) = \log_b(r)$$ **[1M]**
* **Step 3 [Part B]:** Calculate the step difference between the next two consecutive terms:
  $$d_2 = v_3 - v_2 = (\log_b(k) + 2\log_b(r)) - (\log_b(k) + \log_b(r)) = \log_b(r)$$ **[1M]**
* **Step 4 [Part B]:** Formulate the general consecutive term difference equation to solidify the proof:
  $$d_n = v_{n} - v_{n-1} = \log_b(kr^{n-1}) - \log_b(kr^{n-2}) = \log_b\left(\frac{kr^{n-1}}{kr^{n-2}}\right) = \log_b(r)$$
  Because $d = \log_b(r)$ is entirely independent of the term index position $n$, the step difference remains completely **invariant**, proving that the sequence forms a true Arithmetic Progression. **[1A]**
* **Step 5 [Part C]:** Set up the summation series structure for the first $n$ terms:
  $$S_n = \log_b(k) + (\log_b(k) + \log_b(r)) + (\log_b(k) + 2\log_b(r)) + \dots + (\log_b(k) + (n-1)\log_b(r))$$ **[1M]**
* **Step 6 [Part C]:** Collect the matching linear component elements. Notice there are exactly $n$ iterations of the $\log_b(k)$ parameter:
  $$S_n = n\log_b(k) + \log_b(r) \cdot [1 + 2 + 3 + \dots + (n-1)]$$ **[1M]**
* **Step 7 [Part C]:** Substitute the classic consecutive integer summation sum factor into the bracket:
  $$S_n = n\log_b(k) + \left(\frac{n(n-1)}{2}\right)\log_b(r)$$ **[1M]**
* **Step 8 [Part C]:** Retract both leading coefficient multipliers back into power exponents via the log power rule:
  $$S_n = \log_b(k^n) + \log_b\left(r^{\frac{n(n-1)}{2}}\right)$$ **[1M]**
* **Step 9 [Part C]:** Apply the product rule to pull the entire system back into a single condensed expression:
  $$\mathbf{S_n = \log_b\left(k^n \cdot r^{\frac{n(n-1)}{2}}\right)}$$ **[1A]** *(Q.E.D.)*
</details>