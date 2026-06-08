---
title: "Day 9: Symbolic Formula Manipulation"
description: "Mastering the art of isolating variables in multi-term physics equations before substituting numbers."
---

Welcome to Day 9! Today we establish the single most important mathematical habit in DP Physics: **Symbolic manipulation first, numbers last.** If you plug numbers into an equation on line one, you destroy your ability to check for dimensional errors or analyze limiting cases. 

### ⏱️ The 15-Minute Execution Rule
* Do not touch your calculator until the very final line of your work.
* Every line of algebra must balance horizontally. Show your clearing steps explicitly.
* Treat all constants (like $g$, $\pi$, or $\mu$) as letters, not numbers.

---

## 📐 Part 1: Mathematical Foundations (5 Problems)

### M1. Isolating the Quadratic Time Variable
The standard displacement equation is written as:
$$s = ut + \frac{1}{2}at^2$$
Given that an object starts from rest ($u = 0$), rearrange the equation to completely isolate the time variable ($t$).

<details>
<summary>💡 Reveal Clue</summary>

Substitute $u = 0$ into the expression first to collapse the linear term. You will be left with $s = \frac{1}{2}at^2$. Clear the fraction by multiplying both sides by 2, divide by the acceleration $a$, and then take the square root of both sides.
</details>

<details>
<summary>👀 Still Stuck?</summary>

1. Set $u = 0$:  
   $$s = (0)t + \frac{1}{2}at^2 \rightarrow s = \frac{1}{2}at^2$$
2. Multiply by 2:  
   $$2s = at^2$$
3. Divide by $a$:  
   $$\frac{2s}{a} = t^2$$
4. Take the square root:  
   $$t = \mathbf{\sqrt{\frac{2s}{a}}}$$
</details>

---

### M2. Extracting a Variable from the Denominator
The total resistance $R_p$ of two electronic resistors connected in a parallel circuit layout satisfies the equation:
$$\frac{1}{R_p} = \frac{1}{R_1} + \frac{1}{R_2}$$
Rearrange this formula to isolate the single independent resistor variable $R_1$.

<details>
<summary>💡 Reveal Clue</summary>

Do not flip the fractions individually (e.g., $R_p = R_1 + R_2$ is a massive mathematical error!). First, isolate the term $\frac{1}{R_1}$ on one side by subtracting $\frac{1}{R_2}$ from both sides. Then combine the remaining terms using a common denominator before taking the reciprocal.
</details>

<details>
<summary>👀 Still Stuck?</summary>

1. Isolate the $\frac{1}{R_1}$ term:  
   $$\frac{1}{R_1} = \frac{1}{R_p} - \frac{1}{R_2}$$
2. Find a common denominator for the right side ($R_p \cdot R_2$):  
   $$\frac{1}{R_1} = \frac{R_2 - R_p}{R_p \cdot R_2}$$
3. Take the reciprocal of both sides to invert the equation:  
   $$R_1 = \mathbf{\frac{R_p \cdot R_2}{R_2 - R_p}}$$
</details>

---

### M3. Unveiling a Buried Kinetic Term
The final velocity squared of an accelerating system is expressed via the kinematic equation:
$$v^2 = u^2 + 2as$$
Rearrange this formula to completely isolate the initial velocity variable ($u$).

<details>
<summary>💡 Reveal Clue</summary>

Isolate the $u^2$ term first by moving the entire group $2as$ to the opposite side of the equation via subtraction. Once $u^2$ stands alone, take the square root of the entire opposing expression.
</details>

<details>
<summary>👀 Still Stuck?</summary>

1. Subtract $2as$ from both sides:  
   $$v^2 - 2as = u^2$$
2. Swap sides and apply the square root across the entire remaining expression:  
   $$u = \mathbf{\sqrt{v^2 - 2as}}$$
Never separate terms inside a square root (e.g., $\sqrt{v^2 - 2as}$ does NOT equal $v - \sqrt{2as}$).
</details>

---

