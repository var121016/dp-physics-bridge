---
title: "Week 1, Day 5: Vector Recomposition & Inverse Trigonometry"
description: "Mastering the mathematical synthesis of orthogonal components back into unified vector magnitudes and angular headings."
---

Welcome to Day 5! Yesterday, we broke diagonal vectors apart. Today, we reverse the engineering. We take independent horizontal ($x$) and vertical ($y$) components and combine them back together to calculate the true diagonal magnitude and directional heading angle ($\theta$) of the resultant vector using inverse tangent ($\tan^{-1}$).

---

## Part A: Mathematical Foundations

### M1. The Recomposition Formula Framework
A vector possesses a known horizontal component $A_x$ and a vertical component $A_y$. State the two mathematical formulas used to deduce:
* The net scalar magnitude of the unified vector ($A$)
* The heading angle ($\theta$) relative to the horizontal x-axis

<details>
<summary><b>🔍 View Geometric Synthesis Guide</b></summary>

* **Methodology Clue:** Think of $A_x$ and $A_y$ as the perpendicular legs of a right triangle. To find the total magnitude (hypotenuse), utilize the Pythagorean theorem. To isolate the angle, recall that $\tan\theta = \frac{\text{opposite}}{\text{adjacent}} = \frac{A_y}{A_x}$. Therefore, use the inverse tangent function to isolate $\theta$.
* **Mark Scheme Answers:**
    * Unified Magnitude: $\color{olive}{A = \sqrt{A_x^2 + A_y^2}}$
    * Heading Angle: $\color{olive}{\theta = \tan^{-1}\left(\frac{A_y}{A_x}\right)}$

</details>

### M2. Rebuilding a Basic Position Coordinate
A surveyor logs a displacement tracking profile with components $s_x = 4.0 \text{ m}$ and $s_y = 3.0 \text{ m}$. 
* Show that the unified magnitude of this displacement vector is exactly $5.0 \text{ m}$.
* Calculate the vector's heading angle relative to the horizontal plane.

<details>
<summary><b>💡 Reveal Clue (Algebraic Setup)</b></summary>

Apply the formulas from M1 directly: $s = \sqrt{4.0^2 + 3.0^2}$ and $\theta = \tan^{-1}\left(\frac{3.0}{4.0}\right)$. Double check your calculator is set to **Degree Mode**.

</details>

<details>
<summary><b>✅ View Examiner Worked Solution</b></summary>

1.  **Magnitude Synthesis Proof [Method Mark]:**
    $$s = \sqrt{(4.0)^2 + (3.0)^2} = \sqrt{16 + 9} = \sqrt{25} = 5 \text{ m}$$
    *Enforcing 2 sf tracking limit:* $$s = \color{navy}{5.0 \text{ m}} \quad \color{teal}{\text{(Q.E.D.)}}$$
2.  **Heading Angle Calculation [Accuracy Mark]:**
    $$\theta = \tan^{-1}\left(\frac{3.0}{4.0}\right) = \tan^{-1}(0.75) = 36.869...^\circ$$
    *Rounding to 2 sf to match data constraints:* $$\theta = \color{navy}{37^\circ \text{ above the horizontal}}$$

</details>

### M3. Taming Double Negative Quadrants
A velocity vector has components $v_x = -12 \text{ m s}^{-1}$ and $v_y = -5.0 \text{ m s}^{-1}$. Calculate the net magnitude of this velocity vector.

<details>
<summary><b>💡 Reveal Clue (Algebraic Trap)</b></summary>

**Examiner Warning:** When squaring negative components in your calculator, you *must* wrap them in parentheses, like $(-12)^2$. A negative number multiplied by a negative number always yields a **positive** result under the square root sign!

</details>

<details>
<summary><b>✅ View Examiner Worked Solution</b></summary>

1.  **Pythagorean Assembly [Method Mark]:**
    $$v = \sqrt{(-12)^2 + (-5.0)^2}$$
2.  **Evaluation:**
    $$v = \sqrt{144 + 25} = \sqrt{169} = 13 \text{ m s}^{-1}$$
