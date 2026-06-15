---
title: "Day 13: Newton's 1st & 2nd Laws — Equation Writing"
description: "Translating visual free body diagrams into operational algebraic force equations for single and multi-body systems."
---

Welcome to Day 13! Today we bridge the gap between visual physics and algebraic execution. Once you draw an FBD, your next automatic step is to translate those arrows into a formal mathematical statement: $\Sigma F = ma$. 

### ⏱️ The 15-Minute Execution Rule
* Always declare your positive direction axis explicitly before writing your equation (e.g., let "Upward = Positive").
* Any force arrow pointing in your declared positive direction enters the equation as a positive term; any arrow pointing opposite enters as a negative term.
* **Multi-Body Rule:** If a system contains two separate blocks connected by a string, you **must write two separate equations** using two independent FBDs. Never treat them as a single jumbled blob.

---

## 📐 Part 1: Mathematical Foundations

### M1. Constructing the Net Force Polynomial
An object's FBD displays a rightward pulling force $F_1 = 45\text{ N}$ and a leftward friction force $F_2 = 15\text{ N}$. If we declare the rightward direction as positive, write out the explicit net force equation ($\Sigma F_x$) and calculate its value.

<details>
<summary>📋 Expand Full Mark Scheme</summary>

**💡 Reveal Clue:** The net force symbol $\Sigma$ simply means "the vector sum of all forces." Combine your positive rightward term and your negative leftward term.

---

**👀 Still Stuck?**

$$\Sigma F_x = F_1 - F_2$$

$$\Sigma F_x = 45\text{ N} - 15\text{ N} = \mathbf{30\text{ N}\text{ to the right}}$$

The system experiences a net unbalanced directional force of 30 Newtons.
</details>

---

### M2. Extracting Mass from Acceleration
A net force of $\Sigma F = 12.5\text{ N}$ causes a laboratory cart to accelerate at a rate of exactly $a = 2.50\text{ m s}^{-2}$. Write down Newton's Second Law equation and isolate the mass variable ($m$) symbolically before evaluating.

<details>
<summary>📋 Expand Full Mark Scheme</summary>

**💡 Reveal Clue:** Start with the fundamental baseline: $\Sigma F = ma$. Rearrange it to isolate $m$ by dividing away the acceleration parameter.

---

**👀 Still Stuck?**

1. **Symbolic Isolation:** $$m = \frac{\Sigma F}{a}$$

2. **Numeric Substitution:** $$m = \frac{12.5}{2.50} = \mathbf{5.00\text{ kg}}$$

The cart has an inertial mass of exactly 5.00 kilograms (3 significant figures).
</details>

---

### M3. Multi-Force Algebraic Rearrangement
A crate of mass $m$ is being pulled vertically upwards by a cable tension $T$ while gravity $g$ pulls it down. The crate is accelerating upwards at a rate of $a$. Write the net vertical force equation and isolate the tension variable $T$ symbolically.

<details>
<summary>📋 Expand Full Mark Scheme</summary>

**💡 Reveal Clue:** Declare "Upwards = Positive". This makes tension positive and weight ($mg$) negative. Set this balance equal to $ma$ and move the weight term across the equals sign.

---

**👀 Still Stuck?**

1. **Write the baseline balance:** $$\Sigma F_y = ma \rightarrow T - mg = ma$$

2. **Isolate $T$ via addition:** $$T = ma + mg \rightarrow \mathbf{T = m(a + g)}$$

*Physics Insight:* This proves that when you accelerate an object upwards, the cable tension must support the object's stationary weight ($mg$) *plus* provide the extra structural force needed to change its speed ($ma$).
</details>

---

### M4. Factoring Systems of Equations
You have set up the following two-body system equations for an Atwood pulley:
1) $$T - 10 = 1.0a$$
2) $$30 - T = 3.0a$$
Add these two equations together vertically to eliminate the tension variable $T$ and find the value of $a$.

<details>
<summary>📋 Expand Full Mark Scheme</summary>

**💡 Reveal Clue:** Notice that Equation 1 has a $+T$ and Equation 2 has a $-T$. When you add the left-hand sides together, $+T - T$ cancels out completely to zero.

