---
title: "Day 15: Work, Kinetic Energy & The Work-Energy Theorem"
description: "Mastering work-energy calculations and applying the Work-Energy Theorem to solve motion without kinematics."
---

Welcome to Day 15! Today we abandon kinematics equations in favor of the **Work-Energy Theorem**. This is the first step in our HL differentiator phase.

### ⏱️ The 15-Minute Execution Rule
* **Work is Energy Transfer:** Work ($W = Fd \cos\theta$) is the bridge between a force and a change in kinetic energy.
* **The "Zero Work" Filter:** If a force acts at $90^\circ$ to the displacement (like the Normal Force), it performs **zero work**. Exclude it from the sum.
* **Signs Matter:** Positive work increases energy; negative work (like friction) decreases it.
* **No Kinematics Allowed:** If you write a kinematic equation today, you have defaulted to the "easier" path—reset and use energy.

---

## 📐 Part 1: Mathematical Foundations (Work Calculation)

### M1. The Horizontal Pull
A $50\text{ N}$ force pulls a block $10\text{ m}$ horizontally. Calculate the work done.

<details>
<summary>📋 Expand Full Mark Scheme</summary>

**💡 Reveal Clue:** $W = Fd \cos\theta$. Since force and displacement are aligned, $\theta = 0^\circ$.

**👀 Still Stuck?**
$$W = 50 \cdot 10 \cdot \cos(0^\circ) = 50 \cdot 10 \cdot 1 = \mathbf{500\text{ J}}$$
</details>

---

### M2. Negative Work (Friction)
A block slides $5\text{ m}$ across a floor while friction exerts a constant $20\text{ N}$ force opposite to the motion. Find the work done by friction.

<details>
<summary>📋 Expand Full Mark Scheme</summary>

**💡 Reveal Clue:** Force and displacement are in opposite directions, so $\theta = 180^\circ$ and $\cos(180^\circ) = -1$.

**👀 Still Stuck?**
$$W = 20 \cdot 5 \cdot \cos(180^\circ) = 100 \cdot (-1) = \mathbf{-100\text{ J}}$$
</details>

---

### M3. Angled Force
A child pulls a toy with a $20\text{ N}$ force at an angle of $30^\circ$ to the horizontal for $10\text{ m}$. Calculate the work.

<details>
<summary>📋 Expand Full Mark Scheme</summary>

**💡 Reveal Clue:** Use the full formula $W = Fd \cos\theta$ where $\theta = 30^\circ$.

**👀 Still Stuck?**
$$W = 20 \cdot 10 \cdot \cos(30^\circ) = 200 \cdot 0.866 = \mathbf{173.2\text{ J}}$$
</details>

---

### M4. Perpendicular Forces
A $5\text{ kg}$ object is lifted vertically $2\text{ m}$. While it is moving up, a horizontal wind force of $10\text{ N}$ pushes it sideways. What work does the wind do?

<details>
<summary>📋 Expand Full Mark Scheme</summary>

**💡 Reveal Clue:** The wind force is horizontal, but the displacement is vertical. The angle $\theta$ between them is $90^\circ$.

**👀 Still Stuck?**
$$W = Fd \cos(90^\circ) = Fd \cdot 0 = \mathbf{0\text{ J}}$$
</details>

---

### M5. Net Work Verification
A block is pulled by $100\text{ N}$ forward and $30\text{ N}$ friction backward over $10\text{ m}$. Find the net work.

<details>
<summary>📋 Expand Full Mark Scheme</summary>

**💡 Reveal Clue:** Either calculate individual work and add, or find net force first ($F_{net} = 100 - 30 = 70\text{ N}$).

**👀 Still Stuck?**
$$W_{net} = (100 - 30) \cdot 10 = 70 \cdot 10 = \mathbf{700\text{ J}}$$
</details>

---

## 🚀 Part 2: Physics Applications (Work-Energy Theorem)

### P1. Accelerating a Sled
A $10\text{ kg}$ sled is pulled from rest by a $40\text{ N}$ force over $5\text{ m}$ (frictionless). Find the final velocity.

<details>
<summary>📋 Expand Full Mark Scheme</summary>

**💡 Reveal Clue:** $W = \Delta KE = \frac{1}{2}mv^2$. Calculate $W$ first.

**👀 Execution:**
1. $W = 40 \cdot 5 = 200\text{ J}$
2. $200 = \frac{1}{2} \cdot 10 \cdot v^2$
3. $v = \mathbf{6.32\text{ m s}^{-1}}$
</details>

---

### P2. Stopping Distance
A $1000\text{ kg}$ car moving at $20\text{ m s}^{-1}$ slams on brakes, providing $8000\text{ N}$ of friction. How far does it travel?

<details>
<summary>📋 Expand Full Mark Scheme</summary>

**💡 Reveal Clue:** $W_{friction} = \Delta KE$. $W = f \cdot d \cdot \cos(180^\circ)$.

**👀 Execution:**
1. Initial KE: $\frac{1}{2} \cdot 1000 \cdot 20^2 = 200,000\text{ J}$
2. $-8000 \cdot d = -200,000$
3. $d = \mathbf{25\text{ m}}$
</details>

---

### P3. Lifting and Acceleration
A $2\text{ kg}$ box is pulled upward by a $30\text{ N}$ force for $4\text{ m}$. Find the final velocity.

<details>
<summary>📋 Expand Full Mark Scheme</summary>

**💡 Reveal Clue:** $W_{net} = W_{pull} + W_{gravity} = \Delta KE$. Note: $W_{gravity} = -mgh$.

**👀 Execution:**
1. Work Pull: $30 \cdot 4 = 120\text{ J}$
2. Work Gravity: $-(2 \cdot 9.8 \cdot 4) = -78.4\text{ J}$
3. Net Work: $41.6\text{ J} = \frac{1}{2} \cdot 2 \cdot v^2 \rightarrow v = \mathbf{6.45\text{ m s}^{-1}}$
</details>

---

### P4. The Energy-Efficiency Trap
A $5\text{ kg}$ box is pushed on a rough surface ($\mu_k = 0.2$) by a $20\text{ N}$ force over $10\text{ m}$. Find the final speed.

<details>
<summary>📋 Expand Full Mark Scheme</summary>

**💡 Reveal Clue:** $W_{net} = W_{push} + W_{friction}$. Calculate $f_k = \mu_k mg$.

**👀 Execution:**
1. Friction: $0.2 \cdot 5 \cdot 9.8 = 9.8\text{ N}$
2. Net Work: $(20 - 9.8) \cdot 10 = 102\text{ J}$
3. $102 = \frac{1}{2} \cdot 5 \cdot v^2 \rightarrow v = \mathbf{6.39\text{ m s}^{-1}}$
</details>

---

### P5. Inclined Plane (Energy Method)
A $2\text{ kg}$ block slides down a frictionless $30^\circ$ incline for $4\text{ m}$. Find the final speed.

<details>
<summary>📋 Expand Full Mark Scheme</summary>

**💡 Reveal Clue:** Only the component of weight parallel to the slope does work: $W = (mg \sin\theta) \cdot d$.

**👀 Execution:**
1. Force: $2 \cdot 9.8 \cdot \sin(30^\circ) = 9.8\text{ N}$
2. Work: $9.8 \cdot 4 = 39.2\text{ J}$
3. $39.2 = \frac{1}{2} \cdot 2 \cdot v^2 \rightarrow v = \mathbf{6.26\text{ m s}^{-1}}$
</details>