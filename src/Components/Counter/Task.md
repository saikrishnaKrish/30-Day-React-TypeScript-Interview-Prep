**40-minute interview-style coding task** around a **counter app**, where the candidate’s **technical logic** is tested and there’s a **small tricky twist**.
Here’s a task you can use:

---

### 📝 Interview Task: Advanced Counter App

#### Problem Statement

Build a **Counter App** using **React (with or without TypeScript)** that fulfills the following requirements:

1. **Basic Features**

   * Display the current count (default: `0`).
   * Buttons: **Increment (+1)**, **Decrement (-1)**, and **Reset (0)**.

2. **Tricky Logic Requirements**

   * **Dynamic Step Size:**

     * Next increment/decrement step depends on whether the number is **prime** or **composite**:

       * If the current number is **prime**, the next increment/decrement should be **+2 / -2**.
       * Otherwise, use **+1 / -1**.
     * Example:

       * At `2` → Increment makes it `4`, Decrement makes it `0`.
       * At `4` → Increment makes it `5`, Decrement makes it `3`.

   * **Upper & Lower Bound:**

     * The counter should only allow values between `-50` and `50`.
     * If a button press goes out of range, **disable that button**.

   * **Undo Feature (Trickiest Part):**

     * Add an **Undo** button that reverts the counter to its **previous state** (only one step back).
     * Example: If user goes `0 → 1 → 2 → 4`, pressing Undo should bring it back to `2`.

3. **UI Expectations (Not Overkill)**

   * Clean UI with all buttons visible.
   * Show disabled state for out-of-bound buttons.

#### Evaluation Areas

* Correct implementation of **prime-check logic** and **dynamic step handling**.
* Proper **state management** (undo feature tests whether they structure state well).
* Edge cases (boundaries at `-50` and `50`).
* Clean, readable code and handling re-renders efficiently (bonus if they use `useMemo` / `useCallback`).

#### Timebox

* Expected time: **40 minutes** (core features can be done in \~30, with 10 left for polish).

---

👉 This task looks **simple on the surface (just a counter app)**, but the **prime-step logic + undo + bounds** makes it tricky enough to test problem-solving and clean coding skills.

Do you want me to also **prepare a sample solution (hidden)** so you can quickly validate candidate answers during interview?
