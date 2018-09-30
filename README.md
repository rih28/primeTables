# primeTables
A program that takes a positive integer n, creates a list of n prime numbers, multiplies the list by its itself (i.e. v.v') to create an n by n grid and finally displays the output with an additional row and column of the initial primes.

The program uses a single process and multiprocess approach for less than or equal to 10000 for the former and over 10000 for the latter.

## Getting started:

You must have node and npm (latest versions would be best).

Clone the project

go to project directory i.e. cd primeTables

npm install

To run the tests:

npm test

To run the program:

If you want less than or equal to 10000 primes to be multiplied into a matrix then;

node index --primes=10

If you want more than 10000 primes (I have not tested an upper limit but 30000 sounds good) then;

node --max_old_space_size=8000 index --primes=20000


what you’re pleased with? 

I was very happy with my application of the process and how quickly I managed to obtain a solid algorithm. I like my child process attempt, however, I am not certain it has resolved the issue properly. 


What you would do with it if you had more time?

My testing wasn't exhaustive for the multiprocessed component. I really should have tested this more, but the memory issues were more pressing due to time.
I decided to utilise the command-line. This was probably not the best solution and perhaps caused the memory leak issues. Also, I would probably utilise C++ Add-ons for the number crunching.

