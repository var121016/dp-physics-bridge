---
title: "Day 21: Arithmetic Progressions & Linear Growth"
description: "Scaffolded Core Strategy Blueprint and 10-Problem Tiered Track focused on the nth term of arithmetic progressions, common differences, and linear modeling."
---


Today we enter the domain of discrete calculus and structured patterns. In previous modules, we analyzed continuous linear functions ($y = mx + c$). Now, we transition that exact same foundational logic into discrete steps. An Arithmetic Progression (AP) is nothing more than a linear function restricted to counting integers as its input domain.

---

## 🧭 The Core Strategy Blueprint

### 👥 Parent Analytics Summary
* **The Core Gap:** Students frequently treat sequence formulas like black boxes, memorizing $u_n = u_1 + (n-1)d$ without understanding *why* the $(n-1)$ term exists. This lack of structural clarity causes execution errors when they are asked to identify term indices or solve simultaneous parameters.
* **The Target Objective:** We ground the sequence formula from a first-principles linear approach. Your student will view the common difference ($d$) as a discrete gradient, mapping out structural solutions cleanly via systems of linear equations without manual term counting.

### 🎒 First-Principles Script (The Feynman Technique)
> **Read this aloud to lock in the structural intuition:**
>
> "Let's build an arithmetic sequence entirely from scratch. Imagine you are building a staircase out of blocks. The first step uses a baseline number of blocks—we will call this first term $u_1$. 
> 
> To make the next step, you add a fixed, constant number of blocks. This constant change is called the **common difference**, or $d$. 
> 
> Let's look at the pattern as we climb up step by step:
> * Step 1 ($u_1$): Just your starting baseline blocks.
> * Step 2 ($u_2$): You took your baseline and added the difference *once*: $u_1 + d$.
> * Step 3 ($u_3$): You added the difference *twice*: $u_1 + 2d$.
> * Step 4 ($u_4$): You added the difference *three times*: $u_1 + 3d$.
> 
> 
>
> Notice the structural pattern: to get to any target step $n$, you only add the common difference exactly **$(n-1)$ times**, because you already started on Step 1! This gives us our flawless mathematical blueprint for the $n$th term of any arithmetic progression:
> 
> $$u_n = u_1 + (n-1)d$$
> 
> The common difference $d$ acts exactly like the slope ($m$) of a straight line graph, while $n$ represents our discrete step counter. If $d$ is positive, our sequence climbs to infinity; if $d$ is negative, it drops down linearly."

---

## 🛠️ The 10-Problem Tiered Track

Execute these tasks completely on physical paper. **Calculators are strictly prohibited.** Show every structural step cleanly.

### 🛑 Tier 1: Core Term Extraction (Problems 1–4)
*Focus: Mastering the basic manipulation of the $u_n = u_1 + (n-1)d$ sequence engine.*

#### 1. Problem 1
An arithmetic progression is defined explicitly by the discrete pattern: $7, 11, 15, 19, \dots$
* **Part A:** State the exact value of the initial term $u_1$ and the common difference $d$.
* **Part B:** Determine the exact numerical value of the 30th term ($u_{30}$).

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Direct application of the $n$th term engine under integer inputs.

Calculate the common difference $d$ by subtracting any term from the one that follows it ($u_2 - u_1$). Once identified, substitute $u_1$, $d$, and $n = 30$ into the core formula.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1 [Part A]:** Identify the initial baseline term directly: $\mathbf{u_1 = 7}$ **[1A]**
* **Step 2 [Part A]:** Compute the step difference: $d = 11 - 7 = \mathbf{4}$ **[1A]**
* **Step 3 [Part B]:** Deploy the general term formula for $n = 30$: $u_{30} = u_1 + (30 - 1)d$ **[1M]**
* **Step 4 [Part B]:** Substitute values and calculate: $u_{30} = 7 + 29(4) = 7 + 116 = \mathbf{123}$ **[1A]**
</details>

---

#### 2. Problem 2
Find an explicit simplified expression in terms of $n$ for the $n$th term of the arithmetic sequence: $23, 17, 11, 5, \dots$

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Connects discrete sequences directly to standard linear functional formats ($mx + c$).

