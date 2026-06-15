---
title: "Day 20: Change of Base & Logarithmic Modeling"
description: "Scaffolded Core Strategy Blueprint and 10-Problem Tiered Track focused on the Change of Base formula and solving real-world exponential modeling systems."
---

Today we conclude our foundational journey through logarithms by breaking down the final major structural tool: the **Change of Base Formula**. We will master how to pivot any arbitrary base into a target system of choice (such as base $e$ or base 10), before shifting our focus to analyzing and breaking down real-world exponential modeling systems.

---

## 🧭 The Core Strategy Blueprint

### 👥 Parent Analytics Summary
* **The Core Gap:** When faced with an expression like $\log_3(5)$, students often feel stuck because standard secondary tools or old-school tables don't compute arbitrary bases natively. Furthermore, when analyzing real-world applications (like population decay or compound interest), students struggle to isolate the time variable ($t$) once it gets locked inside non-matching exponential bases.
* **The Target Objective:** We introduce the Change of Base formula as a tool for total base liberation. Your student will learn to map any log structure into a clean natural ratio ($\frac{\ln(x)}{\ln(b)}$), and then deploy this capability to solve complex, real-world analytical models.

### 🎒 First-Principles Script (The Feynman Technique)
> **Read this aloud to lock in the structural intuition:**
>
> "Let's figure out where the Change of Base formula comes from using absolute first principles. Suppose you want to find the exact value of an unfamiliar log, say $\log_b(a) = x$. 
> 
> Right now, we don't know how to evaluate this directly. Let's convert it back into its familiar exponential form:
> 
> $$b^x = a$$
> 
> Now, imagine we want to look at this system through a completely different base lens—let's pick an arbitrary base, like $c$. To do that, we can apply a $\log_c$ operator to both sides of the equation:
> 
> $$\log_c(b^x) = \log_c(a)$$
> 
> Using the log power rule we mastered on **Day 17**, we can drop that exponent $x$ down to the front line as a linear multiplier:
> 
> $x \cdot \log_c(b) = \log_c(a)$
> 
> Finally, to isolate our unknown value $x$, we divide both sides by $\log_c(b)$:
> 
> $$x = \frac{\log_c(a)}{\log_c(b)}$$
> 
> Because $x$ was originally equal to $\log_b(a)$, we have proven that:
> 
> $$\log_b(a) = \frac{\log_c(a)}{\log_c(b)}$$
> 
> This is an incredibly powerful key! It means you can change *any* inconvenient base into a clean ratio of two logs with a new base of your choice. In high-level math and physics, we almost always change the base to $e$, meaning $\log_b(a) = \frac{\ln(a)}{\ln(b)}$."

---

## 🛠️ The 10-Problem Tiered Track

Execute these tasks completely on physical paper. **Calculators are strictly prohibited.** Show every structural step cleanly.

### 🛑 Tier 1: Change of Base Mechanics (Problems 1–4)
*Focus: Executing clean base conversions and evaluations without a calculator.*

#### 1. Problem 1
Simplify and evaluate the exact numerical value of each expression using base conversions:
* **Part A:** $\log_8(32)$
* **Part B:** $\log_9\left(\frac{1}{27}\right)$
* **Part C:** $\log_{25}(125)$

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Links base conversions directly back to prime base decompositions from **Week 1, Day 2**.

For each part, identify the common prime base (Base 2 for Part A, Base 3 for Part B, Base 5 for Part C). Convert the expressions using the change of base rule to this common prime base, then evaluate the numerator and denominator independently.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1 [Part A]:** Convert to a common base of 2: $\frac{\log_2(32)}{\log_2(8)}$ **[1M]** Evaluate: $\frac{5}{3} \implies \mathbf{\frac{5}{3}}$ **[1A]**
* **Step 2 [Part B]:** Convert to a common base of 3: $\frac{\log_3(1/27)}{\log_3(9)}$ **[1M]** Evaluate negative indices: $\frac{-3}{2} \implies \mathbf{-\frac{3}{2}}$ or **$-1.5$** **[1A]**
* **Step 3 [Part C]:** Convert to a common base of 5: $\frac{\log_5(125)}{\log_5(25)}$ **[1M]** Evaluate: $\frac{3}{2} \implies \mathbf{\frac{3}{2}}$ or **$1.5$** **[1A]**
</details>

