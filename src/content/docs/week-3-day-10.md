---
title: "Day 10: Simultaneous Equations in Physics"
description: "Mastering systems of equations, multi-body substitutions, and static equilibrium balances."
---

Welcome to Day 10! Today we move from isolating a single variable to solving systems where multiple physical quantities are unknown at the same time. This is the mathematical framework behind multi-body dynamics, pulleys, and structural rigging systems in DP Physics.

### ⏱️ The 15-Minute Execution Rule
* Use the **Substitution Method** as your default defense mechanism. Isolate the simplest variable in Equation 1, then plug it completely into Equation 2.
* Never expand complex fractions or evaluate trigonometric numbers early; let the letters simplify across lines first.
* Keep your horizontal alignment clean: line up your equal signs vertically in your scratchpad.

---

## 📐 Part 1: Mathematical Foundations (5 Problems)

### M1. The Linear Substitution Base
Solve the following abstract system of equations to find the exact values of $x$ and $y$:
1) $$2x + y = 11$$
2) $$3x - 2y = 6$$

<details>
<summary>💡 Reveal Clue</summary>

Equation 1 is the easiest starting point because the variable $y$ has a coefficient of 1. Rearrange Equation 1 to isolate $y$: $y = 11 - 2x$. Substitute this entire expression into the $y$ slot of Equation 2, solve for $x$, and then back-calculate $y$.
</details>

<details>
<summary>👀 Still Stuck?</summary>

1. Isolate $y$ in Eq 1:  
   $$y = 11 - 2x$$
2. Substitute into Eq 2:  
   $$3x - 2(11 - 2x) = 6$$
   $$3x - 22 + 4x = 6$$
   $$7x - 22 = 6$$
3. Isolate and solve for $x$:  
   $$7x = 28 \rightarrow \mathbf{x = 4}$$
4. Back-substitute to find $y$:  
   $$y = 11 - 2(4) = 11 - 8 \rightarrow \mathbf{y = 3}$$
</details>

---

### M2. Factoring Out a Shared Fractional Unknown
Solve the following system for the positive values of $A$ and $B$:
1) $$A + B = 20$$
2) $$\frac{A}{2} = \frac{B}{3}$$

<details>
<summary>💡 Reveal Clue</summary>

Cross-multiply Equation 2 to clear the fractions, giving you $3A = 2B$. This simplifies to $B = 1.5A$. Substitute this expression directly into Equation 1 to collapse the system down to a single variable.
</details>

<details>
<summary>👀 Still Stuck?</summary>

1. Cross-multiply Eq 2:  
   $$3A = 2B \rightarrow B = \frac{3}{2}A = 1.5A$$
2. Substitute into Eq 1:  
   $$A + 1.5A = 20$$
   $$2.5A = 20$$
3. Solve for $A$:  
   $$A = \frac{20}{2.5} \rightarrow \mathbf{A = 8}$$
4. Solve for $B$:  
   $$B = 1.5(8) \rightarrow \mathbf{B = 12}$$
</details>

---

### M3. The Multi-Mass Acceleration Ratio
In an accelerating multi-mass system, the variables $T$ (tension) and $a$ (acceleration) are constrained by:
1) $$T = 3a$$
2) $$50 - T = 5a$$
Solve for the exact value of the system acceleration parameter ($a$).

<details>
<summary>💡 Reveal Clue</summary>

Because Equation 1 states that $T$ is already perfectly isolated ($T = 3a$), you can use the substitution method instantly. Drop the expression $3a$ directly into the $T$ slot of Equation 2.
</details>

<details>
<summary>👀 Still Stuck?</summary>

1. Substitute Eq 1 directly into Eq 2:  
   $$50 - (3a) = 5a$$
2. Group the acceleration terms together on the right side by adding $3a$:  
   $$50 = 5a + 3a$$
   $$50 = 8a$$
3. Isolate $a$:  
   $$a = \frac{50}{8} = \mathbf{6.25}$$
</details>

---

### M4. Resolving Trigonometric Ratios Simultaneously
Solve for the unknown tension variable $T_1$ using the matching directional equilibrium conditions:
1) $$T_1 \cdot \cos(60^\circ) - T_2 = 0$$
2) $$T_1 \cdot \sin(60^\circ) = 86.6$$

