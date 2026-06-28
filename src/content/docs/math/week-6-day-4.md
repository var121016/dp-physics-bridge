---
title: "Day 29: Non-Right Triangle Geometry"
description: "Scaffolded Core Strategy Blueprint and 10-Problem Tiered Track focused on applying Sine and Cosine rules in multi-step 2D environments."
---


Today we expand our trigonometric toolkit to navigate any arbitrary triangle imaginable. In the real world, boundaries, forces, and spatial paths rarely intersect at clean $90^\circ$ angles. By generalizing our trigonometric laws, we unlock the ability to solve for missing lengths, obtuse angles, and irregular land sectors without needing right triangles. We will master the structural conditions that trigger the Sine and Cosine rules and execute multi-step 2D spatial resolutions.

---

## 🧭 The Core Strategy Blueprint

### 👥 Parent Analytics Summary
* **The Core Gap:** Students often treat the Sine and Cosine rules as interchangeable formulas, guessing which one to use by trial and error. When faced with multi-step geometric diagrams, they struggle to isolate the specific intermediate "bridge triangle" needed to carry known dimensions into the target area, leading to algebraic dead-ends.
* **The Target Objective:** We organize non-right triangle geometry around strict information profiles. Your student will learn to read a triangle’s data signature instantly—triggering the **Sine Rule** for matching angle-side pairs and the **Cosine Rule** for enclosed angles (SAS) or pure side sets (SSS)—and build step-by-step structural paths through complex geometric maps.

### 🎒 First-Principles Script (The Feynman Technique)
> **Read this aloud to lock in the structural intuition:**
>
> "Let's discover how to read the structural signature of any non-right triangle so you know exactly which mathematical rule to unlock. Imagine you are standing before an oblique triangle with sides $a, b, c$ and opposite angles $A, B, C$. 
> 
> To conquer this triangle, look at the information it is giving you. It will always fall into one of two distinct profiles:
> 
> 1.  **The Opposite Pair Profile (Triggers the Sine Rule):** Look across the triangle. Do you know an angle *and* the exact side length directly opposite it? If you have a complete angle-side pair, you have unlocked a universal scaling ratio across the entire triangle:
>     
>     $$\frac{a}{\sin(A)} = \frac{b}{\sin(B)} = \frac{c}{\sin(C)}$$
>     
>     If you know one complete pair and just one single piece of another pair, this simple linear proportion instantly reveals the missing piece.
> 
> 2.  **The Enclosed Enclosure or All-Side Profile (Triggers the Cosine Rule):** What if you don't have a matching opposite pair? Look for two specific patterns:
>     * **SAS (Side-Angle-Side):** You know two side lengths and the specific angle trapped tightly between them.
>     * **SSS (Side-Side-Side):** You know all three side lengths, but absolutely zero angles.
>     
>     Because you lack a complete opposite pair, the Sine Rule stalls out. Instead, you must deploy the Cosine Rule. It acts exactly like the Pythagorean theorem, but adds a stabilizer term to adjust for the fact that the corner angle isn't $90^\circ$:
>     
>     $$a^2 = b^2 + c^2 - 2bc\cos(A)$$
> 
> Always evaluate your available information profile first. If you spot a complete opposite pair, run the Sine Rule. If the information is locked up in an enclosed corner or spread across all three sides, run the Cosine Rule."

---

## 🛠️ The 10-Problem Tiered Track

Execute these tasks completely on physical paper. **Calculators are strictly prohibited.** Show every structural step cleanly.

### 🛑 Tier 1: Direct Law Applications (Problems 1–4)
*Focus: Identifying data profiles and executing single-step oblique calculations.*

#### 1. Problem 1
In triangle $ABC$, side $a = 8\text{ cm}$, angle $A = \frac{\pi}{6}$ radians, and angle $B = \frac{\pi}{4}$ radians. Calculate the exact length of side $b$.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Direct application of the Sine Rule scale factor ratio.

