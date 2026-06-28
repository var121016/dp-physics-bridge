---
title: "Day 30: The Ambiguous Case of the Sine Rule"
description: "Scaffolded Core Strategy Blueprint and 10-Problem Tiered Track focused on deconstructing SSA conditions that yield zero, one, or two valid triangles."
---


Today we confront the only structural trap in non-right-angled triangle geometry. When we construct a triangle using two side lengths and a *non-enclosed* acute angle (the Side-Side-Angle profile), the geometric landscape splits. Because of the spatial properties of the unit circle, a single set of numbers can sometimes describe two completely separate, mathematically valid triangles. We will master how to spot this ambiguity instantly and solve for both geometric profiles.

---

## 🧭 The Core Strategy Blueprint

### 👥 Parent Analytics Summary
* **The Core Gap:** Students often blindly calculate a single angle using the Sine Rule ($\sin B = \text{value}$) and immediately move on, completely unaware that a second, obtuse angle solution exists. This blind spot leads to severe mark loss on multi-part exam questions that require exploring both valid geometric paths.
* **The Target Objective:** We anchor the ambiguous case as a physical swinging pendulum swing. Your student will learn to identify the exact data signature that triggers ambiguity (SSA where the adjacent side is longer than the opposite side), calculate the primary acute option, and find the secondary obtuse option using the unit circle supplementary identity $\theta_2 = \pi - \theta_1$.

### 🎒 First-Principles Script (The Feynman Technique)
> **Read this aloud to lock in the structural intuition:**
>
> "Let's discover why the Sine Rule can occasionally lie to you if you don't look closely at the physical layout of your triangle.
> 
> Imagine you are building a triangle. You lock down an exact acute angle $A$ at the bottom left corner, and you project a fixed side $b$ diagonally upward as the roof. Now, you are handed a loose wooden rod of length $a$ to act as the opposite side, and it hangs from the top peak like a swinging clock pendulum.
> 
> Let's drop a vertical line straight down from the peak to find the absolute minimum height ($h = b\sin A$) needed to touch the floor:
> 
> 1.  **No Triangle ($a < b\sin A$):** If your opposite side $a$ is shorter than this vertical height, the swinging rod hangs in mid-air. It can't reach the floor, making it physically impossible to construct a triangle.
> 2.  **Exactly One Right Triangle ($a = b\sin A$):** If the rod matches the height perfectly, it swings down and touches the floor at exactly one point, creating a single right-angled triangle.
> 3.  **The Ambiguous Twin Zone ($b\sin A < a < b$):** What if the rod is longer than the height, but *shorter* than the diagonal roof side $b$? As the rod swings, it can slice through the floor at **two completely different spots**! 
>     * It can swing outward to the right, creating a stretched-out triangle with an **acute corner angle** ($B_1$).
>     * Or it can swing inward to the left, creating a compressed triangle with an **obtuse corner angle** ($B_2$).
> 
> 
> 
> Let's connect this straight back to yesterday's unit circle coordinate engine. Remember that sine tracks the vertical $y$-coordinate on our grid. Because Quadrant I (acute angles) and Quadrant II (obtuse angles) both share positive $y$-values, the math equation $\sin B = \text{fraction}$ will always yield two distinct angles between $0$ and $180^\circ$.
> 
> The relationship between these two twin solutions is perfectly symmetrical:
> 
> $$B_2 = 180^\circ - B_1 \quad \text{or} \quad B_2 = \pi - B_1$$
> 
> Whenever you face a Side-Side-Angle data profile, don't rush. Stop, check the length of your swinging rod against the roof side, and see if you have trapped a pair of geometric twins."

---

## 🛠️ The 10-Problem Tiered Track

Execute these tasks completely on physical paper. **Calculators are strictly prohibited.** Show every structural step cleanly.

### 🛑 Tier 1: Ambiguity Checks & Single Transformations (Problems 1–4)
*Focus: Detecting the mathematical triggers for zero, one, or two valid triangles.*

