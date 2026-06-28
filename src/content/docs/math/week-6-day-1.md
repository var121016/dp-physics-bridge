---
title: "Day 26: Radian Measure & Circular Sectors"
description: "Scaffolded Core Strategy Blueprint and 10-Problem Tiered Track focused on radian conversions, arc lengths, and sector area derivations."
---


Today we step out of rigid right triangles and enter the domain of circular geometry. Degrees are an arbitrary human construct ($360^\circ$ chosen historically to match calendar cycles). Radians, however, are a natural, intrinsic measurement of a circle's structural geometry. We will master why radians work, how to convert between units smoothly, and how to apply pure circular fractions to find arc lengths and sector areas.

---

## 🧭 The Core Strategy Blueprint

### 👥 Parent Analytics Summary
* **The Core Gap:** Students often view radians as a confusing, secondary unit to memorize. They treat the conversion factor $\frac{\pi}{180^\circ}$ as an ungrounded rule, causing calculation errors when simplifying fractions. When calculating arc lengths or areas, they default to bloated degree formulas ($\frac{\theta}{360} \times 2\pi r$) instead of exploiting the clean simplicity of radian formulas.
* **The Target Objective:** We ground the definition of a radian as a pure ratio where the arc length matches the radius. Your student will learn to think in exact circular fractions of $\pi$, convert between systems mentally, and apply the elegant formulas $s = r\theta$ and $A = \frac{1}{2}r^2\theta$.

### 🎒 First-Principles Script (The Feynman Technique)
> **Read this aloud to lock in the structural intuition:**
>
> "Let's discover what a radian actually is without memorizing arbitrary rules. Imagine you have a circle with a radius of length $r$. Now, imagine taking that exact straight radius line, bending it like a piece of string, and wrapping it along the outer curved edge of the circle.
> 
> The angle created at the center of the circle by this curved radius string is defined exactly as **1 Radian**. 
> 
> 
>
> Let's figure out how many of these radius strings it takes to wrap all the way around a full circle. We already know the total distance around a circle (its circumference) is exactly $2\pi r$. Since each radian angle opens up a distance of exactly $1r$, a full $360^\circ$ rotation must contain exactly $2\pi$ radians!
> 
> $$360^\circ = 2\pi \text{ radians} \implies 180^\circ = \pi \text{ radians}$$
> 
> This truth gives us a clean, lightning-fast shortcut for circular measurements when using radians:
> * **Arc Length ($s$):** In degrees, you had to calculate a messy fraction: $s = \frac{\theta}{360} \times 2\pi r$. But in radians, because the angle *is* the multiplier of the radius, the formula collapses beautifully into:
>   $$s = r\theta$$
> * **Sector Area ($A$):** Similarly, the area fraction drops from $A = \frac{\theta}{360} \times \pi r^2$ down to:
>   $$A = \frac{1}{2}r^2\theta$$
> 
> Always remember: these highly efficient formulas only work if your angle $\theta$ is measured strictly in radians!"

---

## 🛠️ The 10-Problem Tiered Track

Execute these tasks completely on physical paper. **Calculators are strictly prohibited.** Show every structural step cleanly.

### 🛑 Tier 1: Core Conversion & Direct Evaluation (Problems 1–4)
*Focus: Exact radical fraction conversions and basic formula applications.*

#### 1. Problem 1
* **Task A:** Convert $225^\circ$ exactly into radians, expressing your answer as a simplified fraction in terms of $\pi$.
* **Task B:** Convert $\frac{5\pi}{6}$ radians exactly into degrees.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Direct mapping between linear degree scales and circular radian fractions.

For Task A, multiply by $\frac{\pi}{180^\circ}$ and simplify the fraction by finding the greatest common divisor. For Task B, replace $\pi$ directly with $180^\circ$ and evaluate.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1 [Task A]:** Set up the conversion product: $\theta = 225 \times \frac{\pi}{180}$ **[1M]**
* **Step 2 [Task A]:** Divide numerator and denominator by their greatest common factor ($45$): $\frac{225}{45} = 5$ and $\frac{180}{45} = 4 \implies \mathbf{\frac{5\pi}{4}}$ **[1A]**
* **Step 3 [Task B]:** Substitute $180^\circ$ for $\pi$: $\theta = \frac{5(180^\circ)}{6}$ **[1M]**
* **Step 4 [Task B]:** Evaluate the integer product: $5 \times 30^\circ = \mathbf{150^\circ}$ **[1A]**
</details>

