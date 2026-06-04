---
title: "Day 6: Rational Expressions & Inequalities"
description: 'Solving polynomial fractions and cross-multiplying inequalities correctly without losing solutions is an area where many DP1 students drop easy points.'
---

## 💡 Core Strategy Blueprint
1. **The Variable Inequality Trap:** Never cross-multiply both sides of an inequality by a variable expression (like $x$ or $x-1$) unless you can explicitly guarantee its sign status. Instead, collect all terms on one side to compare against zero, or multiply through by the *square* of the denominator, which is guaranteed to be positive.
2. **Domain Boundaries First:** Before manipulating any rational algebraic fraction, identify the excluded boundary limits by finding where your denominator blocks equal zero ($f(x) \neq 0$).
3. **The Sign Zone Strategy:** Solve complex polynomial inequalities by determining their critical boundary zeros, partitioning a real number tracking line into intervals, and testing a single coordinate point per zone.

---

## 📝 The 10 Problems

### 🧱 Tier 1: Core Tool Check

#### Problem 1
Express as a single simplified fraction:  
$$\frac{2}{x - 1} + \frac{3}{x + 2}$$

<details>
<summary>💡 View Strategy Hint</summary>

Find the lowest common denominator, $(x - 1)(x + 2)$, cross-multiply the numerators, expand, and combine like terms.
</details>

<details>
<summary>🔑 Expand Full Markscheme</summary>

* **Step 1:** Establish the unified common denominator matrix:
  $$\frac{2(x + 2) + 3(x - 1)}{(x - 1)(x + 2)}$$
* **Step 2:** Expand the polynomial numerators:
  $$\frac{2x + 4 + 3x - 3}{(x - 1)(x + 2)}$$
* **Step 3:** Collect and simplify matching terms:
  $$\frac{5x + 1}{(x - 1)(x + 2)}$$

**Final Answer Bounds:** $\frac{5x + 1}{(x - 1)(x + 2)}$
</details>

---

#### Problem 2
Solve the linear inequality:  
$$5 - 2x \leq 11$$

<details>
<summary>💡 View Strategy Hint</summary>

Isolate $x$ on one side. Remember to flip the direction of the inequality sign whenever you multiply or divide by a negative scalar value.
</details>

<details>
<summary>🔑 Expand Full Markscheme</summary>

* **Step 1:** Subtract the constant 5 from both sides:
  $$-2x \leq 6$$
* **Step 2:** Divide out the negative structural scalar coefficient and reverse the inequality layout:
  $$x \geq \frac{6}{-2} \implies x \geq -3$$

**Final Answer Bounds:** $x \geq -3$
</details>

---

#### Problem 3
Simplify the complex fraction:  
$$\frac{\frac{1}{x} - \frac{1}{y}}{\frac{1}{x} + \frac{1}{y}}$$

<details>
<summary>💡 View Strategy Hint</summary>

Combine the fractional expressions in both the numerator and denominator into single rational structures with a common denominator of $xy$, then divide.
</details>

<details>
<summary>🔑 Expand Full Markscheme</summary>

* **Step 1:** Convert the top and bottom expressions to single fractions over $xy$:
  $$\text{Numerator} = \frac{y - x}{xy}, \quad \text{Denominator} = \frac{y + x}{xy}$$
* **Step 2:** Set up the fractional division as a reciprocal product:
  $$\frac{y - x}{xy} \times \frac{xy}{y + x}$$
* **Step 3:** Cancel out the matching denominator factor blocks ($xy$):
  $$\frac{y - x}{y + x}$$

**Final Answer Bounds:** $\frac{y - x}{y + x}$
</details>

---

#### Problem 4
Find the excluded values (the constraints on the domain) for the expression:  
$$\frac{x - 5}{x^2 - 4x}$$

<details>
<summary>💡 View Strategy Hint</summary>

Set the denominator expression equal to zero, factor the resulting quadratic, and solve to identify the forbidden input tracking coordinates.
</details>

<details>
<summary>🔑 Expand Full Markscheme</summary>

* **Step 1:** State the non-zero structural domain constraint equation:
  $$x^2 - 4x = 0$$
* **Step 2:** Factor out the common variable term:
  $$x(x - 4) = 0$$
