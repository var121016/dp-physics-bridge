---
title: "Day 2: Advanced Quadratics & The Discriminant"
description: 'The discriminant ($\Delta = b^2 - 4ac$) is heavily examined in IB across functions, calculus, and vectors.'
---

## 💡 Core Strategy Blueprint
1. **The Discriminant ($\Delta$):** Determines the nature of roots for $ax^2 + bx + c = 0$:
   * $\Delta > 0$: Two distinct real roots.
   * $\Delta = 0$: Two equal real roots (one repeated root / tangent condition).
   * $\Delta < 0$: No real roots (two distinct complex roots).
2. **Vertex Form:** For a parabola in vertex form $y = a(x-h)^2 + k$, the turning point is exactly $(h, k)$.
3. **Vieta's Formulas:** For roots $\alpha$ and $\beta$ of a quadratic equation, $\alpha + \beta = -\frac{b}{a}$ and $\alpha\beta = \frac{c}{a}$. Use the identity $\alpha^2 + \beta^2 = (\alpha + \beta)^2 - 2\alpha\beta$ to analyze symmetric root properties.

---

## 📝 The 10 Problems

### 🧱 Tier 1: Core Tool Check

#### Problem 1
Find the discriminant of the quadratic equation $3x^2 - 5x + 4 = 0$ and state the nature of its roots.

<details>
<summary>💡 View Strategy Hint</summary>

Identify coefficients $a=3$, $b=-5$, and $c=4$, then substitute them into the discriminant formula $\Delta = b^2 - 4ac$.
</details>

<details>
<summary>🔑 Expand Full Markscheme</summary>

* **Step 1:** Extract coefficients and substitute into the formula:
  $$\Delta = (-5)^2 - 4(3)(4)$$
* **Step 2:** Compute the final integer value:
  $$\Delta = 25 - 48 = -23$$
* **Step 3:** State the nature of the roots based on the sign of $\Delta$:
  Since $\Delta < 0$, the equation has no real roots (two complex roots).

**Final Answer Bounds:** $\Delta = -23$ (No real roots)
</details>

---

#### Problem 2
Solve by completing the square:  
$$2x^2 + 8x - 5 = 0$$

<details>
<summary>💡 View Strategy Hint</summary>

Factor out the leading coefficient $2$ from the variable terms first, then complete the square inside the bracket.
</details>

<details>
<summary>🔑 Expand Full Markscheme</summary>

* **Step 1:** Factor out the leading parameter:
  $$2(x^2 + 4x) - 5 = 0$$
* **Step 2:** Complete the square inside the bracket:
  $$2\left[(x + 2)^2 - 4\right] - 5 = 0$$
* **Step 3:** Expand and isolate the squared term:
  $$2(x + 2)^2 - 8 - 5 = 0 \implies 2(x + 2)^2 = 13$$
* **Step 4:** Solve for $x$:
  $$(x + 2)^2 = \frac{13}{2} \implies x = -2 \pm \sqrt{\frac{13}{2}}$$

**Final Answer Bounds:** $x = -2 \pm \sqrt{\frac{13}{2}}$
</details>

---

#### Problem 3
Find the coordinates of the vertex (turning point) of the parabola:  
$$y = x^2 - 6x + 11$$

<details>
<summary>💡 View Strategy Hint</summary>

Convert the quadratic into vertex form $y = (x-h)^2 + k$ by completing the square on the $x$-terms.
</details>

<details>
<summary>🔑 Expand Full Markscheme</summary>

* **Step 1:** Complete the square on the variable components:
  $$y = (x - 3)^2 - 9 + 11$$
* **Step 2:** Simplify into final vertex form:
  $$y = (x - 3)^2 + 2$$
* **Step 3:** Identify the coordinate vertex pair $(h, k)$:
  The vertex is at $(3, 2)$.

**Final Answer Bounds:** $(3, 2)$
</details>

---

#### Problem 4
Determine the values of $x$ for which:  
$$x^2 - 4x - 12 > 0$$

<details>
<summary>💡 View Strategy Hint</summary>