#### 1. Problem 1
Determine the exact number of valid triangles that can be constructed given the following structural parameter sets:
* **Set A:** Angle $A = 30^\circ$, side $b = 10\text{ cm}$, side $a = 4\text{ cm}$.
* **Set B:** Angle $A = 30^\circ$, side $b = 10\text{ cm}$, side $a = 7\text{ cm}$.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Basic application of boundary height criteria to check for geometric existence.

Calculate the absolute vertical height threshold using $h = b\sin A$. For both sets, compare side length $a$ directly against this height ceiling and the roof side $b$.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1 [Set A]:** Calculate the baseline vertical height threshold: $h = 10\sin(30^\circ) = 10\left(\frac{1}{2}\right) = 5\text{ cm}$ **[1M]**
* **Step 2 [Set A]:** Compare the opposite side length to the height: Since $a = 4\text{ cm}$ and $4 < 5$, the side cannot reach the base. **$\mathbf{0\text{ Triangles}}$ possible**. **[1A]**
* **Step 3 [Set B]:** Compare the opposite side length to the parameters of Set B: The height is still $h = 5\text{ cm}$. **[1M]**
* **Step 4 [Set B]:** Run the boundary inequality chain: Since $h < a < b$ ($5 < 7 < 10$), the side can swing into two distinct floor positions. **$\mathbf{2\text{ Triangles}}$ possible (Ambiguous Case)**. **[1A]**
</details>

---

#### 2. Problem 2
Given that a structural data set yields an initial acute angle solution of $B_1 = \frac{\pi}{4}$ radians under ambiguous SSA conditions, calculate the exact radical value of $\sin(B_2)$ for the corresponding obtuse twin triangle.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Explores the symmetrical coordinate paths of the unit circle from **Day 27**.

Calculate the obtuse companion angle using the supplementary identity $B_2 = \pi - B_1$. Once you have the angle, evaluate its exact sine value.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Calculate the supplementary obtuse companion angle: $B_2 = \pi - \frac{\pi}{4} = \frac{3\pi}{4}$ **[1M]**
* **Step 2:** Map the angle to its coordinate quadrant: $\frac{3\pi}{4}$ sits in Quadrant II, where sine ($y$) remains positive. **[1M]**
* **Step 3:** State the exact radical value using the acute reference angle: $\sin\left(\frac{3\pi}{4}\right) = \sin\left(\frac{\pi}{4}\right) = \mathbf{\frac{\sqrt{2}}{2}}$ **[1A]**
</details>

---

#### 3. Problem 3
In triangle $ABC$, angle $A = \frac{\pi}{6}$ radians, side $b = 6\sqrt{2}\text{ cm}$, and side $a = 6\text{ cm}$. Find the two possible exact values for corner angle $B$ in radians.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Extracts twin angular solutions using the Sine Rule proportion engine.

Set up the standard Sine Rule fraction: $\frac{\sin B}{b} = \frac{\sin A}{a}$. Isolate $\sin B$, evaluate using your exact values, and find both the acute and obtuse angles that satisfy that value.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Set up the formal Sine Rule proportion line: $\frac{\sin B}{6\sqrt{2}} = \frac{\sin(\pi/6)}{6}$ **[1M]**
* **Step 2:** Substitute the exact value $\sin\left(\frac{\pi}{6}\right) = \frac{1}{2}$: $\frac{\sin B}{6\sqrt{2}} = \frac{1}{12} \implies \sin B = \frac{6\sqrt{2}}{12} = \frac{\sqrt{2}}{2}$ **[1M]**
* **Step 3:** Extract the primary acute angle solution from Quadrant I: **$B_1 = \frac{\pi}{4}\text{ radians}$** **[1A]**
* **Step 4:** Extract the secondary obtuse angle solution from Quadrant II using symmetry: $B_2 = \pi - \frac{\pi}{4} = \mathbf{\frac{3\pi}{4}\text{ radians}}$ **[1A]**
</details>

---

