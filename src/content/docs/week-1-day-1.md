---
title: "Week 1, Day 1: Unit Systems & Dimensional Consistency"
description: "Mastering SI units and checking physical equations via dimensional analysis."
---

Welcome to Day 1 of your DP Physics Journey! Work through these problems on paper first. If you get stuck, use the dropdown guides to nudge your thinking before looking at the final calculation.

---

## Part A: Mathematical Foundations

### M1. Base SI Unit Identification
Identify the standard base SI units for the following physical quantities:
* Mass
* Length
* Time
* Electric Current

<details>
<summary><b>🔍 View Clue & Solution</b></summary>

* **Hint:** The IB system relies on 7 fundamental metric pillars. Avoid using larger scale variations like grams ($\text{g}$) or kilometers ($\text{km}$).
* **Worked Answer:** * Mass: $\color{olive}{\text{kilogram (kg)}}$
    * Length: $\color{olive}{\text{meter (m)}}$
    * Time: $\color{olive}{\text{second (s)}}$
    * Electric Current: $\color{olive}{\text{ampere (A)}}$

</details>

### M2. Derived Units and Compound Formulations
The Newton ($\text{N}$) is the SI derived unit of force. Express the Newton in terms of its foundational base SI units.

<details>
<summary><b>💡 Reveal Clue (Conceptual)</b></summary>

Think of the most famous formula for force from classical mechanics that links force to mass and acceleration ($F = ma$). What are the base units of those two components?

</details>

<details>
<summary><b>✅ View Final Worked Solution</b></summary>

1.  **Formula:** $$F = ma$$
2.  **Unit Substitution:** * Mass ($m$) $\rightarrow \text{kg}$
    * Acceleration ($a$) $\rightarrow \text{m s}^{-2}$
3.  **Result:** $$\text{1 N} = \color{navy}{\text{1 kg m s}^{-2}}$$

</details>

### M3. Temperature Scales and SI Norms
Convert a standard room temperature of $23.0^\circ\text{C}$ into the official SI base unit for thermodynamic temperature.

<details>
<summary><b>💡 Reveal Clue (Conceptual)</b></summary>

The SI base unit for temperature is Kelvin ($\text{K}$), not Celsius. To convert from Celsius to Kelvin, you must add the absolute zero offset constant: $273.15$.

</details>

<details>
<summary><b>✅ View Final Worked Solution</b></summary>

1.  **Formula:** $$T_{\text{Kelvin}} = T_{\text{Celsius}} + 273.15$$
2.  **Calculation:** $$23.0 + 273.15 = 296.15 \text{ K}$$
3.  **Result:** $$T = \color{navy}{296.2 \text{ K}}$$ (rounded to match the precision of the input data).

</details>

### M4. Base Units of Electrical Charge
The Coulomb ($\text{C}$) is the unit of electrical charge. Given that charge is calculated as current multiplied by time ($q = I \cdot t$), express the Coulomb in fundamental base SI units.

<details>
<summary><b>💡 Reveal Clue (Conceptual)</b></summary>

Look directly at the formula $q = I \cdot t$. Substitute the base SI unit for electric current ($I$) and the base SI unit for time ($t$).

</details>

<details>
<summary><b>✅ View Final Worked Solution</b></summary>

1.  **Formula:** $$q = It$$
2.  **Unit Substitution:** * Current ($I$) $\rightarrow \text{A}$ (Ampere)
    * Time ($t$) $\rightarrow \text{s}$ (Second)
3.  **Result:** $$\text{1 C} = \color{navy}{\text{1 A s}}$$

</details>

### M5. Frequency Foundations
The Hertz ($\text{Hz}$) is the derived unit for frequency, defined as the number of cycles per second ($\text{frequency} = \frac{1}{\text{time period}}$). Express the Hertz in base SI units.

<details>
<summary><b>💡 Reveal Clue (Conceptual)</b></summary>

Because cycles are a pure count (dimensionless), the numerator has no units. The denominator is time ($t$). Move the time unit to the numerator using a negative exponent.

</details>

<details>
<summary><b>✅ View Final Worked Solution</b></summary>

