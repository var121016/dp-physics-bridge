---
title: "Day 7: Sign Conventions & Vector Addition"
description: "Mastering the tip-to-tail framework and coordinate summing for multiple vector spaces."
---

Welcome to Day 7! Today we tackle multi-vector systems. In DP Physics, you can never directly add the raw magnitudes of vectors pointing in different directions. You must break them down, sum their matching directional components, and reconstruct the final resultant vector.

### ⏱️ The 15-Minute Execution Rule
* Always write down your coordinate anchor at the top of your page: $+x = \text{Right}$, $+y = \text{Up}$.
* Keep negative signs attached to your components if they point Left or Down.
* Round your final answers based strictly on the limiting input data.

---

## 📐 Part 1: Mathematical Foundations (5 Problems)

### M1. One-Dimensional Collinear Addition
Three displacement vectors lie entirely along the horizontal x-axis: $A = +12.5\text{ m}$, $B = -8.2\text{ m}$, and $C = -5.3\text{ m}$. Calculate the net horizontal resultant displacement ($R_x$).

<details>
<summary>💡 Reveal Clue</summary>

Because all three vectors are collinear (sharing the exact same dimensional axis), you can find the resultant by calculating their algebraic sum: 
$$R_x = A + B + C$$
Keep close track of the negative signs.
</details>

<details>
<summary>👀 Still Stuck?</summary>

$$R_x = 12.5 + (-8.2) + (-5.3) = 12.5 - 13.5 = -1.0\text{ m}$$

Our input data extends to 1 decimal place, so our final coordinate answer is exactly **-1.0 m** (pointing to the left).
</details>

---

### M2. Two-Dimensional Orthogonal Fusion
A vector $A$ points completely along the positive x-axis with a magnitude of $15.0\text{ m}$. A second vector $B$ points completely along the negative y-axis with a magnitude of $20.0\text{ m}$. Calculate the absolute magnitude ($R$) of the combined resultant vector.

<details>
<summary>💡 Reveal Clue</summary>

Because these two vectors are perfectly perpendicular (orthogonal) to each other, they form a clean right triangle where $R_x = 15.0\text{ m}$ and $R_y = -20.0\text{ m}$. Use the Pythagorean theorem.
</details>

<details>
<summary>👀 Still Stuck?</summary>

$$R = \sqrt{(15.0)^2 + (-20.0)^2} = \sqrt{225 + 400} = \sqrt{625} = \mathbf{25.0\text{ m}}$$

To maintain the 3 significant figures provided by the initial problem data, write the answer cleanly as 25.0 m.
</details>

---

### M3. Symmetric Horizontal Cancellation
Two forces act on a single origin point. Force 1 has a magnitude of $50.0\text{ N}$ pointing at $45.0^\circ$ above the positive x-axis (Quadrant 1). Force 2 has a magnitude of $50.0\text{ N}$ pointing at $45.0^\circ$ above the negative x-axis (Quadrant 2). Calculate the net horizontal component ($\Sigma F_x$) of the system.

<details>
<summary>💡 Reveal Clue</summary>

Calculate the horizontal component for each force independently. Remember that the Quadrant 2 force points to the left, which means its component must be explicitly assigned a negative sign:
$$F_{1x} = 50.0 \cdot \cos(45.0^\circ)$$
$$F_{2x} = -50.0 \cdot \cos(45.0^\circ)$$
</details>

<details>
<summary>👀 Still Stuck?</summary>

* $$F_{1x} = +35.36\text{ N}$$
* $$F_{2x} = -35.36\text{ N}$$
* $$\Sigma F_x = 35.36 + (-35.36) = \mathbf{0\text{ N}}$$

Because the vectors are perfectly symmetrical across the vertical axis, their horizontal effects cancel out completely.
</details>

---

### M4. Asymmetric Component Accumulation
Using the same two forces from problem M3 (Force 1 = $50.0\text{ N}$ at $45.0^\circ$ in Q1; Force 2 = $50.0\text{ N}$ at $45.0^\circ$ in Q2), calculate the net vertical component ($\Sigma F_y$) of the system.

<details>
<summary>💡 Reveal Clue</summary>

Both forces are pointing upwards into the upper quadrants. This means both vertical components are positive and will add together:
$$\Sigma F_y = F_{1y} + F_{2y} = (50.0 \cdot \sin(45.0^\circ)) + (50.0 \cdot \sin(45.0^\circ))$$
</details>

<details>
<summary>👀 Still Stuck?</summary>

$$\Sigma F_y = 35.355 + 35.355 = 70.711 \rightarrow \mathbf{70.7\text{ N}}$$

The system's vertical components compound to a total upward force of 70.7 N (rounded to 3 significant figures).
</details>

---

### M5. Non-Orthogonal Resultant Recomposition
An engineering log lists the net accumulated components of a complex vector network as $\Sigma F_x = -12.0\text{ N}$ and $\Sigma F_y = +9.00\text{ N}$. Calculate the complete directional angle ($\theta$) of the resultant vector measured relative to the positive x-axis.

<details>
<summary>💡 Reveal Clue</summary>

Since the net x-component is negative and the net y-component is positive, the final resultant vector sits in Quadrant 2. Find the reference angle using $\phi = \tan^{-1}(|\Sigma F_y| / |\Sigma F_x|)$, then calculate the true angle from the positive x-axis using $\theta = 180^\circ - \phi$.
</details>

<details>
<summary>👀 Still Stuck?</summary>

