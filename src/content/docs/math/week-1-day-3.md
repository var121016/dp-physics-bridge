---
title: "Day 3: Simultaneous Non-Linear Systems & Substitutions"
description: 'IB problems often embed systems of linear and non-linear equations within vectors, circles, and optimization tasks.'
---

## 💡 Core Strategy Blueprint
1. **Substitution Engine:** Isolate a single linear variable in one equation and substitute it directly into the non-linear equation to reduce the system variables.
2. **Hidden Quadratics via Substitution:** Recognize exponential patterns like $a^{2x} = (a^x)^2$ and apply an analytical variable substitution (e.g., let $u = a^x$) to form factorable trinomial expressions.
3. **The AM-GM Inequality:** For any positive real numbers $a$ and $b$:
   $$\frac{a + b}{2} \geq \sqrt{ab}$$
   Equality holds if and only if $a = b$. This serves as an incredibly powerful non-calculus tool for finding absolute minimum values.

---

## 📝 The 10 Problems

### 🧱 Tier 1: Core Tool Check

#### Problem 1
Solve the linear system:  
$$\begin{cases} 3x - 2y = 13 \\ 2x + 5y = -4 \end{cases}$$

<details>
<summary>💡 View Strategy Hint</summary>

Multiply the first equation by 5 and the second equation by 2 to align the $y$-coefficients for easy elimination.
</details>

<details>
<summary>🔑 Expand Full Markscheme</summary>

* **Step 1:** Multiply out matching coefficient structures:
  $$15x - 10y = 65$$
  $$4x + 10y = -8$$
* **Step 2:** Add the two linear simultaneous tracks together to eliminate $y$:
  $$19x = 57 \implies x = 3$$
* **Step 3:** Substitute $x = 3$ back into the first equation to solve for $y$:
  $$3(3) - 2y = 13 \implies 9 - 2y = 13 \implies -2y = 4 \implies y = -2$$

**Final Answer Bounds:** $(3, -2)$
</details>

---

#### Problem 2
Solve the non-linear system where a line meets a circle:  
$$\begin{cases} y = x + 1 \\ x^2 + y^2 = 25 \end{cases}$$

<details>
<summary>💡 View Strategy Hint</summary>

Substitute the linear expression for $y$ directly into the second quadratic equation, expand the brackets carefully, and solve the remaining trinomial.
</details>

<details>
<summary>🔑 Expand Full Markscheme</summary>

* **Step 1:** Substitute $y = x + 1$ into the circle equation:
  $$x^2 + (x + 1)^2 = 25$$
* **Step 2:** Expand brackets and collect terms onto the left side:
  $$x^2 + x^2 + 2x + 1 = 25 \implies 2x^2 + 2x - 24 = 0$$
* **Step 3:** Divide by 2 and factor the simplified quadratic:
  $$x^2 + x - 12 = 0 \implies (x + 4)(x - 3) = 0 \implies x = 3 \quad \text{or} \quad x = -4$$
* **Step 4:** Back-substitute into the linear equation to solve for the corresponding $y$-coordinates:
  * If $x = 3$: $y = 3 + 1 = 4$
  * If $x = -4$: $y = -4 + 1 = -3$

**Final Answer Bounds:** $(3, 4)$ and $(-4, -3)$
</details>

---

#### Problem 3
Rearrange the formula to make $x$ the subject:  
$$y = \frac{x - 3}{2x + 1}$$

<details>
<summary>💡 View Strategy Hint</summary>

Cross-multiply by the denominator to clear the fraction, distribute $y$, collect all terms containing $x$ onto one side, and factor out $x$.
</details>

<details>
<summary>🔑 Expand Full Markscheme</summary>

* **Step 1:** Cross-multiply by the denominator block:
  $$y(2x + 1) = x - 3 \implies 2xy + y = x - 3$$
* **Step 2:** Group all terms containing $x$ onto the left side and constant parameters on the right side:
  $$2xy - x = -3 - y \implies x(2y - 1) = -(3 + y)$$
* **Step 3:** Divide out the factored coefficient bracket to isolate $x$ cleanly:
  $$x = \frac{-(3 + y)}{2y - 1} = \frac{3 + y}{1 - 2y}$$

**Final Answer Bounds:** $x = \frac{3 + y}{1 - 2y}$
</details>

---

#### Problem 4
Find the points of intersection between the line $y = 2x$ and the curve $y = \frac{8}{x}$.

<details>
<summary>💡 View Strategy Hint</summary>

Equate the line and the curve expressions, cross-multiply by $x$ to create a simple quadratic equation, and solve for $x$.
</details>

<details>
<summary>🔑 Expand Full Markscheme</summary>

* **Step 1:** Equate the equations:
  $$2x = \frac{8}{x}$$