3.  **Precision Verification [Accuracy Mark]:**
    $$\text{Net Velocity Magnitude} = \color{navy}{13 \text{ m s}^{-1}}$$ (2 sf maintained perfectly).

</details>

### M4. Resolving a Pure Axial Vector Component
A force vector has components $F_x = 0 \text{ N}$ and $F_y = -75.0 \text{ N}$. State the magnitude and describe the precise orientation heading of this vector without executing a calculation block.

<details>
<summary><b>💡 Reveal Clue (Conceptual)</b></summary>

If a vector has no horizontal presence ($F_x = 0$), its entire physical magnitude is contained on the vertical axis. Look at the algebraic sign of the vertical component to determine its exact orientation.

</details>

<details>
<summary><b>✅ View Examiner Worked Solution</b></summary>

1.  **Analysis:** The zero horizontal presence means the vector acts entirely vertically.
2.  **Result State Confirmation:** $$\text{Magnitude} = \color{navy}{75.0 \text{ N}}$$
    $$\text{Direction} = \color{navy}{\text{Straight Downwards (along the negative y-axis)}}$$

</details>

### M5. Extreme Angle Bounds Checking
Deduce the heading angle $\theta$ relative to the horizontal x-axis for a vector where the components are exactly identical ($A_x = A_y$).

<details>
<summary><b>🔍 View Geometric Logic & Solution</b></summary>

* **Methodology Clue:** Substitute identical placeholders into the inverse tangent equation: $\theta = \tan^{-1}\left(\frac{x}{x}\right) = \tan^{-1}(1)$. What geometric angle possesses equal rise and run properties?
* **Answer:**
    $$\theta = \tan^{-1}(1) = \color{navy}{45^\circ}$$

</details>

---

## Part B: Physics Applications

### P1. The Crosswind Aviation Heading
A plane flies through a crosswind. The onboard navigation computers log a forward horizontal velocity component of $v_x = 80. \text{ m s}^{-1}$ and a lateral vertical wind drift velocity component of $v_y = 15 \text{ m s}^{-1}$. Calculate the true net speed of the aircraft relative to the ground tracking station.

<details>
<summary><b>💡 Reveal Clue (Conceptual)</b></summary>

True ground speed represents the synthesized net scalar magnitude of the perpendicular flight path velocity component vectors. Recombine them using the Pythagorean theorem.

</details>

<details>
<summary> ="" <b>✅ View Examiner Worked Solution</b></summary>

1.  **Synthesis Formulation [Method Mark]:** $$v = \sqrt{v_x^2 + v_y^2}$$
2.  **Execution:** $$v = \sqrt{(80.)^2 + (15)^2} = \sqrt{6400 + 225} = \sqrt{6625}$$
3.  **Calculation Output:** $$v = 81.394... \text{ m s}^{-1}$$
4.  **Precision Track [Accuracy Mark]:** Bounded to 2 sf by the input data:
    $$\text{True Ground Speed} = \color{navy}{81 \text{ m s}^{-1}}$$

</details>

### P2. Finding the Launch Angle of a Projectile
A football is kicked off the ground. A specialized tracking camera records its initial velocity components immediately after impact:
* Horizontal speed component: $u_x = 18 \text{ m s}^{-1}$
* Vertical speed component: $u_y = 12 \text{ m s}^{-1}$

Calculate the exact launch angle $\theta$ of the ball relative to the flat horizontal turf.

<details>
<summary><b>💡 Reveal Clue (Conceptual)</b></summary>

The launch angle represents the direction heading. Isolate the angle using the inverse tangent function, dividing the vertical velocity component by the horizontal velocity component.

</details>

<details>
<summary><b>✅ View Examiner Worked Solution</b></summary>

1.  **Trigonometric Setup [Method Mark]:** $$\theta = \tan^{-1}\left(\frac{u_y}{u_x}\right)$$
2.  **Substitution Execution:** $$\theta = \tan^{-1}\left(\frac{12}{18}\right) = \tan^{-1}(0.66667...)$$
3.  **Precision Check [Accuracy Mark]:** $$\theta = 33.690...^\circ \rightarrow \color{navy}{34^\circ \text{ above the horizontal}}$$ (2 sf limit preserved).

