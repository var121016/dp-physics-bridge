---
title: "Day 7: Composite Functions & Domain Chaining"
description: "Mastering the mechanical substitution pathways and multi-layered domain restrictions required for advanced Analysis & Approaches Higher Level algebra."
---

## 💡 Core Strategy Blueprint
1. **The Composition Pipeline:** To evaluate $f(g(x))$, you treat the entire output of the inner function $g(x)$ as the direct raw input argument for the outer function $f(x)$.
2. **The Domain Chaining Rule:** The domain of the composite function $f(g(x))$ is **not** simply the domain of the final simplified expression. It is strictly constrained by a two-stage filter:
   * $x$ must be within the valid domain of the inner function $g(x)$.
   * The output value $g(x)$ must fit within the valid domain of the outer function $f(x)$.
3. **The Fraction-Clearing Trick:** When a composite function yields a complex rational expression, multiply both the entire numerator and denominator by the lowest common denominator (LCD) of the inner fractions to instantly normalize the expression into standard polynomial form.

---

## 📝 The 10-Problem Flight Path

### 🧱 Tier 1: Core Fluency (Non-Calculator Mechanics)

#### Problem 1
Given $f(x) = 3x - 5$ and $g(x) = x^2 + 2$, find an expression for the composite function $f(g(x))$.

<details>
<summary>💡 View Strategy Hint</summary>

Substitute the entire polynomial expression of $g(x)$ into every variable slot where $x$ appears within $f(x)$, then distribute and collect constants.
</details>

<details>
<summary>🔑 Expand Full Markscheme</summary>

* **Step 1:** Set up the functional substitution structure:
  $$f(g(x)) = 3\left(x^2 + 2\right) - 5$$
* **Step 2:** Distribute the scalar multiplier across the bracket:
  $$f(g(x)) = 3x^2 + 6 - 5$$
* **Step 3:** Combine individual integer constants:
  $$f(g(x)) = 3x^2 + 1$$

**Final Answer Bounds:** $3x^2 + 1$
</details>

---

#### Problem 2
For the functions $f(x) = \frac{2}{x}$ and $g(x) = x - 4$, construct an expression for $g(f(x))$ and state its isolated restriction.

<details>
<summary>💡 View Strategy Hint</summary>

Substitute the rational fraction expression $f(x)$ directly into the variable slot of the linear function $g(x)$, and isolate where division-by-zero failures occur.
</details>

<details>
<summary>🔑 Expand Full Markscheme</summary>

* **Step 1:** Form the structural replacement pathway:
  $$g(f(x)) = \left(\frac{2}{x}\right) - 4$$
* **Step 2:** Identify the domain restrictions of the inner system. Because $f(x) = \frac{2}{x}$ has $x$ in its denominator, the domain can never process $x = 0$.

**Final Answer Bounds:** $g(f(x)) = \frac{2}{x} - 4, \quad \{x \in \mathbb{R} \mid x \neq 0\}$
</details>

---

#### Problem 3
If $f(x) = \sqrt{x}$ and $g(x) = 2x + 1$, find the explicit composite expression $g(f(x))$.

<details>
<summary>💡 View Strategy Hint</summary>

Embed the radical tracking argument directly into the variable framework of the linear expression.
</details>

<details>
<summary>🔑 Expand Full Markscheme</summary>

* **Step 1:** Swap the variable input argument of $g(x)$ with the inner function:
  $$g(f(x)) = 2(\sqrt{x}) + 1$$
* **Step 2:** Simplify the algebraic notation boundaries:
  $$g(f(x)) = 2\sqrt{x} + 1$$

**Final Answer Bounds:** $2\sqrt{x} + 1$
</details>

---

#### Problem 4
Given $f(x) = e^x$ and $g(x) = 2x$, state the functional output form for $f(g(x))$.

<details>
<summary>💡 View Strategy Hint</summary>

Substitute the linear monomial $g(x)$ directly into the power coordinate index of the natural exponential function $f(x)$.
</details>

<details>
<summary>🔑 Expand Full Markscheme</summary>

* **Step 1:** Route the input variable mapping directly into the exponent block:
  $$f(g(x)) = e^{(2x)}$$
* **Step 2:** Express cleanly without unnecessary grouping markers:
  $$f(g(x)) = e^{2x}$$

**Final Answer Bounds:** $e^{2x}$
</details>

---

### 🔄 Tier 2: The Multi-Step Twist (DP1 Transitions)

