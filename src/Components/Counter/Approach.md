Interview Problem-Solving Strategy: Step-by-Step Approach
Here's the systematic thinking process I'd recommend for tackling this interview question:

📝 PHASE 1: UNDERSTAND & CLARIFY (5 minutes)
1. Read Requirements Carefully

✅ Basic counter with +/- buttons
✅ Dynamic step based on prime numbers
✅ Boundary constraints (-50 to +50)
✅ Undo functionality

2. Ask Clarifying Questions
"Should the step be determined by the current number or the result?"
"What happens when we hit boundaries - disable buttons or prevent action?"
"Should undo work for reset operations too?"
"Any performance considerations for large numbers?"

3. Confirm Examples
"At count 2 (prime), increment goes to 4, correct?"
"At count 4 (not prime), increment goes to 5, correct?"
🎯 PHASE 2: BREAK DOWN THE PROBLEM (5 minutes)

Think in Components:

// 1. State Management
// 2. Prime Check Logic  
// 3. Step Calculation
// 4. Boundary Validation
// 5. Undo System
// 6. UI Components

Identify Core Functions Needed:
checkPrime(num) - Prime detection
handleIncrement() - Increment with prime logic
handleDecrement() - Decrement with prime logic
handleReset() - Reset with undo update
handleUndo() - Undo functionality
🔧 PHASE 3: IMPLEMENT INCREMENTALLY (25 minutes)

Step 1: Basic Counter (5 min)
const [count, setCount] = useState(0);

// Basic buttons first
<button onClick={() => setCount(c => c + 1)}>+</button>
<button onClick={() => setCount(c => c - 1)}>-</button>

Step 2: Prime Logic (8 min)

// Write and test prime function
function checkPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Test with examples: 2, 3, 4, 5

Step 3: Dynamic Step Implementation (7 min)

const handleIncrement = () => {
    setCount(current => {
        const step = checkPrime(current) ? 2 : 1;
        return current + step;
    });
};

Step 4: Boundary Constraints (3 min)

// Add boundary checks
if (newCount > 50) return current;
if (newCount < -50) return current;

// Add button disable logic
disabled={count + (checkPrime(count) ? 2 : 1) > 50}

Step 5: Undo System (2 min)

const [previousValue, setPreviousValue] = useState(0);

// Store previous before each change
setPreviousValue(current);

🧪 PHASE 4: TEST & VALIDATE (5 minutes)
Test Cases to Verify:

// Prime stepping
// 0 → 1 (0 not prime, step=1)
// 2 → 4 (2 is prime, step=2)  
// 3 → 5 (3 is prime, step=2)
// 4 → 5 (4 not prime, step=1)

// Boundary testing
// At 49: should go to 50, then disable
// At 50: button should be disabled
// At -49: should go to -50, then disable

// Undo testing
// 0 → 1 → undo → 0

💭 THINKING PROCESS - MENTAL FRAMEWORK:
1. "What's the Core Challenge?"
"The tricky part is the prime-based stepping, not the basic counter"
2. "What Could Go Wrong?"
"Prime logic backwards (checking result vs current)"
"Boundary violations"
"Undo state management"
3. "How Do I Verify I'm Right?"
"Test with the given examples"
"Check edge cases (boundaries)"
"Verify undo works properly"
🗣️ COMMUNICATION DURING INTERVIEW:
Think Out Loud:

"Let me start with a basic counter, then add the prime logic...
I think the step should be determined by the CURRENT number being prime...
Let me test this with the example: at 2, since 2 is prime, step should be 2..."

Show Problem-Solving:

"I need to be careful about the boundary logic - should I disable the button 
when the NEXT step would exceed bounds, not when we're AT the bounds..."

⚡ EFFICIENCY TIPS:
1. Start Simple, Add Complexity
Basic counter → Prime logic → Boundaries → Undo
2. Test As You Go
Don't wait until the end to test
3. Handle Edge Cases
What about negative numbers?
What about 0 and 1?
4. Think About Performance Later
Get it working first, optimize if time permits
🎯 SUCCESS STRATEGY:
Understand first (don't rush into coding)
Break down the problem (identify sub-problems)
Implement incrementally (build piece by piece)
Test frequently (catch issues early)
Communicate clearly (explain your thinking)
The key is systematic thinking, not rushing! This approach shows problem-solving skills, attention to detail, and good software engineering practices - exactly what interviewers want to see! 🚀