* **Step 2:** Clear the denominator fraction:
  $$2x^2 = 8 \implies x^2 = 4 \implies x = \pm 2$$
* **Step 3:** Substitute back into the linear expression to evaluate $y$:
  * If $x = 2$: $y = 2(2) = 4$
  * If $x = -2$: $y = 2(-2) = -4$

**Final Answer Bounds:** $(2, 4)$ and $(-2, -4)$
</details>

---

### 🔄 Tier 2: The Multi-Step Twist

#### Problem 5
Solve for $x$:  
$$3^{2x} - 10(3^x) + 9 = 0$$

<details>
<summary>💡 View Strategy Hint</summary>

Recognize that $3^{2x} = (3^x)^2$. Substitute $u = 3^x$ to transform the exponential expression into a standard factorable quadratic trinomial.
</details>

<details>
<summary>🔑 Expand Full Markscheme</summary>

* **Step 1:** Apply substitution $u = 3^x$:
  $$u^2 - 10u + 9 = 0$$
* **Step 2:** Factor the trinomial expression:
  $$(u - 9)(u - 1) = 0 \implies u = 9 \quad \text{or} \quad u = 1$$
* **Step 3:** Back-substitute to isolate variable paths for $x$:
  * $3^x = 9 \implies 3^x = 3^2 \implies x = 2$
  * $3^x = 1 \implies 3^x = 3^0 \implies x = 0$

**Final Answer Bounds:** $x = 0, x = 2$
</details>

---

#### Problem 6
Solve the system of equations for positive real values of $x$ and $y$:  
$$\begin{cases} xy = 12 \\ x^2 - y^2 = 7 \end{cases}$$

<details>
<summary>💡 View Strategy Hint</summary>

Isolate $y = \frac{12}{x}$ from the first equation, substitute it into the second equation, and multiply by $x^2$ to create a disguised quadratic form.
</details>

<details>
<summary>🔑 Expand Full Markscheme</summary>

* **Step 1:** Isolate $y$ and substitute into the second tracking formula:
  $$x^2 - \left(\frac{12}{x}\right)^2 = 7 \implies x^2 - \frac{144}{x^2} = 7$$
* **Step 2:** Multiply through by $x^2$ to clear denominators:
  $$x^4 - 7x^2 - 144 = 0$$
* **Step 3:** Apply substitution $u = x^2$ and factor:
  $$u^2 - 7u - 144 = 0 \implies (u - 16)(u + 9) = 0 \implies u = 16 \quad \text{or} \quad u = -9$$
* **Step 4:** Solve for positive real $x$ values ($u = x^2 \geq 0$, so reject $-9$):
  $$x^2 = 16 \implies x = 4 \quad (\text{since } x > 0)$$
* **Step 5:** Evaluate the corresponding real $y$ variable parameter:
  $$y = \frac{12}{4} = 3$$

**Final Answer Bounds:** $(4, 3)$
</details>

---

#### Problem 7
Find the value of $m$ such that the line $y = mx$ does not intersect the curve $y = x^2 + 4$.

<details>
<summary>💡 View Strategy Hint</summary>

Equate the equations to form a unified quadratic expression, then apply the strict non-intersection discriminant inequality condition $\Delta < 0$.
</details>

<details>
<summary>🔑 Expand Full Markscheme</summary>

* **Step 1:** Equate the equations and group terms onto one side:
  $$mx = x^2 + 4 \implies x^2 - mx + 4 = 0$$
* **Step 2:** Calculate the system discriminant:
  $$\Delta = (-m)^2 - 4(1)(4) = m^2 - 16$$
* **Step 3:** Solve the inequality matching the non-intersection condition ($\Delta < 0$):
  $$m^2 - 16 < 0 \implies m^2 < 16 \implies -4 < m < 4$$

**Final Answer Bounds:** $-4 < m < 4$
</details>

---

### 🔍 Tier 3: The "Show That..."

#### Problem 8
Consider the system of equations:  
$$\begin{cases} x + y = k \\ x^2 + y^2 = 8 \end{cases}$$

Show that for the system to have real solutions for $x$ and $y$, the constant $k$ must satisfy the inequality $-4 \leq k \leq 4$.

<details>
<summary>💡 View Strategy Hint</summary>

Isolate $y = k - x$ from the first linear equation, substitute it into the second quadratic equation, and apply the real roots discriminant condition $\Delta \geq 0$.
</details>

<details>
<summary>🔑 Expand Full Markscheme</summary>

* **Step 1:** Substitute $y = k - x$ into the second equation:
  $$x^2 + (k - x)^2 = 8$$
* **Step 2:** Expand and form a standard quadratic form with respect to $x$:
  $$x^2 + k^2 - 2kx + x^2 = 8 \implies 2x^2 - 2kx + (k^2 - 8) = 0$$