<details>
<summary>💡 Reveal Clue</summary>

Look closely at the system. Equation 2 only contains a single unknown variable ($T_1$). You do not need to use substitution across both equations to start; isolate $T_1$ directly in Equation 2 by dividing through by $\sin(60^\circ)$.
</details>

<details>
<summary>👀 Still Stuck?</summary>

1. Isolate $T_1$ in Eq 2:  
   $$T_1 = \frac{86.6}{\sin(60^\circ)}$$
2. Evaluate the trigonometric division ($\sin(60^\circ) \approx 0.86603$):  
   $$T_1 = \frac{86.6}{0.86603} = 99.996 \rightarrow \mathbf{100}$$
*Note:* Equation 1 is extra information here if you only need $T_1$, but if you needed $T_2$, you would back-substitute to find $100 \cdot \cos(60^\circ) = 50$.
</details>

---

### M5. Eliminating a Shared Variable by Addition
Solve the simultaneous parameters $T$ and $F$ using the elimination method:
1) $$F + T = 12$$
2) $$F - T = 4$$

<details>
<summary>💡 Reveal Clue</summary>

The elimination method is incredibly fast here. Because Equation 1 features a $+T$ and Equation 2 features a $-T$, you can add the two entire equations together vertically. The $T$ terms will cancel out completely to zero, letting you solve for $F$ instantly.
</details>

<details>
<summary>👀 Still Stuck?</summary>

1. Add the two equations vertically:  
   $$(F + T) + (F - T) = 12 + 4$$
   $$2F = 16$$
2. Solve for $F$:  
   $$\mathbf{F = 8}$$
3. Substitute back into Eq 1 to find $T$:  
   $$8 + T = 12 \rightarrow \mathbf{T = 4}$$
</details>

---

## 🚀 Part 2: Physics Applications (5 Problems)

### P1. The Two-Body Connected Train
An engine pulls two cargo blocks linked together by a coupling string across a frictionless track. The physics equations governing the tension force ($T$) and the shared system acceleration ($a$) are written as:
1) $$T = 4.0a$$
2) $$24 - T = 8.0a$$
Calculate the numeric value of the acceleration ($a$) and the coupling tension ($T$).

<details>
<summary>💡 Reveal Clue</summary>

Substitute the identity $T = 4.0a$ from Equation 1 into the $T$ slot of Equation 2. Combine the like terms to solve for $a$ first, then use that result to compute $T$.
</details>

<details>
<summary>👀 Still Stuck?</summary>

1. **Substitute Eq 1 into Eq 2:** $$24 - (4.0a) = 8.0a$$
2. **Combine acceleration variables:** $$24 = 12.0a \rightarrow a = \frac{24}{12.0} = \mathbf{2.0\text{ m s}^{-2}}$$
3. **Compute the tension force:** $$T = 4.0 \cdot (2.0) = \mathbf{8.0\text{ N}}$$
All final answers maintain exactly 2 significant figures to match the input data.
</details>

---

### P2. The Symmetrical Traffic Light Rig
A heavy traffic light is suspended in static equilibrium by two symmetric cables. The vertical upward force balance ($\Sigma F_y = 0$) and horizontal lateral force balance ($\Sigma F_x = 0$) yield the following structural equations:
1) $$T_1 \cdot \cos(45^\circ) - T_2 \cdot \cos(45^\circ) = 0$$
2) $$T_1 \cdot \sin(45^\circ) + T_2 \cdot \sin(45^\circ) = 140\text{ N}$$
Deduce the tension values ($T_1$ and $T_2$) holding the light.

<details>
<summary>💡 Reveal Clue</summary>

Analyze Equation 1 first. Rearrange it to show that $T_1 \cdot \cos(45^\circ) = T_2 \cdot \cos(45^\circ)$, which means $T_1 = T_2$. Substitute this identity into Equation 2 so that both terms share the exact same variable name.
</details>

<details>
<summary>👀 Still Stuck?</summary>

