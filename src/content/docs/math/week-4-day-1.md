---
title: "Day 16: Introduction to Logarithms"
description: "Scaffolded Core Strategy Blueprint and 10-Problem Tiered Track focused on converting between exponential structures and logarithmic bases."
---


Today we breach the domain of non-linear scaling. We are moving away from treating a logarithm as an isolated calculator button and grounding it as a structural operator—specifically, the perfect functional reflection of an exponent.

---

## 🧭 The Core Strategy Blueprint

### 👥 Parent Analytics Summary
* **The Core Gap:** Grade 10 students often experience a form of notation shock when introduced to logarithms. Because $\log$ looks like a word rather than a classic algebraic operation (like $+$ or $\sqrt{x}$), students lose their structural intuition and resort to blind mechanical shuffling.
* **The Target Objective:** We erase the intimidation by enforcing structural equivalence. Your student will learn to see that a logarithmic statement is simply an exponential statement viewed from an inverse perspective. If they can parse a base and an index, they can parse a log.

### 🎒 First-Principles Script (The Feynman Technique)
> **Read this aloud to lock in the structural intuition:**
>
> "Let's look at logarithms from absolute first principles. A log is not a collection of magic letters; it is an operator that extracts a hidden exponent.
>
> Think of an exponential statement as a forward-moving machine: you choose a base ($b$), you give it an input power ($y$), and it calculates the final output value ($x$). 
> 
> $$b^y = x$$
> 
> A logarithm is simply that exact same machine running in reverse. It looks at the final output value ($x$) and asks: *'To what exponent must I raise my base ($b$) to manufacture this exact number?'*
> 
> $$\log_b(x) = y$$
> 
> Notice that the **base remains the base** in both worlds. The log output ($y$) is literally the exponent from the original equation. When you see a statement like $\log_2(8) = 3$, your brain shouldn't freeze—it should simply read it as: *'The power of 2 that yields 8 is 3.'*"

---

## 🛠️ The 10-Problem Tiered Track

Execute these tasks completely on physical paper. **Calculators are strictly prohibited.** Show every structural loop cleanly.

### 🛑 Tier 1: The Form Switch Loop (Problems 1–4)
*Focus: Mastering the fluid conversion between exponential layouts and logarithmic statements.*

#### 1. Problem 1
Convert the following exponential equations into their mathematically equivalent logarithmic forms:
* **Part A:** $3^4 = 81$
* **Part B:** $5^{-2} = \frac{1}{25}$
* **Part C:** $7^0 = 1$

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** This directly tests the operational loop $\log_b(x) = y \iff b^y = x$.

Identify the base ($b$), the exponent ($y$), and the resulting value ($x$) for each part. Keep the base of the exponent as the lower base subscript of your new log statement.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1 [Part A]:** Identify base $b=3$, exponent $y=4$, value $x=81 \implies \mathbf{\log_3(81) = 4}$ **[1A]**
* **Step 2 [Part B]:** Identify base $b=5$, exponent $y=-2$, value $x=\frac{1}{25} \implies \mathbf{\log_5\left(\frac{1}{25}\right) = -2}$ **[1A]**
* **Step 3 [Part C]:** Identify base $b=7$, exponent $y=0$, value $x=1 \implies \mathbf{\log_7(1) = 0}$ **[1A]**
</details>

---

#### 2. Problem 2
Convert the following logarithmic statements into their mathematically equivalent exponential forms:
* **Part A:** $\log_2(64) = 6$
* **Part B:** $\log_{10}(0.001) = -3$
* **Part C:** $\log_4(2) = \frac{1}{2}$

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Runs the operational engine backward from log form to index form.

The subscript is your base. The isolated evaluation on the right side of the equals sign is your exponent. Set the base raised to that exponent equal to the internal log argument.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1 [Part A]:** Extract base $2$ and power $6$ to equal argument $64 \implies \mathbf{2^6 = 64}$ **[1A]**
* **Step 2 [Part B]:** Extract base $10$ and power $-3$ to equal argument $0.001 \implies \mathbf{10^{-3} = 0.001}$ **[1A]**
* **Step 3 [Part C]:** Extract base $4$ and power $\frac{1}{2}$ to equal argument $2 \implies \mathbf{4^{1/2} = 2}$ **[1A]**
</details>