---

**👀 Still Stuck?**

1. **Add Left Sides and Right Sides:** $$(T - 10) + (30 - T) = 1.0a + 3.0a$$

2. **Simplify:** $$-10 + 30 = 4.0a \rightarrow 20 = 4.0a$$

3. **Solve for $a$:** $$a = \frac{20}{4.0} = \mathbf{5.0\text{ m s}^{-2}}$$
</details>

---

### M5. Static Equilibrium Constraint Check
An engineering rigging node is bound by the condition of static equilibrium, meaning its acceleration is exactly zero ($a = 0$). If three horizontal forces act on it ($F_1 = +100\text{ N}$, $F_2 = -60\text{ N}$, and an unknown balancing force $F_3$), write the equilibrium equation and solve for $F_3$.

<details>
<summary>📋 Expand Full Mark Scheme</summary>

**💡 Reveal Clue:** Static equilibrium dictates that the net vector sum of all active forces must equal exactly zero: $\Sigma F = 0$.

---

**👀 Still Stuck?**

$$\Sigma F_x = 0 \rightarrow F_1 + F_2 + F_3 = 0$$

$$100 - 60 + F_3 = 0$$

$$40 + F_3 = 0 \rightarrow F_3 = \mathbf{-40\text{ N}}$$

The balancing force must be exactly 40 Newtons pointing in the negative direction.
</details>

---

## 🚀 Part 2: Physics Applications

### P1. The Accelerating Cargo Crate
A forklift pushes a heavy shipping crate of mass $m = 250\text{ kg}$ along a rough warehouse floor with a horizontal force of $F_{\text{push}} = 600\text{ N}$. The floor resists this movement with a kinetic friction force of $f_k = 150\text{ N}$. Calculate the acceleration ($a$) of the crate.

<details>
<summary>📋 Expand Full Mark Scheme</summary>

**💡 Reveal Clue:** Draw a quick horizontal mental FBD. Pushing force points forward (positive), friction points backward (negative). Set up your equation: $F_{\text{push}} - f_k = ma$, then isolate $a$.

---

