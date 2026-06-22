---
title: "Day 22: Arithmetic Series & Sigma Notation"
description: "Scaffolded Core Strategy Blueprint and 10-Problem Tiered Track focused on finite summation methods, Gauss's pairing technique, and Sigma notation operations."
---

Today we move from tracking individual terms to calculating accumulated totals. An arithmetic progression maps a linear trajectory; an arithmetic series sums that trajectory together. We will master the structural pairing logic discovered by Gauss, learn to read and write using formal Sigma ($\sum$) notation, and unpack the underlying algebra that makes these summation engines work.

---

## 🧭 The Core Strategy Blueprint

### 👥 Parent Analytics Summary
* **The Core Gap:** Students often look at the two distinct forms of the arithmetic sum formula—$S_n = \frac{n}{2}(u_1 + u_n)$ and $S_n = \frac{n}{2}[2u_1 + (n-1)d]$—and try to memorize them as separate, unrelated rules. When confronted with Sigma ($\sum$) notation, the unfamiliar Greek symbol can cause them to freeze, preventing them from seeing that it is simply a compact instruction to generate and sum a standard sequence.
* **The Target Objective:** We show that both sum formulas are structurally identical, built on the elegant principle of symmetric pairing. Your student will learn to comfortably translate Sigma limits into explicit term data ($u_1$, $d$, and $n$) and execute multi-step series calculations without a calculator.

### 🎒 First-Principles Script (The Feynman Technique)
> **Read this aloud to lock in the structural intuition:**
>
> "Let's discover how to sum an entire arithmetic series instantly, using the exact same breakthrough method a young Carl Friedrich Gauss used in his primary school classroom. Imagine you are asked to add every whole number from 1 to 100:
> 
> $$S = 1 + 2 + 3 + \dots + 98 + 99 + 100$$
> 
> Writing this all out takes forever. But watch what happens if we write the exact same sequence backward directly underneath it:
> 
> $$S = 100 + 99 + 98 + \dots + 3 + 2 + 1$$
> 
> Let's add these two rows together vertically, pairing the terms up:
> * First column: $1 + 100 = 101$
> * Second column: $2 + 99 = 101$
> * Third column: $3 + 98 = 101$
> 
> Every single vertical pair adds up to exactly $101$! Because there are exactly $100$ numbers in our sequence, we have exactly $100$ of these identical pairs. 
> 
> Since adding the two rows together gives us twice our target sum ($2S$), we can write our balance equation like this:
> 
> $$2S = 100 \times 101 \implies S = \frac{100}{2}(101) = 5050$$
> 
> This symmetric pairing is the foundation of our general arithmetic sum formula. If we have $n$ terms, we take the number of terms divided by 2, and multiply it by the sum of the first term ($u_1$) and the last term ($u_n$):
> 
> $$S_n = \frac{n}{2}(u_1 + u_n)$$
> 
> If you don't know the last term, you can substitute our $n$th term formula ($u_n = u_1 + (n-1)d$) straight into this equation. This unmasks our second standard formula form:
> 
> $$S_n = \frac{n}{2}(u_1 + [u_1 + (n-1)d]) = \frac{n}{2}[2u_1 + (n-1)d]$$
> 
> Finally, we use **Sigma Notation ($\sum$)** as a compact mathematical shorthand for this exact process. The variable at the bottom tells you your starting index step, the number at the top is your stopping index step, and the expression inside is the formula engine that generates each individual term."

---

## 🛠️ The 10-Problem Tiered Track

Execute these tasks completely on physical paper. **Calculators are strictly prohibited.** Show every structural step cleanly.

### 🛑 Tier 1: Finite Summation Applications (Problems 1–4)
*Focus: Direct application of pairing formulas and unpacking basic Sigma notations.*

#### 1. Problem 1
Find the exact total sum of the first 40 terms of the arithmetic series: $3 + 7 + 11 + 15 + \dots$

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Direct evaluation of the expanded series summation engine.

Extract your parameters ($u_1 = 3$, $d = 4$, and $n = 40$). Since the final term isn't given, deploy the expanded formula form: $S_n = \frac{n}{2}[2u_1 + (n-1)d]$.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Extract the core parameters: $u_1 = 3$, $d = 7 - 3 = 4$, and $n = 40$ **[1A]**
* **Step 2:** Substitute these values into the expanded summation formula: $S_{40} = \frac{40}{2}[2(3) + (40 - 1)4]$ **[1M]**
* **Step 3:** Simplify the expression inside the brackets step-by-step: $S_{40} = 20[6 + 39(4)] = 20[6 + 156] = 20[162]$ **[1M]**
* **Step 4:** Calculate the final product: $S_{40} = 20 \times 162 = \mathbf{3240}$ **[1A]**
</details>

