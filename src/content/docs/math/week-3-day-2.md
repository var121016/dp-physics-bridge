---
title: "Day 12: Stretches, Reflections, and Modulus Transformations"
description: "Core Strategy Blueprint and 10-Problem Tiered Track covering scale factors, geometric reflections, and structural absolute value filtering."
---

Today we tackle non-rigid transformations. Unlike translations, stretches and reflections alter the core geometric scale and symmetry profiles of functions. We will master tracking how these operators distort coordinates and isolate structural boundaries under absolute value filters.

---

## 🧭 The Core Strategy Blueprint

### 👥 Parent Analytics Summary
* **The Core Gap:** Most students try to memorize what absolute value graphs look like as generic shapes (e.g., "it looks like a V"). IB DP examiners intentionally design questions with compound operations—like $y = |f(2x - 3)|$—to instantly penalize visual guessers. If a student does not understand how transformations apply sequentially to coordinates, they drop multiple marks on Paper 1.
* **The Target Objective:** We are training students to treat stretches, reflections, and modulus filters as clean piecewise operations. By referencing the algebraic precision mastered during **Week 1** and **Week 2**, your student will learn exactly when to modify the input domain ($x$) versus when to filter the output range ($y$).

### 🎒 First-Principles Script (The Feynman Technique)
> **Read this aloud to lock in the structural intuition:**
>
> "Yesterday we learned that transformations hijack a function machine either before or after the internal calculations take place. Today, we look at multiplying coordinates instead of adding to them.
>
> 1. **Vertical Stretches and Reflections ($a \cdot f(x)$):** This happens *outside* the machine. The engine finishes its work, outputs a $y$-value, and we multiply it by $a$. If $a = -1$, every positive output flips below the axis, and every negative output flips above it. This is a reflection across the $x$-axis.
> 
> 2. **Horizontal Stretches and Reflections ($f(b \cdot x)$):** This happens *inside* the machine. It alters the input before the calculation. Just like translations, horizontal modifications force a compensatory reaction: if you multiply the input by $2$ ($f(2x)$), the input values actually have to squeeze down by half ($\frac{1}{2}$) just to return to baseline performance. 
>
> 3. **The Modulus Operators ($|f(x)|$ vs $f(|x|)$):** Think of the absolute value bars as a 'positivity filter.' 
>    * For $|f(x)|$, the filter sits outside the machine. It lets all positive outputs pass through cleanly, but forces any negative outputs to instantly reflect upward across the $x$-axis.
>    * For $f(|x|)$, the filter sits *inside* the machine. It completely intercepts negative inputs before they enter. If you feed it $x = -3$, the filter strips the negative sign and passes $|-3| = 3$ into the engine. The engine calculates the value for $3$ instead. This wipes out the entire left side of your original graph and creates a perfect mirror image of the right side across the $y$-axis."

---

## 🛠️ The 10-Problem Tiered Track

Execute these tasks completely on physical paper. **Calculators are strictly prohibited.** Show every structural step cleanly.

### 🛑 Tier 1: Core Tool Check (Problems 1–4)
*Focus: Isolating simple horizontal/vertical scale factors and executing fundamental axes reflections.*

#### 1. Problem 1
A base quadratic profile is given by $f(x) = x^2 - 3x$. Write down the explicit functional equations for both $g(x) = -f(x)$ and $h(x) = f(-x)$, and state which axis acts as the geometric reflection line for each tracking path.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** This directly links back to the basic polynomial factoring we established in **Week 1 (Days 1–5)**. 

For $g(x)$, multiply the entire expression by $-1$. For $h(x)$, substitute $(-x)$ into every standalone variable slot.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Construct the vertical reflection equation: $g(x) = -(x^2 - 3x) = \mathbf{-x^2 + 3x}$ **[1M]**
* **Step 2:** Identify the geometric mapping line for $g(x)$: **Reflection across the $x$-axis** **[1A]**
* **Step 3:** Construct the horizontal reflection equation: $h(x) = (-x)^2 - 3(-x) = \mathbf{x^2 + 3x}$ **[1M]**
* **Step 4:** Identify the geometric mapping line for $h(x)$: **Reflection across the $y$-axis** **[1A]**
</details>

