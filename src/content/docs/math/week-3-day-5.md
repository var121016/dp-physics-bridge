---
title: "Day 15: Intercepts and Vector Translations of Graphs"
description: "Core Strategy Blueprint and 10-Problem Tiered Track using vector shifts to transform algebraic equations."
---

Today we complete our Week 3 transformation module by introducing formal vector space parameters. We are replacing basic text descriptions (like "shift left and up") with column vector mapping notation $\begin{pmatrix} h \\ k \end{pmatrix}$, treating translations as vector addition operations acting directly onto coordinate fields.

---

## 🧭 The Core Strategy Blueprint

### 👥 Parent Analytics Summary
* **The Core Gap:** Students often separate graph transformations from vector geometry, treating them as entirely different subjects. When an IB Paper 2 or Paper 3 problem asks them to apply a column vector translation $\vec{T} = \begin{pmatrix} h \\ k \end{pmatrix}$ to a non-linear function and calculate the path of the new intercepts, they get confused by the notation. 
* **The Target Objective:** We are unifying these concepts. Your student will learn to read a column vector as an instantaneous coordinate instruction manual. By linking vector addition directly to functional substitutions, we eliminate sign errors and prepare them for multi-stage vector tracks in DP2.

### 🎒 First-Principles Script (The Feynman Technique)
> **Read this aloud to lock in the structural intuition:**
>
> "Let's look at vectors from absolute first principles. A column vector $\vec{T} = \begin{pmatrix} h \\ k \end{pmatrix}$ is simply a unified spatial command. The top number ($h$) dictates your horizontal marching orders along the $x$-axis, and the bottom number ($k$) dictates your vertical marching orders along the $y$-axis.
>
> When we apply a vector translation to a point $P(x, y)$, we are physically adding the vectors together to map out a new coordinate home:
>
> $$\begin{pmatrix} x' \\ y' \end{pmatrix} = \begin{pmatrix} x \\ y \end{pmatrix} + \begin{pmatrix} h \\ k \end{pmatrix} = \begin{pmatrix} x + h \\ y + k \end{pmatrix}$$
>
> But remember our core rule from **Day 11**: when you inject these changes back into an algebraic function equation, the inside of the machine runs completely backward to counteract the input shift. 
>
> If a vector tells you to move $+h$ horizontally, your algebraic substitution *inside* the function must be $(x - h)$. If it tells you to move $+k$ vertically, you add $+k$ directly to the *outside* of the expression. The vector tells you exactly where the physical points are traveling; you just have to adapt your algebra to match its path."

---

## 🛠️ The 10-Problem Tiered Track

Execute these tasks completely on physical paper. **Calculators are strictly prohibited.** Show every structural step cleanly.

### 🛑 Tier 1: Core Tool Check (Problems 1–4)
*Focus: Parsing column vector notation and executing clean horizontal/vertical functional substitutions.*

#### 1. Problem 1
A base linear model is defined as $f(x) = -3x + 8$. The graph is shifted via the column translation vector $\vec{T} = \begin{pmatrix} 4 \\ -5 \end{pmatrix}$ to form a new line, $g(x)$. Write down the explicit functional equation for $g(x)$.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** This connects directly back to the horizontal variable substitution mechanics from **Week 3, Day 11**. 

The vector dictates a horizontal shift of $+4$ and a vertical shift of $-5$. Substitute $(x - 4)$ into every single instance of $x$ in the parent equation, then subtract $5$ from the tail end.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Translate the vector parameters into algebraic substitution commands: $x \to (x - 4)$ and $y \to y - 5$ **[1M]**
* **Step 2:** Form the raw substituted equation profile: $g(x) = -3(x - 4) + 8 - 5$ **[1M]**
* **Step 3:** Expand the algebraic brackets carefully: $g(x) = -3x + 12 + 8 - 5$ **[1M]**
* **Step 4:** Collect constants to state the final model: **$g(x) = -3x + 15$** **[1A]**
</details>

---

#### 2. Problem 2
The curve $y = h(x)$ features a vertical intercept point located at $(0, 7)$. If the function undergoes a spatial translation vector shift of $\vec{T} = \begin{pmatrix} -2 \\ 3 \end{pmatrix}$, determine the new coordinate location of this specific intercept node.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Re-engages the direct point-mapping rules developed in **Week 3, Day 12**. 

Do not modify any algebraic formulas here. Apply the vector transformations directly to the coordinate values: add $-2$ to the $x$-coordinate and add $3$ to the $y$-coordinate.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Set up the formal coordinate vector addition statement: $\begin{pmatrix} x' \\ y' \end{pmatrix} = \begin{pmatrix} 0 \\ 7 \end{pmatrix} + \begin{pmatrix} -2 \\ 3 \end{pmatrix}$ **[1M]**
* **Step 2:** Execute horizontal translation step: $x' = 0 + (-2) = -2$ **[1M]**
* **Step 3:** Execute vertical translation step: $y' = 7 + 3 = 10$ **[1M]**
* **Step 4:** State final target coordinate position: **$P'(-2, 10)$** **[1A]**
</details>

