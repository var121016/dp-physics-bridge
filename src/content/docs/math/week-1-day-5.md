---
title: "Day 5: The Binomial Theorem"
description: 'Binomial expansions are standard calculation steps across probability distributions and complex approximation questions in the final IB papers.'
---

## 💡 Core Strategy Blueprint
1. **The General Term Formula:** The $(r+1)^{\text{th}}$ term of the expansion of $(a + b)^n$ is written as:
   $$T_{r+1} = \binom{n}{r} a^{n-r} b^r$$
   *Note: To find a specific power of $x$, isolate all the exponent parts of $x$ and solve for $r$.*
2. **Combinations by Hand:** Remember that the binomial coefficient can be calculated via:
   $$\binom{n}{r} = \frac{n!}{r!(n-r)!}$$
3. **Pascal’s Triangle Relationship:** Each entry in the triangle is the sum of the two values directly above it, which maps out the exact integer values of $\binom{n}{r}$.

---

## 📝 The 10 Problems

### 🧱 Tier 1: Core Tool Check

#### Problem 1
Evaluate the binomial coefficient $\binom{6}{3}$ without using a calculator.

<details>
<summary>💡 View Strategy Hint</summary>

Apply the factorial breakdown shortcut by expanding the first three descending terms of 6 in the numerator and dividing by $3!$ in the denominator.
</details>

<details>
<summary>🔑 Expand Full Markscheme</summary>

* **Step 1:** Set up the calculation ratio:
  $$\binom{6}{3} = \frac{6 \times 5 \times 4}{3 \times 2 \times 1}$$
* **Step 2:** Cancel out matching factor groupings ($3 \times 2 \times 1 = 6$):
  $$\binom{6}{3} = \frac{20}{1} = 20$$

**Final Answer Bounds:** $20$
</details>

---

#### Problem 2
Write down the first 5 rows of Pascal’s Triangle (starting from Row 0).

<details>
<summary>💡 View Strategy Hint</summary>

Begin with 1 at Row 0, then generate subsequent rows by adding adjacent terms from the row directly above to form the inside values.
</details>

<details>
<summary>🔑 Expand Full Markscheme</summary>

* **Step 1:** Write out rows sequentially following addition expansion steps:
  * **Row 0:** $1$
  * **Row 1:** $1, 1$
  * **Row 2:** $1, 2, 1$
  * **Row 3:** $1, 3, 3, 1$
  * **Row 4:** $1, 4, 6, 4, 1$

**Final Answer Bounds:** The array terminating at Row 4 $(1, 4, 6, 4, 1)$
</details>

---

#### Problem 3
Expand $(x + 2)^3$ completely using binomial coefficients or Pascal's Triangle row parameters.

<details>
<summary>💡 View Strategy Hint</summary>

Use the coefficients from Row 3 ($1, 3, 3, 1$), decreasing the power of $x$ while increasing the power of $2$ across each term.
</details>

<details>
<summary>🔑 Expand Full Markscheme</summary>

* **Step 1:** Align coefficients with descending and ascending base component blocks:
  $$\binom{3}{0}x^3(2)^0 + \binom{3}{1}x^2(2)^1 + \binom{3}{2}x^1(2)^2 + \binom{3}{3}x^0(2)^3$$
* **Step 2:** Evaluate coefficients and constant powers:
  $$1(x^3)(1) + 3(x^2)(2) + 3(x)(4) + 1(1)(8)$$
* **Step 3:** Simplify multiplication sets completely:
  $$x^3 + 6x^2 + 12x + 8$$

**Final Answer Bounds:** $x^3 + 6x^2 + 12x + 8$
</details>

---

#### Problem 4
Write down the general term formula for the expansion of $(a + b)^n$.

<details>
<summary>💡 View Strategy Hint</summary>

State the formula for the $(r+1)^{\text{th}}$ term using combinations notation alongside matching exponent layouts for $a$ and $b$.
</details>

<details>
<summary>🔑 Expand Full Markscheme</summary>

* **Step 1:** Write down the standard tracking index component structure:
  $$T_{r+1} = \binom{n}{r} a^{n-r} b^r$$

**Final Answer Bounds:** $T_{r+1} = \binom{n}{r} a^{n-r} b^r$
</details>

---

### 🔄 Tier 2: The Multi-Step Twist

#### Problem 5
Find the coefficient of $x^4$ in the expansion of $(3x - 2)^6$.

