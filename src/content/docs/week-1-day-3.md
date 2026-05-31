---
title: "Week 1, Day 3: Vectors vs. Scalar Quantities"
description: "Mastering the structural and mathematical distinction between magnitude-only metrics and directional physics."
---

Welcome to Day 3! In everyday conversation, terms like speed and velocity are used interchangeably. In IB Physics, confusing them will break a multi-part exam question. Today we build a strict operational barrier between scalars and vectors.

---

## Part A: Mathematical Foundations

### M1. Core Classification Matrix
State whether each of the following physical quantities is a **Scalar** or a **Vector**:
1. Density
2. Momentum
3. Gravitational Field Strength
4. Work Done
5. Acceleration

<details>
<summary><b>🔍 View Examiner Classification Guide</b></summary>

* **Methodology Clue:** Ask yourself: *Does adding a directional arrow alter the physical reality?* (e.g., pushing an object left vs. right changes its path $\rightarrow$ Force is a vector. Heating an object up doesn't have a spatial direction $\rightarrow$ Temperature is a scalar). Note that Work Done is energy transferred, which is a scalar!
* **Mark Scheme Answers:**
    1. Density $\rightarrow \color{olive}{\text{Scalar}}$
    2. Momentum $\rightarrow \color{olive}{\text{Vector}}$
    3. Gravitational Field Strength $\rightarrow \color{olive}{\text{Vector}}$
    4. Work Done $\rightarrow \color{olive}{\text{Scalar}}$
    5. Acceleration $\rightarrow \color{olive}{\text{Vector}}$

</details>

### M2. Distance vs. Displacement: The Half-Lap Test
An athlete runs exactly halfway around a circular running track of radius $r = 50. \text{ m}$ (2 sf), starting at Point A and ending at Point B directly opposite. 
* Deduce the total **distance** traveled by the athlete.
* State the magnitude of the final **displacement** vector.

<details>
<summary><b>💡 Reveal Clue (Conceptual)</b></summary>

Distance is a scalar tracking the complete actual path length (half the circumference of a circle: $\pi \cdot r$). Displacement is a vector measuring the minimum straight-line shortcut from the starting position to the ending position (the diameter of the circle: $2r$).

</details>

<details>
<summary><b>✅ View Examiner Worked Solution</b></summary>

1.  **Distance Calculation (Actual Path):**
    $$\text{Distance} = \frac{1}{2} \cdot (2\pi r) = \pi \cdot 50. \text{ m} = 157.079... \text{ m}$$
    *Rounding to 2 sf to match data constraints:*
    $$\text{Distance} = \color{navy}{1.6 \times 10^2 \text{ m}}$$
2.  **Displacement Magnitude (Straight Line Change):**
    $$\text{Displacement} = \text{Diameter} = 2 \cdot r = 2 \cdot 50. \text{ m} = 100 \text{ m}$$
    *Rounding to 2 sf to match data constraints:*
    $$\text{Displacement Magnitude} = \color{navy}{1.0 \times 10^2 \text{ m}}$$

</details>

### M3. Sign Conventions in 1D Spaces
A laboratory cart moves along a straight horizontal track. It travels $3.5 \text{ m}$ to the right, then reverses direction and travels $5.0 \text{ m}$ to the left. Taking "right" as the positive reference direction, calculate:
* The net distance covered.
* The net displacement.

<details>
<summary><b>💡 Reveal Clue (Algebraic Setup)</b></summary>

Distance sums all absolute values ($|x_1| + |x_2|$). Displacement requires vector addition, respecting sign values: assignments to the right take a positive sign ($+$), while assignments to the left take a negative sign ($-$).

</details>

<details>
<summary><b>✅ View Examiner Worked Solution</b></summary>

1.  **Distance Calculation:** $$d = 3.5 \text{ m} + 5.0 \text{ m} = \color{navy}{8.5 \text{ m}}$$
2.  **Displacement Calculation:** $$s = (+3.5 \text{ m}) + (-5.0 \text{ m}) = -1.5 \text{ m}$$
    $$\text{Net Displacement} = \color{navy}{-1.5 \text{ m}} \text{ (or } \color{navy}{1.5 \text{ m to the left}}\text{)}$$

</details>

### M4. Combining Perpendicular Base Structures
Two displacement vectors, $A$ and $B$, are arranged at right angles to each other. Vector $A = 6.0 \text{ m}$ due North, and Vector $B = 8.0 \text{ m}$ due East. Show that the magnitude of the resultant displacement vector $R$ is exactly $10. \text{ m}$.

<details>
<summary><b>💡 Reveal Clue (Conceptual)</b></summary>

Because North and East are perpendicular ($90^\circ$ apart), these two vectors form the perpendicular legs of a right-angled triangle. The resultant vector forms the hypotenuse. Use the Pythagorean theorem to construct the formal proof.

</details>

<details>
<summary><b>✅ View Examiner Worked Solution</b></summary>

1.  **Pythagorean Setup [Method Mark]:** $$R = \sqrt{A^2 + B^2}$$
2.  **Substitution & Evaluation:** $$R = \sqrt{(6.0)^2 + (8.0)^2} = \sqrt{36 + 64} = \sqrt{100}$$
3.  **Accuracy Declaration:** $$R = \color{navy}{10. \text{ m}}$$ (The decimal point is mandatory to preserve the 2 significant figure tracking limit!)

</details>

### M5. Vector Scalar Products: An Intuitive Preview
State what type of physical quantity (Scalar or Vector) is produced when:
* A vector is multiplied by a positive scalar factor.
* A vector is divided by a negative scalar factor.

<details>
<summary><b>🔍 View Rules & Solutions</b></summary>

* **Rule Guide:** Multiplying or dividing a vector by a scalar scales its size (magnitude). If the scalar factor is negative, it reverses the directional vector orientation by exactly $180^\circ$. However, the output *retains its directional dependency*.
* **Answers:**
    * Vector $\times$ Positive Scalar $\rightarrow \color{olive}{\text{Vector}}$ (Changes magnitude only)
    * Vector $\div$ Negative Scalar $\rightarrow \color{olive}{\text{Vector}}$ (Changes magnitude and flips direction)

</details>

---

## Part B: Physics Applications

### P1. The Swimmer's Crossing Vector
A swimmer moves due North across a river at a steady speed of $v_s = 1.5 \text{ m s}^{-1}$ relative to the water. The river's cross-current flows due East at a speed of $v_c = 2.0 \text{ m s}^{-1}$ relative to the riverbank. Calculate the magnitude of the swimmer's net velocity vector relative to the bank.

<details>
<summary><b>💡 Reveal Clue (Conceptual)</b></summary>

The net velocity is the vector sum of the swimmer's independent motion and the river's current. Since North and East are perpendicular, map these paths onto a right-angled triangle framework.

</details>

<details>
<summary><b>✅ View Examiner Worked Solution</b></summary>

1.  **Vector Addition Model [Method Mark]:** $$v_{\text{net}} = \sqrt{v_s^2 + v_c^2}$$
2.  **Execution:** $$v_{\text{net}} = \sqrt{(1.5)^2 + (2.0)^2} = \sqrt{2.25 + 4.0} = \sqrt{6.25}$$
3.  **Precision Track [Accuracy Mark]:** $$v_{\text{net}} = \color{navy}{2.5 \text{ m s}^{-1}}$$ (2 sf maintained perfectly across the operation).

</details>

### P2. Speed and Velocity on a Circular Track
Returning to the runner from question **M2** (radius $r = 50. \text{ m}$), assume it takes the athlete exactly $t = 20. \text{ s}$ to complete the half-lap journey from Point A to Point B.
* Calculate the average **speed** of the runner.
* Calculate the magnitude of the average **velocity** of the runner.

<details>
<summary><b>💡 Reveal Clue (Conceptual)</b></summary>

Average speed is a scalar metric defined as $\frac{\text{total distance}}{\text{time}}$. Average velocity is a vector metric defined as $\frac{\text{total displacement}}{\text{time}}$. Use your calculated distance and displacement inputs from question M2!

</details>

<details>
<summary><b>✅ View Examiner Worked Solution</b></summary>

1.  **Average Speed Execution [Method Mark]:**
    $$\text{Speed} = \frac{\text{Distance}}{t} = \frac{157.079 \text{ m}}{20. \text{ s}} = 7.8539... \text{ m s}^{-1}$$
    *Round to 2 sf:* $$\text{Average Speed} = \color{navy}{7.9 \text{ m s}^{-1}}$$
2.  **Average Velocity Execution [Accuracy Mark]:**
    $$\text{Velocity Magnitude} = \frac{\text{Displacement Magnitude}}{t} = \frac{100 \text{ m}}{20. \text{ s}} = 5 \text{ m s}^{-1}$$
    *Round to 2 sf to match data precision thresholds:* $$\text{Average Velocity} = \color{navy}{5.0 \text{ m s}^{-1}}$$

</details>

### P3. Drone Flight Navigation Drift
A drone flies $12.0 \text{ km}$ due North, then shifts course to execute an imaging flight leg of $5.0 \text{ km}$ due East. 
* Estimate the total distance recorded by the drone's odometer tracking computer.
* Calculate the straight-line shortcut distance from the drone's home launchpad to its final landing spot.

<details>
<summary><b>💡 Reveal Clue (Conceptual)</b></summary>

Odometer tracking sums absolute values regardless of orientation. The straight-line shortcut requires evaluating the hypotenuse of the perpendicular spatial vectors.

</details>

<details>
<summary><b>✅ View Examiner Worked Solution</b></summary>

1.  **Odometer Distance:** $$12.0 \text{ km} + 5.0 \text{ km} = \color{navy}{17.0 \text{ km}}$$ (3 sf bounded data column tracking alignment)
2.  **Shortcut Displacement Calculation:** $$R = \sqrt{(12.0)^2 + (5.0)^2} = \sqrt{144 + 25} = \sqrt{169}$$
3.  **Result:** $$R = 13 \text{ km}$$
    *Enforcing 2 sf limit due to the 5.0 km input restriction:* $$\text{Resultant Separation} = \color{navy}{13 \text{ km}}$$

</details>

### P4. Defining Acceleration as a Vector Change
An active vehicle traveling due East at a speed of $24 \text{ m s}^{-1}$ hits a patch of ice. Over a duration of $4.0 \text{ s}$, its brakes lock, slowing the vehicle down to a speed of $16 \text{ m s}^{-1}$ due East. 
* Show that the vehicle's acceleration vector points due West.
* Calculate the magnitude of this deceleration profile.

<details>
<summary><b>💡 Reveal Clue (Conceptual)</b></summary>

Acceleration is defined as $\frac{\Delta v}{\Delta t} = \frac{v_{\text{final}} - v_{\text{initial}}}{t}$. Assign East as the positive reference direction ($+$). If your calculation yields a negative value, it proves the acceleration vector opposes the motion, pointing West.

</details>

<details>
<summary><b>✅ View Examiner Worked Solution</b></summary>

1.  **Sign Convention Alignment:** $$v_{\text{initial}} = +24 \text{ m s}^{-1}, \quad v_{\text{final}} = +16 \text{ m s}^{-1}$$
2.  **Acceleration Equation Application [Method Mark]:**
    $$a = \frac{16 - 24}{4.0} = \frac{-8.0}{4.0} = -2.0 \text{ m s}^{-2}$$
3.  **Interpret Exponentials & Orientation [Accuracy Mark]:**
    The negative sign confirms the vector acts opposite to East.
    $$\text{Acceleration} = \color{navy}{2.0 \text{ m s}^{-2} \text{ due West}}$$

</details>

### P5. Examiner Challenge: Closed Loop Vector Spaces
A sailing ship departs from harbor, cruising through three complex sequential navigational tracking corridors. At the end of the day, the captain reports that the ship has returned precisely to its original berth inside the harbor. State the exact value of the ship's net displacement vector at the end of the voyage.

<details>
<summary><b>💡 Reveal Clue (Conceptual)</b></summary>

Recall the strict spatial definition of a displacement vector. It does not look at the history of path legs traveled throughout the day; it maps location differentials strictly between the final coordinate and the initial coordinate.

</details>

<details>
<summary><b>✅ View Examiner Worked Solution</b></summary>

1.  **Analysis:** Because the starting coordinate coordinates match the final landing coordinate positions exactly, the physical change in position is non-existent.
2.  **Result State Confirmation:** $$\text{Net Displacement Vector} = \color{navy}{0 \text{ m}} \quad \color{teal}{\text{(Zero Vector)}}$$

</details>