#### Problem 5
Given the mapping profiles $f(x) = x^2 + 3$ and $g(x) = \sqrt{x - 1}$, find the simplified expression for $f(g(x))$ and state its true mathematical domain.

<details>
<summary>💡 View Strategy Hint</summary>

**Watch the Trap!** Even though squaring the radical yields a simplified expression that looks completely unrestricted, the inner function $\sqrt{x-1}$ cannot process input coordinates where the radicand falls below zero.
</details>

<details>
<summary>🔑 Expand Full Markscheme</summary>

* **Step 1:** Substitute the radical inner function directly into the quadratic frame:
  $$f(g(x)) = \left(\sqrt{x - 1}\right)^2 + 3$$
* **Step 2:** Evaluate the square of the radical root over its valid domain limits:
  $$f(g(x)) = (x - 1) + 3 = x + 2$$
* **Step 3:** Establish the domain filter chain. The inner component requires that the radicand must remain non-negative:
  $$x - 1 \geq 0 \implies x \geq 1$$

**Final Answer Bounds:** $f(g(x)) = x + 2, \quad \{x \in \mathbb{R} \mid x \geq 1\}$
</details>

---

#### Problem 6
For the rational functions $f(x) = \frac{1}{x - 2}$ and $g(x) = \frac{3}{x}$, find an expression for $f(g(x))$ and identify all domain exclusions.

<details>
<summary>💡 View Strategy Hint</summary>

Substitute $g(x)$ into $f(x)$, then clear the compound fractions. Remember to evaluate domain restrictions at *both* operational structural layers: where the inner function fails and where the final combined fraction fails.
</details>

<details>
<summary>🔑 Expand Full Markscheme</summary>

* **Step 1:** Track the initial composite fraction nesting layout:
  $$f(g(x)) = \frac{1}{\left(\frac{3}{x}\right) - 2}$$
* **Step 2:** Multiply both the numerator and denominator by $x$ to clear out the internal fraction:
  $$f(g(x)) = \frac{1 \cdot x}{\left(\frac{3}{x} - 2\right) \cdot x} = \frac{x}{3 - 2x}$$
* **Step 3:** Calculate individual failure coordinate points:
  * Inner function $g(x) = \frac{3}{x}$ excludes: $x = 0$
  * Final composite expression denominator excludes: $3 - 2x = 0 \implies x = \frac{3}{2}$

**Final Answer Bounds:** $f(g(x)) = \frac{x}{3 - 2x}, \quad \left\{x \in \mathbb{R} \mid x \neq 0, x \neq \frac{3}{2}\right\}$
</details>

---

#### Problem 7
Let $f(x) = \ln(x)$ and $g(x) = x^2 - 9$. Construct the composite expression $f(g(x))$ and state the resulting valid real domain.

<details>
<summary>💡 View Strategy Hint</summary>

Combine the functions, then remember that the mathematical argument tracking window inside a real natural logarithm is strictly bounded above zero ($g(x) > 0$).
</details>

<details>
<summary>🔑 Expand Full Markscheme</summary>

* **Step 1:** Construct the log-argument composite model wrapper:
  $$f(g(x)) = \ln\left(x^2 - 9\right)$$
* **Step 2:** Set up the strict logarithmic domain inequality constraint boundary:
  $$x^2 - 9 > 0 \implies (x - 3)(x + 3) > 0$$
* **Step 3:** Isolate the valid exterior solution intervals for this quadratic expression:
  $$x > 3 \quad \text{or} \quad x < -3$$

**Final Answer Bounds:** $f(g(x)) = \ln\left(x^2 - 9\right), \quad \{x \in \mathbb{R} \mid x > 3 \text{ or } x < -3\}$
</details>

---

#### Problem 8
If $f(x) = \sqrt{x + 4}$ and $g(x) = 3 - x^2$, determine the composite mapping $f(g(x))$ and find its continuous real domain bounds.

<details>
<summary>💡 View Strategy Hint</summary>

Substitute the quadratic function into the radical argument space, simplify the internal terms, and solve the remaining quadratic inequality to keep the radicand from dipping below zero.
</details>

<details>
<summary>🔑 Expand Full Markscheme</summary>

* **Step 1:** Map the quadratic trinomial profile inside the root matrix:
  $$f(g(x)) = \sqrt{\left(3 - x^2\right) + 4}$$
* **Step 2:** Simplify the internal polynomial constants:
  $$f(g(x)) = \sqrt{7 - x^2}$$
