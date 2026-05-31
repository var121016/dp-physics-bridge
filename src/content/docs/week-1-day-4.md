---
title: "Week 1, Day 4: Vector Resolution & Component Splitting"
description: "Mastering the geometric breakdown of diagonal vectors into orthogonal components using trigonometry."
---

Welcome to Day 4! In the physical universe, things rarely move in perfectly straight horizontal or vertical lines. Today, we master the art of "Vector Resolution"—taking a single diagonal force or velocity vector and splitting it into independent horizontal ($x$) and vertical ($y$) components using right-angled trigonometry.

---

## Part A: Mathematical Foundations

### M1. The Orthogonal Splitting Rules
A general force vector $F$ acts at an angle $\theta$ relative to the positive horizontal x-axis. State the generic trigonometric formulas used to resolve this vector into:
* Its horizontal component ($F_x$)
* Its vertical component ($F_y$)

<details>
<summary><b>🔍 View Geometric Derivation Guide</b></summary>

* **Methodology Clue:** Imagine the vector as the hypotenuse of a right-angled triangle. The horizontal component is adjacent to the angle $\theta$ ($\cos\theta = \frac{\text{adj}}{\text{hyp}}$). The vertical component is opposite to the angle $\theta$ ($\sin\theta = \frac{\text{opp}}{\text{hyp}}$).
* **Mark Scheme Answers:**
    * Horizontal Component: $\color{olive}{F_x = F \cos\theta}$
    * Vertical Component: $\color{olive}{F_y = F \sin\theta}$

</details>

### M2. Resolving a Basic Force Vector
A tow rope pulls a heavy crate with a force of $F = 120 \text{ N}$ (3 sf) at an angle of $30.0^\circ$ to the horizontal ground. 
* Calculate the horizontal component of the pulling force.
* Calculate the vertical component of the pulling force.

<details>
<summary><b>💡 Reveal Clue (Algebraic Setup)</b></summary>

Use your formulas from M1: $F_x = 120 \cdot \cos(30^\circ)$ and $F_y = 120 \cdot \sin(30^\circ)$. Ensure your scientific calculator is set to **Degree mode**, not Radian mode!

</details>

<details>
<summary><b>✅ View Examiner Worked Solution</b></summary>

1.  **Horizontal Component Calculation [Method Mark]:**
    $$F_x = 120 \cdot \cos(30.0^\circ) = 120 \cdot 0.86602... = 103.923... \text{ N}$$
    *Rounding to 3 sf to match input precision:*
    $$F_x = \color{navy}{104 \text{ N}}$$
2.  **Vertical Component Calculation [Accuracy Mark]:**
    $$F_y = 120 \cdot \sin(30.0^\circ) = 120 \cdot 0.50000 = 60.000... \text{ N}$$
    *Preserving 3 sf tracking limit:*
    $$F_y = \color{navy}{60.0 \text{ N}}$$

</details>

### M3. Shifting the Angle Anchor (The Vertical Trap)
A vector $A$ has a magnitude of $50.0 \text{ m s}^{-1}$. It is oriented at an angle of $40.0^\circ$ measured **relative to the vertical y-axis**. Deduce the horizontal ($A_x$) and vertical ($A_y$) components of this vector.

<details>
<summary><b>💡 Reveal Clue (Conceptual Trap)</b></summary>

**Examiner Warning:** Because the angle is anchored to the *vertical* axis, the geometric relationships flip! The vertical component is now the *adjacent* side of the triangle, and the horizontal component is the *opposite* side. Sketch it out on paper before calculating!

</details>

<details>
<summary><b>✅ View Examiner Worked Solution</b></summary>

1.  **Re-evaluating Triangle Trigonometry [Method Mark]:**
    * Horizontal is now opposite the angle: $$A_x = A \sin\theta_{\text{vertical}}$$
    * Vertical is now adjacent to the angle: $$A_y = A \cos\theta_{\text{vertical}}$$
2.  **Calculations [Accuracy Mark]:**
    $$A_x = 50.0 \cdot \sin(40.0^\circ) = 50.0 \cdot 0.64278... = \color{navy}{32.1 \text{ m s}^{-1}}$$
    $$A_y = 50.0 \cdot \cos(40.0^\circ) = 50.0 \cdot 0.76604... = \color{navy}{38.3 \text{ m s}^{-1}}$$
    *(Both answers rounded explicitly to 3 sf).*

</details>