<details>
<summary>💡 View Strategy Hint</summary>

The term containing $x^4$ occurs when the term $(3x)$ is raised to the power of 4. Use the general term formula with $n = 6$ and $r = 2$.
</details>

<details>
<summary>🔑 Expand Full Markscheme</summary>

* **Step 1:** Form the targeted term equation using $n = 6$ and $r = 2$:
  $$T_{2+1} = \binom{6}{2} (3x)^{6-2} (-2)^2$$
* **Step 2:** Compute the combination coefficient value and evaluate the powers:
  $$\binom{6}{2} = 15$$
  $$15 \times (81x^4) \times 4$$
* **Step 3:** Multiply out all numerical values:
  $$15 \times 81 \times 4 = 4860 \implies 4860x^4$$

**Final Answer Bounds:** $4860$
</details>

---

#### Problem 6
Find the constant term (the term independent of $x$) in the expansion of $\left(x^2 + \frac{2}{x}\right)^6$.

<details>
<summary>💡 View Strategy Hint</summary>

Write the general term formula using an arbitrary index variable $r$, group all base $x$ components together using index laws, and set the final combined exponent equal to $0$.
</details>

<details>
<summary>🔑 Expand Full Markscheme</summary>

* **Step 1:** Set up the general algebraic term path:
  $$T_{r+1} = \binom{6}{r} (x^2)^{6-r} \left(\frac{2}{x}\right)^r$$
* **Step 2:** Apply index rules to consolidate tracking exponents of $x$:
  $$T_{r+1} = \binom{6}{r} x^{12 - 2r} \cdot 2^r \cdot x^{-r} = \binom{6}{r} 2^r x^{12 - 3r}$$
* **Step 3:** Set the total index tracking power of $x$ to zero for constant constraints:
  $$12 - 3r = 0 \implies 3r = 12 \implies r = 4$$
* **Step 4:** Substitute $r = 4$ back into the scalar calculation track:
  $$\text{Term} = \binom{6}{4} 2^4 = 15 \times 16 = 240$$

**Final Answer Bounds:** $240$
</details>

---

#### Problem 7
Expand and simplify completely:  
$$\left(1 + \sqrt{2}\right)^4$$

<details>
<summary>💡 View Strategy Hint</summary>

Apply the binomial parameters from Row 4 of Pascal's Triangle ($1, 4, 6, 4, 1$) with $a = 1$ and $b = \sqrt{2}$. Simplify any radical powers as integers where possible.
</details>

<details>
<summary>🔑 Expand Full Markscheme</summary>

* **Step 1:** Map out the structural distribution array:
  $$1(1)^4 + 4(1)^3(\sqrt{2})^1 + 6(1)^2(\sqrt{2})^2 + 4(1)^1(\sqrt{2})^3 + 1(\sqrt{2})^4$$
* **Step 2:** Simplify exponential powers and radicals:
  $$1 + 4\sqrt{2} + 6(2) + 4(2\sqrt{2}) + 4$$
  $$1 + 4\sqrt{2} + 12 + 8\sqrt{2} + 4$$
* **Step 3:** Group integers and radical terms together to complete the collection:
  $$(1 + 12 + 4) + (4\sqrt{2} + 8\sqrt{2}) = 17 + 12\sqrt{2}$$

**Final Answer Bounds:** $17 + 12\sqrt{2}$
</details>

---

### 🔍 Tier 3: The "Show That..."

#### Problem 8
Show that the coefficient of $x^3$ in the expansion of $(1 + 2x)^n$ is given by the formula:  
$$\frac{4n(n-1)(n-2)}{3}$$

<details>
<summary>💡 View Strategy Hint</summary>

Isolate the term where $(2x)$ is cubed, expand the binomial coefficient algebraically as $\binom{n}{3} = \frac{n(n-1)(n-2)}{3!}$, and simplify.
</details>

<details>
<summary>🔑 Expand Full Markscheme</summary>

* **Step 1:** Target the third index track term ($r = 3$):
  $$\text{Term} = \binom{n}{3} (1)^{n-3} (2x)^3$$
* **Step 2:** Expand the combinatorial notation algebraically:
  $$\binom{n}{3} = \frac{n(n-1)(n-2)}{3 \times 2 \times 1} = \frac{n(n-1)(n-2)}{6}$$