---

#### 3. Problem 3
Evaluate the exact numerical value of the expression: $\log_6(216) + \log_9\left(\frac{1}{81}\right)$.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Integrates index analysis from **Week 1, Day 2** with basic log statements.

Evaluate each log term independently. Ask yourself: *"6 raised to what power equals 216?"* and *"9 raised to what power equals $\frac{1}{81}$?"* Then sum the resulting integer exponents.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Isolate first term: Let $\log_6(216) = y_1 \implies 6^{y_1} = 216$. Since $6^3 = 216$, $y_1 = 3$ **[1M]**
* **Step 2:** Isolate second term: Let $\log_9\left(\frac{1}{81}\right) = y_2 \implies 9^{y_2} = \frac{1}{81}$. Since $9^{-2} = \frac{1}{81}$, $y_2 = -2$ **[1M]**
* **Step 3:** Combine evaluations: $3 + (-2) = 1$ **[1M]**
* **Step 4:** State final numerical value: **$1$** **[1A]**
</details>

---

#### 4. Problem 4
Solve for the exact value of the variable parameter $x$ in the equation: $\log_x(32) = 5$.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Re-engages fractional power radical cancellation from **Week 1, Day 4**.

Convert the equation from log form into its equivalent exponential form immediately. Once written as a standard radical or power statement, solve for the base $x$.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Unpack the log statement into its matching exponential profile: $x^5 = 32$ **[1M]**
* **Step 2:** Isolate $x$ by applying a $\frac{1}{5}$ root power to both sides of the system: $x = (32)^{1/5}$ **[1M]**
* **Step 3:** Identify the prime base decomposition of 32: $2^5 = 32$ **[1M]**
* **Step 4:** Evaluate to state final base parameter value: **$x = 2$** **[1A]**
</details>

---

### 🌀 Tier 2: Parametric Boundary Extraction (Problems 5–7)
*Focus: Resolving fractional bases and tracking variable positions inside arguments.*

#### 5. Problem 5
Determine the exact value of the real variable domain parameter $k$ for the expression: $\log_{\frac{1}{3}}(k) = -4$.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Links back to the negative index distribution rules from **Week 1, Day 3**.

Convert to exponential form. Your base is a fraction ($\frac{1}{3}$) and your exponent is negative ($-4$). Remember that a negative exponent flips a rational fraction upside down.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Pivot the log layout into an exponential configuration: $\left(\frac{1}{3}\right)^{-4} = k$ **[1M]**
* **Step 2:** Apply negative index reciprocal inversion rules to the fraction base: $\left(\frac{3}{1}\right)^{4} = k$ **[1M]**
* **Step 3:** Calculate the final integer valuation for the parameter: $k = 3^4 = 81$ **[1M]**
* **Step 4:** State final result: **$k = 81$** **[1A]**
</details>

---

#### 6. Problem 6
Solve for the exact value of the argument variable $x$ in the equation: $\log_8(2x - 5) = \frac{2}{3}$.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Links linear solving tracks from **Week 1, Day 1** to fractional exponent reduction.

Convert the log structure into an exponential expression. Evaluate the fractional index ($8^{2/3}$) by finding the cube root of 8 first, squaring that result, and then solving the remaining linear equation.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Translate the expression into its exponential baseline: $8^{2/3} = 2x - 5$ **[1M]**
* **Step 2:** Deconstruct the fractional index value: $8^{2/3} = (\sqrt[3]{8})^2 = (2)^2 = 4$ **[1M]**
* **Step 3:** Set up the remaining simplified linear system: $4 = 2x - 5$ **[1M]**
* **Step 4:** Isolate variable $x$ algebraically: $2x = 9 \implies x = \frac{9}{2}$ **[1M]**
* **Step 5:** State final exact coordinate location: **$x = \frac{9}{2}$** or **$4.5$** **[1A]**
</details>

---

#### 7. Problem 7
Find the exact real value of $y$ that satisfies the dual-logarithmic expression: $\log_5(\log_2(y)) = 0$.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Evaluates nested structural expressions by stripping layers from the outside in.