### M4. Resolving at Critical Boundaries ($90^\circ$)
A laser beam travels perfectly straight up along the vertical y-axis with a velocity magnitude of $v = 3.0 \times 10^8 \text{ m s}^{-1}$. 
* State its vertical component ($v_y$).
* Deduce its horizontal component ($v_x$) using formal trigonometry where $\theta = 90^\circ$ relative to the horizontal.

<details>
<summary><b>💡 Reveal Clue (Conceptual)</b></summary>

Apply the standard formulas with $\theta = 90^\circ$. Recall the mathematical values of $\cos(90^\circ)$ and $\sin(90^\circ)$ from your core geometry functions.

</details>

<details>
<summary><b>✅ View Examiner Worked Solution</b></summary>

1.  **Trigonometric Proof:**
    $$v_x = v \cos(90^\circ) = v \cdot 0 = \color{navy}{0 \text{ m s}^{-1}}$$
    $$v_y = v \sin(90^\circ) = v \cdot 1 = \color{navy}{3.0 \times 10^8 \text{ m s}^{-1}}$$
2.  **Examiner Insight:** A vector has absolutely zero projection along an axis that runs completely perpendicular to it.

</details>

### M5. Sign Assignments in Component Spaces
A displacement vector points down and to the left into Quadrant 3 of a standard Cartesian grid system. State the algebraic signs ($+$ or $-$) that must be assigned to its resolved components:
* The horizontal component ($s_x$)
* The vertical component ($s_y$)

<details>
<summary><b>🔍 View Rules & Solutions</b></summary>

* **Rule Guide:** Treat vector components as directions on a map. Right and Up are conventionally assigned positive signs ($+$). Left and Down are assigned negative signs ($-$).
* **Answers:**
    * Horizontal Component ($s_x$) $\rightarrow \color{olive}{\text{Negative } (-)}$ (pointing left)
    * Vertical Component ($s_y$) $\rightarrow \color{olive}{\text{Negative } (-)}$ (pointing down)

</details>

---

## Part B: Physics Applications

### P1. The Slanted Runway (Projectile Launch)
A model rocket launches from a slanted rail with an initial velocity of $u = 45 \text{ m s}^{-1}$ (2 sf) at an angle of $25^\circ$ to the horizontal ground. Show that the horizontal component of its velocity is approximately $41 \text{ m s}^{-1}$.

<details>
<summary><b>💡 Reveal Clue (Conceptual)</b></summary>

This is an IB-style "Show that" problem. You must construct the full algebraic equation for the horizontal component ($u_x = u \cos\theta$), execute the unrounded calculation on paper, and then demonstrate the rounding path to 2 sf.

</details>

<details>
<summary><b>✅ View Examiner Worked Solution</b></summary>

1.  **Formulation Setup [Method Mark]:** $$u_x = u \cos\theta$$
2.  **Substitution:** $$u_x = 45 \cdot \cos(25^\circ)$$
3.  **Evaluation [Accuracy Mark]:** $$u_x = 45 \cdot 0.906307... = 40.7838... \text{ m s}^{-1}$$
4.  **Final Rounding Proof:** Since $40.7838...$ rounds up to $41$ at a 2 sf threshold:
    $$u_x = \color{navy}{41 \text{ m s}^{-1}} \quad \color{teal}{\text{(Q.E.D.)}}$$

</details>

### P2. Aerodynamic Lift vs. Drag Profiling
An aircraft experiences an aerodynamic propulsion force vector of $2.50 \times 10^4 \text{ N}$ directed at an upward angle of $15.0^\circ$ relative to the horizontal skyline. Calculate the effective forward thrust component assisting the horizontal cruise acceleration.

<details>
<summary><b>💡 Reveal Clue (Conceptual)</b></summary>

Forward thrust operates strictly along the horizontal axis plane. Isolate the horizontal component of the given force vector using the cosine relationship.

</details>

<details>
<summary><b>✅ View Examiner Worked Solution</b></summary>

1.  **Equation [Method Mark]:** $$F_{\text{thrust}} = F \cos\theta$$
2.  **Substitution:** $$F_{\text{thrust}} = (2.50 \times 10^4 \text{ N}) \cdot \cos(15.0^\circ)$$
3.  **Calculation Execution:** $$F_{\text{thrust}} = 25000 \cdot 0.96592... = 24148.1... \text{ N}$$
4.  **Precision Tracking [Accuracy Mark]:** Match the 3 sf scientific format of the input data:
    $$F_{\text{thrust}} = \color{navy}{2.41 \times 10^4 \text{ N}}$$