---

#### 2. Problem 2
An arithmetic series has a first term of 12, a final term of 116, and a total sum of 1600. Determine exactly how many terms ($n$) are contained within this series.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Reverses the summation formula to isolate an index bound.

Because you have the first term and the last term, use the simpler pairing formula: $S_n = \frac{n}{2}(u_1 + u_n)$. Substitute your known values ($u_1 = 12$, $u_n = 116$, $S_n = 1600$) and isolate $n$.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Set up the primary pairing formula equation: $1600 = \frac{n}{2}(12 + 116)$ **[1M]**
* **Step 2:** Sum the internal baseline terms: $1600 = \frac{n}{2}(128)$ **[1M]**
* **Step 3:** Simplify the coefficient multiplier: $1600 = 64n$ **[1M]**
* **Step 4:** Divide to isolate the index value $n$: $n = \frac{1600}{64} = \frac{400}{16} = \mathbf{25}$ **[1A]**
</details>

---

#### 3. Problem 3
Expand and evaluate the exact numerical total of the given Sigma expression:

$$\sum_{r=1}^{6} (3r + 2)$$

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Unpacks the structural components of formal Sigma notation.

Generate each of the 6 individual terms explicitly by substituting $r = 1, 2, 3, 4, 5, 6$ into the internal formula engine, then add them together. Alternatively, identify the sequence as an AP and use a sum formula.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Generate the explicit series terms by running the index values:
  * For $r=1$: $3(1) + 2 = 5$
  * For $r=2$: $3(2) + 2 = 8$
  * For $r=6$: $3(6) + 2 = 20$ **[1M]**
* **Step 2:** Identify the key parameters of the series: $u_1 = 5$, $u_6 = 20$, and $n = 6$ **[1M]**
* **Step 3:** Apply the pairing sum formula: $S_6 = \frac{6}{2}(5 + 20) = 3(25)$ **[1M]**
* **Step 4:** State the final sum: **$75$** **[1A]**
</details>

---

#### 4. Problem 4
Write the finite arithmetic series expression $7 + 10 + 13 + \dots + 64$ cleanly using formal **Sigma ($\sum$) notation**.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Translates expanded sequences back into formal notation.

Find the general term formula ($u_r$) for the sequence first. Then, set your formula equal to the final value (64) to find the upper bound index that will sit on top of your Sigma symbol.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Extract parameters to build the general term formula: $u_1 = 7$, $d = 3 \implies u_r = 7 + (r - 1)3 = 3r + 4$ **[1M]**
* **Step 2:** Find the upper index boundary limit: $3r + 4 = 64 \implies 3r = 60 \implies r = 20$ **[1M]**
* **Step 3:** Construct the final Sigma notation framework: **$\sum_{r=1}^{20} (3r + 4)$** **[2A]** *(Award [1A] for correct limits, [1A] for correct internal expression).*
</details>

---

### 🌀 Tier 2: Simultaneous Parameter Mappings (Problems 5–7)
*Focus: Solving simultaneous systems where term laws and summation equations intersect.*

#### 5. Problem 5
The third term of an arithmetic progression is 9, and the sum of the first 10 terms is 120. Find the exact value of the initial term $u_1$ and the common difference $d$.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Integrates simultaneous linear eliminations from **Week 1, Day 1** with series formulas.

Translate the two conditions into linear equations using $u_1$ and $d$. (Equation 1 from $u_3 = 9$: $u_1 + 2d = 9$. Equation 2 from $S_{10} = 120$: $5[2u_1 + 9d] = 120$). Simplify Equation 2 and solve the system.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Construct the linear equation for the third term: $u_1 + 2d = 9$ **[1A]**
* **Step 2:** Set up and simplify the summation equation for $S_{10}$:
  $\frac{10}{2}[2u_1 + 9d] = 120 \implies 5[2u_1 + 9d] = 120 \implies 2u_1 + 9d = 24$ **[1M]**
* **Step 3:** Multiply the first equation by 2 to prepare for elimination: $2u_1 + 4d = 18$ **[1M]**
* **Step 4:** Subtract this from the simplified second equation to isolate $d$: $(2u_1 - 2u_1) + (9d - 4d) = 24 - 18 \implies 5d = 6 \implies \mathbf{d = \frac{6}{5}}$ or **$1.2$** **[1A]**
* **Step 5:** Substitute $d$ back into the first equation to isolate $u_1$: $u_1 + 2\left(\frac{6}{5}\right) = 9 \implies u_1 + \frac{12}{5} = \frac{45}{5} \implies \mathbf{u_1 = \frac{33}{5}}$ or **$6.6$** **[1A]**
</details>

---

#### 6. Problem 6
Evaluate the exact total sum of the arithmetic expression:

$$\sum_{k=11}^{30} (5k - 1)$$

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Handles non-standard index boundaries within Sigma operations.

Be careful! The lower limit starts at $k = 11$, not $1$. Calculate the total number of terms using the index formula $n = \text{upper} - \text{lower} + 1$. Find your first term by evaluating $k = 11$, find your last term by evaluating $k = 30$, and apply the pairing formula.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Calculate the exact number of terms in the tracking window: $n = 30 - 11 + 1 = 20$ terms **[1M]**
* **Step 2:** Find the initial term of this specific window ($u_1$) by substituting $k = 11$: $u_1 = 5(11) - 1 = 54$ **[1M]**
* **Step 3:** Find the final term of this window ($u_{20}$) by substituting $k = 30$: $u_{20} = 5(30) - 1 = 149$ **[1M]**
* **Step 4:** Apply the pairing sum formula: $S_{20} = \frac{20}{2}(54 + 149) = 10(203)$ **[1M]**
* **Step 5:** State the final numerical total: **$2030$** **[1A]**
</details>

---

#### 7. Problem 7
An entry-level corporate salary plan starts at \$40,000 in Year 1 and increases by a guaranteed \$2,500 at the start of each subsequent year. Calculate the exact total cumulative compensation earned by an employee who stays with the company for exactly 15 years.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Links arithmetic series summation directly to real-world financial step models.

Identify your parameters from the problem statement ($u_1 = 40000$, $d = 2500$, and $n = 15$). Substitute these values into the expanded sum formula to compute the total accumulated earnings.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Map the structural parameters from the text: $u_1 = 40000$, $d = 2500$, $n = 15$ **[1A]**
* **Step 2:** Substitute these parameters into the expanded series sum formula: $S_{15} = \frac{15}{2}[2(40000) + (15 - 1)2500]$ **[1M]**
* **Step 3:** Simplify the terms inside the bracket expression cleanly: $S_{15} = \frac{15}{2}[80000 + 14(2500)] = \frac{15}{2}[80000 + 35000] = \frac{15}{2}[115000]$ **[1M]**
* **Step 4:** Calculate the final product: $S_{15} = 15 \times 57500 = \mathbf{\$862,500}$ **[1A]**
</details>

---

### 🏆 Tier 3: Quadratic Sum Index Boundaries (Problems 8–9)
*Focus: Solving scenarios where finding the number of terms requires solving quadratic equations.*

#### 8. Problem 8
The sum of the first $n$ terms of an arithmetic progression is given by the functional model $S_n = 2n^2 + 5n$.
* **Task A:** Find the exact value of the first three terms ($u_1, u_2, u_3$) of this sequence.
* **Task B:** Determine the general formula for the $n$th term ($u_n$) in its simplest form.

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Links sum functions to individual term extractions via the fundamental relationship $u_n = S_n - S_{1-1}$.

For Task A, note that $u_1 = S_1$ exactly. Compute $S_2$ and use $u_2 = S_2 - S_1$ to find the second term. Repeat this logic for $u_3$, then extract the common difference $d$ to write down the general formula for Task B.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1 [Task A]:** Evaluate $S_1$ to isolate the first term directly: $u_1 = S_1 = 2(1)^2 + 5(1) = \mathbf{7}$ **[1A]**
* **Step 2 [Task A]:** Evaluate $S_2$ and subtract $S_1$ to isolate the second term: $S_2 = 2(2)^2 + 5(2) = 8 + 10 = 18 \implies u_2 = S_2 - S_1 = 18 - 7 = \mathbf{11}$ **[1A]**
* **Step 3 [Task A]:** Evaluate $S_3$ and subtract $S_2$ to isolate the third term: $S_3 = 2(3)^2 + 5(3) = 18 + 15 = 33 \implies u_3 = S_3 - S_2 = 33 - 18 = \mathbf{15}$ **[1A]**
* **Step 4 [Task B]:** Identify the underlying sequence parameters: $u_1 = 7$ and $d = 11 - 7 = 4$ **[1M]**
* **Step 5 [Task B]:** Construct and simplify the general term formula: $u_n = 7 + (n - 1)4 = \mathbf{4n + 3}$ **[1A]**
</details>

---

#### 9. Problem 9
How many terms of the arithmetic series $5 + 8 + 11 + 14 + \dots$ must be added together to reach a total sum of exactly 670?

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** Connects series summation directly to the quadratic trinomial factoring steps from **Week 1, Day 2**.

