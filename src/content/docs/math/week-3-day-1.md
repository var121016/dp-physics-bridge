---
title: "Day 11: Linear Graph Transformations & Invariant Tracking"
description: "Core Strategy Blueprint and 10-Problem Tiered Track with integrated hints and full mark schemes per problem."
---


Welcome to Week 3. Today we reintegrate coordinate geometry back into functional mapping. We transition from viewing transformations as vague visual "sketches" to treating them as rigorous coordinate modifications acting on domain inputs and range outputs.

---

## 🧭 The Core Strategy Blueprint

### 👥 Parent Analytics Summary
* **The Core Gap:** In middle school, students are taught to shift graphs visually (e.g., "move it up or left"). The IB Diploma Programme completely shatters this superficial approach by hiding functions behind abstract parameters (such as $f(x-h)+k$) or by asking students to track specific points on an unknown curve. If a student relies on visual guessing, they will fail to secure method marks on Paper 1.
* **The Target Objective:** We are hardwiring the mechanics of linear transformations as clean coordinate maps: $(x, y) \longrightarrow (x', y')$. By focusing heavily on **invariant points** (coordinates that remain completely unchanged after a transformation), we ensure students build a rock-solid foundation for both complex calculus derivations and Paper 3 investigations.

### 🎒 First-Principles Script (The Feynman Technique)
> **Read this aloud to lock in the structural intuition:**
>
> "Think of a mathematical function as a locked processing machine. It takes a raw input parameter ($x$), runs its internal formula, and spits out a resulting output value ($y$). 
>
> When we transform a graph line, we are essentially hijacking that machine's pipeline at two different entry points:
>
> 1. **Outside the Machine ($f(x) \pm c$):** We wait until the machine finishes its calculation and hands us the output $y$. Then, we manually add or subtract $c$. Because we modify the output directly, this alters the vertical axis. The graph shifts cleanly up or down.
>
> 2. **Inside the Machine ($f(x \pm c)$):** We intercept the input variable *before* it can enter the processing engine. To get the exact same results as the original graph, every new input $x$ must actively change to counteract the modifier. This is why horizontal adjustments work completely backward: $f(x - 3)$ means the input must be $3$ units *larger* just to return to baseline. The entire graph shifts to the **right**.
>
> An **invariant point** is simply a coordinate that survives this hijacking process totally unaffected. If a transformation shifts every single output, no point can be invariant. Tracking these points keeps our coordinate geometry bulletproof."

---

## 🛠️ The 10-Problem Tiered Track

Execute these tasks completely on physical paper. **Calculators are strictly prohibited.** Show every structural step cleanly.

### 🛑 Tier 1: Core Tool Check (Problems 1–4)
*Focus: Isolating baseline functional equations, identifying matching mapping notations, and tracking simple intercept shifts.*

#### 1. Problem 1
A linear base model is given by $f(x) = 4x - 7$. Write the explicit functional equation for $g(x) = f(x - 2) + 3$ and state its coordinate mapping rule in the form $(x, y) \longrightarrow (x', y')$.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** This mirrors the direct variable substitution mechanics we established back in **Week 1 (Days 1–5)**. 

Replace every single instance of $x$ in the parent equation with the grouped argument $(x - 2)$, then append the vertical shift code $+3$ to the tail of the expression.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Substitute the horizontal parameter shift: $4(x - 2) - 7$ **[1M]**
* **Step 2:** Apply the external vertical adjustment: $4(x - 2) - 7 + 3$ **[1M]**
* **Step 3:** Expand and collect like terms: $4x - 8 - 4 = \mathbf{4x - 12}$ **[1A]**
* **Step 4:** Define the point mapping track: **$(x, y) \longrightarrow (x + 2, y + 3)$** **[1A]**
</details>

---

#### 2. Problem 2
The curve $y = h(x)$ contains a localized coordinate minimum located at $P(-3, 5)$. Determine the new coordinate position of this minimum point under the combined transformation mapping $y = h(x + 5) - 8$.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Think back to the coordinate mapping grids from **Week 2 (Days 6–10)**. 