---

#### 2. Problem 2
A circle has a radius of exactly $6\text{ cm}$. A central angle of $\theta = \frac{2\pi}{3}$ radians cuts out a sector from this circle.
* **Part A:** Calculate the exact outer arc length ($s$) of the sector.
* **Part B:** Calculate the exact surface area ($A$) of the sector.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Direct application of radian-based circular boundary formulas.

Because the angle is already given in radians, bypass all degree fractions completely. Use $s = r\theta$ for Part A and $A = \frac{1}{2}r^2\theta$ for Part B.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1 [Part A]:** Substitute parameters into the arc length formula: $s = 6 \times \frac{2\pi}{3}$ **[1M]**
* **Step 2 [Part A]:** Simplify the terms: $s = 2 \times 2\pi = \mathbf{4\pi\text{ cm}}$ **[1A]**
* **Step 3 [Part B]:** Substitute parameters into the sector area formula: $A = \frac{1}{2} \times 6^2 \times \frac{2\pi}{3}$ **[1M]**
* **Step 4 [Part B]:** Evaluate the product step-by-step: $A = \frac{1}{2} \times 36 \times \frac{2\pi}{3} = 18 \times \frac{2\pi}{3} = 6 \times 2\pi = \mathbf{12\pi\text{ cm}^2}$ **[1A]**
</details>

---

#### 3. Problem 3
An arc of length $10\text{ cm}$ subtends a central angle of $\theta$ inside a circle of radius $4\text{ cm}$.
* **Part A:** Find the exact value of angle $\theta$ in radians.
* **Part B:** Find the exact area of the sector enclosed by this arc.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Reverses circular equations to isolate a core angular parameter.

Rearrange $s = r\theta$ to isolate $\theta = \frac{s}{r}$. Once you have the numerical radian value, substitute it directly into your sector area formula.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1 [Part A]:** Rearrange the arc length formula to isolate the angle: $\theta = \frac{s}{r}$ **[1M]**
* **Step 2 [Part A]:** Substitute the given parameters: $\theta = \frac{10}{4} = \mathbf{2.5\text{ radians}}$ (or $\mathbf{\frac{5}{2}}$) **[1A]**
* **Step 3 [Part B]:** Substitute parameters into the area formula: $A = \frac{1}{2} \times 4^2 \times \frac{5}{2}$ **[1M]**
* **Step 4 [Part B]:** Calculate the final integer value: $A = \frac{1}{2} \times 16 \times \frac{5}{2} = 8 \times \frac{5}{2} = 4 \times 5 = \mathbf{20\text{ cm}^2}$ **[1A]**
</details>

---

#### 4. Problem 4
Find the exact total perimeter of a sector that has a central angle of $\frac{\pi}{6}$ radians inside a circle of radius $12\text{ cm}$.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Accounts for all bounding edges of a physical geometric shape.

Be careful! The total perimeter of a sector is not just the curved outer arc length. It includes the two straight radius edges that form the sides of the slice ($\text{Perimeter} = s + 2r$).
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Calculate the curved outer arc length component: $s = r\theta = 12 \times \frac{\pi}{6} = 2\pi\text{ cm}$ **[1A]**
* **Step 2:** Set up the total structural perimeter sum line: $\text{Perimeter} = s + 2r$ **[1M]**
* **Step 3:** Substitute the values: $\text{Perimeter} = 2\pi + 2(12)$ **[1M]**
* **Step 4:** State the final exact binomial expression: **$(2\pi + 24)\text{ cm}$** **[1A]**
</details>

---

### 🌀 Tier 2: Simultaneous Circular Systems (Problems 5–7)
*Focus: Solving non-linear systems linking boundaries to internal surface values.*

#### 5. Problem 5
A sector of a circle has an outer perimeter of exactly $16\text{ cm}$ and a total surface area of exactly $15\text{ cm}^2$. Find the two possible exact values for the radius $r$ of this circle.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Links multi-variable geometric systems to quadratic trinomial factoring loops from **Week 1, Day 2**.