**👀 Visual Reference Layout:** 🔗 [View Full FBD Vector Layout](/week-4-day-13-fbd-assets#p1-fbd-layout)

1. **Force Balance Equation:** $$F_{\text{push}} - f_k = ma$$

2. **Substitute and Isolate:** $$600 - 150 = 250 \cdot a \rightarrow 450 = 250a$$

3. **Calculate:** $$a = \frac{450}{250} = \mathbf{1.8\text{ m s}^{-2}}$$

The crate accelerates forward at exactly 1.8 meters per second squared (2 significant figures).
</details>

---

### P2. The Helicopter Cable Strain
A rescue helicopter lifts a stranded explorer of mass $m = 80.0\text{ kg}$ vertically out of a ravine. The explorer is accelerating **upwards at a rate of $a = 1.50\text{ m s}^{-2}$**. Calculate the tension force ($T$) inside the rescue cable. Use $g = 9.81\text{ m s}^{-2}$.

<details>
<summary>📋 Expand Full Mark Scheme</summary>

**💡 Reveal Clue:** This uses the exact vertical structural equation we rearranged in foundation problem M3: $T - mg = ma$. Substitute your mass, acceleration, and gravity parameters cleanly into your final line.

---

**👀 Visual Reference Layout:** 🔗 [View Full FBD Vector Layout](/week-4-day-13-fbd-assets#p2-fbd-layout)

1. **Newton's Second Law Equation:** $$T - mg = ma \rightarrow T = m(a + g)$$

2. **Numeric Execution:** $$T = 80.0 \cdot (1.50 + 9.81)$$

$$T = 80.0 \cdot (11.31) = 904.8\text{ N} \rightarrow \mathbf{905\text{ N}}$$

The cable experiences a structural tension force of 905 Newtons (rounded to 3 significant figures).
</details>

---

### P3. The Two-Block Connected Train System
Two blocks are resting on a frictionless table, connected by a light string. Block 1 has a mass $m_1 = 2.0\text{ kg}$ and Block 2 has a mass $m_2 = 4.0\text{ kg}$. A mechanical piston pulls Block 2 forward with an external force of $F = 18\text{ N}$. Write the separate FBD equations for both blocks and determine the system's acceleration ($a$).

<details>
<summary>📋 Expand Full Mark Scheme</summary>

**💡 Reveal Clue:** Isolate them! Block 1 is *only* pulled forward by the internal string tension ($T$). Block 2 is pulled forward by the external force $F$ but dragged backward by that same internal string tension ($T$). Write an equation for each.

---

**👀 Visual Reference Layout:** 🔗 [View Full FBD Vector Layout](/week-4-day-13-fbd-assets#p3-fbd-layout)

1. **Equation for Block 1:** $$T = m_1 \cdot a \rightarrow T = 2.0a$$

2. **Equation for Block 2:** $$F - T = m_2 \cdot a \rightarrow 18 - T = 4.0a$$

3. **Add the systems vertically to eliminate $T$:** $$(T) + (18 - T) = 2.0a + 4.0a$$

$$18 = 6.0a \rightarrow a = \frac{18}{6.0} = \mathbf{3.0\text{ m s}^{-2}}$$

The connected masses accelerate forward together at 3.0 meters per second squared.
</details>

---

### P4. The Stationary Braking Rig
An experimental vehicle configuration is held perfectly stationary on an angled safety platform via a high-tensile locking latch. The component of the vehicle's weight pulling it down parallel to the ramp is exactly $W_{\parallel} = 320\text{ N}$. State the exact value of the static retaining force ($F_R$) exerted by the latch.

<details>
<summary>📋 Expand Full Mark Scheme</summary>

**💡 Reveal Clue:** The vehicle is perfectly stationary, which means it satisfies the conditions of Newton's First Law (Static Equilibrium). The net force parallel to the ramp surface must equal zero.

---

**👀 Visual Reference Layout:** 🔗 [View Full FBD Vector Layout](/week-4-day-13-fbd-assets#p4-fbd-layout)

$$\Sigma F_{\parallel} = 0 \rightarrow F_R - W_{\parallel} = 0$$

$$F_R = W_{\parallel} = \mathbf{320\text{ N}}$$

Because the system is in equilibrium, the locking latch must apply an upward force of exactly 320 Newtons to completely balance the down-ramp gravitational pull. Both arrows must be identical in scale.
</details>

---

### P5. The Frictionless Atwood Assembly
Two laboratory mass blocks are rigged over a frictionless pulley wheel (an Atwood machine). Mass A ($m_A = 3.0\text{ kg}$) hangs on the left side, and Mass B ($m_B = 5.0\text{ kg}$) hangs on the right side. Write the structural motion equations for both hanging bodies and calculate the resulting acceleration magnitude ($a$) of the pulley loop.

<details>
<summary>📋 Expand Full Mark Scheme</summary>

**💡 Reveal Clue:** Mass B is heavier, so the system will accelerate clockwise (Mass B drops down, Mass A rises up). For Mass A, tension is positive: $T - m_A g = m_A a$. For Mass B, dropping down is positive: $m_B g - T = m_B a$. Use $g = 10\text{ m s}^{-2}$ here to match baseline testing rounded parameters.

---

**👀 Visual Reference Layout:** 🔗 [View Full FBD Vector Layout](/week-4-day-13-fbd-assets#p5-fbd-layout)

1. **Eq 1 (Mass A rising):** $$T - (3.0 \cdot 10) = 3.0a \rightarrow T - 30 = 3.0a$$

2. **Eq 2 (Mass B falling):** $$(5.0 \cdot 10) - T = 5.0a \rightarrow 50 - T = 5.0a$$

3. **Add the equations vertically to eliminate $T$:** $$(T - 30) + (50 - T) = 3.0a + 5.0a$$

$$20 = 8.0a \rightarrow a = \frac{20}{8.0} = \mathbf{2.5\text{ m s}^{-2}}$$

The loop accelerates clockwise at exactly 2.5 meters per second squared.
</details>