* **Step 3:** Combine your expanded fraction with the cubed term component:
  $$\text{Term} = \frac{n(n-1)(n-2)}{6} \cdot 8x^3$$
* **Step 4:** Simplify the constant fraction ratio $\frac{8}{6}$ to complete the proof:
  $$\text{Term} = \frac{8}{6} n(n-1)(n-2) x^3 = \frac{4n(n-1)(n-2)}{3} x^3$$

**The statement has been shown completely.**
</details>

---

#### Problem 9
By considering the binomial expansion of $(1 + 1)^n$, prove that the sum of any row of binomial coefficients equals $2^n$:  
$$\binom{n}{0} + \binom{n}{1} + \binom{n}{2} + \dots + \binom{n}{n} = 2^n$$

<details>
<summary>💡 View Strategy Hint</summary>

Write out the standard Sigma expansion equation for $(a+b)^n$, then substitute $a=1$ and $b=1$ directly into both sides of the identity.
</details>

<details>
<summary>🔑 Expand Full Markscheme</summary>

* **Step 1:** State the basic structural theorem equation for $(a + b)^n$:
  $$(a + b)^n = \binom{n}{0} a^n b^0 + \binom{n}{1} a^{n-1} b^1 + \dots + \binom{n}{n} a^0 b^n$$
* **Step 2:** Substitute the parameter choices $a = 1$ and $b = 1$:
  $$(1 + 1)^n = \binom{n}{0}(1)^n(1)^0 + \binom{n}{1}(1)^{n-1}(1)^1 + \dots + \binom{n}{n}(1)^0(1)^n$$
* **Step 3:** Evaluate the identities, noting that $1^k = 1$ for all powers:
  $$2^n = \binom{n}{0}(1) + \binom{n}{1}(1) + \dots + \binom{n}{n}(1)$$
  $$2^n = \binom{n}{0} + \binom{n}{1} + \dots + \binom{n}{n}$$

**The statement has been shown completely.**
</details>

---

### 📊 Tier 4: Junior Paper 3 Investigation

#### Problem 10: The Binomial Approximation Investigation
When $x$ is an extremely small fractional value ($x \ll 1$), high powers of $x$ (like $x^2, x^3$) become so small they can practically be ignored for quick estimation.

**(a)** Write down the first three terms of the expansion of $(1 + x)^5$.  
**(b)** Use your expression from part (a) to approximate the value of $(1.01)^5$ by setting $x = 0.01$.  
**(c)** Calculate the true value of $(1.01)^5$ via manual long multiplication to show it equals exactly $1.0510100501$.  
**(d)** Calculate the percentage error of your three-term approximation to show how accurate this shortcut is.  
$$\text{Percentage Error} = \left| \frac{\text{Experimental} - \text{Theoretical}}{\text{Theoretical}} \right| \times 100\%$$

<details>
<summary>💡 View Strategy Hint</summary>

For part (d), treat your result from part (b) as the 'Experimental' value and the exact decimal from part (c) as the 'Theoretical' benchmark.
</details>

<details>
<summary>🔑 Expand Full Markscheme</summary>

* **(a)** Isolate the first three components using Row 5 coefficients ($1, 5, 10$):
  $$(1 + x)^5 \approx \binom{5}{0}(1)^5 + \binom{5}{1}(1)^4 x + \binom{5}{2}(1)^3 x^2 = 1 + 5x + 10x^2$$
* **(b)** Substitute $x = 0.01$ into the truncated expression model:
  $$1 + 5(0.01) + 10(0.01)^2 = 1 + 0.05 + 10(0.0001)$$
  $$= 1 + 0.05 + 0.001 = 1.051$$
* **(c)** Execute long manual tracking checking calculations:
  $$(1.01)^1 = 1.01$$
  $$(1.01)^2 = 1.0201$$
  $$(1.01)^3 = 1.030301$$
  $$(1.01)^4 = 1.04060401$$
  $$(1.01)^5 = 1.0510100501$$
* **(d)** Calculate the percentage error:
  $$\text{Error} = \left| \frac{1.051 - 1.0510100501}{1.0510100501} \right| \times 100\%$$
  $$\text{Error} = \frac{0.0000100501}{1.0510100501} \times 100\% \approx 0.000956\%$$

This minimal error demonstrates why ignoring higher-order terms ($x^3, x^4, x^5$) works brilliantly for rapid linear scaling approximations!
</details>