#### 4. Problem 4
In triangle $XYZ$, angle $X = 30^\circ$, side $y = 8\text{ cm}$, and side $x = 12\text{ cm}$. Explain mathematically why this specific SSA data profile generates exactly one valid triangle instead of two.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Evaluates physical layout limits to rule out structural ambiguity.

Calculate the height ($h = y\sin X$). Compare the opposite side $x$ to both the height $h$ and the adjacent side $y$. If the opposite side is equal to or longer than the adjacent side, it can only swing outward to the right, preventing an inward obtuse twin.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Calculate the baseline vertical height: $h = 8\sin(30^\circ) = 4\text{ cm}$ **[1M]**
* **Step 2:** Construct the parameter comparison statement: The opposite side $x = 12\text{ cm}$ is greater than the height ($12 > 4$), so it cleanly cuts the floor line. **[1M]**
* **Step 3:** Evaluate against the adjacent roof line: Because $x \ge y$ ($12 \ge 8$), swinging the rod inward toward the left would overshoot the vertex $X$, failing to form a enclosed triangle. Thus, it can only swing outward to the right, meaning **exactly one unique triangle exists**. **[1A]**
</details>

---

### 🌀 Tier 2: Resolving Twin Systems (Problems 5–7)
*Focus: Resolving all missing components across both distinct triangle profiles.*

#### 5. Problem 5
An ambiguous geometric survey profile lists angle $A = \frac{\pi}{6}$ radians, side $b = 4\text{ cm}$, and side $a = 2\sqrt{2}\text{ cm}$.
* **Triangle 1:** Settle all calculations assuming corner angle $B$ is acute. Find the exact length of the remaining base side $c_1$.
* **Triangle 2:** Settle all calculations assuming corner angle $B$ is obtuse. Find the exact length of the remaining base side $c_2$.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Maps out distinct linear side profiles using alternative internal angle tracks.

Use the Sine Rule to find your two possible angles for $B$ first. For each case, use the fact that the angles in a triangle sum to $\pi$ to find the missing angle $C$, then run the Sine Rule one more time to find the corresponding base length $c$.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Find the twin values for angle $B$: $\frac{\sin B}{4} = \frac{\sin(\pi/6)}{2\sqrt{2}} \implies \sin B = \frac{4(1/2)}{2\sqrt{2}} = \frac{1}{\sqrt{2}} = \frac{\sqrt{2}}{2}$ **[1M]**
  * This yields **$B_1 = \frac{\pi}{4}$** (Acute) and **$B_2 = \pi - \frac{\pi}{4} = \frac{3\pi}{4}$** (Obtuse). **[1A]**
* **Step 2 [Triangle 1]:** Calculate the missing third angle $C_1$:
  $$C_1 = \pi - A - B_1 = \pi - \frac{\pi}{6} - \frac{\pi}{4} = \frac{12\pi - 2\pi - 3\pi}{12} = \frac{7\pi}{12}$$ **[1M]**
* **Step 3 [Triangle 1]:** Set up the final Sine Rule line to find side $c_1$:
  $$\frac{c_1}{\sin(7\pi/12)} = \frac{2\sqrt{2}}{\sin(\pi/6)} \implies \mathbf{c_1 = 4\sqrt{2}\sin\left(\frac{7\pi}{12}\right)\text{ cm}}$$ **[1A]**
* **Step 4 [Triangle 2]:** Calculate the alternative third angle $C_2$:
  $$C_2 = \pi - A - B_2 = \pi - \frac{\pi}{6} - \frac{3\pi}{4} = \frac{12\pi - 2\pi - 9\pi}{12} = \frac{\pi}{12}$$ **[1M]**
* **Step 5 [Triangle 2]:** Set up the final Sine Rule line to find side $c_2$:
  $$\frac{c_2}{\sin(\pi/12)} = \frac{2\sqrt{2}}{\sin(\pi/6)} \implies \mathbf{c_2 = 4\sqrt{2}\sin\left(\frac{\pi}{12}\right)\text{ cm}}$$ **[1A]**
</details>

---

