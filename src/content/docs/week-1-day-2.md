---
title: "Week 1, Day 2: Significant Figures & Scientific Notation"
description: "Mastering the rules of precision and scale required for IB Physics exams."
---

Precision is everything in IB Physics. The digits we record reveal how sensitive our tools were. Let's practice maintaining precision while scaling tracking metrics.

---

## Part A: Mathematical Foundations

### M1. The Counting Rules
Determine the number of significant figures (sf) in each of the following values:
* $0.00340 \text{ kg}$
* $1200 \text{ N}$
* $1.005 \times 10^{4} \text{ s}$
* $400. \text{ m}$ (note the decimal point)

<details>
<summary><b>🔍 View Rules & Solutions</b></summary>

* **Rule Guide:** Leading zeros never count. Trailing zeros only count if there is an explicit decimal point. All scientific notation base digits are significant.
* **Answers:**
    * $0.00340 \text{ kg} \rightarrow \color{olive}{\text{3 sf}}$ (leading zeros placeholder; trailing zero counts due to decimal)
    * $1200 \text{ N} \rightarrow \color{olive}{\text{2 sf}}$ (no explicit decimal point makes trailing zeros placeholders)
    * $1.005 \times 10^{4} \text{ s} \rightarrow \color{olive}{\text{4 sf}}$ (all coefficient digits are significant)
    * $400. \text{ m} \rightarrow \color{olive}{\text{3 sf}}$ (the explicit decimal point forces trailing zeros to match measured data)

</details>

### M2. Taming the Calculator Output
A calculator outputs the raw result $x = 4.396152$. Round this number to:
* 1 significant figure
* 2 significant figures
* 3 significant figures
* 4 significant figures

<details>
<summary><b>💡 Reveal Clue (Conceptual)</b></summary>

Count from left to right starting at the first non-zero number. Look one digit to the right of your target cut-off: if it is 5 or higher, round up! Pay close attention to how the 9 shifts when rounding to 3 sf.

</details>

<details>
<summary><b>✅ View Final Worked Solution</b></summary>

* 1 sf: $\color{navy}{4}$ (look at 3, round down)
* 2 sf: $\color{navy}{4.4}$ (look at 9, round up)
* 3 sf: $\color{navy}{4.40}$ (the 9 rounds up because of the 6, cascading up to 4.40. The zero must be written to maintain 3 sf precision!)
* 4 sf: $\color{navy}{4.396}$ (look at 1, round down)

</details>

### M3. Standard Form Conversion
Convert the following values into standard scientific notation ($A \times 10^n$, where $1 \le A < 10$) while preserving original precision limits:
* $150,000,000,000 \text{ m}$
* $0.0000000000000000001602 \text{ C}$
* $6,670,000 \text{ kg}$

<details>
<summary><b>💡 Reveal Clue (Conceptual)</b></summary>

Count how many spaces you need to shift the decimal point to leave exactly one non-zero number to its left. Shifting left means a positive exponent; shifting right means a negative exponent. Preserve the active significant figures!

</details>

<details>
<summary><b>✅ View Final Worked Solution</b></summary>

* $150,000,000,000 \text{ m} \rightarrow \color{navy}{1.5 \times 10^{11} \text{ m}}$ (2 sf preserved)
* $0.0000000000000000001602 \text{ C} \rightarrow \color{navy}{1.602 \times 10^{-19} \text{ C}}$ (4 sf preserved)
* $6,670,000 \text{ kg} \rightarrow \color{navy}{6.67 \times 10^6 \text{ kg}}$ (3 sf preserved)

</details>

### M4. Adding and Subtracting Rules
Calculate the final result using the correct precision rules for addition/subtraction:
$$12.55 \text{ g} + 3.2 \text{ g} - 0.004 \text{ g}$$

<details>
<summary><b>💡 Reveal Clue (Conceptual)</b></summary>

Addition and subtraction properties do not care about total significant figures! They are limited strictly by the **least number of decimal places** present in the starting numbers. Identify which number has the fewest digits past the decimal point.

</details>

<details>
<summary><b>✅ View Final Worked Solution</b></summary>

1.  **Analyze Decimal Places:**
    * $12.55 \rightarrow \text{2 decimal places}$
    * $3.2 \rightarrow \color{teal}{\text{1 decimal place (The Limiting Value)}}$
    * $0.004 \rightarrow \text{3 decimal places}$
2.  **Raw Calculation:** $$12.55 + 3.2 - 0.004 = 15.746 \text{ g}$$
3.  **Round to 1 decimal place:** $$\text{Final Result} = \color{navy}{15.7 \text{ g}}$$

</details>

### M5. Multiplying and Dividing Rules
Calculate the final result using the correct precision rules for multiplication/division:
$$\frac{450.3 \text{ m}}{1.5 \text{ s}}$$

<details>
<summary><b>💡 Reveal Clue (Conceptual)</b></summary>

For multiplication and division, your final answer is constrained by the **least total number of significant figures** among your data inputs.

</details>

<details>
<summary><b>✅ View Final Worked Solution</b></summary>

1.  **Analyze Significant Figures:**
    * $450.3 \rightarrow \text{4 sf}$
    * $1.5 \rightarrow \color{teal}{\text{2 sf (The Limiting Value)}}$
2.  **Raw Calculation:** $$\frac{450.3}{1.5} = 300.2 \text{ m s}^{-1}$$
3.  **Round to 2 sf:** To display 300.2 to exactly 2 sf, we must use scientific notation: $$\text{Final Result} = \color{navy}{3.0 \times 10^2 \text{ m s}^{-1}}$$