Factor the quadratic expression to locate the critical values, then evaluate the outside regions of the resulting positive parabola.
</details>

<details>
<summary>🔑 Expand Full Markscheme</summary>

* **Step 1:** Factorize the trinomial expression:
  $$(x - 6)(x + 2) > 0$$
* **Step 2:** Identify the critical values:
  $$x = 6 \quad \text{and} \quad x = -2$$
* **Step 3:** Analyze the graph geometry. Since the leading coefficient is positive, the parabola opens upward, meaning the expression is strictly greater than zero on the outside regions:
  $$x < -2 \quad \text{or} \quad x > 6$$

**Final Answer Bounds:** $x < -2$ or $x > 6$
</details>

---

### 🔄 Tier 2: The Multi-Step Twist

#### Problem 5
Find the range of values of $k$ for which the equation $kx^2 + 6x + 3 = 0$ has two distinct real roots.

<details>
<summary>💡 View Strategy Hint</summary>

Set the discriminant $\Delta > 0$ for two distinct roots, and remember that $k \neq 0$ for the equation to remain quadratic.
</details>

<details>
<summary>🔑 Expand Full Markscheme</summary>

* **Step 1:** Calculate the discriminant equation:
  $$\Delta = 6^2 - 4(k)(3) = 36 - 12k$$
* **Step 2:** Apply the distinct root inequality condition ($\Delta > 0$):
  $$36 - 12k > 0 \implies 36 > 12k \implies k < 3$$
* **Step 3:** Apply the structural constraint ($k \neq 0$) required to maintain a valid quadratic:
  $$k < 3 \quad \text{and} \quad k \neq 0$$

**Final Answer Bounds:** $k < 3$ and $k \neq 0$
</details>

---

#### Problem 6
A curve has the equation $y = x^2 - 2x + 5$. A line has the equation $y = 2x + k$. Find the value of $k$ for which the line is a tangent to the curve.

<details>
<summary>💡 View Strategy Hint</summary>

Equate the two expressions to form a single quadratic equation, then apply the tangent condition $\Delta = 0$.
</details>

<details>
<summary>🔑 Expand Full Markscheme</summary>

* **Step 1:** Equate the expressions and gather terms onto one side:
  $$x^2 - 2x + 5 = 2x + k \implies x^2 - 4x + (5 - k) = 0$$
* **Step 2:** Compute the discriminant of this tracking system:
  $$\Delta = (-4)^2 - 4(1)(5 - k) = 16 - 20 + 4k = -4 + 4k$$
* **Step 3:** Set $\Delta = 0$ to secure the single repeated touchpoint condition:
  $$-4 + 4k = 0 \implies 4k = 4 \implies k = 1$$

**Final Answer Bounds:** $k = 1$
</details>

---

#### Problem 7
Solve the disguised quadratic equation:  
$$x^4 - 13x^2 + 36 = 0$$

<details>
<summary>💡 View Strategy Hint</summary>

Use a substitution parameter, letting $u = x^2$, to transform the quartic expression into a factorable quadratic trinomial.
</details>

<details>
<summary>🔑 Expand Full Markscheme</summary>

* **Step 1:** Introduce the substitution variable path letting $u = x^2$:
  $$u^2 - 13u + 36 = 0$$
* **Step 2:** Factor the quadratic expression:
  $$(u - 9)(u - 4) = 0 \implies u = 9 \quad \text{or} \quad u = 4$$
* **Step 3:** Re-substitute to solve for real linear paths ($x^2 = u$):
  * $x^2 = 9 \implies x = \pm 3$
  * $x^2 = 4 \implies x = \pm 2$

**Final Answer Bounds:** $x = \pm 2, x = \pm 3$
</details>

---

### 🔍 Tier 3: The "Show That..."

#### Problem 8
Show that the quadratic expression $x^2 - 2kx + (k^2 + 4)$ is always positive for all real values of $x$ and $k$.

<details>
<summary>💡 View Strategy Hint</summary>

Compute the discriminant of the expression with respect to $x$ and analyze its sign alongside the leading coefficient.
</details>