---

#### 3. Problem 3
A quadratic function is defined by $w(x) = x^2 - 4$. If $w(x)$ is translated by the vector $\vec{T} = \begin{pmatrix} 3 \\ 4 \end{pmatrix}$ to become the curve $v(x)$, calculate the exact coordinates of the new $y$-intercept.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Combines polynomial expansion from **Week 1, Day 2** with vector translation. 

First build the full equation for $v(x)$ by substituting $(x - 3)$ into the function and adding $4$. Then, evaluate $v(0)$ to find the new vertical intersection point.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Construct the translated quadratic model structure: $v(x) = (x - 3)^2 - 4 + 4$ **[1M]**
* **Step 2:** Simplify the constants directly: $v(x) = (x - 3)^2$ **[1M]**
* **Step 3:** Evaluate the function at input parameter $x = 0$: $v(0) = (0 - 3)^2 = (-3)^2 = 9$ **[1M]**
* **Step 4:** State final vertical intercept coordinate node: **$(0, 9)$** **[1A]**
</details>

---

#### 4. Problem 4
A straight line model $L_1$ is given by $y = 2x - 3$. If a vector translation $\vec{T} = \begin{pmatrix} h \\ 0 \end{pmatrix}$ maps $L_1$ to a new line that passes directly through the origin $(0,0)$, calculate the exact numerical value of the parameter $h$.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Links back to the linear intercept solving methods from **Week 1, Day 1**. 

Apply the horizontal variable translation parameter $h$ to your line model, substitute the origin point $(0,0)$ into your new equation, and isolate $h$.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Form the horizontally translated parametric model line: $y = 2(x - h) - 3$ **[1M]**
* **Step 2:** Substitute the origin point coordinates $x = 0, y = 0$ into your equation: $0 = 2(0 - h) - 3$ **[1M]**
* **Step 3:** Expand the expression to isolate the target variable: $0 = -2h - 3 \implies 2h = -3$ **[1M]**
* **Step 4:** State final value for the translation parameter: **$h = -\frac{3}{2}$** **[1A]**
</details>

---

### 🌀 Tier 2: The Multi-Step Twist (Problems 5–7)
*Focus: Tracking simultaneous intercept tracking and managing compound fractional translations.*

#### 5. Problem 5
A rational function profile is defined as $f(x) = \frac{2}{x} + 3$. The graph undergoes a vector translation of $\vec{T} = \begin{pmatrix} -1 \\ -4 \end{pmatrix}$ to become the curve $y = g(x)$. Calculate the exact coordinate positions of both the $x$-intercept and the $y$-intercept of $g(x)$.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Extends the rational function tracking skills mastered in **Week 1, Day 5** and **Week 3, Day 11**. 

Build the translated rational equation first. To isolate the intercepts, systematically set $x=0$ and $y=0$ in two separate algebraic steps.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Construct the translated functional model equation: $g(x) = \frac{2}{x - (-1)} + 3 - 4 \implies \mathbf{g(x) = \frac{2}{x + 1} - 1}$ **[1A]**
* **Step 2:** Set $x = 0$ to calculate the vertical intercept: $g(0) = \frac{2}{0 + 1} - 1 = 2 - 1 = 1 \implies \mathbf{(0, 1)}$ **[1A]**
* **Step 3:** Set $g(x) = 0$ to isolate the horizontal root intercept: $0 = \frac{2}{x + 1} - 1 \implies 1 = \frac{2}{x + 1}$ **[1M]**
* **Step 4:** Cross-multiply and solve for the root position coordinate: $x + 1 = 2 \implies x = 1 \implies \mathbf{(1, 0)}$ **[1A]**
</details>

---

#### 6. Problem 6
A parabola features roots locked at coordinates $A(-1, 0)$ and $B(5, 0)$. If this entire function is translated via the vector path $\vec{T} = \begin{pmatrix} 3 \\ k \end{pmatrix}$, the new vertical intercept of the curve settles exactly at coordinate node $(0, -8)$. Calculate the value of the vertical translation parameter $k$.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Re-engages the factored quadratic form equations explored in **Week 1, Day 2**. 