### M4. Breaking Out an Orbital Radius
The gravitational force pulling an object into an orbital pathway is governed by the expression:
$$F = G \cdot \frac{m_1 \cdot m_2}{r^2}$$
Rearrange this equation to completely isolate the separation distance radius variable ($r$).

<details>
<summary>💡 Reveal Clue</summary>

The variable $r^2$ is trapped in the denominator. Multiply both sides by $r^2$ to bring it up to the numerator level, divide away the force factor $F$, and execute a final square root.
</details>

<details>
<summary>👀 Still Stuck?</summary>

1. Multiply by $r^2$:  
   $$F \cdot r^2 = G \cdot m_1 \cdot m_2$$
2. Divide by $F$:  
   $$r^2 = \frac{G \cdot m_1 \cdot m_2}{F}$$
3. Apply the square root:  
   $$r = \mathbf{\sqrt{\frac{G \cdot m_1 \cdot m_2}{F}}}$$
</details>

---

### M5. Rearranging Exponential Kinetic Energy
The total translational kinetic energy ($E_k$) of a moving mass is modeled by the classic structural identity:
$$E_k = \frac{1}{2}mv^2$$
Isolate the speed velocity parameter ($v$) purely in terms of the system's kinetic energy ($E_k$) and mass ($m$).

<details>
<summary>💡 Reveal Clue</summary>

Clear the $\frac{1}{2}$ coefficient by multiplying by 2. Divide both sides by the scalar mass $m$, then strip away the exponent by using a square root operation.
</details>

<details>
<summary>👀 Still Stuck?</summary>

1. Multiply by 2:  
   $$2E_k = mv^2$$
2. Divide by $m$:  
   $$\frac{2E_k}{m} = v^2$$
3. Take the square root:  
   $$v = \mathbf{\sqrt{\frac{2E_k}{m}}}$$
</details>

---

## 🚀 Part 2: Physics Applications (5 Problems)

### P1. The Centripetal String Tension
A small rubber stopper of mass $m = 0.15\text{ kg}$ is whirled in a horizontal circle of radius $r = 0.80\text{ m}$ at a constant speed $v$. The centripetal force holding it in orbit is provided entirely by string tension ($T$), modeled by:
$$T = \frac{mv^2}{r}$$
Derive a symbolic expression for $v$, then compute its numeric value if the maximum safe tension before the string snaps is $T = 12\text{ N}$.

<details>
<summary>💡 Reveal Clue</summary>

Do not plug in the mass or radius numbers yet! Isolate the variable $v$ symbolically first by multiplying by $r$ and dividing by $m$. Only substitute the values into your final rearranged algebraic expression.
</details>

<details>
<summary>👀 Still Stuck?</summary>

1. **Symbolic Rearrangement:** $$T \cdot r = mv^2 \rightarrow v^2 = \frac{T \cdot r}{m} \rightarrow v = \sqrt{\frac{T \cdot r}{m}}$$
2. **Numeric Substitution:** $$v = \sqrt{\frac{12 \cdot 0.80}{0.15}} = \sqrt{\frac{9.6}{0.15}} = \sqrt{64} = \mathbf{8.0\text{ m s}^{-1}}$$
This keeps our calculation perfectly clean and accurate to exactly 2 significant figures.
</details>

---

### P2. The Escape Velocity Threshold
The threshold speed required for a rocket payload to permanently escape a planet's gravitational pull is derived from the energetic balance equation:
$$\frac{1}{2}mv^2 = \frac{G \cdot M \cdot m}{R}$$
Isolate the escape velocity variable ($v$) symbolically. Notice what happens to the mass of the rocket ($m$).

<details>
<summary>💡 Reveal Clue</summary>

Look closely at both sides of the equals sign. The small mass of the rocket ($m$) appears as a linear multiplier on both sides. Divide both sides by $m$ to cancel it completely before isolating $v$.
</details>

<details>
<summary>👀 Still Stuck?</summary>

