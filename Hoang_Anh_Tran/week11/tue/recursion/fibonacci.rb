def fib(n)
  a = 1
  b = 1

  n.times do

    temp = a
    a = b
    b = a + temp

    # a, b = b, (a + b) # parrallel

  end
  a
end

# puts fib(1235678)

def fib_rec(n)
  if n < 2
    return 1
  else
    return fib_rec(n -1 ) + fib_rec(n-2)
  end
end

# Memoize lookup = { }

# puts fib_rec(1235678) # DO NOT RUN THIS
