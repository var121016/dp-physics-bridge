---
title: "Day 6: SOH CAH TOA & Component Resolution"
description: "Mastering the geometric breakdown of vector spaces into independent horizontal and vertical components."
---

Welcome to Day 6! Today we transition from scalar arithmetic to vector geometry. In DP Physics, a vector cannot be added or subtracted until it is broken down into its independent coordinate parts. 

### ⏱️ The 15-Minute Execution Rule
* Set up your scratch notebook with a **Variable Inventory** on the left.
* Draw a neat arrow diagram for *every single problem*.
* Work out the pure algebraic expression before typing numbers into your calculator.

---

## 📐 Part 1: Mathematical Foundations (5 Problems)

### M1. The Baseline Split
A position vector A has a magnitude of 12.0 m and points at an angle of 30.0 degrees above the positive x-axis. Calculate the horizontal component ($A_x$) and the vertical component ($A_y$).

<details>
<summary>💡 Reveal Clue</summary>

The angle is measured directly from the horizontal flat ground. Use standard trigonometric ratios:
$$A_x = A \cdot \cos(\theta)$$
$$A_y = A \cdot \sin(\theta)$$
</details>

<details>
<summary>👀 Still Stuck?</summary>

* $$A_x = 12.0 \cdot \cos(30.0^\circ) = 10.392\text{ m} \rightarrow \mathbf{10.4\text{ m}}$$
* $$A_y = 12.0 \cdot \sin(30.0^\circ) = 6.000\text{ m} \rightarrow \mathbf{6.00\text{ m}}$$

Both values must maintain exactly 3 significant figures to match the input data limits.
</details>

---

### M2. The Quadrant 2 Navigation
A velocity vector v has a magnitude of 45 m/s. It points at an angle of 40.0 degrees north of west (which means it sits in Quadrant 2). Calculate the scalar components $v_x$ and $v_y$.

<details>
<summary>💡 Reveal Clue</summary>

"West" means the negative x-direction, and "North" means the positive y-direction. Your horizontal calculation must explicitly carry a negative sign because of its directional orientation.
</details>

<details>
<summary>👀 Still Stuck?</summary>

* $$v_x = -45 \cdot \cos(40.0^\circ) = -34.47\text{ m s}^{-1} \rightarrow \mathbf{-34\text{ m s}^{-1}}$$
* $$v_y = +45 \cdot \sin(40.0^\circ) = +28.92\text{ m s}^{-1} \rightarrow \mathbf{+29\text{ m s}^{-1}}$$

The limiting data is 45 (2 significant figures), so your final answers must round strictly to 2 digits.
</details>

---

### M3. Reconstructing the Resultant
The independent components of a displacement vector s are logged as $s_x = 8.00\text{ m}$ and $s_y = -6.00\text{ m}$. Deduce the total magnitude ($s$) and the precise direction angle ($\theta$) measured relative to the positive x-axis.

<details>
<summary>💡 Reveal Clue</summary>

To find the magnitude, use the Pythagorean theorem: $s = \sqrt{s_x^2 + s_y^2}$. To find the angle, use the inverse tangent function: $\theta = \tan^{-1}\left(\frac{|s_y|}{s_x}\right)$, then adjust for the quadrant.
</details>

<details>
<summary>👀 Still Stuck?</summary>

* $$s = \sqrt{(8.00)^2 + (-6.00)^2} = \sqrt{64 + 36} = \sqrt{100} = \mathbf{10.0\text{ m}}$$
* $$\phi = \tan^{-1}\left(\frac{6.00}{8.00}\right) = 36.86^\circ$$

Since $s_y$ is negative, this points **36.9 degrees below the positive x-axis** (or $-36.9^\circ$).
</details>

---

### M4. The Double-Negative Recomposition
A force vector acts in Quadrant 3 with coordinate components $F_x = -12.0\text{ N}$ and $F_y = -5.00\text{ N}$. Reconstruct the magnitude of the force.

<details>
<summary>💡 Reveal Clue</summary>

When squaring negative numbers on your physical calculator, you **must** wrap them in parentheses: $(-12.0)^2$, otherwise your calculator will output a negative math error.
</details>

<details>
<summary>👀 Still Stuck?</summary>

$$F = \sqrt{(-12.0)^2 + (-5.00)^2} = \sqrt{144 + 25} = \sqrt{169} = \mathbf{13.0\text{ N}}$$
</details>

---

### M5. The Pure Axial Alignment
A vector points straight down along the negative y-axis with a magnitude of 255 m. State its exact x-component ($A_x$) and y-component ($A_y$) without running a trigonometric calculation.

<details>
<summary>💡 Reveal Clue</summary>