Do not try to guess a formula shape. Apply the inverse operation to the input value $x$ (subtract $5$ from the coordinate) and apply the direct operational modifier to the output value $y$ (subtract $8$).
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Isolate the horizontal coordinate transformation rule: $x' = x - 5$ **[1M]**
* **Step 2:** Isolate the vertical coordinate transformation rule: $y' = y - 8$ **[1M]**
* **Step 3:** Pass the anchor point $P(-3, 5)$ through the rules: $x' = -3 - 5 = -8$ and $y' = 5 - 8 = -3$ **[1M]**
* **Step 4:** State final coordinate target: **$P'(-8, -3)$** **[1A]**
</details>

---

#### 3. Problem 3
A quadratic curve is defined by $w(x) = x^2 - 4$. If $w(x)$ undergoes a transformation to become $v(x) = w(x + 3)$, calculate the exact new coordinates of both the $y$-intercept and the roots ($x$-intercepts).

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** This utilizes your quadratic factor tracking from **Week 1, Day 2**. 

You can find the new roots either by finding the original roots of $w(x)$ and shifting them left by $3$, or by expanding the new polynomial $v(x)$ and factoring it from scratch.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Form the new algebraic model structure: $v(x) = (x + 3)^2 - 4$ **[1M]**
* **Step 2:** Expand completely to isolate constants: $v(x) = x^2 + 6x + 9 - 4 = x^2 + 6x + 5$ **[1M]**
* **Step 3:** Evaluate $v(0)$ to find the vertical intersection: $(0, 5)$ **[1A]**
* **Step 4:** Set $v(x) = 0$ and factor to solve for roots: $(x+5)(x+1) = 0 \implies \mathbf{x = -5, x = -1}$. Final Coordinate Nodes: **$(-5, 0)$ and $(-1, 0)$** **[2A]**
</details>

---

#### 4. Problem 4
Consider an arbitrary continuous profile $y = \phi(x)$ that passes directly through the origin $(0,0)$. State the exact mathematical condition under which the origin $(0,0)$ behaves as a completely **invariant point** when subjected to the general linear translation $f(x - h) + k$.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** This anchors the formal definition of function mapping constraints. 

For a coordinate point to be invariant, its final output value after transformation must equal its original baseline value under identical input positions.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** State the coordinate mapping equation for the origin point: $(0, 0) \longrightarrow (0 + h, 0 + k) = (h, k)$ **[1M]**
* **Step 2:** Set the transformed coordinate parameters equal to the initial resting state: $h = 0$ and $k = 0$ **[1M]**
* **Step 3:** State the structural functional verification condition: **$\phi(0 - h) + k = 0 \implies \phi(-h) + k = 0$** **[1A]**
</details>

---

### 🌀 Tier 2: The Multi-Step Twist (Problems 5–7)
*Focus: Managing compound operations simultaneously and tracking asymptotic boundary shifts in rational expressions.*

#### 5. Problem 5
A rational function layout is defined as $f(x) = \frac{3}{x - 2} + 1$ for $x \neq 2$. The graph is shifted via the directional translation vector $\vec{T} = \begin{pmatrix} -4 \\ 2 \end{pmatrix}$ to form the curve $y = g(x)$. Write down the equations of the transformed horizontal and vertical asymptotes.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Relies on the rational function structures introduced in **Week 1, Day 5**. 

Asymptotes are structural boundaries, not just imaginary lines. They transform 1:1 with the translation parameters inside column vectors.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Identify original structural boundary lines from denominator and limits: Vertical Asymptote ($VA$): $x = 2$, Horizontal Asymptote ($HA$): $y = 1$ **[1M]**
* **Step 2:** Extract translation metrics from vector $\vec{T}$: Horizontal shift left $4$, Vertical shift up $2$ **[1M]**
* **Step 3:** Apply horizontal shift parameters directly to $VA$: $x = 2 - 4 \implies \mathbf{x = -2}$ **[1A]**
* **Step 4:** Apply vertical shift parameters directly to $HA$: $y = 1 + 2 \implies \mathbf{y = 3}$ **[1A]**
</details>

---

#### 6. Problem 6
A function $y = \psi(x)$ undergoes a horizontal translation of $3$ units to the left, immediately followed by a vertical translation of $5$ units downward. Express this complete compound path algebraically as a single structural modification of $\psi(x)$, and evaluate the final position of an original point anchored at $K(1, -2)$.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** This chains together the coordinate translation transformations explored throughout **Week 2**. 

