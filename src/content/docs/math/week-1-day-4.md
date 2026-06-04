---
title: "Day 4: Polynomials & Factor/Remainder Theorem"
description: 'Long division and the factor theorem are the essential tools used to break down cubic and quartic functions in higher-level algebra.'
---

## 💡 Core Strategy Blueprint
1. **The Remainder Theorem:** If a polynomial $p(x)$ is divided by $(x - c)$, the remainder is exactly equal to $p(c)$.
2. **The Factor Theorem:** If $p(c) = 0$, then $(x - c)$ is an exact factor of the polynomial $p(x)$, leaving a remainder of zero.
3. **Vieta's Cubic Relations:** For any cubic equation $x^3 + bx^2 + cx + d = 0$ with roots $\alpha$, $\beta$, and $\gamma$:
   * $b = -(\alpha + \beta + \gamma)$ *(Sum of roots)*
   * $c = \alpha\beta + \beta\gamma + \gamma\alpha$ *(Sum of roots taken two at a time)*
   * $d = -\alpha\beta\gamma$ *(Product of roots)*

---

## 📝 The 10 Problems

### 🧱 Tier 1: Core Tool Check

#### Problem 1
Find the remainder when $p(x) = x^3 - 3x^2 + 5x - 7$ is divided by $x - 2$.

<details>
<summary>💡 View Strategy Hint</summary>

Apply the Remainder Theorem directly by substituting the root boundary value $x = 2$ into the polynomial expression.
</details>

<details>
<summary>🔑 Expand Full Markscheme</summary>

* **Step 1:** State the substitution target according to the theorem:
  $$\text{Remainder} = p(2)$$
* **Step 2:** Evaluate the expression calculation path:
  $$p(2) = 2^3 - 3(2)^2 + 5(2) - 7$$
* **Step 3:** Calculate individual integer constants:
  $$p(2) = 8 - 12 + 10 - 7 = -1$$

**Final Answer Bounds:** $-1$
</details>

---

#### Problem 2
Show that $x + 1$ is a factor of $f(x) = 2x^3 + 3x^2 - 5x - 6$.

<details>
<summary>💡 View Strategy Hint</summary>

According to the Factor Theorem, if $x + 1$ is a true linear factor, evaluating the polynomial at $x = -1$ must equal exactly $0$.
</details>

<details>
<summary>🔑 Expand Full Markscheme</summary>

* **Step 1:** Identify the testing root coordinate parameter: $x = -1$
* **Step 2:** Substitute the parameter into the function matrix:
  $$f(-1) = 2(-1)^3 + 3(-1)^2 - 5(-1) - 6$$
* **Step 3:** Evaluate evaluation sums to check for zero bounds:
  $$f(-1) = -2 + 3 + 5 - 6 = 0$$

Since $f(-1) = 0$, the expression $x + 1$ is proven to be a structural factor.
</details>

---

#### Problem 3
If $p(x) = 2x^3 - kx^2 + 3x - 4$ has a remainder of $2$ when divided by $x - 1$, find the value of $k$.

<details>
<summary>💡 View Strategy Hint</summary>

Use the Remainder Theorem to establish an algebraic condition equation where $p(1) = 2$, then isolate the variable $k$.
</details>

<details>
<summary>🔑 Expand Full Markscheme</summary>

* **Step 1:** Build the tracking equation path:
  $$p(1) = 2$$
* **Step 2:** Substitute the root bounds into the polynomial function:
  $$2(1)^3 - k(1)^2 + 3(1) - 4 = 2$$
* **Step 3:** Simplify the constant integers to solve for $k$:
  $$2 - k + 3 - 4 = 2 \implies 1 - k = 2 \implies k = -1$$

**Final Answer Bounds:** $k = -1$
</details>

---

#### Problem 4
Divide $x^3 - 2x^2 - 5x + 6$ by $x - 3$ using polynomial long division and write down the quotient.

<details>
<summary>💡 View Strategy Hint</summary>

Divide the leading term of the dividend by the leading term of the divisor, multiply across, subtract, and bring down the remaining terms sequentially.
</details>

<details>
<summary>🔑 Expand Full Markscheme</summary>

* **Step 1:** Execute the first tracking term division loop:
  $$x^2(x - 3) = x^3 - 3x^2 \implies \text{Remainder} = x^2 - 5x$$
* **Step 2:** Execute the second variable division loop:
  $$x(x - 3) = x^2 - 3x \implies \text{Remainder} = -2x + 6$$
* **Step 3:** Execute the final constant cancellation layer loop:
  $$-2(x - 3) = -2x + 6 \implies \text{Remainder} = 0$$