If a vector is perfectly perpendicular to an axis, its projection onto that axis collapses entirely to zero.
</details>

<details>
<summary>👀 Still Stuck?</summary>

Because it points completely vertical and straight down:
* $$A_x = \mathbf{0\text{ m}}$$
* $$A_y = \mathbf{-255\text{ m}}$$
</details>

---

## 🚀 Part 2: Physics Applications (5 Problems)

### P1. The Towed Cargo Sled
A cargo sled is pulled across an Arctic landing strip by a heavy tow rope. The rope exerts a tension force of $F_T = 320\text{ N}$ at an angle of 25 degrees relative to the flat, snow-covered ground. Calculate the useful forward horizontal pulling force ($F_x$).

<details>
<summary>💡 Reveal Clue</summary>

Draw the right-triangle. The tension is the hypotenuse (320 N), and the forward pulling force is the adjacent side. Use the cosine function.
</details>

<details>
<summary>👀 Still Stuck?</summary>

$$F_x = 320 \cdot \cos(25^\circ) = 290.01 \rightarrow \mathbf{290\text{ N}}$$

The starting parameters have 2 significant figures ($25^\circ$), meaning our final answer must round to 2 digits.
</details>

---

### P2. The Ascending Weather Balloon
A meteorological research balloon rises through the atmosphere at a constant speed of $v = 14.5\text{ m s}^{-1}$ while being pushed sideways by a uniform horizontal wind vector. If the balloon's ascent path forms an angle of 70.0 degrees relative to the horizontal ground, calculate the vertical rate of ascent ($v_y$).

<details>
<summary>💡 Reveal Clue</summary>

The total velocity vector is your hypotenuse. The vertical rate of ascent is the opposite side to the ground reference angle. Use the sine function.
</details>

<details>
<summary>👀 Still Stuck?</summary>

$$v_y = 14.5 \cdot \sin(70.0^\circ) = 13.625 \rightarrow \mathbf{13.6\text{ m s}^{-1}}$$ 

This maintains exactly 3 significant figures to match the input data.
</details>

---

### P3. The Runway Blast-Off
A commercial aircraft takes off with a total velocity vector of $v = 75.0\text{ m s}^{-1}$. The onboard instruments register its steady horizontal ground speed as $v_x = 72.2\text{ m s}^{-1}$. Calculate the aircraft's vertical climbing rate ($v_y$).

<details>
<summary>💡 Reveal Clue</summary>

You are given the hypotenuse (75.0) and the adjacent leg (72.2). Isolate the missing vertical leg using a rearranged Pythagorean theorem: $v_y = \sqrt{v^2 - v_x^2}$.
</details>

<details>
<summary>👀 Still Stuck?</summary>

$$v_y = \sqrt{(75.0)^2 - (72.2)^2} = \sqrt{5625 - 5212.84} = \sqrt{412.16} = 20.301 \rightarrow \mathbf{20.3\text{ m s}^{-1}}$$
</details>

---

### P4. The Drone Delivery Laser
A delivery drone hovers directly over a drop zone, projecting a targeting laser beam down at a vehicle. The true position components of the vehicle relative to the drone's coordinates are mapped as $\Delta x = 40.0\text{ m}$ and $\Delta y = -30.0\text{ m}$. Calculate the straight-line distance ($r$) the laser beam travels.

<details>
<summary>💡 Reveal Clue</summary>

Distance is a scalar magnitude. Combine the coordinate dimensions using the Pythagorean framework.
</details>

<details>
<summary>👀 Still Stuck?</summary>

$$r = \sqrt{(40.0)^2 + (-30.0)^2} = \sqrt{1600 + 900} = \sqrt{2500} = \mathbf{50.0\text{ m}}$$
</details>

---

### P5. The Soccer Kick Anchor
A soccer ball is launched from the ground with an initial velocity vector broken down into components: $v_x = 16\text{ m s}^{-1}$ and $v_y = 12\text{ m s}^{-1}$. Calculate the true launch angle ($\theta$) of the ball relative to the flat ground.

<details>
<summary>💡 Reveal Clue</summary>

The launch angle relative to the ground is found using the inverse tangent function: $\theta = \tan^{-1}\left(\frac{v_y}{v_x}\right)$. Double check that your calculator is not set to Radian mode!
</details>

<details>
<summary>👀 Still Stuck?</summary>

$$\theta = \tan^{-1}\left(\frac{12}{16}\right) = \tan^{-1}(0.75) = 36.86^\circ \rightarrow \mathbf{37^\circ}$$

Because our input components only provide 2 significant figures, the final angle must be rounded tightly to 2 digits.
</details>