1.  **Formula:** $$f = \frac{1}{t}$$
2.  **Unit Substitution:** $$\text{Units of } f = \frac{1}{\text{s}}$$
3.  **Result:** $$\text{1 Hz} = \color{navy}{\text{1 s}^{-1}}$$

</details>

---

## Part B: Physics Applications

### P1. Checking the Kinetic Energy Equation
The kinetic energy ($E_k$) of an object is given by the formula:
$$E_k = \frac{1}{2}mv^2$$
Show that the units on both sides of the equation are dimensionally consistent. Note that energy is measured in Joules ($\text{J}$), where $1 \text{ J} = 1 \text{ kg m}^2\text{s}^{-2}$.

<details>
<summary><b>💡 Reveal Clue 1 (Conceptual)</b></summary>

To check for dimensional consistency, substitute the base SI units for every variable. Ignore pure numbers like $\frac{1}{2}$, as they are dimensionless and have no units!

</details>

<details>
<summary><b>⚙️ Reveal Clue 2 (Algebraic Setup)</b></summary>

Substitute the units into the right-hand side ($RHS$):
* Mass ($m$) $\rightarrow \text{kg}$
* Velocity ($v$) $\rightarrow \text{m s}^{-1}$
* Therefore, $v^2 \rightarrow (\text{m s}^{-1})^2$

Multiply these together and see if they match the Joules definition on the left.

</details>

<details>
<summary><b>✅ View Final Worked Solution & Proof</b></summary>

**Step-by-Step Proof:**
1.  **Left-Hand Side ($LHS$):** $$E_k = \text{J} = \text{kg m}^2\text{s}^{-2}$$
2.  **Right-Hand Side ($RHS$):** $$\text{Units of } \left(\frac{1}{2}mv^2\right) = (\text{kg}) \cdot (\text{m s}^{-1})^2$$
3.  Distribute the exponent across the velocity units: 
    $$(\text{m s}^{-1})^2 = \text{m}^2\text{s}^{-2}$$
4.  Combine terms: 
    $$RHS = \color{navy}{\text{kg m}^2\text{s}^{-2}}$$

$$\color{teal}{\text{Since } LHS = RHS\text{, the equation is dimensionally consistent!}}$$

</details>

### P2. Deriving the Units of the Gravitational Constant
The universal law of gravitation is written as:
$$F = G\frac{M \cdot m}{r^2}$$
Rearrange this formula to isolate the universal gravitational constant ($G$), and derive its combined base SI units.

<details>
<summary><b>💡 Reveal Clue 1 (Conceptual)</b></summary>

First, use algebra to isolate $G$ on one side of the equals sign. Multiply both sides by $r^2$ and divide both sides by $(M \cdot m)$.

</details>

<details>
<summary><b>⚙️ Reveal Clue 2 (Algebraic Setup)</b></summary>

Once isolated, the equation looks like this:
$$G = \frac{F \cdot r^2}{M \cdot m}$$
Substitute the derived base units for Force ($\text{kg m s}^{-2}$), distance squared ($\text{m}^2$), and the two masses ($\text{kg} \cdot \text{kg}$).

</details>

<details>
<summary><b>✅ View Final Worked Solution</b></summary>

1.  **Isolated Equation:** $$G = \frac{F \cdot r^2}{Mm}$$
2.  **Unit Insertion:** $$\text{Units of } G = \frac{(\text{kg m s}^{-2}) \cdot (\text{m}^2)}{\text{kg} \cdot \text{kg}}$$
3.  **Simplify the numerator:** $$\text{kg m}^3\text{s}^{-2}$$
4.  **Cancel one kilogram term out of the denominator:** $$\text{Units of } G = \color{navy}{\text{kg}^{-1}\text{m}^3\text{s}^{-2}}$$

</details>

### P3. Ideal Gas Constant Breakdown
The ideal gas law equation is stated as:
$$P \cdot V = n \cdot R \cdot T$$
Where $P$ is pressure ($\text{N m}^{-2}$), $V$ is volume ($\text{m}^3$), $n$ is amount of substance ($\text{mol}$), and $T$ is temperature ($\text{K}$). Deduce the base SI units for the gas constant $R$.

<details>
<summary><b>💡 Reveal Clue (Conceptual)</b></summary>