</details>

### P3. Total Force on a Magnetic Particle
An ionized molecule passes through an electromagnetic filter chamber and experiences two concurrent perpendicular sorting forces: a horizontal electric force $F_x = 3.1 \times 10^{-6} \text{ N}$ and a vertical magnetic force $F_y = 4.2 \times 10^{-6} \text{ N}$. Calculate the magnitude of the net resultant force vector acting on the molecule.

<details>
<summary><b>💡 Reveal Clue (Scientific Notation Management)</b></summary>

Because both numbers possess the exact same scientific power factor ($\times 10^{-6}$), you can factor it out during calculation to make things easier: $\text{Net Force} = \sqrt{3.1^2 + 4.2^2} \times 10^{-6} \text{ N}$.

</details>

<details>
<summary><b>✅ View Examiner Worked Solution</b></summary>

1.  **Pythagorean Assembly [Method Mark]:** $$F = \sqrt{(3.1 \times 10^{-6})^2 + (4.2 \times 10^{-6})^2}$$
2.  **Evaluation Strategy:** $$F = \sqrt{9.61 + 17.64} \times 10^{-6} = \sqrt{27.25} \times 10^{-6}$$
3.  **Final Result [Accuracy Mark]:** $$F = 5.2201... \times 10^{-6} \text{ N} \rightarrow \color{navy}{5.2 \times 10^{-6} \text{ N}}$$ (2 sf limit locked).

</details>

### P4. The Drifting Rescue Boat
A rescue boat heads across a body of water. Its engines push it forward with a horizontal velocity component of $8.5 \text{ m s}^{-1}$, while a strong tide creates a perpendicular vertical velocity drift component of $2.1 \text{ m s}^{-1}$. Calculate the tracking angular heading deviation ($\theta$) of the boat's true course relative to its intended straight horizontal forward line.

<details>
<summary><b>💡 Reveal Clue (Conceptual)</b></summary>

The intended forward path runs along the horizontal x-axis. The angular deviation is the angle between this horizontal line and the final combined path vector. Use inverse tangent with the drift component as the numerator.

</details>

<details>
<summary><b>✅ View Examiner Worked Solution</b></summary>

1.  **Formula Setup:** $$\theta = \tan^{-1}\left(\frac{v_{\text{drift}}}{v_{\text{forward}}}\right)$$
2.  **Substitution [Method Mark]:** $$\theta = \tan^{-1}\left(\frac{2.1}{8.5}\right) = \tan^{-1}(0.24705...)$$
3.  **Output Processing [Accuracy Mark]:** $$\theta = 13.876...^\circ \rightarrow \color{navy}{14^\circ \text{ angle deviation}}$$

</details>

### P5. Examiner Challenge: Verifying Equilibrium via Recomposition
An engineer measures the internal force components acting on a structural load node inside a bridge. The combined horizontal force component sums to $\Sigma F_x = 0.020 \text{ N}$ and the vertical force component sums to $\Sigma F_y = -0.015 \text{ N}$. Show that the total net error force vector leaking through this node is less than $0.030 \text{ N}$.

<details>
<summary><b>💡 Reveal Clue (Conceptual execution)</b></summary>

This is an IB-style inequality proof. Recombine the horizontal and vertical error leakage components using the Pythagorean theorem to calculate the absolute magnitude of the net force, then compare it to the $0.030 \text{ N}$ threshold.

</details>

<details>
<summary><b>✅ View Examiner Worked Solution</b></summary>

1.  **Magnitude Synthesis Application [Method Mark]:**
    $$F_{\text{net}} = \sqrt{(0.020)^2 + (-0.015)^2}$$
2.  **Evaluation:**
    $$F_{\text{net}} = \sqrt{0.000400 + 0.000225} = \sqrt{0.000625} = 0.025 \text{ N}$$
3.  **Comparison Proof [Accuracy Mark]:**
    $$F_{\text{net}} = \color{navy}{0.025 \text{ N}}$$
    $$\color{teal}{\text{Since } 0.025 \text{ N} < 0.030 \text{ N, the engineer's structural check condition is verified!}}$$

</details>