---

#### 2. Problem 2
Simplify the following product of logs down to a single integer value:

$$\log_3(5) \cdot \log_5(27)$$

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Demonstrates how base conversion ratios can cancel out common terms across multiplication lines.

Convert both logarithmic terms into natural logs ($\ln$). Write them as fractions, multiply them together, and look for common factors that can be eliminated from the numerator and denominator.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Apply the change of base formula to both terms using natural log base $e$:
  $$\frac{\ln(5)}{\ln(3)} \cdot \frac{\ln(27)}{\ln(5)}$$ **[2M]**
* **Step 2:** Cancel out the common $\ln(5)$ factor from the numerator and denominator:
  $$\frac{\ln(27)}{\ln(3)}$$ **[1M]**
* **Step 3:** Use prime base decomposition to simplify $\ln(27)$: $\ln(27) = \ln(3^3) = 3\ln(3)$ **[1M]**
* **Step 4:** Cancel out the remaining matching $\ln(3)$ factor: $\frac{3\ln(3)}{\ln(3)} = \mathbf{3}$ **[1A]**
</details>

---

#### 3. Problem 3
Express the following statement as a single logarithm with a base of 2:

$$3\log_4(x) - \log_2(y)$$

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Combines base transformations with yesterday's **Day 17 multi-term consolidation rules**.

You cannot combine logs when their bases do not match. Convert the first term ($\log_4(x)$) into a base-2 log using the change of base formula before applying the quotient law.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Convert the base-4 term to a base-2 logarithm: $\log_4(x) = \frac{\log_2(x)}{\log_2(4)} = \frac{\log_2(x)}{2}$ **[1M]**
* **Step 2:** Substitute this back into the original expression: $3\left(\frac{\log_2(x)}{2}\right) - \log_2(y) = \frac{3}{2}\log_2(x) - \log_2(y)$ **[1M]**
* **Step 3:** Move the leading fraction coefficient up as an exponent: $\log_2(x^{3/2}) - \log_2(y)$ **[1M]**
* **Step 4:** Apply the quotient law to form a single combined statement: **$\log_2\left(\frac{\sqrt{x^3}}{y}\right)$** **[1A]**
</details>

---

#### 4. Problem 4
Given that $\log_2(3) = k$, express $\log_{12}(18)$ purely in terms of parameter $k$.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Tests literal parametric substitutions across compound rational base alterations.

Convert the target expression $\log_{12}(18)$ entirely into base-2 logs using the change of base formula. Decompose 12 and 18 into prime factors of 2 and 3, expand them using log laws, and substitute $k$ for $\log_2(3)$.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Apply change of base to transform the target expression to base 2: $\log_{12}(18) = \frac{\log_2(18)}{\log_2(12)}$ **[1M]**
* **Step 2:** Decompose 18 and 12 into products of 2 and 3: $\frac{\log_2(2 \cdot 3^2)}{\log_2(2^2 \cdot 3)}$ **[1M]**
* **Step 3:** Expand the numerator and denominator using product and power laws: $\frac{\log_2(2) + 2\log_2(3)}{\log_2(2^2) + \log_2(3)} = \frac{1 + 2\log_2(3)}{2 + \log_2(3)}$ **[1M]**
* **Step 4:** Substitute the given parameter $k = \log_2(3)$ to finalize the form: **$\frac{1 + 2k}{2 + k}$** **[1A]**
</details>

---

### 🌀 Tier 2: Real-World Exponential Modeling (Problems 5–7)
*Focus: Setting up and solving application contexts by isolating variables trapped in exponents.*

#### 5. Problem 5
A specific biological culture grows according to the population model $P(t) = P_0 \cdot 3^{0.05t}$, where $t$ is measured in hours and $P_0$ is the initial population. Find the exact number of hours required for the culture's population to triple in size.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Integrates real-world scaling models with exponential isolation steps.

