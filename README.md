# Revenge-of-the-Pancakes

Answer to programming challenge for Weave
author: Chris Belyeu (cdbelyeu@gmail.com)


This solution took around 2 hours to implement, the overwhelming majority of which was spent working on validation and file IO. The algorithm solving the core problem is quite straightforward, and is found in pancakeFlippingService.getRequiredNumberOfFlips. Requirements documentation is attached as well.

# Running the program
This is intended to be run from the command line with
   
    node testRunner.js <inputFileName>

The input file name being an input file complying with the schema detailed in the programming challenge documentation. I have provided a directory /tests containing some sample input files. Files whose name starts with 'invalid' contain input files which are in some way or another wrong and will trigger an error output.

# Notes
I considered several languages for this challenge, and picked NodeJS because the algorithm I needed to implement wasn't very complex or computationally intensive, and Node avoids much of the boilerplate associated with more powerful languages such as Java (and I had never done a programming challenge in node before). If I did it again I think I would pick Python, Python's api's for file IO is, I think, somewhat better adapted for this sort of line by line file processing. 