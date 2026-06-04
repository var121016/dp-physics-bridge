---
title: "Day 8: Inverse Functions & Mapping Conditions"
description: "Navigating injective, surjective, and bijective mapping constraints while constructing algebraic and transcendental inverse functions."
---

## 💡 Core Strategy Blueprint
1. **The Bijective Requirement:** An inverse function $f^{-1}(x)$ exists if and only if the original function is a **bijection**, meaning it is simultaneously:
   * **Injective (One-to-One):** Every distinct input maps to a distinct output. It passes the Horizontal Line Test.
   * **Surjective (Onto):** The calculated mathematical range is perfectly identical to the stated codomain.
2. **The Coordinate Swap Mechanic:** To find an inverse algebraic rule, swap the placement of the independent and dependent variables ($x \leftrightarrow y$) and systematically isolate the new $y$ term.
3. **Domain-Range Reflective Property:** The domain of $f(x)$ becomes the exact range of $f^{-1}(x)$, and the range of $f(x)$ becomes the exact domain of $f^{-1}(x)$. Always check if algebraic simplifications hide these boundary filters.

---

## 📝 The 10-Problem Flight Path

### 🧱 Tier 1: Core Fluency (Non-Calculator Mechanics)

#### Problem 1
Given the linear function $f: \mathbb{R} \to \mathbb{R}$ defined by $f(x) = 4x - 7$, find an expression for the inverse function $f^{-1}(x)$.

<details>
<summary>💡 View Strategy Hint</summary>

Set the expression equal to $y$, swap the variable positions of $x$ and $y$, and use standard linear algebra steps to isolate $y$.
</details>

<details>
<summary>🔑 Expand Full Markscheme</summary>

* **Step 1:** Set up the functional tracking layout:
  $$y = 4x - 7$$
* **Step 2:** Swap the domain and codomain parameters:
  $$x = 4y - 7$$
* **Step 3:** Isolate the new dependent variable $y$:
  $$x + 7 = 4y \implies y = \frac{x + 7}{4}$$

**Final Answer Bounds:** $f^{-1}(x) = \frac{x + 7}{4}$
</details>

---

#### Problem 2
For the restricted domain function $g: [0, \infty) \to \mathbb{R}$ where $g(x) = x^2 + 3$, explain why $g(x)$ is injective (one-to-one).

<details>
<summary>💡 View Strategy Hint</summary>

Analyze how the domain restriction $[0, \infty)$ alters the standard parabolic shape. Consider whether two distinct inputs can yield the same output within this specific coordinate window.
</details>

<details>
<summary>🔑 Expand Full Markscheme</summary>

* **Step 1:** Observe unrestricted behavior. A standard quadratic function across all real numbers ($\mathbb{R}$) is not injective because symmetric negative and positive inputs yield identical outputs (e.g., $g(-2) = g(2) = 7$).
* **Step 2:** Evaluate the impact of the domain filter. The constraint $x \geq 0$ limits our view strictly to the right-hand branch of the parabola.
* **Step 3:** Connect to core mapping definitions. On the interval $[0, \infty)$, the function is strictly monotonic (increasing). Because it increases continuously, any horizontal line drawn through the graph will intersect it at exactly one point. No two unique inputs map to the same output.

**Final Answer Bounds:** Strictly monotonic/increasing on $[0, \infty) \implies$ Injective
</details>

---

#### Problem 3
Find the inverse function $h^{-1}(x)$ for the cube root system $h: \mathbb{R} \to \mathbb{R}$ defined by $h(x) = \sqrt[3]{x - 1}$.

<details>
<summary>💡 View Strategy Hint</summary>

Equate the radical expression to $y$, interchange your variables, and cube both sides of the equation to eliminate the radical operator.
</details>

<details>
<summary>🔑 Expand Full Markscheme</summary>

* **Step 1:** Set up the variable reflection statement:
  $$y = \sqrt[3]{x - 1}$$
* **Step 2:** Interchange the operational variables:
  $$x = \sqrt[3]{y - 1}$$
* **Step 3:** Cube both sides to eliminate the radical casing:
  $$x^3 = y - 1$$
* **Step 4:** Isolate $y$:
  $$y = x^3 + 1$$

**Final Answer Bounds:** $h^{-1}(x) = x^3 + 1$
</details>

---

#### Problem 4
Given the reciprocal baseline function $f: \mathbb{R} \setminus \{0\} \to \mathbb{R} \setminus \{0\}$ where $f(x) = \frac{5}{x}$, determine $f^{-1}(x)$ and state its geometric relationship to $f(x)$.

<details>
<summary>💡 View Strategy Hint</summary>