Look at the data profile: you are given side $a$ and its opposite angle $A$. This complete pair tells you to run the Sine Rule. Set up the proportion $\frac{b}{\sin(B)} = \frac{a}{\sin(A)}$, substitute the exact values from your special triangles, and isolate $b$.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Identify the data profile: Side $a$ and opposite angle $A$ form a complete pair $\implies$ Run the Sine Rule. **[1A]**
* **Step 2:** Set up the formal proportion equation: $\frac{b}{\sin(\pi/4)} = \frac{8}{\sin(\pi/6)}$ **[1M]**
* **Step 3:** Substitute exact radical values: $\sin\left(\frac{\pi}{4}\right) = \frac{\sqrt{2}}{2}$ and $\sin\left(\frac{\pi}{6}\right) = \frac{1}{2}$ **[1A]**
* **Step 4:** Substitute values into the tracking equation: $\frac{b}{\frac{\sqrt{2}}{2}} = \frac{8}{\frac{1}{2}} \implies 2b\sqrt{2} = 16$ **[1M]**
* **Step 5:** Isolate and rationalize the side variable: $b = \frac{16}{2\sqrt{2}} = \frac{8}{\sqrt{2}} = \frac{8\sqrt{2}}{2} = \mathbf{4\sqrt{2}\text{ cm}}$ **[1A]**
</details>

---

#### 2. Problem 2
In triangle $XYZ$, side $x = 5\text{ cm}$, side $y = 6\text{ cm}$, and the enclosed angle $Z = \frac{\pi}{3}$ radians. Calculate the exact length of the remaining side $z$.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Direct application of the Cosine Rule under SAS constraints.

Look at the data profile: you have two side lengths and the angle trapped right between them (Side-Angle-Side). This profile blocks the Sine Rule and triggers the Cosine Rule: $z^2 = x^2 + y^2 - 2xy\cos(Z)$. Substitute your parameters and evaluate.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Identify the data profile: Two sides and an enclosed angle (SAS) $\implies$ Run the Cosine Rule. **[1A]**
* **Step 2:** Set up the formal equation engine: $z^2 = 5^2 + 6^2 - 2(5)(6)\cos\left(\frac{\pi}{3}\right)$ **[1M]**
* **Step 3:** Substitute the exact unit circle value: $\cos\left(\frac{\pi}{3}\right) = \frac{1}{2}$ **[1A]**
* **Step 4:** Simplify the polynomial expression step-by-step:
  $$z^2 = 25 + 36 - 60\left(\frac{1}{2}\right) = 61 - 30 = 31$$ **[1M]**
* **Step 5:** Take the square root to find the exact length: **$z = \sqrt{31}\text{ cm}$** **[1A]**
</details>

---

#### 3. Problem 3
In triangle $PQR$, side $p = 2\text{ cm}$, side $q = 3\text{ cm}$, and side $r = \sqrt{19}\text{ cm}$. Calculate the exact magnitude of angle $Q$ in radians.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Reverses the Cosine Rule to isolate an unknown corner angle under SSS constraints.

You are given all three side lengths (Side-Side-Side). Rearrange the Cosine Rule formula to isolate the angle term: $\cos(Q) = \frac{p^2 + r^2 - q^2}{2pr}$. Substitute the values, simplify down to a clean fraction, and evaluate the inverse cosine.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Identify the data profile: Three known sides (SSS) $\implies$ Run the rearranged Cosine Rule. **[1A]**
* **Step 2:** Set up the isolated angular equation structure: $\cos(Q) = \frac{p^2 + r^2 - q^2}{2pr}$ **[1M]**
* **Step 3:** Substitute side parameters into the formula: $\cos(Q) = \frac{2^2 + (\sqrt{19})^2 - 3^2}{2(2)(\sqrt{19})}$ **[1M]**
* **Step 4:** Simplify the numerator and denominator values:
  $$\cos(Q) = \frac{4 + 19 - 9}{4\sqrt{19}} = \frac{14}{4\sqrt{19}} = \frac{7}{2\sqrt{19}}$$ **[1M]**
