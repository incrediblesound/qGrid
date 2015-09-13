QuestionGrid
============
A simple logical programming language that compiles to C.

How to Use
----------

Note: qGrid requires the use of node.js and gcc, if you use some other c compiler you can change it in the main function of src/compiler.js.

After you clone this repository you can write save a qGrid file with the .qgd extension and put it in any directory. To create an output file, run the following command from the root directory of this repository:

```shell
node qgrid path/to/my/file.qgd myprogram
```
In this case the c compiler will create an output file called "myprogram" that you can run like this:

```shell
./myprogram
```

Examples
--------
The basic pattern is like this:    
{state}{relation}{state}    

There are two basic relations:    
-> is a transitive equals    
-! means does not equal

```code
animal->thing
chair->thing
animal->living
```

You can use a state as a relation like this:    
{state-relation}:{origin-state},{target-state}

```code
brother->male
brother:john,mark
```

To query the program, start the line with a question mark. Here is a basic example:  

```code
sally->person    
john->person    
sister->female    
sister:sally,john    
?sally->female    
?john->female
```
This code produces the output:
```code
> Item sally has state female    
> Item john doesn't have state female    
```

It is also possible to define a state as a combination of multiple states with the following pattern:    
{state_a} -> {state_b}^{state_c}    
This pattern means "state A is true when state B and state C are true"

Here is an example:    
```code
boy->male^child    
father->male    
son->male    
john->child    
father:dave,john    
?john->boy    
?dave->boy  
```
Which produces the output:
```code
> item john has state boy    
> item dave doesn't have state boy    
```
