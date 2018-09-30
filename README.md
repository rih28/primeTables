# primeTables
A program that takes a positive integer n, creates a list of n prime numbers, multiplies the list by its itself (i.e. v.v') to create an n by n grid and finally displays the output with an additional row and column of the initial primes.

The program uses a single process and multiprocess approach for less than or equal to 10000 for the former and over 10000 for the latter.

## Getting started:

You must have node and npm (latest versions would be best).

Clone the project

go to project directory i.e. cd primeTables

npm install

###To run the tests:

npm test

###To run the program:

If you want less than or equal to 10000 primes to be multiplied into a matrix then;

node index --primes=10

If you want more than 10000 primes (I have not tested an upper limit but 30000 sounds good) then;

node --max_old_space_size=8000 index --primes=20000