Tripling means the final population $P(t)$ becomes exactly $3P_0$. Set up the equation $3P_0 = P_0 \cdot 3^{0.05t}$, divide out $P_0$, and equate the exponents.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Formulate the tripling target balance equation: $3P_0 = P_0 \cdot 3^{0.05t}$ **[1M]**
* **Step 2:** Divide out the initial population scale parameter $P_0$: $3^1 = 3^{0.05t}$ **[1M]**
* **Step 3:** Equate the exponents directly since the bases are uniform: $1 = 0.05t$ **[1M]**
* **Step 4:** Solve for $t$ by converting the decimal to a fraction ($0.05 = \frac{1}{20}$): $1 = \frac{t}{20} \implies \mathbf{t = 20}$ **[1A]**
</details>

---

#### 6. Problem 6
An active radioactive isotope decays according to the physical model mass formula $M(t) = M_0 \cdot e^{-\lambda t}$, where $M_0$ is the initial mass, $t$ is the time elapsed in days, and $\lambda$ is the constant decay rate parameter. Given that the isotope has a half-life of exactly 14 days, derive the exact value of the decay parameter $\lambda$ in terms of natural logarithms.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Links physical science applications to the base-$e$ elimination workflows from **Day 18**.

A half-life means that at $t = 14$, the remaining mass $M(14)$ is exactly half of the initial mass ($\frac{1}{2}M_0$). Substitute these values into the formula, isolate the exponential term, and take the natural log of both sides.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Set up the half-life mass balance equation at $t = 14$: $\frac{1}{2}M_0 = M_0 \cdot e^{-\lambda(14)}$ **[1M]**
* **Step 2:** Cancel out the initial mass parameter $M_0$: $\frac{1}{2} = e^{-14\lambda}$ **[1M]**
* **Step 3:** Apply the natural log operator to both sides to clear base $e$: $\ln\left(\frac{1}{2}\right) = -14\lambda$ **[1M]**
* **Step 4:** Rewrite the fraction log using negative index properties: $-\ln(2) = -14\lambda$ **[1M]**
* **Step 5:** Divide by $-14$ to isolate the decay constant: **$\lambda = \frac{\ln(2)}{14}$** **[1A]**
</details>

---

#### 7. Problem 7
The financial value of a capital compound investment account matches the path function $A(t) = 2000 \cdot (1.06)^t$, where $t$ is the time tracking index in years. Find the exact expression for the number of years required for the total account value to reach \$5000.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Links financial modeling equations with mismatched exponential base structures from **Day 19**.

Set $A(t) = 5000$. Isolate the base term $(1.06)^t$ by dividing out 2000, then take the natural log of both sides and isolate $t$.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Set up the target value model equation: $5000 = 2000 \cdot (1.06)^t$ **[1M]**
* **Step 2:** Isolate the exponential base component by dividing by 2000: $\frac{5000}{2000} = (1.06)^t \implies \frac{5}{2} = (1.06)^t$ **[1M]**
* **Step 3:** Apply the natural log operator to both sides of the equation: $\ln\left(\frac{5}{2}\right) = \ln(1.06)^t$ **[1M]**
* **Step 4:** Drop the power exponent $t$ down to the front line via the power rule: $\ln\left(\frac{5}{2}\right) = t \cdot \ln(1.06)$ **[1M]**
* **Step 5:** Isolate variable $t$ through division: **$t = \frac{\ln(5/2)}{\ln(1.06)}$** or **$\frac{\ln(2.5)}{\ln(1.06)}$** **[1A]**
</details>

---

### 🏆 Tier 3: Simultaneous Systems & Variable Swaps (Problems 8–9)
*Focus: Resolving simultaneous equations and functional systems using base transformations.*

#### 8. Problem 8
Solve the following simultaneous logarithmic system for exact real coordinate pairs $(x, y)$:

$$\log_2(x) - \log_2(y) = 3$$
$$\log_4(x) + \log_4(y) = 2$$

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Blends simultaneous substitution tracks from **Week 1, Day 1** with log law compressions.