* **Step 3:** Extract the individual root coordinates:
  $$x = 0 \quad \text{or} \quad x = 4$$

**Final Answer Bounds:** Excluded values are $x = 0$ and $x = 4$ ($x \neq 0, 4$)
</details>

---

### 🔄 Tier 2: The Multi-Step Twist

#### Problem 5
Solve the rational equation for $x$:  
$$\frac{x}{x - 2} - \frac{2}{x + 1} = 1$$

<details>
<summary>💡 View Strategy Hint</summary>

Multiply every single term across the entire equation by the lowest common denominator, $(x - 2)(x + 1)$, to eliminate all fractions.
</details>

<details>
<summary>🔑 Expand Full Markscheme</summary>

* **Step 1:** Clear the fraction structures by multiplying across the common denominator:
  $$x(x + 1) - 2(x - 2) = 1(x - 2)(x + 1)$$
* **Step 2:** Expand the individual polynomial blocks completely:
  $$x^2 + x - 2x + 4 = x^2 - x - 2$$
* **Step 3:** Collect and simplify all variable terms:
  $$x^2 - x + 4 = x^2 - x - 2$$
* **Step 4:** Cancel matching terms across the equality statement:
  $$4 = -2$$

Since this reduction statement is completely false ($4 \neq -2$), the system yields no valid real numbers.

**Final Answer Bounds:** No solution
</details>

---

#### Problem 6
Solve the quadratic inequality:  
$$2x^2 + 5x - 3 \leq 0$$

<details>
<summary>💡 View Strategy Hint</summary>

Factorize the quadratic expression to locate the boundary roots, then determine which region satisfies the less-than-or-equal-to-zero constraint.
</details>

<details>
<summary>🔑 Expand Full Markscheme</summary>

* **Step 1:** Factorize the quadratic polynomial equation component:
  $$(2x - 1)(x + 3) \leq 0$$
* **Step 2:** Identify the boundary root zeros:
  $$2x - 1 = 0 \implies x = \frac{1}{2}, \quad x + 3 = 0 \implies x = -3$$
* **Step 3:** Analyze the shape of the function. This is an upward-opening parabola ($a > 0$), meaning it drops below zero *between* its real roots.
  $$-3 \leq x \leq \frac{1}{2}$$

**Final Answer Bounds:** $-3 \leq x \leq \frac{1}{2}$
</details>

---

#### Problem 7
Solve the inequality:  
$$\frac{x + 3}{x - 1} > 0$$

<details>
<summary>💡 View Strategy Hint</summary>

Identify the critical values from the numerator and denominator ($x = -3$ and $x = 1$), then test values in each of the three resulting sign zones.
</details>

<details>
<summary>🔑 Expand Full Markscheme</summary>

* **Step 1:** Extract the critical boundary points:
  $$\text{Numerator Root: } x = -3, \quad \text{Denominator Boundary: } x = 1$$
* **Step 2:** Partition the number line into three separate testing zones:
  * **Zone A ($x < -3$):** Test $x = -4 \implies \frac{-4 + 3}{-4 - 1} = \frac{-1}{-5} = 0.2 > 0$ (True)
  * **Zone B ($-3 < x < 1$):** Test $x = 0 \implies \frac{0 + 3}{0 - 1} = \frac{3}{-1} = -3 > 0$ (False)
  * **Zone C ($x > 1$):** Test $x = 2 \implies \frac{2 + 3}{2 - 1} = \frac{5}{1} = 5 > 0$ (True)
* **Step 3:** Collect the valid structural interval sets:
  $$x < -3 \quad \text{or} \quad x > 1$$

**Final Answer Bounds:** $x < -3 \cup x > 1$
</details>

---

### 🔍 Tier 3: The "Show That..."

#### Problem 8
Show that the inequality $\frac{1}{x} < 2$ does **not** simplify to just $x > \frac{1}{2}$. Find the complete, mathematically correct range of solutions.

<details>
<summary>💡 View Strategy Hint</summary>

Move the constant 2 to the left side to set up a baseline inequality against zero, or multiply through by $x^2$ to keep the inequality sign orientation stable.
</details>

<details>
<summary>🔑 Expand Full Markscheme</summary>