* **Step 3:** Set up the non-negative radicand constraint inequality:
  $$7 - x^2 \geq 0 \implies x^2 \leq 7$$
* **Step 4:** Extract the precise continuous real domain boundaries:
  $$-\sqrt{7} \leq x \leq \sqrt{7}$$

**Final Answer Bounds:** $f(g(x)) = \sqrt{7 - x^2}, \quad \{x \in \mathbb{R} \mid -\sqrt{7} \leq x \leq \sqrt{7}\}$
</details>

---

### 🔍 Tier 3: The IB Examiner's Edge (Elite AA HL Synthesis)

#### Problem 9
Let $f(x) = \frac{x + 2}{x - 1}$ and $g(x) = \frac{x}{x - 3}$. Find the compound operation expression $f(g(x))$ and simplify it into a single rational block form $\frac{Ax + B}{Cx + D}$.

<details>
<summary>💡 View Strategy Hint</summary>

Substitute the fraction $g(x)$ into both the numerator and denominator variable slots of $f(x)$, then clear out the complex fractional system by multiplying through by the internal LCD block, $(x - 3)$.
</details>

<details>
<summary>🔑 Expand Full Markscheme</summary>

* **Step 1:** Construct the initial nested structural division matrix:
  $$f(g(x)) = \frac{\left(\frac{x}{x - 3}\right) + 2}{\left(\frac{x}{x - 3}\right) - 1}$$
* **Step 2:** Multiply both the complete numerator block and denominator block by $(x - 3)$ to eliminate the internal denominators:
  $$f(g(x)) = \frac{\left[\frac{x}{x - 3} + 2\right](x - 3)}{\left[\frac{x}{x - 3} - 1\right](x - 3)}$$
* **Step 3:** Distribute and expand the terms carefully:
  $$f(g(x)) = \frac{x + 2(x - 3)}{x - 1(x - 3)} = \frac{x + 2x - 6}{x - x + 3}$$
* **Step 4:** Collect matching terms and simplify the final rational structure:
  $$f(g(x)) = \frac{3x - 6}{3} = \frac{3(x - 2)}{3} = x - 2$$

**Final Answer Bounds:** $x - 2$
</details>

---

#### Problem 10
State the exact composite expression $g(f(x))$ and its complete, uncompromised domain using formal set notation for:  
$$f(x) = \frac{1}{x} \quad \text{and} \quad g(x) = \frac{\sqrt{x + 5}}{x - 2}$$

<details>
<summary>💡 View Strategy Hint</summary>

Trace all domain exclusions and constraints simultaneously: check where the inner function $f(x)$ is undefined, where the outer radical condition $\geq 0$ is violated, and where the compound denominator forces a division-by-zero anomaly.
</details>

<details>
<summary>🔑 Expand Full Markscheme</summary>

* **Step 1:** Construct the unsimplified composite structural network equation:
  $$g(f(x)) = \frac{\sqrt{\left(\frac{1}{x}\right) + 5}}{\left(\frac{1}{x}\right) - 2}$$
* **Step 2:** Isolate the structural domain boundary criteria of the inner function component:
  $$\text{Inner Exclusion: } x \neq 0$$
* **Step 3:** Isolate the radical radicand non-negative constraint profile:
  $$\frac{1}{x} + 5 \geq 0 \implies \frac{1 + 5x}{x} \geq 0$$
  Using a critical sign-chart test matrix around boundary roots $x = -\frac{1}{5}$ and $x = 0$, this fractional inequality holds true if and only if:
  $$x \leq -\frac{1}{5} \quad \text{or} \quad x > 0$$
* **Step 4:** Isolate the final compound outer denominator division-by-zero boundary:
  $$\frac{1}{x} - 2 \neq 0 \implies \frac{1}{x} \neq 2 \implies x \neq \frac{1}{2}$$
* **Step 5:** Intersect all three structural constraint maps onto a single unified system path:
  The region must satisfy ($x \leq -\frac{1}{5} \cup x > 0$) while explicitly removing the coordinate point hole at $x = \frac{1}{2}$ (the original $x \neq 0$ constraint is already naturally handled by the strict inequality split around the zero boundary).

**Final Answer Bounds:** $$g(f(x)) = \frac{\sqrt{\frac{1}{x} + 5}}{\frac{1}{x} - 2}, \quad \left\{x \in \mathbb{R} \ \middle|\ x \leq -\frac{1}{5} \text{ or } x > 0, \ x \neq \frac{1}{2}\right\}$$
</details>