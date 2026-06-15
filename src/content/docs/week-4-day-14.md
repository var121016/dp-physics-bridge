---
title: "Day 14: Dynamics in Two Dimensions (2D)"
description: "Resolving force vectors into x and y components for inclined planes and non-aligned force systems."
---

Welcome to Day 14! Today we stop treating forces as simple horizontal lines. We use trigonometry to decompose diagonal forces into their perpendicular components: $F_x = F \cos\theta$ and $F_y = F \sin\theta$.

### ⏱️ The 15-Minute Execution Rule
* Always declare your positive direction axis explicitly before writing your equation (e.g., let "Parallel to Ramp = Positive").
* Rotate the Axis: If the problem involves an incline, define your $x$-axis *parallel* to the surface and your $y$-axis *perpendicular* to it.
* Decompose Gravity: On an incline, gravity is the only force you must split: $W_\parallel = mg \sin\theta$ and $W_\perp = mg \cos\theta$.

---

## 📐 Part 1: Mathematical Foundations

### M1. Constructing Vector Components
A rope pulls a sled at an angle of $30^\circ$ above the horizontal with a force of $100\text{ N}$. Calculate the horizontal ($F_x$) and vertical ($F_y$) components of this pull.

<details>
<summary>📋 Expand Full Mark Scheme</summary>

**💡 Reveal Clue:** Use the standard trigonometric decomposition: $F_x = F \cos\theta$ and $F_y = F \sin\theta$.

---

**👀 Still Stuck?**

* $$F_x = 100 \cdot \cos(30^\circ) = 100 \cdot 0.866 = \mathbf{86.6\text{ N}}$$
* $$F_y = 100 \cdot \sin(30^\circ) = 100 \cdot 0.500 = \mathbf{50.0\text{ N}}$$
</details>

---

### M2. Gravity on an Incline
A $10\text{ kg}$ block rests on a $20^\circ$ frictionless incline. Determine the components of weight parallel ($W_\parallel$) and perpendicular ($W_\perp$) to the incline. (Use $g = 9.8\text{ m s}^{-2}$).

<details>
<summary>📋 Expand Full Mark Scheme</summary>

**💡 Reveal Clue:** For an incline, the parallel component uses $\sin\theta$ and the perpendicular component uses $\cos\theta$.

---

**👀 Still Stuck?**

* $$W_\parallel = mg \sin(20^\circ) = (98) \cdot 0.342 = \mathbf{33.5\text{ N}}$$
* $$W_\perp = mg \cos(20^\circ) = (98) \cdot 0.940 = \mathbf{92.1\text{ N}}$$
</details>

---

### M3. Vector Addition Magnitude
Force A is $50\text{ N}$ at $0^\circ$. Force B is $50\text{ N}$ at $90^\circ$. Calculate the magnitude of the resultant vector.

<details>
<summary>📋 Expand Full Mark Scheme</summary>

**💡 Reveal Clue:** Use the Pythagorean theorem since the forces are perpendicular.

---

**👀 Still Stuck?**

$$R = \sqrt{F_A^2 + F_B^2} = \sqrt{50^2 + 50^2} = \sqrt{5000} = \mathbf{70.7\text{ N}}$$
</details>

---

### M4. Normal Force on an Incline
A $20\text{ kg}$ object sits on a $30^\circ$ incline. What is the Normal force ($N$) acting on the object?

<details>
<summary>📋 Expand Full Mark Scheme</summary>

**💡 Reveal Clue:** In equilibrium perpendicular to the ramp, the Normal force must exactly balance the perpendicular weight component.

---

**👀 Still Stuck?**

$$\Sigma F_y = 0 \rightarrow N = W_\perp = mg \cos(30^\circ)$$

$$N = (20 \cdot 9.8) \cdot 0.866 = \mathbf{169.7\text{ N}}$$
</details>

---

### M5. Angle of Decomposition
An object is pushed with a $200\text{ N}$ force. If the horizontal component is $100\text{ N}$, find the angle $\theta$ of the push.

<details>
<summary>📋 Expand Full Mark Scheme</summary>

**💡 Reveal Clue:** Use the inverse cosine function: $\theta = \arccos(F_x / F)$.

---

**👀 Still Stuck?**

$$\cos\theta = \frac{F_x}{F} = \frac{100}{200} = 0.5$$