Perform the variable inversion algebra, then analyze what happens when an inverse expression turns out to be identical to the original function.
</details>

<details>
<summary>🔑 Expand Full Markscheme</summary>

* **Step 1:** Swap the variable parameters:
  $$y = \frac{5}{x} \implies x = \frac{5}{y}$$
* **Step 2:** Clear the fraction to isolate $y$:
  $$xy = 5 \implies y = \frac{5}{x}$$
* **Step 3:** Analyze the resulting state. Because $f^{-1}(x) = f(x)$, this mapping is categorized as a **self-inverse function**. Geometrically, this means the graph of the function is perfectly symmetrical across the identity line $y = x$.

**Final Answer Bounds:** $f^{-1}(x) = \frac{5}{x}$ (Self-Inverse Mapping)
</details>

---

### 🔄 Tier 2: The Multi-Step Twist (DP1 Transitions)

#### Problem 5
A function is defined as $f: [2, \infty) \to [5, \infty)$ where $f(x) = (x - 2)^2 + 5$. Prove that $f(x)$ is surjective (onto).

<details>
<summary>💡 View Strategy Hint</summary>

Calculate the exact mathematical range of the quadratic function on the given domain $[2, \infty)$, and compare it directly to the stated target codomain.
</details>

<details>
<summary>🔑 Expand Full Markscheme</summary>

* **Step 1:** Analyze the vertex structure of the quadratic expression. The equation $f(x) = (x - 2)^2 + 5$ represents a parabola with its turning point located exactly at $(2, 5)$.
* **Step 2:** Evaluate the boundary path. Because the leading coefficient of the squared block is positive ($+1$), the curve opens upward. Since the domain starts exactly at the axis of symmetry $x = 2$ and moves toward positive infinity, the outputs start at the minimum vertex value $y = 5$ and rise without bound.
* **Step 3:** Compare tracking outputs to the codomain. The calculated mathematical Range is $[5, \infty)$. The stated target Codomain in the problem definition is also $[5, \infty)$. 

Since $\text{Range} = \text{Codomain}$, the mapping fits the definition of being a surjective function.

**The statement has been shown completely.**
</details>

---

#### Problem 6
For the mapping $f: [2, \infty) \to [5, \infty)$ defined by $f(x) = (x - 2)^2 + 5$, construct the algebraic rule for the inverse function $f^{-1}(x)$.

<details>
<summary>💡 View Strategy Hint</summary>

**Watch the Branch Trap!** When taking the square root during isolation, evaluate whether the positive or negative root branch matches the domain expectations of the original function.
</details>

<details>
<summary>🔑 Expand Full Markscheme</summary>

* **Step 1:** Initialize the inversion equation:
  $$x = (y - 2)^2 + 5$$
* **Step 2:** Subtract the constant vertical displacement:
  $$x - 5 = (y - 2)^2$$
* **Step 3:** Take the square root of both sides, introducing the branch toggle:
  $$\pm\sqrt{x - 5} = y - 2$$
* **Step 4:** Select the correct branch. The original domain requires $y \geq 2$ for the inverse function's output range. Therefore, you must select the positive root branch.
  $$y = 2 + \sqrt{x - 5}$$

**Final Answer Bounds:** $f^{-1}(x) = 2 + \sqrt{x - 5}$
</details>

---

#### Problem 7
Find the inverse of the rational algebraic function $g(x) = \frac{x - 3}{2x + 1}$ where $x \neq -\frac{1}{2}$.

<details>
<summary>💡 View Strategy Hint</summary>

After swapping $x$ and $y$, cross-multiply to clear the denominator, collect all terms containing $y$ onto one side of the equation, factor out $y$, and divide.
</details>

<details>
<summary>🔑 Expand Full Markscheme</summary>

* **Step 1:** Swap the variable mapping placements:
  $$x = \frac{y - 3}{2y + 1}$$
* **Step 2:** Cross-multiply across the linear denominator:
  $$x(2y + 1) = y - 3 \implies 2xy + x = y - 3$$
* **Step 3:** Group all terms containing $y$ on the left side, and move all other terms to the right:
  $$2xy - y = -x - 3$$
* **Step 4:** Factor out the common variable multiplier $y$:
  $$y(2x - 1) = -(x + 3)$$
* **Step 5:** Isolate $y$ by dividing out the linear factor block:
  $$y = \frac{-(x + 3)}{2x - 1} = \frac{x + 3}{1 - 2x}$$

**Final Answer Bounds:** $g^{-1}(x) = \frac{x + 3}{1 - 2x}$
</details>

---