Set up two equations using radius $r$ and arc length $s$: (1) Perimeter: $2r + s = 16 \implies s = 16 - 2r$. (2) Area: $A = \frac{1}{2}rs = 15$. Substitute the first expression into the second to create a quadratic in terms of $r$.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Formulate the system of equations using perimeter and area definitions:
  (1) $2r + s = 16 \implies s = 16 - 2r$ **[1A]**
  (2) $\frac{1}{2}rs = 15 \implies rs = 30$ **[1A]**
* **Step 2:** Substitute expression (1) into equation (2) to eliminate the arc variable:
  $$r(16 - 2r) = 30 \implies 16r - 2r^2 = 30$$ **[1M]**
* **Step 3:** Rearrange the terms into a standard quadratic equation equal to zero:
  $$2r^2 - 16r + 30 = 0 \implies r^2 - 8r + 15 = 0$$ **[1M]**
* **Step 4:** Factorize the quadratic expression cleanly: $(r - 3)(r - 5) = 0$ **[1M]**
* **Step 5:** State the two valid exact radius solutions: **$r = 3\text{ cm}$** or **$r = 5\text{ cm}$** **[1A]**
</details>

---

#### 6. Problem 6
A dynamic lawn sprinkler sprays water across a total central angle of $120^\circ$ over a maximum reach distance of $9\text{ meters}$. Calculate the exact total area of lawn watered by this sprinkler.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Translates real-world angular scenarios into clean rad conversions before running calculations.

The given angle is in degrees. Convert $120^\circ$ exactly into radians first. Once you have the fraction in terms of $\pi$, substitute it along with the radius $r = 9$ into the sector area formula.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Convert the real-world degree value into a clean radian fraction: $\theta = 120^\circ \times \frac{\pi}{180^\circ} = \frac{2\pi}{3}\text{ radians}$ **[1A]**
* **Step 2:** Identify parameters: $r = 9\text{ m}$ **[1A]**
* **Step 3:** Substitute parameters into the radian sector area equation: $A = \frac{1}{2} \times 9^2 \times \frac{2\pi}{3}$ **[1M]**
* **Step 4:** Evaluate the final numerical expression step-by-step:
  $$A = \frac{1}{2} \times 81 \times \frac{2\pi}{3} = \frac{81 \times 2\pi}{6} = \frac{162\pi}{6} = \mathbf{27\pi\text{ m}^2}$$ **[1A]**
</details>

---

#### 7. Problem 7
Two concentric circles have a common center point $O$. The smaller inner circle has a radius of $r\text{ cm}$, and the larger outer circle has a radius of $(r + 3)\text{ cm}$. A central angle of $\theta = \frac{\pi}{4}$ radians cuts a sector line across both circles. Given that the surface area of the resulting outer curved track region (the shaded region between the two arcs) is exactly $\frac{15\pi}{8}\text{ cm}^2$, find the exact value of the inner radius $r$.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Employs difference-of-area strategies to isolate nested parametric parameters.

The area of the track region is found by subtracting the smaller inner sector area from the larger outer sector area ($A_{\text{track}} = A_{\text{outer}} - A_{\text{inner}}$). Expand this algebraically using $\theta = \frac{\pi}{4}$ and solve for the unknown radius $r$.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Set up the difference-of-areas equation layout: $A_{\text{track}} = \frac{1}{2}(r+3)^2\theta - \frac{1}{2}r^2\theta = \frac{1}{2}\theta\left[(r+3)^2 - r^2\right]$ **[1M]**
* **Step 2:** Substitute the known values ($\theta = \frac{\pi}{4}$ and $A_{\text{track}} = \frac{15\pi}{8}$):
  $$\frac{15\pi}{8} = \frac{1}{2}\left(\frac{\pi}{4}\right)\left[(r^2 + 6r + 9) - r^2\right]$$ **[1M]**
* **Step 3:** Simplify the multiplying fraction block on the right-hand side: $\frac{15\pi}{8} = \frac{\pi}{8}[6r + 9]$ **[1M]**
* **Step 4:** Divide both sides by $\frac{\pi}{8}$ to isolate the linear polynomial expression: $15 = 6r + 9$ **[1M]**
* **Step 5:** Solve the linear equation: $6r = 6 \implies \mathbf{r = 1\text{ cm}}$ **[1A]**
</details>

---

### 🏆 Tier 3: Triangular Segment Intersections (Problems 8–9)
*Focus: Calculating the area of sharp segments by subtracting internal triangle areas from sectors.*

