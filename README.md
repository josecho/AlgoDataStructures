# The Coding Interview Bootcamp: Algorithms + Data Structures

The Coding Interview Bootcamp: Algorithms + Data Structures


Use Javascript to solve challenging algorithms

We makes heavy use of ES2015+ features, so to avoid any possible errors please be update your version of Node JS on your local machine.

To check your current version, run node -v at the command line. If you have any version earlier than v8.0, please get an updated version of Node here: https://nodejs.org/en/download/current/

Environment Setup:

cd AlgoDataStructures

sudo npm install -g jest

Test Setup:

cd exercises

(run all the test for all the exercises every single time)

jest

(running one set of tests)

jest directoyName/test.js --watch

# Debugger Statements

Write "debugger" in some point in code;

function reverse(str) {
  debugger;
  return str.split("").reduce((rev, char) => char + rev, "");
}

Execute function in code before export statement:
reverse('asdf');


cd exercices\reversestring

node inspect index.js

debug> c (in order to advance line, it is posible write continue)
debug> repl
debug> str (show str variable value)
debug> str.split("").reduce((rev, char) => char + rev, "");  (evaluate expression)

For each iteration into a loop, execute Control + C , c COMMAND and repl.

- Summary:

Add a 'debugger' statement in your fucntion
Call the function manually
At the terminal, run 'node inspect index.js'
To continue execution on the file, press 'c' then 'enter'
To launch a 'repl' session, type 'repl' then 'enter'
To exit the 'repl', press Control + C