---

#### 2. Problem 2
The function $y = \phi(x)$ passes through a local maximum anchored at coordinates $M(4, -6)$. Determine the new coordinate position of this point under the transformed mapping states $y = 3\phi(x)$ and $y = \phi(2x)$.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Re-engages the coordinate point-tracking mechanics from **Week 2 (Days 6–10)**. 

Remember that horizontal modifiers inside the functional argument require you to scale the input coordinate by the reciprocal scale factor ($\frac{1}{b}$).
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Apply vertical scaling factor directly to output: $y' = 3 \cdot (-6) = -18$ **[1M]**
* **Step 2:** State first target coordinate: **$M_1(4, -18)$** **[1A]**
* **Step 3:** Apply inverse scale factor to input for horizontal stretch: $x' = 4 \cdot \frac{1}{2} = 2$ **[1M]**
* **Step 4:** State second target coordinate: **$M_2(2, -6)$** **[1A]**
</details>

---

#### 3. Problem 3
Let $f(x) = 2x - 4$. Sketch the transformed curves $y = |f(x)|$ and $y = f(|x|)$ on separate, clearly labeled axes, marking all coordinate axis intersections.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Utilizes linear intercept tracking from **Week 1, Day 1**. 

For $|f(x)|$, bounce any negative $y$-values below the $x$-axis upward. For $f(|x|)$, erase the graph to the left of the $y$-axis and copy the right side over as a mirror image.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Sketch $y = |2x - 4|$. The root is at $x = 2$. The negative region ($x < 2$) flips up. Intercepts map to **$(2, 0)$ and $(0, 4)$** **[2A]**
* **Step 2:** Sketch $y = 2|x| - 4$. For $x < 0$, it mirrors the right side. Intercepts map to **$(2, 0)$, $(-2, 0)$, and $(0, -4)$** **[2A]**
</details>

---

#### 4. Problem 4
A continuous curve $y = h(x)$ has an explicit domain restriction of $-6 \leq x \leq 8$ and a range of $-3 \leq y \leq 10$. State the new domain and range boundaries for the transformed function $g(x) = -2h(3x)$.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Connects domain mapping rules back to **Week 2, Day 6**. 

Apply horizontal scale factors to the domain limits, and apply vertical scale factors (including sign flips) to the range limits.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Calculate horizontal scale factor adjustment for domain limits: Divide by 3 **[1M]**
* **Step 2:** State the transformed domain profile: **$-2 \leq x \leq \frac{8}{3}$** **[1A]**
* **Step 3:** Multiply range boundaries by $-2$ and flip inequality bounds due to negative scaling: $-3 \cdot (-2) = 6$ and $10 \cdot (-2) = -20$ **[1M]**
* **Step 4:** State the transformed range profile: **$-20 \leq y \leq 6$** **[1A]**
</details>

---

### 🌀 Tier 2: The Multi-Step Twist (Problems 5–7)
*Focus: Managing compound operations simultaneously and tracking asymptotic boundary shifts in rational expressions.*

#### 5. Problem 5
A rational function profile is defined as $f(x) = \frac{1}{x + 3} - 2$. The graph undergoes a horizontal reflection across the $y$-axis, followed by a vertical stretch with a scale factor of $4$. Write down the explicit functional equation for this transformed model, $g(x)$, and state its new asymptotic equations.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Extends the rational asymptote mapping strategies from **Week 3, Day 11**. 

Reflections and stretches act directly on your vertical and horizontal asymptote boundary equations.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Apply horizontal reflection rule: Substitute $x \to -x \implies \frac{1}{-x + 3} - 2$ **[1M]**
* **Step 2:** Apply vertical stretch factor across entire expression: $g(x) = 4\left(\frac{1}{3 - x} - 2\right) = \mathbf{\frac{4}{3 - x} - 8}$ **[1A]**
* **Step 3:** Evaluate new vertical asymptote boundary: $3 - x = 0 \implies \mathbf{x = 3}$ **[1A]**
* **Step 4:** Evaluate new horizontal asymptote boundary limit: $\mathbf{y = -8}$ **[1A]**
</details>

---