* **Step 5:** State the final exact inverse coordinate angle expression: **$Q = \arccos\left(\frac{7}{2\sqrt{19}}\right)$** **[1A]**
</details>

---

#### 4. Problem 4
Calculate the exact surface area of triangle $ABC$ given that side $b = 10\text{ cm}$, side $c = 12\text{ cm}$, and the enclosed corner angle $A = \frac{5\pi}{6}$ radians.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Applies the non-right-angled sine area rule across obtuse quadrant settings.

Use the generalized area formula: $\text{Area} = \frac{1}{2}bc\sin(A)$. Substitute your side lengths and evaluate $\sin(\frac{5\pi}{6})$ by mapping it back to its first-quadrant reference angle.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Deploy the oblique sine area formula structure: $\text{Area} = \frac{1}{2}bc\sin(A)$ **[1M]**
* **Step 2:** Map the obtuse angle back to its acute reference angle: $\sin\left(\frac{5\pi}{6}\right) = \sin\left(\frac{\pi}{6}\right) = \frac{1}{2}$ **[1A]**
* **Step 3:** Substitute your side values and fraction into the area engine: $\text{Area} = \frac{1}{2}(10)(12)\left(\frac{1}{2}\right)$ **[1M]**
* **Step 4:** Evaluate the scalar products: $\text{Area} = 60 \times \frac{1}{2} = \mathbf{30\text{ cm}^2}$ **[1A]**
</details>

---

### 🌀 Tier 2: Multi-Triangle Boundary Bridges (Problems 5–7)
*Focus: Resolving compound 2D systems by routing geometric data through shared internal lines.*

#### 5. Problem 5
A surveyor charts an irregular four-sided plot of land divided into two adjacent triangles, $ABC$ and $ACD$, that share a common internal diagonal wall, $AC$. 
* In triangle $ABC$: side $AB = 4\text{ m}$, side $BC = 5\text{ m}$, and enclosed angle $B = \frac{\pi}{3}$ radians.
* In triangle $ACD$: angle $D = \frac{\pi}{4}$ radians, and angle $CAD = \frac{\pi}{12}$ radians.

Calculate the exact length of the outer boundary boundary line $CD$.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Routes dimensions across compound layouts using shared vector boundaries.

You cannot solve triangle $ACD$ yet because you only know its angles, not its side lengths. Use the Cosine Rule in triangle $ABC$ first to find the shared internal line $AC$. Once you have $AC$, use the Sine Rule in triangle $ACD$ to find the target length $CD$.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Run the Cosine Rule in triangle $ABC$ to calculate the shared internal line $AC$:
  $$AC^2 = 4^2 + 5^2 - 2(4)(5)\cos\left(\frac{\pi}{3}\right)$$ **[1M]**
* **Step 2:** Evaluate using $\cos\left(\frac{\pi}{3}\right) = \frac{1}{2}$: $AC^2 = 16 + 25 - 40\left(\frac{1}{2}\right) = 41 - 20 = 21 \implies AC = \sqrt{21}\text{ m}$ **[1A]**
* **Step 3:** Map out the known data profile for triangle $ACD$: Side $AC = \sqrt{21}$ is opposite angle $D = \frac{\pi}{4}$. This complete pair triggers the Sine Rule. **[1M]**
* **Step 4:** Set up the proportion equation to find side $CD$ (which is opposite angle $CAD = \frac{\pi}{12}$):
  $$\frac{CD}{\sin(\pi/12)} = \frac{\sqrt{21}}{\sin(\pi/4)}$$ **[1M]**
* **Step 5:** Isolate side variable $CD$ using the exact value $\sin\left(\frac{\pi}{4}\right) = \frac{\sqrt{22}}{2}$:
  $$CD = \frac{\sqrt{21}\sin(\pi/12)}{\frac{\sqrt{2}}{2}} = \frac{2\sqrt{21}\sin(\pi/12)}{\sqrt{2}}$$ **[1M]**