</details>

### P3. The Inclined Plane Trap (Gravity Breakdown)
A block of mass $m$ rests on a frictionless ramp inclined at an angle of $\theta = 35^\circ$ to the horizontal floor. The downward force of gravity acting on the block is $W = 80. \text{ N}$ (2 sf). 
* Calculate the component of gravity pulling the block straight down *into* the surface of the ramp ($W_{\perp}$).
* Calculate the component of gravity pulling the block *down along* the slope of the ramp ($W_{\parallel}$).

<details>
<summary><b>💡 Reveal Clue (Inclined Geometry Blueprint)</b></summary>

**Examiner Deep-Dive:** On an inclined plane, geometry proves that the angle between the vertical gravity vector and the line perpendicular to the ramp is exactly equal to the ramp's incline angle $\theta$. Therefore:
* Component perpendicular to slope: $W_{\perp} = W \cos\theta$
* Component parallel to slope: $W_{\parallel} = W \sin\theta$
*This is the exact opposite of a flat floor coordinate grid calculation!*

</details>

<details>
<summary><b>✅ View Examiner Worked Solution</b></summary>

1.  **Perpendicular Resolution Setup [Method Mark]:**
    $$W_{\perp} = 80. \cdot \cos(35^\circ) = 80. \cdot 0.81915... = 65.532... \text{ N}$$
    *Round to 2 sf:* $$W_{\perp} = \color{navy}{66 \text{ N}}$$
2.  **Parallel Resolution Setup [Accuracy Mark]:**
    $$W_{\parallel} = 80. \cdot \sin(35^\circ) = 80. \cdot 0.57357... = 45.886... \text{ N}$$
    *Round to 2 sf:* $$W_{\parallel} = \color{navy}{46 \text{ N}}$$

</details>

### P4. Electric Field Acceleration Triage
An electron enters a particle accelerator chamber and experiences an electric force field vector of magnitude $E = 6.4 \times 10^{-15} \text{ N}$ (2 sf) directed at an angle of $60.^\circ$ above the horizontal. Calculate the vertical component of the force vector driving the electron upward.

<details>
<summary><b>💡 Reveal Clue (Conceptual)</b></summary>

The vertical direction corresponds directly to the vertical y-axis. Use the sine projection formula to resolve this microscopic force value.

</details>

<details>
<summary><b>✅ View Examiner Worked Solution</b></summary>

1.  **Formulation Setup:** $$E_y = E \sin\theta$$
2.  **Execution [Method Mark]:** $$E_y = (6.4 \times 10^{-15} \text{ N}) \cdot \sin(60.^\circ)$$
3.  **Calculation:** $$E_y = (6.4 \times 10^{-15}) \cdot 0.86602... = 5.5425... \times 10^{-15} \text{ N}$$
4.  **Precision Track [Accuracy Mark]:** Limit to 2 sf to match data boundary inputs:
    $$E_y = \color{navy}{5.5 \times 10^{-15} \text{ N}}$$

</details>

### P5. Ultimate Examiner Challenge: Symmetrical Sign Cancellation
A heavy ceiling chandelier is suspended stationary in mid-air by two symmetrical support wires. Wire 1 pulls up and to the left with a tension force vector $T_1$, whose horizontal component is $-350 \text{ N}$ (negative because it points left). If the chandelier remains completely balanced and stationary, deduce the exact value of the horizontal component of the tension force vector in Wire 2 ($T_{2x}$).

<details>
<summary><b>💡 Reveal Clue (Conceptual equilibrium)</b></summary>

If an object is completely stationary and balanced, the net force acting on it must equal zero ($\Sigma F_x = 0$). This means all horizontal vector components pulling to the left must be perfectly canceled out by horizontal vector components pulling to the right.

</details>

<details>
<summary><b>✅ View Examiner Worked Solution</b></summary>

1.  **Equilibrium Condition [Method Mark]:** $$\Sigma F_x = T_{1x} + T_{2x} = 0$$
2.  **Value Insertion:** $$-350 \text{ N} + T_{2x} = 0$$
3.  **Algebraic Extraction [Accuracy Mark]:** $$T_{2x} = \color{navy}{+350 \text{ N}} \quad \color{teal}{\text{(or 350 N to the right)}}$$

</details>