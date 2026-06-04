---
title: "Day 9: Rational Functions (Graphing Reciprocal & Linear-Fractional Structures)"
description: "Mastering asymptotic behaviors, coordinate mapping, and structural properties of linear-fractional rational equations."
---

## 💡 Core Strategy Blueprint
1. **The Asymptote Extraction Framework:** For any linear-fractional rational function of the form $f(x) = \frac{ax + b}{cx + d}$:
   * **Vertical Asymptote (VA):** Set the denominator to zero and solve for $x$. This identifies the input failure boundary where the function shoots toward $\pm\infty$:
     $$cx + d = 0 \implies x = -\frac{d}{c}$$
   * **Horizontal Asymptote (HA):** Analyze the limit behavior as $x \to \pm\infty$. The lower-order constants become negligible, leaving the ratio of the leading coefficients:
     $$y = \frac{a}{c}$$
2. **Axis Intersection Tracking:** Locate the critical anchor points to position your hyperbolic branches:
   * **$y$-intercept:** Evaluate the function at $x = 0$, yielding the constant ratio $\left(0, \frac{b}{d}\right)$.
   * **$x$-intercept:** Set the numerator equal to zero and solve for $x$, yielding $\left(-\frac{b}{a}, 0\right)$.
3. **Hyperbolic Sign Quadrants:** If a rational function is written in the transformed reciprocal format $f(x) = \frac{A}{x - h} + k$:
   * If $A > 0$, the branches sit in the upper-right and lower-left localized quadrants relative to the asymptotic intersection point $(h, k)$.
   * If $A < 0$, the branches are reflected into the upper-left and lower-right quadrants.

---

## 📝 The 10-Problem Flight Path

### 🧱 Tier 1: Core Fluency (Non-Calculator Mechanics)

#### Problem 1
State the equations of the vertical and horizontal asymptotes for the baseline reciprocal function:  
$$f(x) = \frac{3}{x - 4} + 2$$

<details>
<summary>💡 View Strategy Hint</summary>

Identify the shift transformations relative to the parent function $y = \frac{1}{x}$. The denominator shifts the vertical boundary, while the constant hanging outside dictates the vertical shift.
</details>

<details>
<summary>🔑 Expand Full Markscheme</summary>

* **Step 1:** Locate the vertical asymptote by finding where the expression is undefined:
  $$x - 4 = 0 \implies x = 4$$
* **Step 2:** Locate the horizontal asymptote by observing the vertical translation shift ($k$) or evaluating the limit as $x \to \pm\infty$:
  As $x \to \pm\infty$, $\frac{3}{x-4} \to 0$, leaving $y = 2$.

**Final Answer Bounds:** Vertical Asymptote: $x = 4$; Horizontal Asymptote: $y = 2$
</details>

---

#### Problem 2
Find the exact coordinates of the $x$-intercept and $y$-intercept for the rational structure:  
$$g(x) = \frac{2x - 6}{x + 1}$$

<details>
<summary>💡 View Strategy Hint</summary>

For the $y$-intercept, compute $g(0)$. For the $x$-intercept, find where the numerator equals zero, as a fraction can only equal zero if its numerator is zero.
</details>

<details>
<summary>🔑 Expand Full Markscheme</summary>

* **Step 1:** Determine the $y$-intercept by substituting $x = 0$:
  $$g(0) = \frac{2(0) - 6}{0 + 1} = \frac{-6}{1} = -6 \implies (0, -6)$$
* **Step 2:** Determine the $x$-intercept by setting the numerator to zero:
  $$2x - 6 = 0 \implies 2x = 6 \implies x = 3 \implies (3, 0)$$

**Final Answer Bounds:** $x$-intercept: $(3, 0)$; $y$-intercept: $(0, -6)$
</details>

---

#### Problem 3
State the equations of both asymptotes for the linear-fractional rational function:  
$$h(x) = \frac{4x + 1}{2x - 5}$$

<details>
<summary>💡 View Strategy Hint</summary>

Find the vertical asymptote by setting the denominator to zero. Find the horizontal asymptote by taking the ratio of the leading coefficients of $x$ in the numerator and denominator.
</details>

<details>
<summary>🔑 Expand Full Markscheme</summary>

* **Step 1:** Find the vertical asymptote from the denominator constraint:
  $$2x - 5 = 0 \implies 2x = 5 \implies x = \frac{5}{2}$$
* **Step 2:** Find the horizontal asymptote by taking the ratio of the leading coefficients ($\frac{a}{c}$):
  $$y = \frac{4}{2} \implies y = 2$$

**Final Answer Bounds:** Vertical Asymptote: $x = \frac{5}{2}$; Horizontal Asymptote: $y = 2$
</details>

---

#### Problem 4
State the complete domain and range of the function $f(x) = \frac{-1}{x + 3} - 7$ using formal set notation.

<details>
<summary>💡 View Strategy Hint</summary>

The domain excludes the vertical asymptote position, and the range excludes the horizontal asymptote value. Extract these two key lines first.
</details>

<details>
<summary>🔑 Expand Full Markscheme</summary>