Condense the first equation using the quotient law and the second equation using the product law (after converting the base from 4 to 2). Convert both condensed equations into their exponential forms to find $x$ and $y$.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Condense the first equation using the quotient law: $\log_2\left(\frac{x}{y}\right) = 3 \implies \frac{x}{y} = 2^3 \implies x = 8y$ **[1M]**
* **Step 2:** Apply the change of base formula to the second equation to change it to base 2: $\frac{\log_2(x)}{2} + \frac{\log_2(y)}{2} = 2 \implies \log_2(x) + \log_2(y) = 4$ **[1M]**
* **Step 3:** Condense this base-2 equation using the product law: $\log_2(xy) = 4 \implies xy = 2^4 \implies xy = 16$ **[1M]**
* **Step 4:** Substitute the first equation's result ($x = 8y$) into this product equation: $(8y) \cdot y = 16 \implies 8y^2 = 16 \implies y^2 = 2$ **[1M]**
* **Step 5:** Solve for $y$ and $x$ (roots must be positive to satisfy the original log domains): $y = \sqrt{2}$ and $x = 8\sqrt{2}$. State final coordinate pair: **$\left(8\sqrt{2}, \sqrt{2}\right)$** **[1A]**
</details>

---

#### 9. Problem 9
An advanced research model establishes an identity relationship between three variables such that $\log_x(y) = \log_y(z)$. **Prove that** if this relationship holds true, then variable $z$ can be written explicitly in terms of $x$ and $y$ as:

$$z = y^{\log_x(y)}$$

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Evaluates abstract literal variable transformations using change of base properties.

Apply the change of base formula to both sides of the identity equation using a shared base of your choice (base $e$ works cleanly). Cross-multiply the terms, then convert the remaining equation back into exponential form to isolate $z$.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Convert both sides of the identity equation to natural logs using the change of base rule:
  $$\frac{\ln(y)}{\ln(x)} = \frac{\ln(z)}{\ln(y)}$$ **[2M]**
* **Step 2:** Cross-multiply to clear the rational fractions from the balance line:
  $$(\ln(y))^2 = \ln(z) \cdot \ln(x)$$ **[1M]**
* **Step 3:** Isolate the term containing variable $z$:
  $$\ln(z) = \frac{(\ln(y))^2}{\ln(x)} = \ln(y) \cdot \left(\frac{\ln(y)}{\ln(x)}\right)$$ **[1M]**
* **Step 4:** Recognize that the term inside the parenthesis is exactly the change of base definition of $\log_x(y)$:
  $$\ln(z) = \ln(y) \cdot \log_x(y)$$ **[1M]**
* **Step 5:** Pull the leading multiplier coefficient up as a power exponent using the power law:
  $$\ln(z) = \ln\left(y^{\log_x(y)}\right)$$ **[1M]**
* **Step 6:** Equate the arguments directly to finalize the proof: **$z = y^{\log_x(y)}$** **[1A]** *(Identity verified completely—Q.E.D.)*
</details>

---

### 🧪 Tier 4: Junior Paper 3 Investigation (Problem 10)
*Focus: Parametric logistic modeling, carrying capacities, and transcendental time isolation.*

#### 10. Problem 10: The Parametric Logistic Growth Boundary
Let us execute a rigorous investigation into a bounded modeling framework used extensively in mathematical economics and population biology: the **Logistic Growth Function**. Consider a dynamic tracking function defined by the formula:

$$P(t) = \frac{L}{1 + \alpha e^{-\beta t}}$$

where $L \in \mathbb{R}^+$ represents the maximum structural capacity ceiling limit, $\alpha \in \mathbb{R}^+$ acts as an initial offset translation parameter, and $\beta \in \mathbb{R}^+$ represents the continuous growth rate scale parameter.