Notice that the values are decreasing, which means your common difference $d$ must be a negative number. Substitute your parameters into the general term formula and expand the parenthesis completely to group like terms.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Extract baseline parameters: $u_1 = 23$ and $d = 17 - 23 = -6$ **[1M]**
* **Step 2:** Set up the tracking formula expression: $u_n = 23 + (n - 1)(-6)$ **[1M]**
* **Step 3:** Expand the negative coefficient distribution cleanly: $u_n = 23 - 6n + 6$ **[1M]**
* **Step 4:** Collect numerical constants: **$u_n = 29 - 6n$** or **$-6n + 29$** **[1A]**
</details>

---

#### 3. Problem 3
The first term of an arithmetic progression is $-5$ and the 12th term is 28. Determine the exact value of the common difference $d$.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Employs basic single-variable algebraic isolation loops from **Week 1, Day 1**.

Set $u_{12} = 28$ and $u_1 = -5$. Substitute these constraints into the general term formula to create a linear equation where $d$ is the only unknown variable.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Set up the formula for the 12th position step: $u_{12} = u_1 + 11d$ **[1M]**
* **Step 2:** Substitute the known boundary values: $28 = -5 + 11d$ **[1M]**
* **Step 3:** Isolate the variable term by adding 5 to both sides: $33 = 11d$ **[1M]**
* **Step 4:** Divide to solve for the exact difference value: **$d = 3$** **[1A]**
</details>

---

#### 4. Problem 4
Determine exactly how many terms exist within the finite arithmetic progression layout:

$4, 9, 14, 19, \dots, 249$

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Tracks boundaries by reversing the functional sequence operator to isolate an index value.

Identify $u_1$ and $d$ first. Set your general term equation $u_n$ equal to the final value (249) and solve for the integer index step $n$.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Extract core parameters from the sequence profile: $u_1 = 4$ and $d = 9 - 4 = 5$ **[1M]**
* **Step 2:** Set the general term formula equal to the target ceiling value of 249: $4 + (n - 1)5 = 249$ **[1M]**
* **Step 3:** Isolate the binomial term: $(n - 1)5 = 245$ **[1M]**
* **Step 4:** Divide both sides by 5: $n - 1 = 49$ **[1M]**
* **Step 5:** Finalize the count by adding 1: **$n = 50$ terms** **[1A]**
</details>

---

### 🌀 Tier 2: Simultaneous Parameter Mappings (Problems 5–7)
*Focus: Resolving simultaneous linear systems to identify underlying sequence characteristics.*

#### 5. Problem 5
In an arithmetic progression, the 5th term is 21 and the 11th term is 45. Find the exact value of the initial term $u_1$ and the common difference $d$.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Re-engages the linear simultaneous elimination systems from **Week 1, Day 1**.

Translate both term constraints into separate algebraic equations using $u_1$ and $d$ (Equation 1: $u_1 + 4d = 21$; Equation 2: $u_1 + 10d = 45$). Subtract Equation 1 from Equation 2 to eliminate $u_1$ immediately.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Build the tracking linear system framework:
  (1) $u_1 + 4d = 21$ **[1A]**
  (2) $u_1 + 10d = 45$ **[1A]**
* **Step 2:** Subtract equation (1) from equation (2) to cancel out the initial term: $(u_1 - u_1) + (10d - 4d) = 45 - 21 \implies 6d = 24$ **[1M]**
* **Step 3:** Isolate the common difference parameter value: **$d = 4$** **[1A]**
* **Step 4:** Substitute $d=4$ back into equation (1) to solve for $u_1$: $u_1 + 4(4) = 21 \implies u_1 + 16 = 21 \implies \mathbf{u_1 = 5}$ **[1A]**
</details>

---

#### 6. Problem 6
An asset's value depreciates linearly at the start of each month. Its value at the 4th month is \$8200, and its value at the 9th month has dropped down to \$6700. Find the exact value of the asset at its initial launch point ($u_1$).

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Connects simultaneous parameter systems to real-world linear financial models.

