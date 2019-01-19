The code written in statically typed languages (Java, C) will go through a type-checker before runtime.
This is a very useful process which checking if the programs' variable's types are the same 
that we wanted to write in the source code for the correct working. 

Benefits: 

1. The compiler will show error before the runtime, so you can check where is the problem easily 
(you cannot add a number to a string, because it's generating Type mismatch).
2. In dynamically typed languages program running can generate weird things, these cannot occur in statically typed languages.
a = '100';
b = 8;
console.log(a+b); // 1008
console.log(typeof(a+b)); // string
3. In statically typed languages you get tips from your IDE while coding. It can prevent writing wrong types.
4. It is useful when working with relational databases: helps to find Type mismatches before running time.