</details>

---

## Part B: Physics Applications

### P1. Speed Trap Precision
A student records a distance $d = 2.40 \text{ m}$ (3 sf) and a time $t = 1.8 \text{ s}$ (2 sf). Calculate the average speed ($v = \frac{d}{t}$).

<details>
<summary><b>💡 Reveal Clue (Conceptual)</b></summary>

Since this operation is division, identify the lowest total number of significant figures present in the measurement inputs.

</details>

<details>
<summary><b>✅ View Final Worked Solution</b></summary>

1.  **Identify Constraints:** Distance has 3 sf, time has 2 sf. Final answer must match 2 sf.
2.  **Calculation:** $$\frac{2.40}{1.8} = 1.33333... \text{ m s}^{-1}$$
3.  **Round to 2 sf:** $$\text{Velocity} = \color{navy}{1.3 \text{ m s}^{-1}}$$

</details>

### P2. Area of a Solar Panel
A solar panel has a length of $3.15 \text{ m}$ (3 sf) and a width of $0.42 \text{ m}$ (2 sf). Calculate the surface area and state why it would be incorrect to report the raw calculator output of $1.323 \text{ m}^2$.

<details>
<summary><b>💡 Reveal Clue (Conceptual)</b></summary>

Calculate the area by multiplying length by width. Compare the precision of the inputs to evaluate why writing out all 4 digits violates physics data tracking laws.

</details>

<details>
<summary><b>✅ View Final Worked Solution</b></summary>

1.  **Calculation:** $$3.15 \text{ m} \times 0.42 \text{ m} = 1.323 \text{ m}^2$$
2.  **Apply Rule:** Multiplication requires tracking the lowest total significant figures ($0.42$ has only 2 sf).
3.  **Correct Answer:** $$\text{Area} = \color{navy}{1.3 \text{ m}^2}$$
4.  **Reasoning Statement:** $$\color{teal}{\text{Reporting 1.323 is incorrect because it implies an unrealistic precision not supported by the 2 sf width measurement.}}$$

</details>

### P3. The Mass of a Compound Block
Block A has a mass of $m_A = 4.5 \times 10^2 \text{ kg}$ and Block B has a mass of $m_B = 1.25 \text{ kg}$. Calculate the total mass ($m_A + m_B$) using proper precision rules.

<details>
<summary><b>💡 Reveal Clue (Conceptual)</b></summary>

Convert Block A out of scientific notation first so you can clearly line up the decimal places ($4.5 \times 10^2 = 450$). Apply the decimal placement rule for addition.

</details>

<details>
<summary><b>✅ View Final Worked Solution</b></summary>

1.  **Align Decimals:** * $m_A = 450 \text{ kg} \rightarrow \text{Precision limited to the tens place}$
    * $m_B = 1.25 \text{ kg} \rightarrow \text{Precision down to the hundredths place}$
2.  **Sum:** $$450 + 1.25 = 451.25 \text{ kg}$$
3.  **Round to the least precise column:** The tens place is our limit.
4.  **Final Result:** $$\text{Total Mass} = \color{navy}{450 \text{ kg}} = \color{navy}{4.5 \times 10^2 \text{ kg}}$$
5.  *Insight:* Because Block A is so large and imprecise, Block B's small mass is completely "swallowed up" within our measurement uncertainty boundaries.

</details>

### P4. Electric Current Scale
An electric circuit has a current of $I = 4.5 \text{ mA}$ flowing for a time of $t = 2.0 \times 10^2 \text{ s}$. Calculate total charge delivered ($Q = I \cdot t$) in base Coulombs.

<details>
<summary><b>💡 Reveal Clue (Conceptual)</b></summary>

Convert the milliampere prefix ($\text{mA}$) to base amperes ($\text{A}$) first: $1 \text{ mA} = 10^{-3} \text{ A}$. Then multiply your numbers together and limit your answer to the lowest total significant figures.

</details>

<details>
<summary><b>✅ View Final Worked Solution</b></summary>

1.  **Prefix Conversion:** $$I = 4.5 \text{ mA} = 4.5 \times 10^{-3} \text{ A} \text{ (2 sf)}$$
2.  **Time Factor:** $$t = 2.0 \times 10^2 \text{ s} \text{ (2 sf)}$$
3.  **Calculation:** $$Q = (4.5 \times 10^{-3} \text{ A}) \times (2.0 \times 10^2 \text{ s}) = 0.9 \text{ C}$$
4.  **Maintain 2 sf Precision:** To display 0.9 with exactly two significant figures, add a trailing decimal digit:
    $$\text{Total Charge} = \color{navy}{0.90 \text{ C}}$$

</details>

### P5. Gravitational Force Scale Check
A student evaluates data through a formula. Their calculator outputs $F = 345.28911 \text{ N}$. If the input data value with the poorest precision had only **3 significant figures**, state exactly how the student must write this value on an IB exam.

<details>
<summary><b>💡 Reveal Clue (Conceptual)</b></summary>

You must truncate and round the massive calculator output string down so that only the first three active significant figures remain.

</details>

<details>
<summary><b>✅ View Final Worked Solution</b></summary>

1.  **Analyze constraints:** The poorest data value caps our final structural integrity at 3 sf.
2.  **Count digits from left:** 3, 4, 5 are the first three significant figures.
3.  **Evaluate rounding digit:** The digit following 5 is 2, so round down.
4.  **Exam Presentation Output:** $$F = \color{navy}{345 \text{ N}}$$

</details>