#### Problem 8
Determine the inverse function expression $h^{-1}(x)$ for the restricted radical profile $h: [-1, \infty) \to [0, \infty)$ defined by $h(x) = \sqrt{3x + 3}$.

<details>
<summary>💡 View Strategy Hint</summary>

Square both sides to unlock the radicand contents, isolate $y$, and remember to carry forward the implicit domain restrictions from the original function's range.
</details>

<details>
<summary>🔑 Expand Full Markscheme</summary>

* **Step 1:** Form the coordinate inverse equation:
  $$x = \sqrt{3y + 3}$$
* **Step 2:** Square both sides to eliminate the radical structure:
  $$x^2 = 3y + 3$$
* **Step 3:** Isolate the linear variable term:
  $$x^2 - 3 = 3y \implies y = \frac{x^2 - 3}{3}$$
* **Step 4:** Define explicit domain conditions. The original function has a range of $[0, \infty)$. This output range transforms directly into the domain constraint of the inverse function.
  $$x \geq 0$$

**Final Answer Bounds:** $h^{-1}(x) = \frac{x^2 - 3}{3}, \quad \{x \in \mathbb{R} \mid x \geq 0\}$
</details>

---

### 🔍 Tier 3: The "Show That..."

#### Problem 9
The function $f: \mathbb{R} \to \mathbb{R}$ is defined by $f(x) = x^3 - 3x^2 + 3x + 5$. Show that an inverse function $f^{-1}$ exists for all real values of $x$.

<details>
<summary>💡 View Strategy Hint</summary>

Look for a hidden perfect cube template inside the polynomial layout. Use the algebraic identity $(x - 1)^3 = x^3 - 3x^2 + 3x - 1$ to rewrite the function in vertex form.
</details>

<details>
<summary>🔑 Expand Full Markscheme</summary>

* **Step 1:** Deconstruct the constant term 5 to uncover the binomial cubic expansion pattern:
  $$f(x) = x^3 - 3x^2 + 3x - 1 + 6$$
* **Step 2:** Condense the polynomial expression using the perfect cube identity:
  $$f(x) = (x - 1)^3 + 6$$
* **Step 3:** Analyze the transformed function's behavior. The parent function $y = x^3$ is strictly monotonic (increasing) across its entire domain. The horizontal shift ($+1$) and vertical translation ($+6$) preserve this continuous increasing behavior.
* **Step 4:** Connect to mapping conditions. Because the function is strictly increasing, it passes the horizontal line test across all real coordinates (proving it is **injective**). Because a cubic function extends from $-\infty$ to $+\infty$, its mathematical range matches all real numbers $\mathbb{R}$ (proving it is **surjective**). 

Since it is a complete bijection, an inverse function $f^{-1}$ must exist for all real values of $x$.

**The statement has been shown completely.**
</details>

---

#### Problem 10
Find the inverse function $f^{-1}(x)$ for the multi-layered transcendental rational structure:  
$$f(x) = \frac{e^x - 2}{e^x + 1}$$
State its exact domain constraints using formal set notation.

<details>
<summary>💡 View Strategy Hint</summary>

After interchanging $x$ and $y$, isolate the exponential term $e^y$ by clearing the fraction and grouping like terms. Then apply natural logarithms ($\ln$) to finalize your expression. Use a sign chart to restrict the log argument above zero.
</details>

<details>
<summary>🔑 Expand Full Markscheme</summary>

* **Step 1:** Establish the inverse variable coordinate exchange model:
  $$x = \frac{e^y - 2}{e^y + 1}$$
* **Step 2:** Clear the denominator by cross-multiplying:
  $$x\left(e^y + 1\right) = e^y - 2 \implies x \cdot e^y + x = e^y - 2$$
* **Step 3:** Gather all components containing the exponential factor $e^y$ onto one side:
  $$x \cdot e^y - e^y = -x - 2 \implies e^y(x - 1) = -(x + 2)$$
* **Step 4:** Divide to isolate the exponential expression:
  $$e^y = \frac{-(x + 2)}{x - 1} = \frac{x + 2}{1 - x}$$
* **Step 5:** Apply natural logarithms to solve for $y$:
  $$y = \ln\left(\frac{x + 2}{1 - x}\right)$$
* **Step 6:** Evaluate domain constraints. The argument inside the natural logarithm must be strictly greater than zero:
  $$\frac{x + 2}{1 - x} > 0$$
  The critical boundary roots are $x = -2$ and $x = 1$. Testing points across these intervals confirms that the rational expression is positive only within the internal region between these values.

**Final Answer Bounds:** $$f^{-1}(x) = \ln\left(\frac{x + 2}{1 - x}\right), \quad \{x \in \mathbb{R} \mid -2 < x < 1\}$$
</details>