<details>
<summary>🔑 Expand Full Markscheme</summary>

* **Step 1:** Set up the discriminant expression targeting $x$:
  $$\Delta = (-2k)^2 - 4(1)(k^2 + 4)$$
* **Step 2:** Expand and simplify the expression:
  $$\Delta = 4k^2 - 4k^2 - 16 = -16$$
* **Step 3:** Interpret the geometric bounds:
  Since the discriminant is strictly negative ($\Delta = -16 < 0$) and the leading coefficient ($a = 1$) is positive, the parabola sits entirely above the $x$-axis and is always positive for all real numbers.

**The statement has been shown completely.**
</details>

---

#### Problem 9
The roots of $2x^2 - 7x + 3 = 0$ are $\alpha$ and $\beta$. Without calculating $\alpha$ and $\beta$ individually, show that $\alpha^2 + \beta^2 = \frac{37}{4}$.

<details>
<summary>💡 View Strategy Hint</summary>

Find the sum ($\alpha + \beta$) and product ($\alpha\beta$) using Vieta's formulas, then substitute them into the identity $\alpha^2 + \beta^2 = (\alpha + \beta)^2 - 2\alpha\beta$.
</details>

<details>
<summary>🔑 Expand Full Markscheme</summary>

* **Step 1:** Apply Vieta's root equations to extract system sums and products:
  $$\alpha + \beta = -\frac{-7}{2} = \frac{7}{2} \quad \text{and} \quad \alpha\beta = \frac{3}{2}$$
* **Step 2:** Set up the target identity structure:
  $$\alpha^2 + \beta^2 = (\alpha + \beta)^2 - 2\alpha\beta$$
* **Step 3:** Substitute the values and evaluate components cleanly:
  $$\alpha^2 + \beta^2 = \left(\frac{7}{2}\right)^2 - 2\left(\frac{3}{2}\right) = \frac{49}{4} - 3$$
* **Step 4:** Standardize fraction structures to complete the subtraction:
  $$\frac{49}{4} - \frac{12}{4} = \frac{37}{4}$$

**The statement has been shown completely.**
</details>

---

### 📊 Tier 4: Junior Paper 3 Investigation

#### Problem 10: The Golden Ratio Quadratic
Suppose a rectangle with width 1 and length $x$ (where $x > 1$) has the following unique property: if you cut out a $1 \times 1$ square from it, the remaining smaller rectangle has the exact same proportions as the original large rectangle.

**(a)** Write an expression for the length and width of the remaining smaller rectangle.  
**(b)** Set up a ratio equation comparing $\frac{\text{width}}{\text{length}}$ of the large rectangle to the small rectangle.  
**(c)** Show that this relationship leads directly to the quadratic equation $x^2 - x - 1 = 0$.  
**(d)** Find the exact positive value of $x$. This value is known as the Golden Ratio ($\phi$).

<details>
<summary>💡 View Strategy Hint</summary>

Draw a sketch of the transformation. Cutting a width of 1 from a length of $x$ means the remaining segment must measure exactly $x-1$.
</details>

<details>
<summary>🔑 Expand Full Markscheme</summary>

* **(a)** Express the tracking variables of the smaller layout:  
  Small rectangle width $= x - 1$, small rectangle length $= 1$.
* **(b)** Set up the dimensional proportion layout matrix:  
  $$\frac{1}{x} = \frac{x - 1}{1}$$
* **(c)** Execute cross-multiplication across the fields to isolate variables:  
  $$1 = x(x - 1) \implies 1 = x^2 - x \implies x^2 - x - 1 = 0$$
* **(d)** Solve the expression using the general quadratic formula:  
  $$x = \frac{-(-1) \pm \sqrt{(-1)^2 - 4(1)(-1)}}{2(1)} = \frac{1 \pm \sqrt{1 + 4}}{2} = \frac{1 \pm \sqrt{5}}{2}$$
  Since our tracking parameters dictate that $x > 1$, we must reject the negative root option.

**Final Answer Bounds:** $x = \frac{1 + \sqrt{5}}{2}$
</details>