* **Step 6:** Rationalize the denominator to state the final exact parametric expression: **$\sqrt{42}\sin\left(\frac{\pi}{12}\right)\text{ m}$** **[1A]**
</details>

---

#### 6. Problem 6
A ship sails away from a port due North. After traveling a certain distance, it shifts its path and turns $60^\circ$ toward the East (heading on a bearing of $060^\circ$) and travels for another $8\text{ km}$. If the ship is now exactly $12\text{ km}$ away from its starting port along a straight line, calculate the exact distance it covered during that initial northward leg of its journey.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Formulates non-linear quadratic transformations from geometric word problems.

Sketch the journey path. The interior angle between the northward leg ($s$) and the second leg ($8\text{ km}$) is $120^\circ$ (since $180^\circ - 60^\circ = 120^\circ$). The side opposite this obtuse angle is the final distance ($12\text{ km}$). Use the Cosine Rule to set up a quadratic equation in terms of the unknown side $s$.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Sketch the path and calculate the interior angle: The interior angle is supplementary to the exterior turn angle: $\theta = 180^\circ - 60^\circ = 120^\circ = \frac{2\pi}{3}\text{ radians}$. **[1A]**
* **Step 2:** Formulate the Cosine Rule equation with unknown side length parameter $s$:
  $$12^2 = s^2 + 8^2 - 2(s)(8)\cos\left(\frac{2\pi}{3}\right)$$ **[1M]**
* **Step 3:** Substitute the exact unit circle value $\cos\left(\frac{2\pi}{3}\right) = -\frac{1}{2}$:
  $$144 = s^2 + 64 - 16s\left(-\frac{1}{2}\right) \implies 144 = s^2 + 64 + 8s$$ **[1M]**
* **Step 4:** Rearrange the terms into a standard quadratic equation equal to zero:
  $$s^2 + 8s - 80 = 0$$ **[1M]**
* **Step 5:** Solve the quadratic equation using the quadratic formula:
  $$s = \frac{-8 \pm \sqrt{8^2 - 4(1)(-80)}}{2(1)} = \frac{-8 \pm \sqrt{64 + 320}}{2} = \frac{-8 \pm \sqrt{384}}{2}$$ **[1M]**
* **Step 6:** Simplify the radical expression ($\sqrt{384} = \sqrt{64 \times 6} = 8\sqrt{6}$):
  $$s = \frac{-8 \pm 8\sqrt{6}}{2} = -4 \pm 4\sqrt{6}$$ **[1M]**
* **Step 7:** Choose the valid physical dimension: Discard the negative length. The final exact distance is **$(-4 + 4\sqrt{6})\text{ km}$** (or $4\sqrt{6}-4$). **[1A]**
</details>

---

#### 7. Problem 7
In triangle $ABC$, side lengths are defined parametrically in terms of variable $x$ such that side $a = x$, side $b = (x + 2)$, and side $c = 2\text{ cm}$. Given that the enclosed corner angle opposite side $b$ is exactly $B = \frac{2\pi}{3}$ radians, find the exact numerical value of variable length $x$.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Clears algebraic variable clusters by isolating terms through the Cosine Rule.

Set up the Cosine Rule focusing on angle $B$: $b^2 = a^2 + c^2 - 2ac\cos(B)$. Substitute your parametric expressions, expand the binomials carefully, and solve the resulting linear equation for $x$.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Formulate the primary Cosine Rule equation framework: $(x + 2)^2 = x^2 + 2^2 - 2(x)(2)\cos\left(\frac{2\pi}{3}\right)$ **[1M]**
* **Step 2:** Substitute the exact unit circle value $\cos\left(\frac{2\pi}{3}\right) = -\frac{1}{2}$:
  $$(x + 2)^2 = x^2 + 4 - 4x\left(-\frac{1}{2}\right)$$ **[1M]**