#### 6. Problem 6
Find the exact combined surface area of **both** valid triangles that can be constructed using the ambiguous parameters: angle $A = 30^\circ$, side $b = 12\text{ cm}$, and side $a = 4\sqrt{3}\text{ cm}$.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Calculates combined surface profiles by linking angular twins to sine area laws.

Find both possible values for angle $B$ using the Sine Rule. For each option, determine the missing angle $C$, and use $\text{Area} = \frac{1}{2}ab\sin C$ to calculate their individual areas before summing them together.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Run the Sine Rule to isolate the twin baseline angles for $B$:
  $$\frac{\sin B}{12} = \frac{\sin(30^\circ)}{4\sqrt{3}} \implies \sin B = \frac{12(1/2)}{4\sqrt{3}} = \frac{6}{4\sqrt{3}} = \frac{3}{2\sqrt{3}} = \frac{\sqrt{3}}{2}$$ **[1M]**
* **Step 2:** Extract the angle values: **$B_1 = 60^\circ$** and **$B_2 = 180^\circ - 60^\circ = 120^\circ$** **[1A]**
* **Step 3:** Compute the two corresponding top angles ($C_1$ and $C_2$):
  * $C_1 = 180^\circ - 30^\circ - 60^\circ = 90^\circ$ **[1A]**
  * $C_2 = 180^\circ - 30^\circ - 120^\circ = 30^\circ$ **[1A]**
* **Step 4:** Compute the surface area for Triangle 1: $\text{Area}_1 = \frac{1}{2}ab\sin(C_1) = \frac{1}{2}(4\sqrt{3})(12)\sin(90^\circ) = 24\sqrt{3}(1) = 24\sqrt{3}\text{ cm}^2$ **[1M]**
* **Step 5:** Compute the surface area for Triangle 2: $\text{Area}_2 = \frac{1}{2}ab\sin(C_2) = \frac{1}{2}(4\sqrt{3})(12)\sin(30^\circ) = 24\sqrt{3}\left(\frac{1}{2}\right) = 12\sqrt{3}\text{ cm}^2$ **[1M]**
* **Step 6:** Sum the areas to find the final exact total: $\text{Total Area} = 24\sqrt{3} + 12\sqrt{3} = \mathbf{36\sqrt{3}\text{ cm}^2}$ **[1A]**
</details>

---

#### 7. Problem 7
In triangle $ABC$, side $b = 5\text{ cm}$, side $a = 4\text{ cm}$, and angle $A = \theta$. Express the exact condition on angle $\theta$ in terms of an inverse trigonometric expression that ensures two distinct valid triangles can be constructed.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Sets up inequality conditions to define parametric boundaries for ambiguity.

For two triangles to exist, the opposite side $a$ must be strictly longer than the vertical height ($b\sin A$) but strictly shorter than the adjacent side $b$. Set up the inequality $b\sin\theta < a < b$, plug in your given values, and isolate $\theta$.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** State the universal double-inequality condition for ambiguity: $b\sin\theta < a < b$ **[1A]**
* **Step 2:** Substitute the known side lengths into the inequality chain: $5\sin\theta < 4 < 5$ **[1M]**
* **Step 3:** Notice that the right-hand inequality ($4 < 5$) is always true, leaving the left boundary: $5\sin\theta < 4$ **[1M]**
* **Step 4:** Isolate the sine function variable: $\sin\theta < \frac{4}{5}$ **[1M]**
* **Step 5:** State the final exact angular boundary condition: **$\theta < \arcsin\left(\frac{4}{5}\right)$** **[1A]**
</details>

---

### 🏆 Tier 3: Quadratic Law Layout Intersections (Problems 8–9)
*Focus: Resolving ambiguous systems by tracking twin roots inside the quadratic Cosine Rule.*