#### 6. Problem 6
A radical model layout is given by $h(x) = \sqrt{x}$. The graph is transformed into the function $w(x) = 3\sqrt{-x + 2}$. List the complete, ordered sequence of transformations required to map $h(x)$ directly onto $w(x)$.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** This targets the order-of-operations sequencing rules developed in **Week 2**. 

When reading changes inside a functional argument, always address horizontal reflections or scales *before* applying horizontal translations unless the argument is explicitly factored.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Identify horizontal reflection factor from negative input sign: **Reflection across the $y$-axis** ($x \to -x$) **[1A]**
* **Step 2:** Factor horizontal argument to isolate translation accurately: $-x + 2 = -(x - 2)$. This indicates a shift **$2$ units to the right** **[1A]**
* **Step 3:** Identify external multiplier property: **Vertical stretch with a scale factor of $3$** **[1A]**
* **Step 4:** Verify final sequence order match: Horizontal reflection, followed by horizontal translation right by 2, followed by vertical stretch factor 3. **[1A]**
</details>

---

#### 7. Problem 7
Consider the cubic function $f(x) = x^3 - 4x$. The curve is subjected to an outer modulus filter resulting in $g(x) = |f(x)|$. Calculate the coordinates of all points where $f(x) = g(x)$ behaves completely invariantly.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Ties the concept of invariant tracking back to **Week 3, Day 11** and basic polynomial roots from **Week 1, Day 4**. 

For the mapping state $|f(x)| = f(x)$ to be true, what numerical sign constraint must apply to the function's outputs?
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Establish mathematical criteria for outer modulus invariance: $|f(x)| = f(x) \iff f(x) \geq 0$ **[1M]**
* **Step 2:** Factor parent cubic equation to locate regional root bounds: $x(x^2 - 4) = x(x - 2)(x + 2) = 0 \implies x = -2, 0, 2$ **[1M]**
* **Step 3:** Perform interval sign testing to determine where outputs are positive or zero:
  * For $-2 \leq x \leq 0$, outputs are positive.
  * For $x \geq 2$, outputs are positive. **[1M]**
* **Step 4:** State final continuous invariant coordinate domain limits: **$[-2, 0] \cup [2, \infty)$** **[1A]**
</details>

---

### 🏆 Tier 3: IB Command Term Challenge (Problems 8–9)
*Focus: Executing formal algebraic proofs and parameter extractions using mandatory DP Analysis & Approaches terminology.*

#### 8. Problem 8
Let $f(x) = x^2 - 2x - 3$. 
* **Task A:** **Show that** the roots of $y = f(|x|)$ are located exactly at $x = 3$ and $x = -3$.
* **Task B:** **Hence**, write down the total number of real solutions to the compound equation $|f(|x|)| = k$ where $k = 0$.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Combines inner and outer absolute value loops with quadratic root factorization from **Week 1, Day 2**. 

Remember that "Hence" dictates you **must** use the root findings from Task A to answer Task B instantly.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1 [Task A]:** Construct the inner modulus function model: $f(|x|) = |x|^2 - 2|x| - 3$ **[1M]**
* **Step 2 [Task A]:** Factor the expression as a quadratic in terms of $|x|$:
  $$(|x| - 3)(|x| + 1) = 0$$ **[1M]**
* **Step 3 [Task A]:** Solve the factored cases independently: $|x| = 3 \implies x = \pm 3$. Since $|x| = -1$ has no real solutions, the roots lock perfectly at **$x = 3$ and $x = -3$**. **[1A]** *(Q.E.D.)*
* **Step 4 [Task B]:** Identify that for an outer modulus equation to equal zero, the inner expression itself must vanish: $f(|x|) = 0$ **[1M]**
* **Step 5 [Task B]:** Use Task A roots directly to state the solution count: The expression vanishes exclusively at $x = 3$ and $x = -3$. Therefore, there are exactly **$2$ real solutions**. **[1A]**
</details>

---

#### 9. Problem 9
A function is defined as $g(x) = \sin(x)$. **Prove that** the transformed profile $y = g(|x|)$ is a perfectly symmetrical even function satisfying $f(-x) = f(x)$ across all valid real domains.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Previews periodic notation using the absolute value mapping laws from **Week 2**. 