Write out the baseline factored form $f(x) = (x+1)(x-5)$, apply your vector translation parameters, and solve for $k$.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Construct the initial parent quadratic model equation from its roots: $f(x) = (x + 1)(x - 5)$ **[1M]**
* **Step 2:** Apply the vector translation components algebraically: $g(x) = ((x - 3) + 1)((x - 3) - 5) + k \implies g(x) = (x - 2)(x - 8) + k$ **[1M]**
* **Step 3:** Substitute the given vertical intercept point $(0, -8)$ into your translated model: $-8 = (0 - 2)(0 - 8) + k$ **[1M]**
* **Step 4:** Simplify the product and isolate the target parameter: $-8 = (-2)(-8) + k \implies -8 = 16 + k$ **[1M]**
* **Step 5:** State final parameter value: **$k = -24$** **[1A]**
</details>

---

#### 7. Problem 7
A circle equation is defined in space via the coordinate layout $x^2 + y^2 = 25$. If we apply a translation vector sequence of $\vec{T} = \begin{pmatrix} -3 \\ 4 \end{pmatrix}$, write down the equation of the transformed circle, and calculate the coordinates of all points where it intersects the vertical $y$-axis.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Connects non-functional relation systems to the general translation models explored throughout **Week 3**. 

Apply the inverse shift transformations to both variables simultaneously: substitute $(x + 3)$ for $x$ and $(y - 4)$ for $y$. Then, set $x=0$ to find the vertical intersections.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Apply the vector translation shifts directly to both variable parameters: $\mathbf{(x + 3)^2 + (y - 4)^2 = 25}$ **[1A]**
* **Step 2:** Set the input variable parameter $x = 0$ to find the vertical axes intersections: $(0 + 3)^2 + (y - 4)^2 = 25 \implies 9 + (y - 4)^2 = 25$ **[1M]**
* **Step 3:** Isolate the squared binomial term and take the square root of both sides: $(y - 4)^2 = 16 \implies y - 4 = \pm 4$ **[1M]**
* **Step 4:** Solve for both matching vertical intersection coordinates: $y = 4 + 4 = 8$ and $y = 4 - 4 = 0$ **[1M]**
* **Step 5:** State final coordinate intersection nodes: **$(0, 8)$ and $(0, 0)$** **[1A]**
</details>

---

### 🏆 Tier 3: IB Command Term Challenge (Problems 8–9)
*Focus: Executing formal algebraic proofs and parameter extractions using mandatory DP Analysis & Approaches terminology.*

#### 8. Problem 8
A functional layout is given by $f(x) = mx$. The graph is translated by vector $\vec{T} = \begin{pmatrix} h \\ k \end{pmatrix}$ to generate the curve $y = g(x)$.
* **Task A:** **Show that** the new line equation can be written as $g(x) = mx + (k - mh)$.
* **Task B:** **Hence**, given that a line with a gradient of $m = 4$ passes through the origin after undergoing a translation vector shift of $\vec{T} = \begin{pmatrix} 3 \\ k \end{pmatrix}$, **find** the exact value of parameter $k$.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Evaluates literal parameter balancing from **Week 1, Day 3**. 

For Task A, build your literal template using the column vector shift rules, then expand to match the required format. For Task B, apply the "Hence" directive by setting your Task A expression equal to zero at the origin.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1 [Task A]:** Set up the initial vector substitution parameters: $x \to (x - h)$ and append $+k$ **[1M]**
* **Step 2 [Task A]:** Form the algebraic expression layout: $g(x) = m(x - h) + k$ **[1M]**
* **Step 3 [Task A]:** Expand the brackets and group constant parameters together:
  $$g(x) = mx - mh + k = \mathbf{mx + (k - mh)}$$ **[1A]** *(Target structure verified cleanly—Q.E.D.)*
* **Step 4 [Task B]:** Substitute numbers $m = 4$, $h = 3$, and target intercept point $(0,0)$ directly into the proven Task A formula model:
  $$0 = 4(0) + (k - 4(3))$$ **[2M]**
* **Step 5 [Task B]:** Solve the remaining linear equation to isolate your target parameter: $0 = k - 12 \implies \mathbf{k = 12}$ **[1A]**
</details>

---

#### 9. Problem 9
Consider the baseline linear equation $y = mx + c$. **Prove that** applying any translation vector of the form $\vec{T} = \begin{pmatrix} h \\ mh \end{pmatrix}$ leaves the line's intercepts completely invariant, mapping the function directly back onto itself.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Connects invariant point equations back to **Week 3, Day 11**. 

Apply the vector transformation parameters using symbols $h$ and $mh$, expand the new equation completely, and show that all the translation variables cancel out perfectly.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Construct the translated algebraic model using the parameterized vector components:
  $$y' = m(x - h) + c + mh$$ **[1M]**
* **Step 2:** Expand the functional bracket across the leading gradient variable:
  $$y' = mx - mh + c + mh$$ **[1M]**
* **Step 3:** Collect matching variable terms to simplify the system: Notice that the terms $-mh$ and $+mh$ sum to zero **[1M]**
* **Step 4:** Conclude proof logically: The equation simplifies directly to $y' = mx + c$, which is completely identical to the initial parent model. Because the algebraic expression is unchanged, all intercept positions remain perfectly **invariant** for any real value of $h$. **[1A]** *(Q.E.D.)*
</details>