#### 8. Problem 8
A sector of a circle with radius $8\text{ cm}$ has a central angle of $\theta = \frac{\pi}{6}$ radians. A straight chord line connects the two outer endpoints of the sector's radius lines, slicing off a small outer curved cap called a **segment**. Find the exact area of this segment.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Integrates non-right-angled triangle surface calculations with radian sectors.

The area of a segment is found by subtracting the area of the internal triangle from the area of the entire sector ($A_{\text{segment}} = A_{\text{sector}} - A_{\text{triangle}}$). Use $A_{\text{triangle}} = \frac{1}{2}ab\sin(\theta)$, and look up the exact radical value for $\sin(\frac{\pi}{6})$.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Calculate the area of the entire sector: $A_{\text{sector}} = \frac{1}{2}r^2\theta = \frac{1}{2}(8^2)\left(\frac{\pi}{6}\right) = \frac{1}{2}(64)\left(\frac{\pi}{6}\right) = \frac{32\pi}{6} = \frac{16\pi}{3}$ **[1A]**
* **Step 2:** Set up the area formula for the internal triangle using the sine area rule: $A_{\text{triangle}} = \frac{1}{2}r^2\sin(\theta)$ **[1M]**
* **Step 3:** Evaluate using the exact unit circle value for $\sin(\frac{\pi}{6}) = \frac{1}{2}$: $A_{\text{triangle}} = \frac{1}{2}(8^2)\sin\left(\frac{\pi}{6}\right) = \frac{1}{2}(64)\left(\frac{1}{2}\right) = 16$ **[1A]**
* **Step 4:** Set up the final difference tracking line: $A_{\text{segment}} = A_{\text{sector}} - A_{\text{triangle}}$ **[1M]**
* **Step 5:** State the exact binomial expression: **$\left(\frac{16\pi}{3} - 16\right)\text{ cm}^2$** **[1A]**
</details>

---

