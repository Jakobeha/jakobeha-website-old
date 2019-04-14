# Jakob Hain

## Projects

### RIR

- https://github.com/reactorlabs/rir
- January - now

I'm an undergraduate research assistant, working with graduate students on this project.

RIR is a JIT compiler for the [R programming language](https://www.r-project.org/about.html). It's main advantage is that it tries to optimize repeatedly-called functions by removing their environments, storing variables on the stack, and ultimately converting the function into native assembly. It does so by converting these functions' bytecode instructions into [PIR](https://github.com/reactorlabs/rir/blob/master/documentation/pir.md), an [SSA](http://ssabook.gforge.inria.fr/latest/book.pdf) representation, then running optimization passes.

Currently, we can usually remove the environment on functions which only perform arithmetic, such as:

```r
f <- function() {
  sum = 0
  i <- 1
  while (i <= 40000) {
    j <- 1
    while (j <= 200) {
      sum <- sum + j + i
      j <- j+1
    }
    i <- i + 1
  }
  sum
}
```

When I first joined, I helped debug and implement some instructions for the bytecode, [RIR](https://github.com/reactorlabs/rir/blob/master/documentation/rir.md). Now I'm working on some of the PIR, although I'm still learning SSA.

### Programming Language Comparison

- https://feature-compare-qe06piape.now.sh/
- March - April

This is an assignment for a class at Northeastern, **ENGW3302 First Year Writing**. The assignment was to create a "public document", and I had to choose the type of document, audience, and purpose. I created an intereactive website, directed towards novice developers who want to choose a language (e.g. to start a project or to learn about), and its purpose is to guide them to choose the language(s) which will help them best achieve their goals.

The website consists of an introduction, followed by a list of languages. Viewers can select a language to learn more about it, and they can select more languages and view all their information side-by-side, for easy comparison. The website presents information useful for comparison, such as the languages' relative benefits and drawbacks. The information is concise and general (e.g. "this language is concise..."), but the site provides justification ("...because it has a lot of syntactic sugar"), and there are many links in case the viewer wants to learn more about a particular language.

This website was created using [React](https://reactjs.org/) and [TypeScript](https://www.typescriptlang.org/), using [this tutorial and starter code](https://github.com/Microsoft/TypeScript-React-Starter). It also uses libraries from [NPM](https://www.npmjs.com/). Published by [Now](https://zeit.co/now).

### Proposal for an Experiment to Investigate (Partial) Memory Management's Effect on Code Clarity

- local:unit3
- March

This is another assignment for **ENGW3302 First Year Writing**. The assignment was a scholarly paper, whose audience consists of academics and professionals in my field. I chose to propose an experiment, for my local school, which would help determine whether manual memory management helps students reason about code in any way. "Partial" memory management is defined as that implemented in [Rust](https://www.rust-lang.org/) or [Swift](https://swift.org/), where the the compiler helps significantly but user must still write some memory-managing code.

In summary, I argue that most developers only believe memory management obscures code because, when garbage collectors were first introduced, the only languages with manual memory management were low-level languages like C, and their memory management was very verbose and unsafe. Modern languages like Rust and Swift also require manual memory management, but they're high-level, and have features which automate some of the memory management (such as Swift's automatic reference counting) and provide safety guarentees (particularly Rust's borrowing and lifetimes). Then, I speculate some ways which memory management could improve code clarity - for example, weak references could model parent-child relationships, since cycles must have at least one weak reference. Next, I suggest an experiment for a high school curriculum which would show the effect teaching memory management has on student performance. Finally, I appeal to my local school by showing how they in particular would benefit from the experiment, using evidence specific to their situation.

This is one of my first experiences writing a scholarly paper. It taught me skills which I'm sure will be useful if I publish papers in graduate school.

## About

### Bio

I'm a Northeastern University sophomore studying Computer Science. I'm particularly interested in design patterns, programming languages, metaprogramming, and static analysis - informally, "how do we make programming easier?" I plan to go to a graduate school, research these interests,
and contribute whatever I can.

### Experience Summary

Before Northeastern, I worked on many side projects. At Northeastern, I took classes on digital proofs and programming languages, and I'm planning to take a class on formally-verified compilers. I'm doing undergraduate research at [Northeastern's Programming Research Laboratory (PRL)](http://prl.ccs.neu.edu/), working on an R compiler called [RIR](https://github.com/reactorlabs/rir).

### Contact

I can be reached via e-mail, at [jakobeha@gmail.com](mailto:jakobeha@gmail.com)

I also have a LinkedIn, at [linkedin.com/in/jakobeha](https://linkedin.com/in/jakobeha), however I don't use it.

My GitHub is [https://github.com/jakobeha](https://github.com/jakobeha).