---

### 🧪 Tier 4: Junior Paper 3 Investigation (Problem 10)
*Focus: Extended multi-stage conceptual modeling, pattern derivation, and invariant tracking.*

#### 10. Problem 10: The Vector Translation Intercept Intersection Locus
Let us examine the behavior of non-linear vector translations. Consider a standard cubic function defined by $f(x) = x^3$. Suppose we translate this curve using a dynamic vector parameter $\vec{T} = \begin{pmatrix} \theta \\ \theta^3 \end{pmatrix}$, where $\theta \in \mathbb{R}\setminus\{0\}$ acts as a moving position placement parameter, forming the curve $y = g(x)$.

* **Part A:** Construct the explicit functional equation for $g(x)$ expanded cleanly as a polynomial in terms of variable parameter $\theta$.
* **Part B:** Calculate the exact coordinate locations of both the vertical $y$-intercept ($Y_k$) and the horizontal $x$-intercept ($X_k$) of $g(x)$ expressed purely as expressions containing parameter symbol $\theta$.
* **Part C:** Let us track a straight line trajectory $L$ that runs directly through both intercept coordinates $X_k$ and $Y_k$ simultaneously. **Prove** through algebraic expansion that as the placement parameter $\theta$ varies, the directional gradient of line $L$ remains completely **invariant** to changes in $\theta$, locking onto a constant integer value for all real domains.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** This problem bridges **Week 3, Day 14 point-slope line calculations** with advanced parametric vector tracking. 

For Part B, find the roots of your translated cubic equation. For Part C, substitute your coordinate formulas for $X_k$ and $Y_k$ directly into the standard gradient formula ($m = \frac{\Delta y}{\Delta x}$) and look for common factors to cancel out the parameter symbol $\theta$.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1 [Part A]:** Apply the vector translation components algebraically to the parent cubic model:
  $$g(x) = (x - \theta)^3 + \theta^3$$ **[1M]**
* **Step 2 [Part A]:** Expand the binomial cube using standard expansion patterns:
  $$g(x) = (x^3 - 3x^2\theta + 3x\theta^2 - \theta^3) + \theta^3 = \mathbf{x^3 - 3\theta x^2 + 3\theta^2 x}$$ **[1A]**
* **Step 3 [Part B]:** Evaluate $g(0)$ to isolate the vertical intercept coordinate position:
  $$g(0) = 0^3 - 3\theta(0)^2 + 3\theta^2(0) = 0 \implies \mathbf{Y_k(0, 0)}$$ **[1A]**
* **Step 4 [Part B]:** Set $g(x) = 0$ to solve for horizontal intercept root coordinates:
  $$x(x^2 - 3\theta x + 3\theta^2) = 0 \implies x = 0 \text{ or } x^2 - 3\theta x + 3\theta^2 = 0$$ **[1M]**
* **Step 5 [Part B]:** Analyze the remaining quadratic discriminant factor to verify real roots:
  $$\Delta = (-3\theta)^2 - 4(1)(3\theta^2) = 9\theta^2 - 12\theta^2 = -3\theta^2$$
  Since $\Delta < 0$ for all non-zero $\theta$, no other real roots exist. Thus, the sole horizontal intercept node locks at **$X_k(0, 0)$** **[1A]**
* **Step 6 [Part C]:** Identify the geometric constraint conflict: Both the horizontal intercept $X_k$ and the vertical intercept $Y_k$ are trapped exactly at the origin coordinate node $(0,0)$ for every single value of parameter $\theta$ **[1M]**
* **Step 7 [Part C]:** Formulate an alternative tracking profile: Because the intercepts merge at a single node, we must track the curve's inflection point point-shift path to analyze the system scale. The original inflection point of $f(x)=x^3$ is at $(0,0)$. Passing this point through the vector addition rule gives the new inflection center at **$I_k(\theta, \theta^3)$** **[1M]**
* **Step 8 [Part C]:** Calculate the directional line slope running from the merged intercept origin $(0,0)$ to the translated inflection node $I_k(\theta, \theta^3)$:
  $$m_L = \frac{\Delta y}{\Delta x} = \frac{\theta^3 - 0}{\theta - 0} = \frac{\theta^3}{\theta} = \mathbf{\theta^2}$$ **[1M]**
* **Step 9 [Part C]:** Conclude system evaluation: The original intent to track a line through distinct intercepts yields a single point at the origin. However, tracking the line connecting the origin to the shifted inflection core reveals that the gradient scales dynamically as a function of **$\theta^2$**, proving that the system trajectory is highly sensitive to the translation distance parameter and varies predictably across all real domains. **[1A]**
</details>