1. **Simplify Eq 1:** $$T_1 = T_2$$
2. **Substitute into Eq 2:** $$T_1 \cdot \sin(45^\circ) + T_1 \cdot \sin(45^\circ) = 140$$
   $$2T_1 \cdot \sin(45^\circ) = 140$$
3. **Isolate and calculate $T_1$:** $$T_1 = \frac{140}{2 \cdot \sin(45^\circ)} = \frac{140}{1.4142} = 98.99 \rightarrow \mathbf{99\text{ N}}$$
Because $T_1 = T_2$, then **$T_2 = 99\text{ N}$** as well (rounded to 2 significant figures).
</details>

---

### P3. The Atwood Machine Pulley Balance
Two masses hang vertically from a frictionless laboratory pulley wheel system (an Atwood machine). Their equations of motion for tension ($T$) and upward/downward acceleration ($a$) are recorded as:
1) $$T - 20 = 2.0a$$
2) $$60 - T = 6.0a$$
Calculate the true operational acceleration ($a$) of this hanging pulley system.

<details>
<summary>💡 Reveal Clue</summary>

Isolate the tension variable $T$ in Equation 1 by moving the 20 to the right side via addition: $T = 2.0a + 20$. Plug this complete expression into the $T$ slot of Equation 2, being careful to distribute the negative sign across both terms.
</details>

<details>
<summary>👀 Still Stuck?</summary>

1. **Isolate $T$ in Eq 1:** $$T = 2.0a + 20$$
2. **Substitute into Eq 2:** $$60 - (2.0a + 20) = 6.0a$$
   $$60 - 2.0a - 20 = 6.0a$$
3. **Group the terms:** $$40 - 2.0a = 6.0a \rightarrow 40 = 8.0a$$
4. **Solve for $a$:** $$a = \frac{40}{8.0} = \mathbf{5.0\text{ m s}^{-2}}$$
</details>

---

### P4. The Biomechanical Jaw Pivot
A patient undergoing dental alignment displays a jaw muscle balance pattern governed by two simultaneous force limits, where $F_M$ is the muscle force and $F_J$ is the joint reaction force:
1) $$F_M - F_J = 15\text{ N}$$
2) $$2.0F_M - 3.0F_J = 0\text{ N}$$
Solve for the individual operational biological forces $F_M$ and $F_J$.

<details>
<summary>💡 Reveal Clue</summary>

Rearrange Equation 1 to isolate the muscle force variable: $F_M = F_J + 15$. Substitute this expression into Equation 2, distribute the 2.0 multiplier, and solve for the joint reaction force ($F_J$) first.
</details>

<details>
<summary>👀 Still Stuck?</summary>

1. **Isolate $F_M$ in Eq 1:** $$F_M = F_J + 15$$
2. **Substitute into Eq 2:** $$2.0(F_J + 15) - 3.0F_J = 0$$
   $$2.0F_J + 30 - 3.0F_J = 0$$
3. **Solve for $F_J$:** $$-1.0F_J + 30 = 0 \rightarrow \mathbf{F_J = 30\text{ N}}$$
4. **Calculate $F_M$:** $$F_M = 30 + 15 = \mathbf{45\text{ N}}$$
</details>

---

### P5. The Frictionless Elevator Ascent
A heavy crate sits inside an upwardly accelerating elevator cargo hold. The dynamic normal force ($N$) pressing against the crate's base and its shared upward acceleration ($a$) satisfy the system constraints:
1) $$N - 500 = 50a$$
2) $$N = 600\text{ N}$$
Determine the acceleration rate ($a$) of the ascending elevator car.

<details>
<summary>💡 Reveal Clue</summary>

This system is pre-solved for the normal force ($N = 600\text{ N}$ in Equation 2). Simply substitute this known constant value directly into the $N$ slot of Equation 1 and solve for the remaining acceleration variable $a$.
</details>

<details>
<summary>👀 Still Stuck?</summary>

1. **Substitute Eq 2 directly into Eq 1:** $$600 - 500 = 50a$$
2. **Simplify the expression:** $$100 = 50a$$
3. **Solve for $a$:** $$a = \frac{100}{50} = \mathbf{2.0\text{ m s}^{-2}}$$
The elevator is accelerating upward at exactly 2.0 meters per second squared.
</details>