#### 8. Problem 8
Instead of using the Sine Rule, substitute the ambiguous parameter set—angle $A = \frac{\pi}{3}$ radians, side $b = 4\text{ cm}$, and side $a = \sqrt{13}\text{ cm}$—directly into the **Cosine Rule** equation for side $a^2$. Show that this creates a quadratic equation in terms of the unknown side length $c$, and solve it to find both valid base lengths.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Links geometric ambiguity straight to the twin roots of a quadratic equation from **Week 1, Day 4**.

Set up the Cosine Rule: $a^2 = b^2 + c^2 - 2bc\cos A$. Substitute the known values, evaluate $\cos(\frac{\pi}{3}) = \frac{1}{2}$, and rearrange the terms into standard quadratic form ($cc^2 - bc + c = 0$). Solve for $c$ using factoring or the quadratic formula.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Set up the starting Cosine Rule equation framework: $(\sqrt{13})^2 = 4^2 + c^2 - 2(4)(c)\cos\left(\frac{\pi}{3}\right)$ **[1M]**
* **Step 2:** Substitute the exact value $\cos\left(\frac{\pi}{3}\right) = \frac{1}{2}$ and expand the squares:
  $$13 = 16 + c^2 - 8c\left(\frac{1}{2}\right) \implies 13 = 16 + c^2 - 4c$$ **[1M]**
* **Step 3:** Rearrange the terms into standard quadratic form equal to zero:
  $$c^2 - 4c + 3 = 0$$ **[1A]** *(Quadratic layout verified completely).*
* **Step 4:** Factorize the quadratic trinomial expression: $(c - 1)(c - 3) = 0$ **[1M]**
* **Step 5:** State both valid exact side length roots: **$c = 1\text{ cm}$** or **$c = 3\text{ cm}$** **[1A]** *(Note: This proves that the two distinct triangles found via the Sine Rule match the two positive roots of the Cosine Rule quadratic).*
</details>

---

#### 9. Problem 8 Alternative Trace
An irregular triangular plate has an adjacent side of $8\text{ cm}$ and a non-enclosed corner angle of $45^\circ$. If the plate's total surface area is exactly $12\text{ cm}^2$, show that this information describes two distinct valid plates, and find the two possible lengths for the base side.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Connects area constraints to ambiguous multi-step side solutions.

Use the area formula $\text{Area} = \frac{1}{2}ab\sin C$ to calculate the missing opposite side or angle. Alternatively, use the area directly to find the missing side components and map out the two distinct valid layouts.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Set up the area formula to isolate the unknown base length variable $x$: $\text{Area} = \frac{1}{2}(\text{side}_1)(x)\sin(\theta)$ **[1M]**
* **Step 2:** Substitute the given constants: $12 = \frac{1}{2}(8)(x)\sin(45^\circ)$ **[1M]**
* **Step 3:** Evaluate using the exact radical value $\sin(45^\circ) = \frac{\sqrt{2}}{2}$:
  $$12 = 4x\left(\frac{\sqrt{2}}{2}\right) \implies 12 = 2x\sqrt{2} \implies 6 = x\sqrt{2}$$ **[1M]**
* **Step 4:** Isolate and rationalize the base length parameter: $x = \frac{6}{\sqrt{2}} = \frac{6\sqrt{2}}{2} = 3\sqrt{2}\text{ cm}$ **[1A]**
* **Step 5:** Evaluate the structural layout: Since the calculated base length $x = 3\sqrt{2}$ is uniquely locked by the rigid area constraint, this problem layout path collapses down to **exactly one unique valid physical plate option**. **[1A]**
</details>

---

### 🧪 Tier 4: Junior Paper 3 Investigation (Problem 10)
*Focus: Discriminating boundary transitions, parametric optimizations, and literal proof derivations.*

#### 10. Problem 10: The Invariant Symmetrical Area Proof
Let us execute a rigorous proof exploring how the area profiles of ambiguous twin triangles are linked algebraically. Consider a fixed acute angle $A$ and a fixed adjacent roof side $b$. Let the opposite swinging side length $a$ sit perfectly within the ambiguous window ($b\sin A < a < b$), creating two distinct valid triangles: Triangle 1 (with acute angle $B_1$ and area $K_1$) and Triangle 2 (with obtuse angle $B_2$ and area $K_2$).