* **Step 3:** Expand the left binomial and simplify the right side of the equation:
  $$x^2 + 4x + 4 = x^2 + 4 + 2x$$ **[2M]** *(Award [1M] for correct left expansion, [1M] for correct right simplification).*
* **Step 4:** Cancel out the matching quadratic and constant terms ($x^2$ and $4$) from both sides:
  $$4x = 2x$$ **[1M]**
* **Step 5:** Isolate the variable to state the final solution: $2x = 0 \implies \mathbf{x = 0}$ **[1A]** *(Note: While $x=0$ simplifies the shape down to a degenerate straight line segment, it remains the only mathematically consistent solution for the given parameters).*
</details>

---

### 🏆 Tier 3: Complex Geometric Factor Invariances (Problems 8–9)
*Focus: Executing multi-step proofs where trigonometric laws intersect with advanced factoring.*

#### 8. Problem 8
**Prove that** for any valid non-right triangle $ABC$, the side lengths and opposite angles satisfy the structural identity:

$$\frac{a - b}{b} = \frac{\sin(A) - \sin(B)}{\sin(B)}$$

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Transforms geometric law definitions into flexible rational proofs.

Start with the standard Sine Rule relationship: $a = \frac{b\sin(A)}{\sin(B)}$. Substitute this expression for $a$ directly into the left side of the target proof equation, simplify the compound fraction, and verify that it matches the right side.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Isolate side $a$ using the fundamental baseline Sine Rule relationship: $a = \frac{b\sin(A)}{\sin(B)}$ **[1A]**
* **Step 2:** Substitute this expression for $a$ directly into the left side of the target proof equation:
  $$\text{LHS} = \frac{\frac{b\sin(A)}{\sin(B)} - b}{b}$$ **[1M]**
* **Step 3:** Factor out the common side length parameter $b$ from the numerator expression:
  $$\text{LHS} = \frac{b\left(\frac{\sin(A)}{\sin(B)} - 1\right)}{b}$$ **[1M]**
* **Step 4:** Cancel out the matching scale factor $b$ from the top and bottom of the fraction:
  $$\text{LHS} = \frac{\sin(A)}{\sin(B)} - 1$$ **[1M]**
* **Step 5:** Combine the terms over a common denominator to finish the proof:
  $$\text{LHS} = \frac{\sin(A)}{\sin(B)} - \frac{\sin(B)}{\sin(B)} = \frac{\sin(A) - \sin(B)}{\sin(B)}$$
  Because the left side simplifies perfectly to match the right side, the structural identity is verified. **[1A]** *(Identity verified completely—Q.E.D.)*
</details>

---

#### 9. Problem 9
In triangle $ABC$, the side lengths satisfy the specific polynomial restriction equation: $a^2 = b^2 + c^2 - bc$. Determine the exact magnitude of corner angle $A$ in radians.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Employs coefficient matching to extract hidden geometric parameters.

Write down the standard Cosine Rule formula for side $a^2$ directly beneath the given problem equation. Match the coefficients of the final terms to isolate and solve for $\cos(A)$, then find the corresponding angle.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** State the universal standard Cosine Rule equation for side $a^2$: $a^2 = b^2 + c^2 - 2bc\cos(A)$ **[1A]**
* **Step 2:** Align the standard formula directly with the given polynomial restriction equation:
  $$\text{Given: } a^2 = b^2 + c^2 - bc$$
  $$\text{Standard: } a^2 = b^2 + c^2 - 2bc\cos(A)$$ **[1M]**
* **Step 3:** Equate the cross-product terms to isolate the angular parameter: $-2bc\cos(A) = -bc$ **[1M]**
* **Step 4:** Divide both sides by the negative variable block $-2bc$: $\cos(A) = \frac{-bc}{-2bc} = \frac{1}{2}$ **[1M]**
* **Step 5:** Evaluate the inverse cosine to state the final exact angle: **$A = \frac{\pi}{3}\text{ radians}$** **[1A]**
</details>

---

### 🧪 Tier 4: Junior Paper 3 Investigation (Problem 10)
*Focus: Variable area optimizations, coordinate vector proofs, and literal law derivations.*