Isolate $R$ algebraically first: $R = \frac{PV}{nT}$. Then substitute the units given in the question and simplify. Remember that $1 \text{ N} = 1 \text{ kg m s}^{-2}$.

</details>

<details>
<summary><b>✅ View Final Worked Solution</b></summary>

1.  **Isolate R:** $$R = \frac{P \cdot V}{n \cdot T}$$
2.  **Substitute primary units:** $$\text{Units of } R = \frac{(\text{N m}^{-2}) \cdot (\text{m}^3)}{\text{mol} \cdot \text{K}} = \frac{\text{N m}}{\text{mol} \cdot \text{K}}$$
3.  **Convert Newtons to Base Units:** Since $\text{N} = \text{kg m s}^{-2}$:
    $$\text{N m} = (\text{kg m s}^{-2}) \cdot \text{m} = \text{kg m}^2\text{s}^{-2}$$
4.  **Final Assembly:** Bring denominator terms up using negative exponents:
    $$\text{Units of } R = \color{navy}{\text{kg m}^2\text{s}^{-2}\text{mol}^{-1}\text{K}^{-1}}$$

</details>

### P4. Velocity of a Wave
The velocity $v$ of a wave traveling down a stretched string depends on the tension force $F$ and the mass per unit length $\mu$ ($\text{kg m}^{-1}$) according to the formula:
$$v = \sqrt{\frac{F}{\mu}}$$
Show that this equation is dimensionally correct.

<details>
<summary><b>💡 Reveal Clue (Conceptual)</b></summary>

The square root sign is equivalent to raising the inside fraction to the power of $\frac{1}{2}$. Evaluate the unit fraction $\frac{F}{\mu}$ inside the root first, simplify it, and then apply the square root.

</details>

<details>
<summary><b>✅ View Final Worked Solution</b></summary>

1.  **Left-Hand Side ($LHS$):** $$v = \text{m s}^{-1}$$
2.  **Right-Hand Side ($RHS$) Inside Setup:** $$\frac{\text{Units of } F}{\text{Units of } \mu} = \frac{\text{kg m s}^{-2}}{\text{kg m}^{-1}}$$
3.  **Simplify inside terms:** The $\text{kg}$ cancels out. Moving $\text{m}^{-1}$ up makes it $\text{m}^2$:
    $$\frac{\text{m s}^{-2}}{\text{m}^{-1}} = \text{m}^2\text{s}^{-2}$$
4.  **Apply Square Root (Power of 1/2):**
    $$\sqrt{\text{m}^2\text{s}^{-2}} = (\text{m}^2\text{s}^{-2})^{1/2} = \color{navy}{\text{m s}^{-1}}$$
5.  $$\color{teal}{\text{Since } LHS = RHS\text{, the equation is correct.}}$$

</details>

### P5. Testing a Fake Acceleration Equation
A student proposes an equation for the acceleration $a$ of an object moving in a circular path:
$$a = \frac{v^2}{r^2}$$
Where $v$ is speed and $r$ is radius. Use dimensional analysis to prove whether this equation is valid or invalid.

<details>
<summary><b>💡 Reveal Clue (Conceptual)</b></summary>

Target base unit for acceleration ($LHS$) must be $\text{m s}^{-2}$. Plug the standard units of speed squared ($\text{m s}^{-1}$)$^2$ into the numerator and radius squared ($\text{m}^2$) into the denominator.

</details>

<details>
<summary><b>✅ View Final Worked Solution</b></summary>

1.  **LHS Target Unit:** $$a = \text{m s}^{-2}$$
2.  **RHS Unit Evaluation:** $$\frac{v^2}{r^2} = \frac{(\text{m s}^{-1})^2}{\text{m}^2} = \frac{\text{m}^2\text{s}^{-2}}{\text{m}^2}$$
3.  **Simplify RHS:** The $\text{m}^2$ terms cancel out completely, leaving:
    $$RHS = \text{s}^{-2}$$
4.  **Conclusion:** $$\color{teal}{\text{Because } \text{m s}^{-2} \neq \text{s}^{-2}\text{, this proposed equation is completely invalid!}}$$

</details>