Be careful with the algebraic input signs vs the physical vector direction paths.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Apply horizontal injection rule for leftward translation: $\psi(x + 3)$ **[1M]**
* **Step 2:** Append vertical modification for downward translation: **$y = \psi(x + 3) - 5$** **[1A]**
* **Step 3:** Map input coordinate $K_x = 1 \longrightarrow 1 - 3 = -2$ **[1M]**
* **Step 4:** Map output coordinate $K_y = -2 \longrightarrow -2 - 5 = -7$. Target coordinate node: **$K'(-2, -7)$** **[1A]**
</details>

---

#### 7. Problem 7
Let $h(x) = 2x^2 - 8x + 5$. The curve is translated horizontally such that its new axis of symmetry locks exactly onto the line $x = -1$, followed by a vertical shift that pushes its vertex onto the $x$-axis. Derive the final transformed quadratic equation in its expanded polynomial form.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Re-engages the "completed square form" conversion skills mastered in **Week 1, Day 2**. 

Find the original turning point (vertex) first before trying to compute any coordinate shifting factors.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Factor and complete the square to locate original vertex parameters: $h(x) = 2(x^2 - 4x) + 5 = 2(x - 2)^2 - 8 + 5 = 2(x - 2)^2 - 3$. Original Vertex: $(2, -3)$ **[1M]**
* **Step 2:** Calculate horizontal translation step from old axis $x=2$ to new axis $x=-1$: Shift left by $3$ units $\implies 2(x + 3 - 2)^2 - 3 = 2(x + 1)^2 - 3$ **[1M]**
* **Step 3:** Calculate vertical translation step to place vertex on $x$-axis ($y=0$): Shift up by $3$ units $\implies 2(x + 1)^2 - 3 + 3 = 2(x + 1)^2$ **[1M]**
* **Step 4:** Expand the remaining vertex configuration into standard form: $2(x^2 + 2x + 1) = \mathbf{2x^2 + 4x + 2}$ **[1A]**
</details>

---

### 🏆 Tier 3: IB Command Term Challenge (Problems 8–9)
*Focus: Executing formal algebraic proofs and parameter extractions using mandatory DP Analysis & Approaches terminology.*

#### 8. Problem 8
A function is defined as $f(x) = \frac{1}{x}$. The line $y = g(x)$ represents a transformation defined by $g(x) = f(x - h) + k$.
* **Task A:** **Show that** the transformed equation can be written as $g(x) = \frac{kx + (1 - hk)}{x - h}$.
* **Task B:** **Hence**, given that $g(x)$ possesses a vertical asymptote at $x = 3$ and passes directly through the coordinate point $(4, 5)$, **find** the exact structural values of the parameters $h$ and $k$.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Re-evaluates your fractions and common denominator skills from **Week 1, Day 3**. 

For Task B, remember that "Hence" is a strict IB command term directive stating you **must** use your Task A algebraic expression to isolate the values.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1 [Task A]:** Write out the structural expansion with common denominators:
  $$g(x) = \frac{1}{x - h} + \frac{k(x - h)}{x - h}$$ **[1M]**
* **Step 2 [Task A]:** Combine terms across single fractional numerator boundary:
  $$g(x) = \frac{1 + kx - hk}{x - h} = \frac{kx + (1 - hk)}{x - h}$$ **[1A]** *(Crucial: Print statement exactly as requested to secure proof point).*
* **Step 3 [Task B]:** Set denominator equal to zero to process vertical asymptote: $x - h = 0 \implies h = 3$ **[1A]**
* **Step 4 [Task B]:** Substitute $h=3$ and point $(4, 5)$ directly into your Task A formula model:
  $$5 = \frac{k(4) + (1 - 3k)}{4 - 3} \implies 5 = 4k + 1 - 3k \implies \mathbf{k = 4}$$ **[2M/1A]**
</details>

---

#### 9. Problem 9
Consider the quadratic expression $p(x) = x^2 + bx + c$. **Prove that** if $p(x)$ undergoes a vertical translation of $+k$ and a horizontal translation of $+h$, the total number of real roots remains invariant if and only if $k = 0$.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Recalls the discriminant criteria ($\Delta = b^2 - 4ac$) from **Week 1, Day 2**. 