Extract your parameters ($u_1 = 5$, $d = 3$) and set $S_n = 670$. Substitute these into the expanded sum formula to create a quadratic equation in terms of $n$. Rearrange it to equal zero and factorize to find the valid integer step.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1:** Substitute parameters into the expanded sum formula setup: $670 = \frac{n}{2}[2(5) + (n - 1)3]$ **[1M]**
* **Step 2:** Multiply by 2 to clear the fraction and simplify inside the brackets: $1340 = n[10 + 3n - 3] \implies 1340 = n[3n + 7]$ **[1M]**
* **Step 3:** Expand and rearrange into a standard quadratic format equal to zero: $3n^2 + 7n - 1340 = 0$ **[1M]**
* **Step 4:** Factorize this quadratic expression (look for factors near $\sqrt{3 \times 1340} \approx \sqrt{4020} \approx 63$): $(3n + 67)(n - 20) = 0$ **[1M]**
* **Step 5:** Extract the roots: $n = -\frac{67}{3}$ or $n = 20$. Since the step index domain ($n$) must be a positive whole counting integer, discard the negative fraction. State the final valid answer: **$n = 20$ terms** **[1A]**
</details>

---

### 🧪 Tier 4: Junior Paper 3 Investigation (Problem 10)
*Focus: Parametric nested series sums, consecutive index proofs, and algorithmic total identities.*

#### 10. Problem 10: The Parametric Sum Identity of Concentric Series
Let us execute a high-level structural proof involving the relationships between consecutive blocks of terms within an arithmetic progression. Consider an infinite arithmetic sequence with an initial term $u_1$ and a common difference $d$. 

Let $A$ represent the sum of the first $n$ terms of this sequence, and let $B$ represent the sum of the next $n$ terms (from term index position $n+1$ up to $2n$).

* **Part A:** Write out an explicit algebraic formula for sum block $A$ in terms of parameters $u_1$, $d$, and $n$.
* **Part B:** Determine an explicit algebraic formula for sum block $B$. *Hint: Think carefully about what the initial term and final term are for this second block of numbers.*
* **Part C:** **Prove that** the absolute difference between these two consecutive sum blocks is completely independent of the first term $u_1$, and matches the elegant structural identity:

$$B - A = n^2 d$$

<details>
<summary>💡 View Strategy Hint</summary>

**Structural Connection:** This challenge bridges **Week 5 arithmetic summation structures** with **Week 1 literal parametric proofs**.

For Part A, write down the standard expanded sum formula for $S_n$. For Part B, notice that the total sum of the first $2n$ terms is equal to $A + B$. This means you can isolate block $B$ using the identity $B = S_{2n} - S_n$. For Part C, write out the expressions for $B$ and $A$ in terms of $u_1$, $d$, and $n$, subtract them cleanly, and show that all terms containing $u_1$ completely cancel out of the final equation.
</details>

<details>
<summary>📋 Expand Full Mark Scheme</summary>

* **Step 1 [Part A]:** State the standard formula for the first block of $n$ terms:
  $$A = S_n = \frac{n}{2}[2u_1 + (n - 1)d]$$ **[1A]**
* **Step 2 [Part B]:** Use the total sum relationship to isolate block $B$ ($B = S_{2n} - S_n$):
  $$S_{2n} = \frac{2n}{2}[2u_1 + (2n - 1)d] = n[2u_1 + (2n - 1)d] = 2nu_1 + 2n^2 d - nd$$ **[1M]**
* **Step 3 [Part B]:** Expand the formula for block $A$ to make subtraction easier:
  $$A = nu_1 + \frac{n^2 d}{2} - \frac{nd}{2}$$ **[1M]**
* **Step 4 [Part B]:** Subtract expression $A$ from expression $S_{2n}$ to find the formula for block $B$:
  $$B = (2nu_1 + 2n^2 d - nd) - \left(nu_1 + \frac{n^2 d}{2} - \frac{nd}{2}\right) = nu_1 + \frac{3n^2 d}{2} - \frac{nd}{2}$$ **[1A]**
* **Step 5 [Part C]:** Set up the final subtraction line to find the difference between the two blocks ($B - A$):
  $$B - A = \left(nu_1 + \frac{3n^2 d}{2} - \frac{nd}{2}\right) - \left(nu_1 + \frac{n^2 d}{2} - \frac{nd}{2}\right)$$ **[1M]**
* **Step 6 [Part C]:** Group like terms and cancel the matching elements containing $u_1$:
  $$(nu_1 - nu_1) + \left(\frac{3n^2 d}{2} - \frac{n^2 d}{2}\right) + \left(-\frac{nd}{2} - \left(-\frac{nd}{2}\right)\right)$$ **[1M]**
* **Step 7 [Part C]:** Combine the remaining terms to finalize the proof:
  $$B - A = \frac{2n^2 d}{2} = n^2 d$$
  Because the parameter $u_1$ completely cancels out during subtraction, the difference between these consecutive blocks is completely independent of the starting value of the sequence. **[1A]** *(Identity verified completely—Q.E.D.)*
</details>