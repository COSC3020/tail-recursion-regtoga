# Tail Recursion

In the lectures, we've seen code for a recursive implementation for computing
the Fibonacci numbers. Make this implementation tail-recursive. I have not
provided a template; depending on how you choose to implement the function, it
will have a different signature.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

Hint: It may help to have a look at the iterative dynamic programming
implementation. What changes between iterations of the loop?

## Runtime Analysis

Is the asymptotic complexity of tail-recursive Fibonacci different from the
non-tail-recursive version? Why, or why not, and what is the complexity
(worst-case $\Theta$)? Add your answer, including your reasoning, to this
markdown file.

The asymptotic complexity is not any different that the regular recursive function, but it is faster in practice because it has less overhead, essentially acting as a forloop. in the regular version we solve a recurrence relation, and in the tail recursive version we solve the same relation. this is why the time complexity doesnt change.

for each call, n is decremented by 1 and the recursion stops when n == 1 or 0... so fib function is called n times.

$ n \in \theta(n)$

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.