* **Step 1:** Extract the vertical asymptote exclusion:
  $$x + 3 = 0 \implies x = -3 \implies \text{Domain} = \{x \in \mathbb{R} \mid x \neq -3\}$$
* **Step 2:** Extract the horizontal asymptote exclusion based on the vertical translation line:
  $$\text{Asymptote line is } y = -7 \implies \text{Range} = \{y \in \mathbb{R} \mid y \neq -7\}$$

**Final Answer Bounds:** Domain: $\{x \in \mathbb{R} \mid x \neq -3\}$; Range: $\{y \in \mathbb{R} \mid y \neq -7\}$
</details>

---

### 🔄 Tier 2: The Multi-Step Twist (DP1 Transitions)

#### Problem 5
Using algebraic long division or matching adjustments, rewrite the linear-fractional expression $f(x) = \frac{3x + 7}{x + 1}$ in the form $f(x) = \frac{A}{x - h} + k$.

<details>
<summary>💡 View Strategy Hint</summary>

Manipulate the numerator so it contains a multiple of the denominator expression $(x + 1)$. Split the fraction to isolate the constant vertical shift $k$.
</details>

<details>
<summary>🔑 Expand Full Markscheme</summary>

* **Step 1:** Restructure the numerator to explicitly highlight the linear factor block $(x + 1)$:
  $$3x + 7 = 3(x + 1) - 3 + 7 = 3(x + 1) + 4$$
* **Step 2:** Split the combined fraction over the shared denominator:
  $$f(x) = \frac{3(x + 1) + 4}{x + 1} = \frac{3(x + 1)}{x + 1} + \frac{4}{x + 1}$$
* **Step 3:** Cancel the common factor block in the first term:
  $$f(x) = 3 + \frac{4}{x + 1} \implies f(x) = \frac{4}{x + 1} + 3$$

**Final Answer Bounds:** $f(x) = \frac{4}{x + 1} + 3$
</details>

---

#### Problem 6
A rational function is defined by $g(x) = \frac{ax + 8}{2x + b}$. Given that it has a vertical asymptote at $x = -3$ and a horizontal asymptote at $y = 1$, determine the exact values of the constants $a$ and $b$.

<details>
<summary>💡 View Strategy Hint</summary>

Use the horizontal asymptote definition ($\frac{a}{c}$) to solve for the numerator leading coefficient $a$. Then, use the vertical asymptote parameter condition to solve for the denominator constant $b$.
</details>

<details>
<summary>🔑 Expand Full Markscheme</summary>

* **Step 1:** Set up the horizontal asymptote condition using the leading coefficient ratio:
  $$\text{HA line is } y = \frac{a}{2} \implies \frac{a}{2} = 1 \implies a = 2$$
* **Step 2:** Use the vertical asymptote condition ($x = -3$) to isolate the denominator's zero boundary:
  $$2(-3) + b = 0 \implies -6 + b = 0 \implies b = 6$$

**Final Answer Bounds:** $a = 2, \quad b = 6$
</details>

---

#### Problem 7
Sketch the graph of $f(x) = \frac{2x - 4}{x - 3}$. Clearly mark the asymptotes, the intercepts with both axes, and state the quadrant configuration of the curves.

<details>
<summary>💡 View Strategy Hint</summary>

Extract the vertical asymptote ($x=3$), the horizontal asymptote ($y=2$), the $y$-intercept, and the $x$-intercept. Use these anchor landmarks to sketch the hyperbolic branches.
</details>

<details>
<summary>🔑 Expand Full Markscheme</summary>

* **Step 1:** Find the structural asymptotic parameters:
  * Vertical Asymptote: $x - 3 = 0 \implies x = 3$
  * Horizontal Asymptote: Ratio of leading coefficients $\frac{2}{1} \implies y = 2$
* **Step 2:** Find the intersections with the axes:
  * $y$-intercept ($x=0$): $f(0) = \frac{2(0) - 4}{0 - 3} = \frac{-4}{-3} = \frac{4}{3} \implies \left(0, \frac{4}{3}\right)$
  * $x$-intercept ($y=0$): $2x - 4 = 0 \implies x = 2 \implies (2, 0)$
* **Step 3:** Perform form transformation to determine quadrant layout:
  $$f(x) = \frac{2(x - 3) + 6 - 4}{x - 3} = \frac{2(x - 3) + 2}{x - 3} = \frac{2}{x - 3} + 2$$
  Since the numerator modifier is positive ($+2$), the hyperbolic curves sit in the upper-right and lower-left zones relative to the cross-center at $(3,2)$.

**Final Answer Bounds:** Graph marked with asymptotes $x=3, y=2$, intercepts at $(2,0)$ and $\left(0, \frac{4}{3}\right)$.
</details>

---

#### Problem 8
Determine the exact domain range constraints for which the curve $f(x) = \frac{4}{x - 2}$ sits strictly below the horizontal line $y = 2$.

<details>
<summary>💡 View Strategy Hint</summary>

Set up the rational inequality $\frac{4}{x - 2} < 2$. Move the 2 to the left side, combine into a single fraction, and analyze the resulting sign zones.
</details>