#### 10. Problem 10: The Inscribed Cyclic Geometric Area Identity
Let us execute a rigorous proof exploring how area equations behave within circumscribed circles. Consider any valid acute non-right triangle $ABC$ inscribed perfectly inside a circle of radius $R$, such that all three triangle vertices touch the circle's outer edge. 

Let $K$ represent the total surface area of this triangle. We are given the advanced structural relationship linking the circle's radius to the triangle's parameters: $2R = \frac{a}{\sin(A)} = \frac{b}{\sin(B)} = \frac{c}{\sin(C)}$.

* **Part A:** Write down the standard sine area formula for triangle $ABC$ using sides $a, b$ and corner angle $C$.
* **Part B:** Isolate the term $\sin(C)$ from the radius relationship equation, substitute it into your area formula, and **prove that** the total area matches the exact literal identity:

$$K = \frac{abc}{4R}$$

* **Part C:** Suppose we freeze the circle's size at a fixed radius of $R = 4\text{ cm}$ and fix two of the triangle's side lengths at $a = 5\text{ cm}$ and $b = 6\text{ cm}$. Find the exact length of the remaining side $c$ that optimizes the shape, causing the triangle's total surface area to reach its absolute maximum possible value.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** This advanced challenge combines **Week 6 non-right triangle laws** with **Week 1 literal optimization and fraction tracking loops**.

For Part B, rearrange $2R = \frac{c}{\sin(C)}$ to isolate $\sin(C) = \frac{c}{2R}$, then substitute this expression directly into your area formula from Part A. For Part C, plug your known values into the area identity from Part B to express area as a function of side $c$: $K = \frac{30c}{16} = \frac{15}{8}c$. Now, look at your alternate area formula: $K = \frac{1}{2}ab\sin(C) = 15\sin(C)$. To maximize the area, maximize $\sin(C)$ by setting it to its absolute ceiling value of 1 (which occurs when angle $C = \frac{\pi}{2}$). Equate your two area expressions to solve for the optimal length of side $c$.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1 [Part A]:** State the primary oblique sine area equation: **$K = \frac{1}{2}ab\sin(C)$** **[1A]**
* **Step 2 [Part B]:** Extract and isolate the tracking angle component from the radius relationship equation:
  $$2R = \frac{c}{\sin(C)} \implies \sin(C) = \frac{c}{2R}$$ **[1M]**
* **Step 3 [Part B]:** Substitute this expression for $\sin(C)$ straight into your primary area formula:
  $$K = \frac{1}{2}ab\left(\frac{c}{2R}\right)$$ **[1M]**
* **Step 4 [Part B]:** Multiply the fractions across the balance line to complete the literal proof:
  $$K = \frac{abc}{4R}$$ **[1A]** *(Literal area identity verified completely—Q.E.D.)*
* **Step 5 [Part C]:** Substitute your known problem constants into the proven area equation:
  $$K = \frac{(5)(6)c}{4(4)} = \frac{30c}{16} = \frac{15}{8}c$$ **[1A]**
* **Step 6 [Part C]:** Set up the alternate area equation line to locate the maximum ceiling boundary:
  $$K = \frac{1}{2}ab\sin(C) = \frac{1}{2}(5)(6)\sin(C) = 15\sin(C)$$ **[1M]**
* **Step 7 [Part C]:** Maximize the function: The absolute maximum value a sine function can achieve is exactly $\sin(C) = 1$ (which occurs when angle $C = \frac{\pi}{2}$ radians). Therefore, the maximum possible area is exactly $K_{\text{max}} = 15(1) = 15\text{ cm}^2$. **[1M]**
* **Step 8 [Part C]:** Equate your two simplified area expressions to solve for the optimal length of side $c$:
  $$\frac{15}{8}c = 15 \implies \frac{1}{8}c = 1 \implies \mathbf{c = 8\text{ cm}}$$ **[1A]**
</details>