$$\theta = \arccos(0.5) = \mathbf{60^\circ}$$
</details>

---

## 🚀 Part 2: Physics Applications

### P1. The Sliding Box
A $5.0\text{ kg}$ box slides down a frictionless $30^\circ$ ramp. Calculate the acceleration ($a$).

<details>
<summary>📋 Expand Full Mark Scheme</summary>

**💡 Reveal Clue:** The net force driving the block is the parallel weight component. $\Sigma F = ma$.

---

**👀 Visual Reference Layout:** 🔗 [View Full FBD Vector Layout](/week-4-day-14-fbd-assets#p1-fbd-layout)

1. **Force Balance Equation:** $$\Sigma F_x = ma \rightarrow mg \sin(30^\circ) = ma$$

2. **Calculate:** $$a = g \sin(30^\circ) = 9.8 \cdot 0.5 = \mathbf{4.9\text{ m s}^{-2}}$$
</details>

---

### P2. Tension in an Angled Support
A $10\text{ kg}$ sign is suspended by two symmetric cables, each at $45^\circ$ to the ceiling. Find the tension ($T$) in one cable.

<details>
<summary>📋 Expand Full Mark Scheme</summary>

**💡 Reveal Clue:** The vertical components of both tensions must support the entire weight of the sign.

---

**👀 Visual Reference Layout:** 🔗 [View Full FBD Vector Layout](/week-4-day-14-fbd-assets#p2-fbd-layout)

$$2T \sin(45^\circ) = mg$$

$$2T \cdot 0.707 = 98 \rightarrow T = \frac{98}{1.414} = \mathbf{69.3\text{ N}}$$
</details>

---

### P3. Equilibrium of a Hanging Block
A $20\text{ kg}$ block is held in place by a horizontal force ($F_h$) and an angled wire at $30^\circ$ to the vertical. Find $F_h$.

<details>
<summary>📋 Expand Full Mark Scheme</summary>

**💡 Reveal Clue:** Solve for the tension $T$ using vertical equilibrium, then solve for the horizontal force $F_h$.

---

**👀 Visual Reference Layout:** 🔗 [View Full FBD Vector Layout](/week-4-day-14-fbd-assets#p3-fbd-layout)

1. **Vertical Eq:** $$\Sigma F_y = 0 \rightarrow T \cos(30^\circ) = mg \rightarrow T = \frac{196}{0.866} = 226.3\text{ N}$$

2. **Horizontal Eq:** $$\Sigma F_x = 0 \rightarrow T \sin(30^\circ) = F_h \rightarrow F_h = 226.3 \cdot 0.5 = \mathbf{113.2\text{ N}}$$
</details>

---

### P4. Friction on an Incline
A $10\text{ kg}$ block is held stationary on a $25^\circ$ incline by friction. Calculate the force of static friction ($f_s$).

<details>
<summary>📋 Expand Full Mark Scheme</summary>

**💡 Reveal Clue:** If the block is stationary, the static friction must perfectly cancel the parallel weight component.

---

**👀 Visual Reference Layout:** 🔗 [View Full FBD Vector Layout](/week-4-day-14-fbd-assets#p4-fbd-layout)

$$\Sigma F_x = 0 \rightarrow f_s = mg \sin(25^\circ)$$

$$f_s = 98 \cdot 0.423 = \mathbf{41.5\text{ N}}$$
</details>

---

### P5. Elevator with Tilted Floor
An elevator accelerates up at $2\text{ m s}^{-2}$. A box sits on a floor tilted $10^\circ$ relative to the elevator frame. Find the Normal force on a $5\text{ kg}$ box.

<details>
<summary>📋 Expand Full Mark Scheme</summary>

**💡 Reveal Clue:** The effective weight of the box increases because the elevator is accelerating upwards: $N = m(g+a) \cos(10^\circ)$.

---

**👀 Visual Reference Layout:** 🔗 [View Full FBD Vector Layout](/week-4-day-14-fbd-assets#p5-fbd-layout)

$$\Sigma F_y = ma \rightarrow N - m(g+a) = 0$$

$$N = 5(9.8 + 2) \cos(10^\circ) = 5(11.8) \cdot 0.985 = \mathbf{58.1\text{ N}}$$
</details>