1. Divide by $m$ to cancel the rocket's mass:  
   $$\frac{1}{2}v^2 = \frac{G \cdot M}{R}$$
2. Multiply by 2 to clear the fraction coefficient:  
   $$v^2 = \frac{2G \cdot M}{R}$$
3. Take the square root:  
   $$v = \mathbf{\sqrt{\frac{2G \cdot M}{R}}}$$
*Physics Insight:* Because $m$ cancelled out, a tiny marble and a massive spaceship require the exact same escape velocity to break free from a planet!
</details>

---

### P3. The Braking Distance Index
A vehicle traveling at an initial speed $u$ slams on its brakes, locking its wheels and sliding to a complete halt ($v = 0$) over a braking distance displacement ($s$). The physics of this event are bounded by:
$$v^2 = u^2 + 2as$$
Given that the friction pad braking deceleration is a constant negative value ($a = -d$), show that the braking distance is directly proportional to the square of the initial speed by isolating $s$.

<details>
<summary>💡 Reveal Clue</summary>

Substitute $v = 0$ and $a = -d$ into the expression to yield: $0 = u^2 - 2ds$. Rearrange the equation to isolate the displacement distance $s$ completely on one side.
</details>

<details>
<summary>👀 Still Stuck?</summary>

1. Substitute known state conditions:  
   $$0 = u^2 + 2(-d)s \rightarrow 0 = u^2 - 2ds$$
2. Move the negative term to the left side via addition:  
   $$2ds = u^2$$
3. Isolate the distance variable $s$ by dividing by $2d$:  
   $$s = \mathbf{\frac{u^2}{2d}}$$
*Physics Insight:* Doubling your speed ($2u$) quadruples your total stopping distance ($4s$). This is why speed limits in residential zones are strictly enforced!
</details>

---

### P4. The Thermal Photon Frequency
In quantum atomic physics, the energy carried by a single light photon emitted during a molecular thermal drop is modeled by the combined equation:
$$E = h \cdot \frac{c}{\lambda}$$
Isolate the light wavelength variable ($\lambda$) entirely in terms of Planck's constant ($h$), the speed of light ($c$), and the total energy ($E$).

<details>
<summary>💡 Reveal Clue</summary>

Multiply both sides by $\lambda$ to lift the target variable out of the denominator. Then divide both sides by the energy variable $E$ to isolate it cleanly.
</details>

<details>
<summary>👀 Still Stuck?</summary>

1. Multiply by $\lambda$:  
   $$E \cdot \lambda = h \cdot c$$
2. Divide by $E$:  
   $$\lambda = \mathbf{\frac{h \cdot c}{E}}$$
</details>

---

### P5. The Pendulum Gravitational Probe
An astronaut on a newly discovered planet sets up a simple exploratory pendulum. The total time period ($T$) for one full swing of the pendulum depends on its string length ($L$) and local gravity ($g$), related by:
$$T = 2\pi \cdot \sqrt{\frac{L}{g}}$$
Rearrange this formula symbolically to isolate the local gravity variable ($g$) so the astronaut can calculate the planet's mass.

<details>
<summary>💡 Reveal Clue</summary>

The target variable $g$ is locked inside a square root. You cannot touch it until you isolate and eliminate that root. First, divide both sides by $2\pi$. Next, square **both entire sides** of the equation. Finally, cross-multiply to isolate $g$.
</details>

<details>
<summary>👀 Still Stuck?</summary>

1. Divide by $2\pi$:  
   $$\frac{T}{2\pi} = \sqrt{\frac{L}{g}}$$
2. Square both sides completely:  
   $$\left(\frac{T}{2\pi}\right)^2 = \frac{L}{g} \rightarrow \frac{T^2}{4\pi^2} = \frac{L}{g}$$
3. Invert or cross-multiply to isolate $g$:  
   $$g \cdot T^2 = 4\pi^2 \cdot L \rightarrow g = \mathbf{\frac{4\pi^2 \cdot L}{T^2}}$$
</details>