* **Step 3:** Apply the real roots existence constraint ($\Delta \geq 0$):
  $$\Delta = (-2k)^2 - 4(2)(k^2 - 8) \geq 0$$
  $$4k^2 - 8(k^2 - 8) \geq 0 \implies 4k^2 - 8k^2 + 64 \geq 0$$
* **Step 4:** Isolate and solve the quadratic inequality for $k$:
  $$-4k^2 \geq -64 \implies k^2 \leq 16 \implies -4 \leq k \leq 4$$

**The statement has been shown completely.**
</details>

---

#### Problem 9
Show that the equation $\sqrt{2x + 5} - \sqrt{x + 2} = 1$ reduces to the radical equation structure $x + 2 = 2\sqrt{x + 2}$, which yields the quadratic equation form $x^2 - 4 = 0$, and find its valid solutions.

<details>
<summary>💡 View Strategy Hint</summary>

Isolate one radical term on the right-hand side first, then square both sides carefully, expand the expressions, isolate the remaining radical, and square once more.
</details>

<details>
<summary>🔑 Expand Full Markscheme</summary>

* **Step 1:** Isolate the first radical parameter and square both sides:
  $$\sqrt{2x + 5} = 1 + \sqrt{x + 2}$$
  $$2x + 5 = (1 + \sqrt{x + 2})^2 \implies 2x + 5 = 1 + 2\sqrt{x + 2} + (x + 2)$$
* **Step 2:** Simplify and isolate the remaining radical term:
  $$2x + 5 = x + 3 + 2\sqrt{x + 2} \implies x + 2 = 2\sqrt{x + 2}$$
* **Step 3:** Square both sides a second time to eliminate the remaining radical root:
  $$(x + 2)^2 = 4(x + 2) \implies x^2 + 4x + 4 = 4x + 8$$
* **Step 4:** Simplify terms to extract the target quadratic expression:
  $$x^2 - 4 = 0 \implies (x - 2)(x + 2) = 0 \implies x = 2 \quad \text{or} \quad x = -2$$
* **Step 5:** Verify both potential roots in the original equation to catch extraneous solutions:
  * For $x = 2$: $\sqrt{2(2)+5} - \sqrt{2+2} = \sqrt{9} - \sqrt{4} = 3 - 2 = 1$ (Valid)
  * For $x = -2$: $\sqrt{2(-2)+5} - \sqrt{-2+2} = \sqrt{1} - \sqrt{0} = 1 - 0 = 1$ (Valid)

**Final Answer Bounds:** $x = 2, x = -2$
</details>

---

### 📊 Tier 4: Junior Paper 3 Investigation

#### Problem 10: The Arithmetic-Geometric Mean Inequality Introduction
Let $a$ and $b$ be positive real numbers. Consider the foundational identity $\left(\sqrt{a} - \sqrt{b}\right)^2 \geq 0$.

**(a)** Expand the left-hand side of the inequality.  
**(b)** Rearrange your expansion to show that $\frac{a + b}{2} \geq \sqrt{ab}$.  
**(c)** Under what algebraic condition for $a$ and $b$ does the equality hold true?  
**(d)** Use this theorem to determine the minimum possible value of the expression $x + \frac{4}{x}$ for any positive real value of $x$.

<details>
<summary>💡 View Strategy Hint</summary>

For part (d), map substitution variables by letting $a = x$ and $b = \frac{4}{x}$, then substitute these values directly into the proven AM-GM inequality structure.
</details>

<details>
<summary>🔑 Expand Full Markscheme</summary>

* **(a)** Expand the left-hand side squared perfect trinomial form:
  $$\left(\sqrt{a}\right)^2 - 2\sqrt{a}\sqrt{b} + \left(\sqrt{b}\right)^2 \geq 0 \implies a - 2\sqrt{ab} + b \geq 0$$
* **(b)** Rearrange the terms to show the AM-GM relationship layout:
  $$a + b \geq 2\sqrt{ab} \implies \frac{a + b}{2} \geq \sqrt{ab}$$
* **(c)** Determine the boundary limit parameters. The expression equals zero if and only if the base bracket itself equals zero:
  $$\sqrt{a} - \sqrt{b} = 0 \implies \sqrt{a} = \sqrt{b} \implies a = b$$
* **(d)** Substitute $a = x$ and $b = \frac{4}{x}$ directly into the AM-GM theorem structure:
  $$\frac{x + \frac{4}{x}}{2} \geq \sqrt{x \cdot \frac{4}{x}} \implies \frac{x + \frac{4}{x}}{2} \geq \sqrt{4}$$
  $$\frac{x + \frac{4}{x}}{2} \geq 2 \implies x + \frac{4}{x} \geq 4$$

**Final Answer Bounds:** Minimum value is 4
</details>