**Final Answer Bounds:** $x^2 + x - 2$
</details>

---

### 🔄 Tier 2: The Multi-Step Twist

#### Problem 5
The polynomial $f(x) = x^3 + ax^2 + bx - 6$ is exactly divisible by both $x - 1$ and $x + 2$. Find the values of the constants $a$ and $b$.

<details>
<summary>💡 View Strategy Hint</summary>

Generate a system of two simultaneous equations by applying the Factor Theorem twice, setting $f(1) = 0$ and $f(-2) = 0$.
</details>

<details>
<summary>🔑 Expand Full Markscheme</summary>

* **Step 1:** Apply the first root condition factor ($f(1) = 0$):
  $$1^3 + a(1)^2 + b(1) - 6 = 0 \implies a + b = 5$$
* **Step 2:** Apply the second root condition factor ($f(-2) = 0$):
  $$(-2)^3 + a(-2)^2 + b(-2) - 6 = 0 \implies -8 + 4a - 2b - 6 = 0 \implies 4a - 2b = 14 \implies 2a - b = 7$$
* **Step 3:** Add the two resulting linear system equations together to eliminate $b$:
  $$(a + b) + (2a - b) = 5 + 7 \implies 3a = 12 \implies a = 4$$
* **Step 4:** Back-substitute to find the remaining constant $b$:
  $$4 + b = 5 \implies b = 1$$

**Final Answer Bounds:** $a = 4, b = 1$
</details>

---

#### Problem 6
Fully factorize the cubic polynomial $g(x) = x^3 - 6x^2 + 11x - 6$.

<details>
<summary>💡 View Strategy Hint</summary>

Test small integer factors of the constant term (e.g., $\pm 1, \pm 2$) to find an initial root, then divide out that linear factor to get a remaining factorable quadratic.
</details>

<details>
<summary>🔑 Expand Full Markscheme</summary>

* **Step 1:** Test low integer coordinates to catch the initial root factor:
  $$g(1) = 1^3 - 6(1)^2 + 11(1) - 6 = 1 - 6 + 11 - 6 = 0$$
  This proves that $(x - 1)$ is a valid factor.
* **Step 2:** Divide the cubic polynomial by $(x - 1)$ using long division or synthetic matching layout rules to find the quotient:
  $$\frac{x^3 - 6x^2 + 11x - 6}{x - 1} = x^2 - 5x + 6$$
* **Step 3:** Factorize the remaining trinomial quadratic tracking piece:
  $$x^2 - 5x + 6 = (x - 2)(x - 3)$$

**Final Answer Bounds:** $(x - 1)(x - 2)(x - 3)$
</details>

---

#### Problem 7
Find all real roots of the equation $2x^3 - 3x^2 - 8x - 3 = 0$.

<details>
<summary>💡 View Strategy Hint</summary>

Use the rational root test parameters to isolate your first root factor, then use polynomial long division to simplify the remainder into basic linear components.
</details>

<details>
<summary>🔑 Expand Full Markscheme</summary>

* **Step 1:** Test initial integer options to isolate a clean root candidate:
  $$f(-1) = 2(-1)^3 - 3(-1)^2 - 8(-1) - 3 = -2 - 3 + 8 - 3 = 0$$
  This proves that $(x + 1)$ is a valid factor.
* **Step 2:** Divide the expression to extract the hidden quadratic:
  $$\frac{2x^3 - 3x^2 - 8x - 3}{x + 1} = 2x^2 - 5x - 3$$
* **Step 3:** Factor the resulting quadratic component:
  $$2x^2 - 5x - 3 = (2x + 1)(x - 3) = 0$$
* **Step 4:** Extract all individual linear solution roots:
  $$x = -1, \quad x = -\frac{1}{2}, \quad x = 3$$

**Final Answer Bounds:** $x = -1, x = -\frac{1}{2}, x = 3$
</details>

---

### 🔍 Tier 3: The "Show That..."

#### Problem 8
Given that $x = 2$ is a root of the cubic equation $x^3 - 4x^2 + 7x - 6 = 0$, show that this equation has no other real roots.

<details>
<summary>💡 View Strategy Hint</summary>

Divide the cubic equation by the linear factor $(x - 2)$ to extract the remaining quadratic factor, then use its discriminant ($\Delta$) to prove no other real roots exist.
</details>

<details>
<summary>🔑 Expand Full Markscheme</summary>

* **Step 1:** Convert the known root into a linear factor: $(x - 2)$
* **Step 2:** Divide the full cubic function by $(x - 2)$ to obtain the remaining quotient:
  $$\frac{x^3 - 4x^2 + 7x - 6}{x - 2} = x^2 - 2x + 3$$