Because the value is depreciating, expect your common difference value $d$ to be a negative number. Set up the two tracking equations ($u_1 + 3d = 8200$ and $u_1 + 8d = 6700$) and solve for $u_1$.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Construct the linear parameter mapping profile:
  (1) $u_1 + 3d = 8200$
  (2) $u_1 + 8d = 6700$ **[1M]**
* **Step 2:** Subtract equation (1) from equation (2) to isolate $d$: $5d = -1500 \implies \mathbf{d = -300}$ **[1M]**
* **Step 3:** Substitute $d = -300$ back into equation (1) to isolate the initial baseline: $u_1 + 3(-300) = 8200$ **[1M]**
* **Step 4:** Calculate the final value: $u_1 - 900 = 8200 \implies \mathbf{u_1 = \$9100}$ **[1A]**
</details>

---

#### 7. Problem 7
The three consecutive terms of an algebraic arithmetic sequence are given explicitly as:

$$kx, \quad (2k + 1)x, \quad (5k - 2)x$$

Given that variable scalar $x \neq 0$, determine the exact value of parameter constant $k$.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Tests structural balance rules via the invariant sequence difference definition.

The common difference must be perfectly uniform throughout the sequence. This means that $u_2 - u_1$ must equal $u_3 - u_2$ exactly. Set up this balance equation, divide out the common variable factor $x$, and isolate $k$.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Apply the invariant step difference identity relationship ($u_2 - u_1 = u_3 - u_2$):
  $$(2k + 1)x - kx = (5k - 2)x - (2k + 1)x$$ **[1M]**
* **Step 2:** Since $x \neq 0$, safely divide out the common variable multiplier factor $x$ from all terms:
  $$(2k + 1) - k = (5k - 2) - (2k + 1)$$ **[1M]**
* **Step 3:** Group like parameters on both sides of the balance equation: $k + 1 = 3k - 3$ **[1M]**
* **Step 4:** Collect all terms containing parameter $k$ on one side: $2k = 4 \implies \mathbf{k = 2}$ **[1A]**
</details>

---

### 🏆 Tier 3: Threshold Exceedance & Polynomial Systems (Problems 8–9)
*Focus: Using inequalities to track sequence boundaries and solving advanced parametric systems.*

#### 8. Problem 8
Consider the arithmetic progression defined by the formula profile $u_n = 103 - 4n$. Determine the exact term index position $n$ at which the sequence values first drop below zero.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Integrates linear inequalities from **Week 1, Day 5** with discrete sequence domains.

Set up the strict linear inequality $u_n < 0$. Substitute the explicit formula expression, solve for the step index $n$, and remember that $n$ must be a whole counting integer.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Construct the matching mathematical inequality statement: $103 - 4n < 0$ **[1M]**
* **Step 2:** Isolate the variable term by moving $4n$ across the inequality boundary: $103 < 4n \implies n > \frac{103}{4}$ **[1M]**
* **Step 3:** Convert the improper fraction to a mixed number to find its exact decimal neighborhood: $n > 25.75$ **[1M]**
* **Step 4:** Since the step index domain ($n$) is strictly limited to positive whole counting integers, round up to the next valid integer value: **$n = 26$** **[1A]**
</details>

---

#### 9. Problem 9
An arithmetic sequence has an initial starting term of $u_1 = \ln(2)$ and a common difference of $d = \ln(3)$. **Prove that** the $n$th term expression can be written as a single condensed logarithm of the form:

$$u_n = \ln\left(2 \cdot 3^{n-1}\right)$$

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Links arithmetic sequences directly to the logarithmic power and product rules from **Week 4, Day 17**.

Substitute the logarithmic values directly into the general sequence formula. Move the leading coefficient $(n-1)$ up as a power exponent inside the log, then combine the addition terms using the product rule.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Substitute the given logarithmic parameters into the general term sequence formula:
  $$u_n = \ln(2) + (n - 1)\ln(3)$$ **[1M]**