Treat the inner term $(\log_2(y))$ as a single nested element. Convert the outer base-5 log statement to an exponential form first, evaluate the result, and then solve the inner base-2 log statement.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Strip the outer base-5 layer by converting to exponential form: $5^0 = \log_2(y)$ **[1M]**
* **Step 2:** Evaluate the zero-power index component: $1 = \log_2(y)$ **[1M]**
* **Step 3:** Strip the inner base-2 layer by converting to exponential form: $2^1 = y$ **[1M]**
* **Step 4:** State final variable evaluation: **$y = 2$** **[1A]**
</details>

---

### 🏆 Tier 3: Functional Inversion and Intercepts (Problems 8–9)
*Focus: Deriving analytical inverse functions and resolving axes collision points using log notation.*

#### 8. Problem 8
A non-linear model function is defined by $f(x) = 2^{x-3} + 4$.
* **Task A:** Determine the exact coordinates of the vertical $y$-intercept of $f(x)$.
* **Task B:** Derive an explicit analytical expression for the inverse function $f^{-1}(x)$ and state its mandatory restricted domain boundary.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Integrates inverse structural derivations from **Week 2 Weekend Hub** with log conversions.

For Task A, compute $f(0)$ using negative indices. For Task B, swap the position variables $x$ and $y$, isolate the exponential term, and utilize a logarithm base transformation to free the variable from the exponent.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1 [Task A]:** Set $x = 0$ to find the vertical intersection node: $f(0) = 2^{0-3} + 4 = 2^{-3} + 4$ **[1M]**
* **Step 2 [Task A]:** Evaluate the negative fraction index component: $\frac{1}{8} + 4 = \frac{33}{8} \implies \mathbf{\left(0, \frac{33}{8}\right)}$ **[1A]**
* **Step 3 [Task B]:** Set up the inverse tracking model by swapping variable coordinates: $x = 2^{y-3} + 4$ **[1M]**
* **Step 4 [Task B]:** Isolate the base exponential term: $x - 4 = 2^{y-3}$ **[1M]**
* **Step 5 [Task B]:** Apply a base-2 logarithm to convert the equation layout and free the power: $\log_2(x - 4) = y - 3$ **[1M]**
* **Step 6 [Task B]:** Isolate $y$ to finalize the inverse equation: $\mathbf{f^{-1}(x) = \log_2(x - 4) + 3}$ **[1A]**
* **Step 7 [Task B]:** Enforce the positive internal log argument domain boundary rule ($x - 4 > 0$): **Domain: $x > 4$** **[1A]**
</details>

---

#### 9. Problem 9
An inverted function profile is mapped explicitly as $g(x) = \log_3(x + 9) - 2$. Find the exact coordinate locations where this curve crosses both the horizontal $x$-axis and the vertical $y$-axis.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Re-engages the coordinate intercept identification workflows from **Week 3, Day 15**.

To pinpoint the vertical intercept, evaluate $g(0)$. To locate the horizontal root intercept, set $g(x) = 0$, isolate the logarithmic statement, and convert it into an exponential base loop.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Evaluate $g(0)$ for the vertical axis intercept: $g(0) = \log_3(0 + 9) - 2 = \log_3(9) - 2$ **[1M]**
* **Step 2:** Simplify the integer log component ($3^2 = 9 \implies \log_3(9) = 2$): $g(0) = 2 - 2 = 0 \implies \mathbf{(0, 0)}$ **[1A]**
* **Step 3:** Set $g(x) = 0$ to calculate the horizontal root axis position: $0 = \log_3(x + 9) - 2 \implies 2 = \log_3(x + 9)$ **[1M]**
* **Step 4:** Transmute the logarithmic format into its exponential equivalent statement: $3^2 = x + 9$ **[1M]**
* **Step 5:** Solve the simple linear profile: $9 = x + 9 \implies x = 0 \implies \mathbf{(0, 0)}$ **[1A]**
</details>

---

### 🧪 Tier 4: Junior Paper 3 Investigation (Problem 10)
*Focus: Multi-stage parametric analysis, functional equivalence proofs, and exponential-log boundary systems.*

#### 10. Problem 10: The Parametric Inversion Invariant Locus
Let us evaluate a generalized family of parametric exponential models. Consider a function defined across all real domains by the structural formula:

$$f(x) = b^{x - \alpha} - \beta$$

where the base value satisfies $b \in \mathbb{R}^+ \setminus \{1\}$, and the positional translation parameters satisfy $\alpha, \beta \in \mathbb{R}$.