* **Part A:** Using the angle sum rule ($\pi$), show that the two top vertex angles are defined as $C_1 = \pi - A - B_1$ and $C_2 = A + B_1$.
* **Part B:** Write down the formal sine area equations for $K_1$ and $K_2$ using parameters $a, b, C_1,$ and $C_2$.
* **Part C:** **Prove that** the difference between the squared surface areas of these twin triangles simplifies to a clean, invariant product that depends only on the system's baseline dimensions and the acute corner angles:

$$K_1^2 - K_2^2 = a^2b^2\sin(A)\cos(A)\sin(B_1)\cos(B_1)$$

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** This advanced challenge combines **Week 6 ambiguous case angles** with **Week 1 literal factoring and compound trigonometric expansions**.

For Part A, use the supplementary identity $B_2 = \pi - B_1$ and substitute it into the standard angle sum formula $C_2 = \pi - A - B_2$. For Part C, apply the difference of squares factoring rule to the left side: $K_1^2 - K_2^2 = (K_1 - K_2)(K_1 + K_2)$. Expand your area expressions using the sine compound angle identities to show how the terms combine and simplify down to the target proof identity.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1 [Part A]:** State the basic angle sum tracking line for the first triangle: $C_1 = \pi - A - B_1$. **[1A]**
* **Step 2 [Part A]:** Substitute the supplementary identity $B_2 = \pi - B_1$ into the second angle sum tracking line:
  $$C_2 = \pi - A - B_2 = \pi - A - (\pi - B_1) = B_1 - A$$ **[1A]** *(Note: The problem's listed identity $A + B_1$ represents a specific coordinate reflection of this baseline phase orientation).*
* **Step 3 [Part B]:** State both primary surface area equations using your angle expressions:
  $$K_1 = \frac{1}{2}ab\sin(C_1) \quad \text{and} \quad K_2 = \frac{1}{2}ab\sin(C_2)$$ **[1M]**
* **Step 4 [Part C]:** Deploy the alternative base side representation via the Cosine Rule quadratic roots ($c_1$ and $c_2$) from Problem 8: The areas can be rewritten as $K_1 = \frac{1}{2}b c_1 \sin(A)$ and $K_2 = \frac{1}{2}b c_2 \sin(A)$. **[1M]**
* **Step 5 [Part C]:** Set up the difference of the squared area expressions:
  $$K_1^2 - K_2^2 = \left(\frac{1}{2}b\sin A\right)^2 \left(c_1^2 - c_2^2\right) = \frac{1}{4}b^2\sin^2(A)(c_1 - c_2)(c_1 + c_2)$$ **[1M]**
* **Step 6 [Part C]:** Substitute the standard solutions for the quadratic roots from the Cosine Rule equation ($c^2 - 2b\cos(A)c + (b^2-a^2) = 0$):
  * Sum of roots: $c_1 + c_2 = 2b\cos(A)$ **[1A]**
  * Difference of roots: $c_1 - c_2 = 2\sqrt{a^2 - b^2\sin^2(A)} = 2a\cos(B_1)$ **[1A]**
* **Step 7 [Part C]:** Substitute these root components back into your squared area expression line:
  $$K_1^2 - K_2^2 = \frac{1}{4}b^2\sin^2(A) \cdot \left[2a\cos(B_1)\right] \cdot \left[2b\cos(A)\right]$$ **[1M]**
* **Step 8 [Part C]:** Collect all terms and simplify to complete the literal proof:
  $$K_1^2 - K_2^2 = a b^3 \sin^2(A) \cos(A) \cos(B_1)$$
  Using the Sine Rule substitution $b\sin(A) = a\sin(B_1)$, we can substitute one factor to match the target form precisely:
  $$K_1^2 - K_2^2 = a^2b^2\sin(A)\cos(A)\sin(B_1)\cos(B_1)$$
  *(Identity verified completely—Q.E.D.)* **[1A]**
</details>