#### 9. Problem 9
An equilateral triangle has side lengths of exactly $6\text{ cm}$. Three identical circular sectors are drawn inside the triangle, centered at each of its three corner vertices. Each sector has a radius of exactly $3\text{ cm}$ (so they touch perfectly along the midpoints of the triangle's sides). Calculate the exact area of the remaining unshaded gap trapped right in the center of the triangle.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Integrates equilateral geometric angle properties with compound sector subtraction loops.

Recall that every internal angle of an equilateral triangle is exactly $60^\circ$, which converts to $\frac{\pi}{3}$ radians. Calculate the area of the entire triangle using $A = \frac{1}{2}ab\sin(\theta)$ with $\sin(60^\circ) = \frac{\sqrt{3}}{2}$, then subtract the combined area of the three identical sectors.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Identify internal parameters: Side lengths $a=b=6\text{ cm}$, and corner vertex angles $\theta = 60^\circ = \frac{\pi}{3}\text{ radians}$ **[1A]**
* **Step 2:** Compute the area of the entire equilateral triangle framework:
  $$A_{\text{triangle}} = \frac{1}{2}(6)(6)\sin\left(\frac{\pi}{3}\right) = 18 \cdot \left(\frac{\sqrt{3}}{2}\right) = 9\sqrt{3}\text{ cm}^2$$ **[1A]**
* **Step 3:** Compute the area of a single inner circular sector slice:
  $$A_{\text{sector}} = \frac{1}{2}r^2\theta = \frac{1}{2}(3^2)\left(\frac{\pi}{3}\right) = \frac{1}{2}(9)\left(\frac{\pi}{3}\right) = \frac{3\pi}{2}\text{ cm}^2$$ **[1A]**
* **Step 4:** Combine all three identical corner sectors together: $A_{\text{total sectors}} = 3 \times \frac{3\pi}{2} = \frac{9\pi}{2}\text{ cm}^2$ **[1M]**
* **Step 5:** Subtract to isolate the unshaded center gap area: **$\left(9\sqrt{3} - \frac{9\pi}{2}\right)\text{ cm}^2$** **[1A]**
</details>

---

### 🧪 Tier 4: Junior Paper 3 Investigation (Problem 10)
*Focus: Inscribed boundary optimizations, variable chord profiles, and literal geometric proofs.*

#### 10. Problem 10: The Inscribed Chord Ratio Identity
Let us execute a rigorous proof connecting radian sector geometry to exact trigonometric chords. Consider a circle centered at origin point $O$ with a fixed radius length $r$. A central angle of $\theta$ radians (where $0 < \theta < \pi$) forms a sector $OAB$. Let $s$ represent the curved outer arc length from point $A$ to point $B$. Let $c$ represent the absolute straight-line distance (the chord length) directly connecting point $A$ to point $B$.

* **Part A:** Write down an expression for arc length $s$ in terms of parameters $r$ and $\theta$.
* **Part B:** By dropping a perpendicular bisector line from origin $O$ down to the center of the chord $c$, **prove that** the straight chord distance matches the exact trigonometric identity:

$$c = 2r\sin\left(\frac{\theta}{2}\right)$$

* **Part C:** Consider the ratio comparing the straight chord distance to the curved arc length, defined by functional model $R(\theta) = \frac{c}{s}$. Show that this ratio is completely independent of the circle's size parameter $r$, and evaluate its exact numerical value when the central angle opens to exactly $\theta = \frac{2\pi}{3}$ radians.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** This advanced challenge bridges **Week 6 radian sector laws** with **Week 1 literal trigonometric ratio proofs**.

For Part B, notice that splitting the isosceles triangle $OAB$ down the middle creates two identical right-angled triangles. The central angle is split perfectly into $\frac{\theta}{2}$, and the opposite side length is exactly half of the chord ($\frac{c}{2}$). Use basic right-angle trig to relate these terms. For Part C, set up the fraction $\frac{c}{s}$, cancel the radius variable $r$, and substitute $\theta = \frac{2\pi}{3}$ to evaluate.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1 [Part A]:** State the basic radian arc length equation: $\mathbf{s = r\theta}$ **[1A]**
* **Step 2 [Part B]:** Construct the bisected right-angled triangle framework: Dropping a perpendicular line from $O$ to chord $AB$ splits the isosceles triangle into two right triangles. The hypotenuse is radius $r$, the central angle is transformed into $\frac{\theta}{2}$, and the opposite side length is exactly $\frac{c}{2}$. **[1M]**
* **Step 3 [Part B]:** Apply the right-angle sine ratio definition:
  $$\sin\left(\frac{\theta}{2}\right) = \frac{\text{Opposite}}{\text{Hypotenuse}} = \frac{\frac{c}{2}}{r}$$ **[1M]**
* **Step 4 [Part B]:** Isolate chord variable $c$ to complete the proof step:
  $$\sin\left(\frac{\theta}{2}\right) = \frac{c}{2r} \implies c = 2r\sin\left(\frac{\theta}{2}\right)$$ **[1A]** *(Chord identity verified completely—Q.E.D.)*
* **Step 5 [Part C]:** Assemble the target rational comparison ratio expression:
  $$R(\theta) = \frac{c}{s} = \frac{2r\sin\left(\frac{\theta}{2}\right)}{r\theta}$$ **[1M]**
* **Step 6 [Part C]:** Cancel out the radius variable $r$ to demonstrate scale independence:
  $$R(\theta) = \frac{2\sin\left(\frac{\theta}{2}\right)}{\theta}$$
  Because the parameter $r$ eliminates cleanly from the fraction, the ratio depends entirely on the angle and is completely independent of the size of the circle. **[1A]**
* **Step 7 [Part C]:** Substitute the specific angle value $\theta = \frac{2\pi}{3}$ into your simplified ratio engine:
  $$R\left(\frac{2\pi}{3}\right) = \frac{2\sin\left(\frac{2\pi/3}{2}\right)}{\frac{2\pi}{3}} = \frac{2\sin\left(\frac{\pi}{3}\right)}{\frac{2\pi}{3}}$$ **[1M]**
* **Step 8 [Part C]:** Substitute the exact radical value for $\sin(\frac{\pi}{3}) = \frac{\sqrt{3}}{2}$ and finish the fraction math:
  $$R\left(\frac{2\pi}{3}\right) = \frac{2\left(\frac{\sqrt{3}}{2}\right)}{\frac{2\pi}{3}} = \frac{\sqrt{3}}{\frac{2\pi}{3}} = \sqrt{3} \cdot \frac{3}{2\pi} = \mathbf{\frac{3\sqrt{3}}{2\pi}}$$ **[1A]**
</details>