* **Step 2:** Retract the leading binomial coefficient up into a power position via the log power rule:
  $$u_n = \ln(2) + \ln\left(3^{n-1}\right)$$ **[2M]**
* **Step 3:** Combine the two separate logs into a single term using the log product law:
  $$\mathbf{u_n = \ln\left(2 \cdot 3^{n-1}\right)}$$ **[1A]** *(Target structural profile verified completely—Q.E.D.)*
</details>

---

### 🧪 Tier 4: Junior Paper 3 Investigation (Problem 10)
*Focus: Linear matrix progressions, functional transformations, and spatial coordinate invariance.*

#### 10. Problem 10: The Coordinate Intersection Locus of Linear Progressions
Let us execute an investigation into the intersections generated by pairs of independent arithmetic sequences. Suppose we track two separate progressions, $v_n$ and $w_n$, defined across all positive counting integers $n \in \mathbb{Z}^+$ by the following parameter matrices:

$$v_n \implies v_1 = a, \quad d_1 = 3$$
$$w_n \implies w_1 = b, \quad d_2 = 5$$

where the initial tracking constants satisfy $a, b \in \mathbb{Z}^+$.

* **Part A:** Write out explicit expanded formulas for $v_n$ and $w_n$ as functions of step index $n$ and parameters $a$ and $b$.
* **Part B:** Suppose we plot these sequences on a coordinate plane as discrete sets of points $(n, v_n)$ and $(n, w_n)$. We want to identify the exact step position index $n$ where the values of the two sequences are exactly equal. Derive a general formula for this intersection index position $n$ in terms of parameters $a$ and $b$.
* **Part C:** Analyze the resulting formula from Part B. Determine the exact algebraic constraint relationship that must link parameters $a$ and $b$ together to guarantee that a physical intersection index **actually exists** within the valid domain of counting integers.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** This problem forms a sophisticated bridge between **Week 5 linear sequence structures** and **Week 2 domain constraint mapping boundaries**.

For Part B, equate the two expanded formulas ($v_n = w_n$) and use algebraic manipulation to isolate the step index variable $n$ on one side of the equation. For Part C, analyze the resulting fractional expression. Remember that for the intersection point to physically exist, $n$ must evaluate to a positive whole integer greater than or equal to 1. Use this constraint to map out the required relationship between $a$ and $b$.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1 [Part A]:** Build the expanded formulas for both sequences using the general term formula:
  $$v_n = a + (n - 1)(3) = \mathbf{3n + a - 3}$$ **[1A]**
  $$w_n = b + (n - 1)(5) = \mathbf{5n + b - 5}$$ **[1A]**
* **Step 2 [Part B]:** Equate the two explicit formulas to locate their shared intersection point:
  $$3n + a - 3 = 5n + b - 5$$ **[1M]**
* **Step 3 [Part B]:** Collect all terms containing the step index variable $n$ on the right side:
  $$a - b + 2 = 2n$$ **[1M]**
* **Step 4 [Part B]:** Divide by 2 to cleanly isolate the intersection index formula:
  $$\mathbf{n = \frac{a - b + 2}{2}}$$ **[1A]**
* **Step 5 [Part C]:** Analyze the domain constraints of the index variable $n$. Because $n$ represents a physical step position, it is strictly limited to the domain of positive whole integers ($n \in \mathbb{Z}^+$). For this fraction to yield an integer, the numerator must be perfectly divisible by 2. This requires that the term $(a - b)$ must evaluate to an **even integer value**. **[1M]**
* **Step 6 [Part C]:** Enforce the secondary boundary condition ($n \ge 1$) to ensure the intersection point occurs at a valid step position:
  $$\frac{a - b + 2}{2} \ge 1 \implies a - b + 2 \ge 2 \implies \mathbf{a \ge b}$$ **[1M]**
* **Step 7 [Part C]:** State the final complete constraint matrix: A valid intersection point exists within the sequence if and only if **$a \ge b$** and the difference **$(a - b)$ is a positive even number** (meaning both initial terms $a$ and $b$ must share the exact same mathematical parity—either both are odd or both are even). **[1A]** *(Q.E.D.)*
</details>