To complete this proof, substitute $(-x)$ directly into the transformed model and evaluate using basic absolute value identity laws.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Construct the functional expression model: $f(x) = \sin(|x|)$ **[1M]**
* **Step 2:** Inject the negative domain parameter argument: $f(-x) = \sin(|-x|)$ **[1M]**
* **Step 3:** Apply core absolute value algebraic identity: $|-x| = |x|$ for all real numbers **[1M]**
* **Step 4:** Simplify and tie back to the target definition: $\sin(|-x|) = \sin(|x|) = f(x)$. Since $f(-x) = f(x)$, the function is proven to be even and symmetrical across the $y$-axis line. **[1A]**
</details>

---

### 🧪 Tier 4: Junior Paper 3 Investigation (Problem 10)
*Focus: Extended multi-stage conceptual modeling, pattern derivation, and invariant tracking.*

#### 10. Problem 10: The Scale Factor & Root Conservation Boundary
Let $f(x) = (x - \alpha)(x - \beta)$ be a standard polynomial quadratic system where $\alpha$ and $\beta$ are real non-zero roots such that $0 < \alpha < \beta$. Suppose we define a transformed horizontal compression model $g(x) = f(k \cdot x)$ where $k \in \mathbb{R}^+$.

* **Part A:** State the exact coordinate positions of the roots of $g(x)$ expressed cleanly in terms of parameters $\alpha$, $\beta$, and $k$.
* **Part B:** Let us construct an outer absolute value boundary function $h(x) = |g(x)|$. Derive the exact piecewise domain conditions under which $h(x) = -g(x)$.
* **Part C:** Investigate the spatial distance $\Delta R$ separate between the roots of $g(x)$ as the parameter scale factor $k$ varies. **Determine** the limiting value behavior of $\Delta R$ as $k \longrightarrow \infty$. **Prove** that there exists no finite positive value of $k$ that can reduce the root distance $\Delta R$ directly to zero while maintaining distinct initial roots.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Connects coordinate distance calculations from **Week 2** with the horizontal scaling parameters explored today. 

For Part C, write out an explicit algebraic equation for the distance separating the roots ($\Delta R = x_2 - x_1$) and analyze its structural limits as the compression factor $k$ scales up toward infinity.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1 [Part A]:** Set $g(x) = 0 \implies (kx - \alpha)(kx - \beta) = 0$. Solve to isolate roots: **$x_1 = \frac{\alpha}{k}$ and $x_2 = \frac{\beta}{k}$** **[1A]**
* **Step 2 [Part B]:** State outer absolute conversion rule condition: $|g(x)| = -g(x) \iff g(x) \leq 0$ **[1M]**
* **Step 3 [Part B]:** Identify where the positive opening quadratic sinks below zero line: Between its root intersections. State piecewise domain: **$\frac{\alpha}{k} \leq x \leq \frac{\beta}{k}$** **[1A]**
* **Step 4 [Part C]:** Set up the structural root distance separation formula equation:
  $$\Delta R = x_2 - x_1 = \frac{\beta}{k} - \frac{\alpha}{k} = \frac{\beta - \alpha}{k}$$ **[1M]**
* **Step 5 [Part C]:** Evaluate limit condition as horizontal compression scales to infinity:
  $$\lim_{k \to \infty} \Delta R = \lim_{k \to \infty} \frac{\beta - \alpha}{k} = \mathbf{0}$$ **[1A]**
* **Step 6 [Part C]:** Prove non-zero condition for finite parameters: Set $\Delta R = 0 \implies \frac{\beta - \alpha}{k} = 0$. For a fraction to equal zero, its numerator must vanish: $\beta - \alpha = 0 \implies \beta = \alpha$ **[1M]**
* **Step 7 [Part C]:** Conclude proof cleanly: Since the initial conditions explicitly state that $\alpha$ and $\beta$ are distinct distinct roots ($\alpha < \beta$), the numerator $(\beta - \alpha)$ is strictly greater than zero. Therefore, no finite, positive real number scaling parameter $k$ can ever compress the root distance directly to zero. **[1A]**
</details>