* **Step 1:** Collect all operational expressions on one side to prevent losing negative solution ranges:
  $$\frac{1}{x} - 2 < 0 \implies \frac{1 - 2x}{x} < 0$$
* **Step 2:** Multiply through by $x^2$ (which is always positive for $x \neq 0$) to safely eliminate the denominator:
  $$x^2 \left(\frac{1 - 2x}{x}\right) < 0(x^2) \implies x(1 - 2x) < 0$$
* **Step 3:** Identify the critical boundary roots:
  $$x = 0 \quad \text{and} \quad x = \frac{1}{2}$$
* **Step 4:** Analyze the downward-opening parabola graph ($x - 2x^2 < 0$). The function drops below zero outside of its roots.
  $$x < 0 \quad \text{or} \quad x > \frac{1}{2}$$

Simply cross-multiplying by $x$ misses the entire negative solution set ($x < 0$) because it fails to account for when $x$ is negative and flips the inequality sign.

**The statement has been shown completely.**
</details>

---

#### Problem 9
Show that the expression $\frac{x^3 - 1}{x - 1}$ simplifies cleanly to $x^2 + x + 1$ for all domain constraints where $x \neq 1$.

<details>
<summary>💡 View Strategy Hint</summary>

Apply the difference of cubes factoring identity: $a^3 - b^3 = (a - b)(a^2 + ab + b^2)$ to the numerator.
</details>

<details>
<summary>🔑 Expand Full Markscheme</summary>

* **Step 1:** Target the numerator cubic difference identity using $a = x$ and $b = 1$:
  $$x^3 - 1 = (x - 1)(x^2 + x(1) + 1^2)$$
* **Step 2:** Rewrite the full rational expression with this factored numerator:
  $$\frac{(x - 1)(x^2 + x + 1)}{x - 1}$$
* **Step 3:** Cancel out the matching linear factor bracket $(x - 1)$, noting that this operation is algebraically valid since $x \neq 1$:
  $$x^2 + x + 1$$

**The statement has been shown completely.**
</details>

---

### 📊 Tier 4: Junior Paper 3 Investigation

#### Problem 10: The Sign-Table Optimization Method
To solve complex rational inequalities like $\frac{x - 2}{x + 4} \geq 1$ without making sign errors, mathematicians map out boundary testing zones.

**(a)** Move the 1 to the left-hand side and combine terms into a single rational fraction expression of the form $\frac{A}{B} \geq 0$.  
**(b)** State the critical boundary tracking values where the numerator equals zero or the denominator equals zero.  
**(c)** Create a sign chart analyzing whether your combined fraction is positive or negative in the intervals broken up by those critical values.  
**(d)** Use your chart to state the exact interval solution for the original inequality.

<details>
<summary>💡 View Strategy Hint</summary>

For part (a), rewrite the subtracted 1 as $\frac{x + 4}{x + 4}$ so you can subtract the numerators over a single denominator block.
</details>

<details>
<summary>🔑 Expand Full Markscheme</summary>

* **(a)** Group all terms on the left side and establish a common denominator:
  $$\frac{x - 2}{x + 4} - 1 \geq 0 \implies \frac{x - 2 - (x + 4)}{x + 4} \geq 0$$
  $$\frac{x - 2 - x - 4}{x + 4} \geq 0 \implies \frac{-6}{x + 4} \geq 0$$
* **(b)** Identify all critical points:
  The numerator constant $-6$ has no roots. The denominator equals zero at $x = -4$.
* **(c)** Construct the zone sign distribution table around the boundary threshold $x = -4$:

  | Interval Tracker | Value of Denominator ($x + 4$) | Sign of Combined Fraction ($\frac{-6}{x + 4}$) |
  | :--- | :--- | :--- |
  | **$x < -4$** | Negative | $\frac{\text{Negative}}{\text{Negative}} = \text{\textbf{Positive}}$ |
  | **$x > -4$** | Positive | $\frac{\text{Negative}}{\text{Positive}} = \text{\textbf{Negative}}$ |

* **(d)** Extract the valid interval that satisfies the greater-than-or-equal-to-zero requirement ($\geq 0$). 
  The fraction is positive when $x < -4$. Note that $x$ cannot equal $-4$ exactly because that would cause a division-by-zero error.

**Final Answer Bounds:** $x < -4$
</details>