<details>
<summary>🔑 Expand Full Markscheme</summary>

* **Step 1:** State the active mathematical inequality:
  $$\frac{4}{x - 2} < 2$$
* **Step 2:** Collect terms on the left side and establish a common denominator:
  $$\frac{4}{x - 2} - 2 < 0 \implies \frac{4 - 2(x - 2)}{x - 2} < 0 \implies \frac{4 - 2x + 4}{x - 2} < 0 \implies \frac{8 - 2x}{x - 2} < 0$$
* **Step 3:** Identify the critical boundary roots:
  * Numerator zero: $8 - 2x = 0 \implies x = 4$
  * Denominator boundary: $x - 2 = 0 \implies x = 2$
* **Step 4:** Analyze intervals using a sign chart:
  * Zone A ($x < 2$): $\frac{\text{Positive}}{\text{Negative}} = \text{Negative } (< 0)$ $\to$ **Valid**
  * Zone B ($2 < x < 4$): $\frac{\text{Positive}}{\text{Positive}} = \text{Positive } (> 0)$ $\to$ **Invalid**
  * Zone C ($x > 4$): $\frac{\text{Negative}}{\text{Positive}} = \text{Negative } (< 0)$ $\to$ **Valid**

**Final Answer Bounds:** $x < 2 \quad \cup \quad x > 4$
</details>

---

### 🔍 Tier 3: The IB Examiner's Edge (Elite AA HL Synthesis)

#### Problem 9
Let $f(x) = \frac{x + 2}{x - 1}$. Find the inverse function expression $f^{-1}(x)$, and show that the geometric asymptotes of $f^{-1}(x)$ are the direct reflections of the asymptotes of $f(x)$ across the line $y = x$.

<details>
<summary>💡 View Strategy Hint</summary>

Find the asymptotes of $f(x)$. Then determine the inverse rule $f^{-1}(x)$ by interchanging $x$ and $y$, and extract its asymptotes to verify the reflection property.
</details>

<details>
<summary>🔑 Expand Full Markscheme</summary>

* **Step 1:** Identify original asymptotes for $f(x)$:
  * Vertical Asymptote: $x = 1$
  * Horizontal Asymptote: $y = 1$
* **Step 2:** Formulate the algebraic inverse tracking equation:
  $$x = \frac{y + 2}{y - 1} \implies x(y - 1) = y + 2 \implies xy - x = y + 2$$
* **Step 3:** Group the $y$ variables and isolate:
  $$xy - y = x + 2 \implies y(x - 1) = x + 2 \implies f^{-1}(x) = \frac{x + 2}{x - 1}$$
* **Step 4:** Extract the asymptotes of $f^{-1}(x)$:
  * Vertical Asymptote: $x = 1$
  * Horizontal Asymptote: $y = 1$
* **Step 5:** Verify the reflection logic. Swapping $x$ and $y$ parameters transforms the original vertical asymptote $x = 1$ into a horizontal line $y = 1$, and the original horizontal asymptote $y = 1$ into a vertical line $x = 1$. This matches the geometric definition of a reflection across the identity line $y = x$.

**The statement has been shown completely.**
</details>

---

#### Problem 10
Consider the rational structure $f(x) = \frac{a x + b}{c x + d}$. Prove using formal limit notation that as $x$ approaches positive or negative infinity ($\lim_{x \to \pm\infty} f(x)$), the output value converges exactly to the horizontal asymptote line $y = \frac{a}{c}$.

<details>
<summary>💡 View Strategy Hint</summary>

Divide every single term in both the numerator and the denominator by $x$. Then evaluate the limit as $x \to \pm\infty$ by utilizing the reciprocal behavior rule where $\frac{1}{x} \to 0$.
</details>

<details>
<summary>🔑 Expand Full Markscheme</summary>

* **Step 1:** Write out the formal limit evaluation expression:
  $$\lim_{x \to \pm\infty} \frac{ax + b}{cx + d}$$
* **Step 2:** Divide all components inside the rational expression by the highest power of $x$ present in the denominator ($x^1$):
  $$\lim_{x \to \pm\infty} \frac{\frac{ax}{x} + \frac{b}{x}}{\frac{cx}{x} + \frac{d}{x}} = \lim_{x \to \pm\infty} \frac{a + \frac{b}{x}}{c + \frac{d}{x}}$$
* **Step 3:** Apply core limit laws. As $x$ grows infinitely large in either the positive or negative direction, the fractional reciprocal terms diminish to zero:
  $$\lim_{x \to \pm\infty} \frac{b}{x} = 0 \quad \text{and} \quad \lim_{x \to \pm\infty} \frac{d}{x} = 0$$
* **Step 4:** Substitute these values back into the expression to isolate the remaining constant terms:
  $$\frac{a + 0}{c + 0} = \frac{a}{c}$$

Therefore, $\lim_{x \to \pm\infty} f(x) = \frac{a}{c}$, confirming that the function converges exactly to the horizontal line $y = \frac{a}{c}$.

**The statement has been shown completely.**
</details>