* **Step 3:** Compute the discriminant ($\Delta = b^2 - 4ac$) of the remaining quadratic factor:
  $$\Delta = (-2)^2 - 4(1)(3) = 4 - 12 = -8$$
* **Step 4:** Interpret the discriminant:
  Since $\Delta < 0$, the quadratic factor contains no real roots. Thus, $x = 2$ is the unique, single real solution root.

**The statement has been shown completely.**
</details>

---

#### Problem 9
Let $f(x) = x^3 - px + q$. Given that $x - c$ is a factor of $f(x)$, show that $c^3 - pc + q = 0$, and subsequently show that $f(x)$ can be written in the form $(x - c)(x^2 + cx + c^2 - p)$.

<details>
<summary>💡 View Strategy Hint</summary>

For the second part of the proof, expand the product expression $(x - c)(x^2 + cx + c^2 - p)$ completely and substitute the equation relation $q = -c^3 + pc$ to simplify.
</details>

<details>
<summary>🔑 Expand Full Markscheme</summary>

* **Step 1:** Apply the Factor Theorem condition at the root point $x = c$:
  $$f(c) = 0 \implies c^3 - pc + q = 0$$
* **Step 2:** Expand the requested factor expression target using distribution laws:
  $$(x - c)(x^2 + cx + c^2 - p) = x(x^2 + cx + c^2 - p) - c(x^2 + cx + c^2 - p)$$
  $$= x^3 + cx^2 + c^2x - px - cx^2 - c^2x - c^3 + pc$$
* **Step 3:** Cancel opposing variable parameters within the expanded alignment:
  $$= x^3 - px - c^3 + pc$$
* **Step 4:** Substitute the identity boundary relation isolated in Step 1, noting that $-c^3 + pc = q$:
  $$= x^3 - px + q = f(x)$$

**The statement has been shown completely.**
</details>

---

### 📊 Tier 4: Junior Paper 3 Investigation

#### Problem 10: The Vieta's Formulas for Cubics
Suppose a cubic equation $x^3 + bx^2 + cx + d = 0$ has three real roots: $\alpha$, $\beta$, and $\gamma$. This means it can be factored exactly as $(x - \alpha)(x - \beta)(x - \gamma) = 0$.

**(a)** Expand the expression $(x - \alpha)(x - \beta)(x - \gamma)$ completely and collect like terms of $x$.  
**(b)** By comparing your expansion to the original expression $x^3 + bx^2 + cx + d$, write formulas for $b$, $c$, and $d$ in terms of the roots $\alpha$, $\beta$, and $\gamma$.  
**(c)** A cubic equation has roots $x = 2$, $x = -1$, and $x = 3$. Use your formulas from part (b) to construct the cubic equation directly without manual brackets expansion.

<details>
<summary>💡 View Strategy Hint</summary>

For part (a), multiply the first two brackets together to get a quadratic trinomial, then distribute the third bracket across that result.
</details>

<details>
<summary>🔑 Expand Full Markscheme</summary>

* **(a)** Expand the linear root factor tracking sets sequentially:
  $$(x - \alpha)(x - \beta) = x^2 - (\alpha + \beta)x + \alpha\beta$$
  Now multiply this quadratic by the remaining root factor $(x - \gamma)$:
  $$(x^2 - (\alpha + \beta)x + \alpha\beta)(x - \gamma) = x^3 - \gamma x^2 - (\alpha + \beta)x^2 + \gamma(\alpha + \beta)x + \alpha\beta x - \alpha\beta\gamma$$
  Group matching exponential terms together to get the final form:
  $$= x^3 - (\alpha + \beta + \gamma)x^2 + (\alpha\beta + \beta\gamma + \gamma\alpha)x - \alpha\beta\gamma$$
* **(b)** Match coefficients directly with $x^3 + bx^2 + cx + d = 0$:
  $$b = -(\alpha + \beta + \gamma)$$
  $$c = \alpha\beta + \beta\gamma + \gamma\alpha$$
  $$d = -\alpha\beta\gamma$$
* **(c)** Substitute the given roots $\alpha = 2, \beta = -1, \gamma = 3$ directly into your Vieta formulas:
  * $b = -(2 + (-1) + 3) = -(4) = -4$
  * $c = (2)(-1) + (-1)(3) + (3)(2) = -2 - 3 + 6 = 1$
  * $d = -(2 \times -1 \times 3) = -(-6) = 6$

**Final Answer Bounds:** $x^3 - 4x^2 + x + 6 = 0$
</details>