Think about which directions change the graph's crossings of the $x$-axis line vs which directions do not.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** State discriminant framework rule: The number of real roots is determined exclusively by the discriminant value $\Delta = b^2 - 4ac$ **[1M]**
* **Step 2:** Analyze horizontal shifts: A horizontal translation shifts the graph parallel to the $x$-axis, keeping its structural form and vertical relationship to the axis constant. Therefore, $\Delta$ remains invariant under any horizontal shift $h$ **[1M]**
* **Step 3:** Analyze vertical shifts: A vertical translation $+k$ alters the vertex height relative to the $x$-axis, changing the output values and directly modifying the discriminant calculation **[1M]**
* **Step 4:** Conclude proof logically: The number of crossings (roots) changes if the curve moves vertically up or down. Thus, root counts are invariant if and only if no vertical displacement occurs: **$k = 0$** **[1A]**
</details>

---

### 🧪 Tier 4: Junior Paper 3 Investigation (Problem 10)
*Focus: Extended multi-stage conceptual modeling, pattern derivation, and invariant tracking.*

#### 10. Problem 10: The Invariant Intersection Parameterization
Let $L_1$ be a baseline geometric line defined by the linear model $y = mx$. Suppose we apply a uniform transformation vector $\vec{T} = \begin{pmatrix} d \\ d \end{pmatrix}$ to $L_1$, generating a parallel transformed line $L_2$.

* **Part A:** Construct the explicit functional equation for $L_2$ in terms of gradient $m$ and translation parameter $d$.
* **Part B:** Let us define a secondary line $L_3$ that is perfectly perpendicular to $L_1$ and passes through the origin $(0,0)$. Find the coordinates of the intersection point $P$ between $L_2$ and $L_3$ expressed purely in terms of parameters $m$ and $d$.
* **Part C:** Investigate the behavior of the intersection coordinate $P$ as the gradient variable $m$ changes. **Determine** if there exists any specific value of $m$ that renders either the $x$-coordinate or the $y$-coordinate of $P$ completely **invariant** to changes in the translation distance parameter $d$. Fully justify your algebraic reasoning.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** This problem bridges **Week 2 perpendicular slope equations** with spatial vector parameters. 

For Part C, to prove a coordinate value is completely invariant to changes in $d$, your algebraic output formula must simplify to a point where the variable symbol $d$ disappears or resolves entirely to zero.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1 [Part A]:** Apply vector coordinate shift substitution principles: $y - d = m(x - d) \implies \mathbf{y = mx - md + d}$ **[1A]**
* **Step 2 [Part B]:** State normal line profile using negative reciprocal gradient parameters: $y = -\frac{1}{m}x$ **[1M]**
* **Step 3 [Part B]:** Equate both mathematical models to solve for simultaneous intersection points:
  $$-\frac{1}{m}x = mx - md + d \implies -x = m^2x - m^2d + md$$ **[1M]**
* **Step 4 [Part B]:** Isolate variable elements cleanly to solve for $x_k$ and $y_k$:
  $$x(m^2 + 1) = d(m^2 - m) \implies \mathbf{x_k = \frac{d(m^2 - m)}{m^2 + 1}}$$ **[1A]**
  $$y_k = -\frac{1}{m}\left(\frac{d(m^2-m)}{m^2+1}\right) \implies \mathbf{y_k = \frac{d(1 - m)}{m^2 + 1}}$$ **[1A]**
* **Step 5 [Part C]:** Set up invariance criteria condition: For a coordinate to be invariant to changes in $d$, the coefficients within the numerator brackets must evaluate cleanly to zero, removing the multiplier effect of parameter $d$ **[1M]**
* **Step 6 [Part C]:** Analyze the $x$-coordinate boundary parameters: $m^2 - m = 0 \implies m(m-1) = 0 \implies m = 0 \text{ or } m = 1$ **[1M]**
* **Step 7 [Part C]:** Analyze the $y$-coordinate boundary parameters: $1 - m = 0 \implies m = 1$ **[1M]**
* **Step 8 [Part C]:** State final logical conclusion: When the baseline line gradient is set explicitly to **$m = 1$**, the intersection point $P$ locks structurally onto the coordinate position **$(0,0)$**. At this specific setting, it remains completely **invariant** to any scalar expansion changes in the translation vector parameter $d$. **[1A]**
</details>