* $$\phi = \tan^{-1}\left(\frac{9.00}{12.0}\right) = \tan^{-1}(0.75) = 36.87^\circ$$
* $$\theta = 180^\circ - 36.87^\circ = 143.13^\circ \rightarrow \mathbf{143^\circ}$$

Rounding to 3 significant figures gives a final direction layout of 143 degrees.
</details>

---

## 🚀 Part 2: Physics Applications (5 Problems)

### P1. The Mid-Air Helicopter Tug
A heavy rescue cargo container is suspended beneath a helicopter. Two structural support cables pull on the container cargo hook. Cable A pulls up and to the right with a horizontal component of $+450\text{ N}$. Cable B pulls up and to the left with a horizontal component of $-410\text{ N}$. Calculate the net unbalanced horizontal force ($F_{net,x}$) acting on the hook.

<details>
<summary>💡 Reveal Clue</summary>

Sum the horizontal vector components algebraically while respecting the sign conventions:
$$F_{net,x} = F_{Ax} + F_{Bx}$$
</details>

<details>
<summary>👀 Still Stuck?</summary>

$$F_{net,x} = +450\text{ N} + (-410\text{ N}) = \mathbf{+40\text{ N}}$$

The system experiences a small, net forward horizontal force of 40 N pushing it to the right.
</details>

---

### P2. The Crosswind Ocean Tugboat
A container ship is towed forward along the positive x-axis by an ocean tugboat exerting a force of $F_1 = 60.0\text{ kN}$ directly ahead. Simultaneously, a severe ocean crosswind exerts a perpendicular lateral force of $F_2 = 25.0\text{ kN}$ along the positive y-axis. Calculate the true net force magnitude acting on the ship.

<details>
<summary>💡 Reveal Clue</summary>

The forward towing force and the perpendicular crosswind force sit at a perfect $90^\circ$ angle relative to one another. Use the Pythagorean theorem to fuse these dimensions into a single resultant force magnitude.
</details>

<details>
<summary>👀 Still Stuck?</summary>

$$F_{net} = \sqrt{(60.0)^2 + (25.0)^2} = \sqrt{3600 + 625} = \sqrt{4225} = \mathbf{65.0\text{ kN}}$$

The true combined force pulling on the container ship hull is exactly 65.0 kN.
</details>

---

### P3. The Two-Engine Jet Drift
A twin-engine drone experiences an asymmetric engine failure. Engine 1 pushes with a force vector of $800\text{ N}$ pointing straight ahead ($0^\circ$). Engine 2 damages its casing and fires with a force of $600\text{ N}$ skewed at an angle of $90^\circ$ straight to the left. Deduce the true track angle ($\theta$) of the drone's net force vector relative to its straight-ahead path.

<details>
<summary>💡 Reveal Clue</summary>

The straight-ahead push forms your horizontal base component ($F_x = 800\text{ N}$), and the leftward thrust forms your vertical component ($F_y = 600\text{ N}$). Use the inverse tangent function: $\theta = \tan^{-1}(F_y / F_x)$.
</details>

<details>
<summary>👀 Still Stuck?</summary>

$$\theta = \tan^{-1}\left(\frac{600}{800}\right) = \tan^{-1}(0.75) = 36.86^\circ \rightarrow \mathbf{37^\circ}$$

Because the input parameters (800 and 600) limit our precision to 2 significant figures, the final track skew rounds directly to 37 degrees.
</details>

---

### P4. The Biomechanical Arm Traction
During a physical therapy alignment session, a patient's arm experiences two concurrent tension forces. Tension 1 pulls horizontally to the right with a value of $+15.0\text{ N}$. Tension 2 pulls at an angle, contributing a horizontal component of $-12.0\text{ N}$ and a vertical component of $+4.00\text{ N}$. Calculate the total magnitude ($R$) of the net force vector acting on the limb.

<details>
<summary>💡 Reveal Clue</summary>

First, sum your components to isolate the net horizontal and vertical structures of the system:
* $$\Sigma F_x = 15.0\text{ N} + (-12.0\text{ N}) = 3.0\text{ N}$$
* $$\Sigma F_y = +4.00\text{ N}$$
Then use the Pythagorean theorem to find the combined total magnitude.
</details>

<details>
<summary>👀 Still Stuck?</summary>

$$R = \sqrt{(3.0)^2 + (4.00)^2} = \sqrt{9.0 + 16.0} = \sqrt{25.0} = \mathbf{5.0\text{ m}}$$

To maintain consistency with the precision limits of our horizontal sum calculation, our final resultant magnitude is written as 5.0 N.
</details>

---

### P5. The Double-Glider Runway Tow
A small propeller plane pulls two gliders down a runway. Glider 1 pulls back and down on the tow hitch with a force component of $F_x = -200\text{ N}$ and $F_y = -150\text{ N}$. Glider 2 pulls back and up on the exact same hitch with a force component of $F_x = -300\text{ N}$ and $F_y = +150\text{ N}$. Calculate the total net horizontal force ($\Sigma F_x$) acting on the plane's hitch due to the gliders.

<details>
<summary>💡 Reveal Clue</summary>

Isolate and combine only the horizontal components ($F_x$) pulling on the aircraft hitch structure:
$$\Sigma F_x = F_{1x} + F_{2x}$$
Notice how the vertical forces ($+150\text{ N}$ and $-150\text{ N}$) naturally balance and cancel out entirely!
</details>

<details>
<summary>👀 Still Stuck?</summary>

$$\Sigma F_x = (-200\text{ N}) + (-300\text{ N}) = \mathbf{-500\text{ N}}$$

The aircraft tow hitch experiences a combined retarding horizontal force of exactly -500 N pulling directly backwards.
</details>