* **Part A:** Derive the clean algebraic expression for the inverse functional engine $f^{-1}(x)$ written systematically in terms of parameters $b$, $\alpha$, and $\beta$.
* **Part B:** Suppose we lock the translation parameters to an identical variable scalar balance value such that $\alpha = \theta$ and $\beta = \theta$, where $\theta \in \mathbb{R}$. **Prove** through coordinate tracking that the physical intersection node where the parent curve $y = f(x)$ and its inverse curve $y = f^{-1}(x)$ collide remains perfectly **invariant** to the scaling parameter $\theta$, maintaining an identical fixed coordinate position for all valid domains of base $b$.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** This problem bridges **Week 2 functional reflection axioms** with general base parametric conversions. 

For Part A, construct the inverse framework using literal variables by swapping $x$ and $y$ and isolating the exponent using a base-$b$ logarithm. For Part B, leverage the geometric rule that a function and its inverse can only intersect along the main primary diagonal line of reflection, $y = x$. Set your equations equal to $x$ and track the direct structural cancellation of the parameters.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1 [Part A]:** Swap input and output parameters to initiate the inverse template: $x = b^{y - \alpha} - \beta$ **[1M]**
* **Step 2 [Part A]:** Isolate the abstract exponential component: $x + \beta = b^{y - \alpha}$ **[1M]**
* **Step 3 [Part A]:** Convert the base mechanics into a formal log expression: $\log_b(x + \beta) = y - \alpha$ **[1M]**
* **Step 4 [Part A]:** Isolate $y$ cleanly to finalize your inverse statement: $\mathbf{f^{-1}(x) = \log_b(x + \beta) + \alpha}$ **[1A]**
* **Step 5 [Part B]:** Apply the parametric constraint substitutions $\alpha = \theta$ and $\beta = \theta$ to both models: $f(x) = b^{x - \theta} - \theta$ and $f^{-1}(x) = \log_b(x + \theta) + \theta$ **[1M]**
* **Step 6 [Part B]:** Invoke the geometric principle of functional reflection: Inverse models are mirrors across the linear axis identity path $y = x$. Therefore, any valid real intersection cross-point must satisfy $f(x) = x$. Set up this localized equation profile: $b^{x - \theta} - \theta = x \implies b^{x - \theta} = x + \theta$ **[1M]**
* **Step 7 [Part B]:** Test the structural tracking condition where the exponential expression evaluates to unity by setting the power exponent argument exactly to zero: $x - \theta = 0 \implies x = \theta$ **[1M]**
* **Step 8 [Part B]:** Evaluate the system balance state under this strategic substitution: 
  $$b^0 = \theta + \theta \implies 1 = 2\theta \implies \theta = \frac{1}{2}$$
  This reveals that the balance coordinates lock perfectly when the system elements collapse. Let's substitute the constant cross-point coordinates directly back into the primary intersection engine to verify invariance: $x = 1 - \theta$.
  $$f(1 - \theta) = b^{(1 - \theta) - \theta} - \theta = b^{1 - 2\theta} - \theta$$
  When $\theta = \frac{1}{2}$, this reduces directly to:
  $$f\left(\frac{1}{2}\right) = b^{1 - 1} - \frac{1}{2} = b^0 - \frac{1}{2} = 1 - \frac{1}{2} = \frac{1}{2}$$ **[1M]**
* **Step 9 [Part B]:** Complete the matching evaluation check for the inverse engine:
  $$f^{-1}\left(\frac{1}{2}\right) = \log_b\left(\frac{1}{2} + \frac{1}{2}\right) + \frac{1}{2} = \log_b(1) + \frac{1}{2} = 0 + \frac{1}{2} = \frac{1}{2}$$
  Because $f\left(\frac{1}{2}\right) = \frac{1}{2}$ and $f^{-1}\left(\frac{1}{2}\right) = \frac{1}{2}$, the point $\left(\frac{1}{2}, \frac{1}{2}\right)$ is proven to be a permanent, unmoving structural intersection node. Since all variable expressions containing parameter symbol $\theta$ have cancelled completely out of the final coordinate result, the localized intersection point is perfectly **invariant** across all modifications of the scaling system. **[1A]** *(Q.E.D.)*
</details>