* **Part A:** Show that as time progresses toward infinity ($t \to \infty$), the population value $P(t)$ approaches the capacity ceiling limit $L$ asymptotically.
* **Part B:** Derive a clean, fully isolated algebraic formula for the exact time $t$ required for the population to reach exactly a target fraction value $k$ of its maximum capacity ceiling (such that $P(t) = k \cdot L$, where $0 < k < 1$). Write your answer as a single condensed expression using natural logs.
* **Part C:** Suppose we alter the model structure to utilize an arbitrary base constant $b$ instead of the natural continuous base $e$, changing the governing formula to:
  $$P(t) = \frac{L}{1 + \alpha b^{-\beta t}}$$
  Derive the modified isolated algebraic formula for the target time $t$ when $P(t) = k \cdot L$ under this new base, and demonstrate how the Change of Base formula reconciles the two expressions cleanly.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** This problem serves as an ultimate synthesis challenge, uniting **Week 2 asymptotic convergence limits** with **Week 4 change of base transformations**.

For Part A, analyze the limiting behavior of the negative exponent term $e^{-\beta t}$ as $t \to \infty$. For Part B, set $P(t) = kL$, cancel out $L$, invert the fractions, and isolate the base-$e$ exponential term using natural logs. For Part C, repeat the algebraic steps for base $b$, apply the change of base formula to show structural equivalence, and track the parameter modifications.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1 [Part A]:** Evaluate the limiting behavior of the negative exponential component as $t \to \infty$:
  $$\text{Since } \beta > 0, \quad \lim_{t \to \infty} e^{-\beta t} = 0$$ **[1M]**
* **Step 2 [Part A]:** Substitute this limit back into the primary logistic model expression:
  $$\lim_{t \to \infty} P(t) = \frac{L}{1 + \alpha(0)} = \frac{L}{1} = L$$
  This proves that the function values approach the capacity ceiling $L$ asymptotically as time moves forward infinitely. **[1A]**
* **Step 3 [Part B]:** Set the logistic model equation equal to the target fraction condition $k \cdot L$:
  $$k \cdot L = \frac{L}{1 + \alpha e^{-\beta t}}$$ **[1M]**
* **Step 4 [Part B]:** Cancel the common capacity multiplier $L$ from both sides and invert the fractions:
  $$k = \frac{1}{1 + \alpha e^{-\beta t}} \implies 1 + \alpha e^{-\beta t} = \frac{1}{k}$$ **[1M]**
* **Step 5 [Part B]:** Isolate the base-$e$ exponential component through transposition:
  $$\alpha e^{-\beta t} = \frac{1}{k} - 1 \implies \alpha e^{-\beta t} = \frac{1 - k}{k} \implies e^{-\beta t} = \frac{1 - k}{\alpha k}$$ **[1M]**
* **Step 6 [Part B]:** Apply the natural log operator ($\ln$) to both sides to drop the exponent down:
  $$-\beta t = \ln\left(\frac{1 - k}{\alpha k}\right) \implies t = -\frac{1}{\beta}\ln\left(\frac{1 - k}{\alpha k}\right)$$ **[1M]**
* **Step 7 [Part B]:** Absorb the negative sign into the log argument using index inversion properties to clean up the final expression:
  $$\mathbf{t = \frac{1}{\beta}\ln\left(\frac{\alpha k}{1 - k}\right)}$$ **[1A]**
* **Step 8 [Part C]:** Re-run the exact same structural isolation steps using the modified base-$b$ template:
  $$b^{-\beta t} = \frac{1 - k}{\alpha k} \implies -\beta t = \log_b\left(\frac{1 - k}{\alpha k}\right) \implies \mathbf{t = \frac{1}{\beta}\log_b\left(\frac{\alpha k}{1 - k}\right)}$$ **[1M]**
* **Step 9 [Part C]:** Apply the Change of Base formula to convert this base-$b$ target time equation into base $e$:
  $$\log_b\left(\frac{\alpha k}{1 - k}\right) = \frac{\ln\left(\frac{\alpha k}{1 - k}\right)}{\ln(b)}$$
  Substituting this back yields the final unified continuous comparison model formula:
  $$\mathbf{t = \frac{1}{\beta \ln(b)}\ln\left(\frac{\alpha k}{1 - k}\right)}$$
  This demonstrates that switching the model base to an arbitrary constant $b$ scales the time index by a clean factor of exactly $\frac{1}{\ln(b)}$, completing the proof. **[1A]** *(Q.E.D.)*
</details>