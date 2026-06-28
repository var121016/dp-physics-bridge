---
title: "Day 16: Gravitational PE & Conservation of Mechanical Energy"
description: "Mastering energy systems: $KE_1 + PE_1 = KE_2 + PE_2$ and accounting for thermal losses."
---

Welcome to Day 16! Today we shift from the "Force/Work" approach to the "Energy" approach. The power of energy is that it is a **scalar**; you don't need to rotate axes or decompose vectors. You only need to track the total energy at two distinct points in time. 

[Image of conservation of mechanical energy pendulum]


### ⏱️ The 15-Minute Execution Rule

* **The Energy Balance:** In a closed system (no friction), $KE_1 + PE_1 = KE_2 + PE_2$.
* **The "Thermal Leak":** If friction is present, total energy is not conserved. The equation becomes: $KE_1 + PE_1 = KE_2 + PE_2 + E_{thermal}$, where $E_{thermal} = f_k \cdot d$.
* **Reference Levels:** You define $h=0$. Be consistent within the same problem.

---

## 📐 Part 1: Mathematical Foundations

### M1. The Roller-Coaster Drop
A cart starts from rest at height $h = 20\text{ m}$. Find its speed at the bottom ($h = 0$).

<details>
<summary>📋 Expand Full Mark Scheme</summary>

**💡 Reveal Clue:** At the top, $KE=0$ and $PE=mgh$. At the bottom, $PE=0$ and $KE=\frac{1}{2}mv^2$.

<details>
<summary>👀 Reveal Full Solution</summary>

$$mgh_1 = \frac{1}{2}mv_2^2 \rightarrow gh = \frac{1}{2}v_2^2$$
$$v_2 = \sqrt{2gh} = \sqrt{2 \cdot 9.8 \cdot 20} = \mathbf{19.8\text{ m s}^{-1}}$$

</details>
</details>

---

### M2. The Pendulum Swing
A pendulum of length $1.0\text{ m}$ is released from a $30^\circ$ angle. Find the speed at the bottom.

<details>
<summary>📋 Expand Full Mark Scheme</summary>

**💡 Reveal Clue:** Find the vertical height $h$ first. $h = L(1 - \cos\theta)$.

<details>
<summary>👀 Reveal Full Solution</summary>

1. **Find $h$:** $$h = 1.0(1 - \cos 30^\circ) = 1 - 0.866 = 0.134\text{ m}$$
2. **Conservation:** $$v = \sqrt{2gh} = \sqrt{2 \cdot 9.8 \cdot 0.134} = \mathbf{1.62\text{ m s}^{-1}}$$

</details>
</details>

---

### M3. Projectile on a Slope
A ball is dropped from height $h$ onto a $45^\circ$ slope. At what speed does it hit the slope?

<details>
<summary>📋 Expand Full Mark Scheme</summary>

**💡 Reveal Clue:** Only the vertical drop matters for speed at impact. $KE = PE_{lost}$.

<details>
<summary>👀 Reveal Full Solution</summary>

$$v = \sqrt{2gh}$$
*(Note: The angle of the slope affects where it lands, but not the speed at the instant of contact.)*

</details>
</details>

---

### M4. Thermal Loss (Friction)
A $2\text{ kg}$ block slides $5\text{ m}$ down a ramp, dropping $3\text{ m}$ in height. It loses $20\text{ J}$ to friction. What is the final $KE$?

<details>
<summary>📋 Expand Full Mark Scheme</summary>

**💡 Reveal Clue:** $PE_{initial} = KE_{final} + E_{thermal}$.

<details>
<summary>👀 Reveal Full Solution</summary>

$$mgh = KE_f + E_{thermal}$$
$$(2 \cdot 9.8 \cdot 3) = KE_f + 20 \rightarrow 58.8 = KE_f + 20 \rightarrow KE_f = \mathbf{38.8\text{ J}}$$

</details>
</details>

---

### M5. Braking Distance via Energy
A car at $20\text{ m s}^{-1}$ has its kinetic energy converted to thermal energy via friction ($f = 5000\text{ N}$). Find the stopping distance.

<details>
<summary>📋 Expand Full Mark Scheme</summary>

**💡 Reveal Clue:** $KE_i = E_{thermal} \rightarrow \frac{1}{2}mv^2 = f \cdot d$.

<details>
<summary>👀 Reveal Full Solution</summary>

$$d = \frac{mv^2}{2f}$$
*(Assuming mass $m = 1000\text{ kg}$)*:
$$d = \frac{1000 \cdot 400}{2 \cdot 5000} = \mathbf{40\text{ m}}$$

</details>
</details>

---

## 🚀 Part 2: Physics Applications

### P1. Loop-the-Loop Minimum Speed
What is the minimum speed a roller-coaster cart needs at the top of a loop (radius $r$) to stay on the track?

<details>
<summary>📋 Expand Full Mark Scheme</summary>

**💡 Reveal Clue:** At the top of the loop, $N=0$, so $\Sigma F = F_c = mg = m\frac{v^2}{r}$. Solve for $v$.

<details>
<summary>👀 Reveal Full Solution</summary>

$$v^2 = rg \rightarrow v = \mathbf{\sqrt{rg}}$$

</details>
</details>

---

### P2. Conservation on a Bumpy Ramp
A $5\text{ kg}$ cart is pushed into a ramp. It loses $10\%$ of its initial $PE$ to friction. Find the speed at the bottom.

<details>
<summary>📋 Expand Full Mark Scheme</summary>

**💡 Reveal Clue:** $0.9 \cdot mgh = \frac{1}{2}mv^2$.

<details>
<summary>👀 Reveal Full Solution</summary>

$$v = \sqrt{1.8gh}$$

</details>
</details>

---

### P3. Pendulum with Thermal Loss
A pendulum bob swings from $10^\circ$ and returns to $8^\circ$. Calculate the % energy lost.

<details>
<summary>📋 Expand Full Mark Scheme</summary>

**💡 Reveal Clue:** $PE \propto h \propto (1 - \cos\theta)$. Ratio $\frac{1-\cos 8^\circ}{1-\cos 10^\circ}$.

<details>
<summary>👀 Reveal Full Solution</summary>

1. Ratio $\approx 0.64$.
2. Energy lost $\approx 1 - 0.64 = \mathbf{36\%}$

</details>
</details>

---

### P4. Dart Gun Potential
A spring with constant $k$ is compressed $x$ to launch a dart $h$ high. Find $h$.

<details>
<summary>📋 Expand Full Mark Scheme</summary>

**💡 Reveal Clue:** $\frac{1}{2}kx^2 = mgh$.

<details>
<summary>👀 Reveal Full Solution</summary>

$$h = \frac{kx^2}{2mg}$$

</details>
</details>

---

### P5. System Equilibrium
A block sliding down a ramp hits a spring, compressing it $x$. Find $x$.

<details>
<summary>📋 Expand Full Mark Scheme</summary>

**💡 Reveal Clue:** $PE_{grav} = PE_{spring} \rightarrow mgh = \frac{1}{2}kx^2$.

<details>
<summary>👀 Reveal Full Solution</summary>

$$x = \sqrt{\frac{2mgh}{k}}$$

</details>
</details>