RIR is a JIT compiler for the [R programming language](https://www.r-project.org/about.html). It's advantage over the [standard compiler (GNU-R)](https://cran.r-project.org/) is that it tries to optimize repeatedly-called functions by removing their environments, storing variables on the stack, and converting them into native assembly. To optimize a function, it converts bytecode instructions into [PIR](https://github.com/reactorlabs/rir/blob/master/documentation/pir.md), an [SSA](http://ssabook.gforge.inria.fr/latest/book.pdf) representation, then runs passes.

Currently, if a function only performs arithmetic, we can usually remove its environment. For example, we can optimize this function:

```r
f <- function() {
  sum = 0
  i <- 1
  while (i <= 40000) {
    j < - 1
    while (j <= 200) {
      sum < - sum + j + i
      j <- j+1
    }
    i <- i + 1
  }
  sum
}
```

I'm an undergraduate research assistant, working with graduate students on this project. When I first joined, I helped debug and implement some instructions for the bytecode, [RIR](https://github.com/reactorlabs/rir/blob/master/documentation/rir.md). Now I'm working on some of the PIR, implementing optimizations and fixing bugs with the rest of the team.
