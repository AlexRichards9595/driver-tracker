# Driver Tracker

## Overview
Driver tracker tracks drivers. Given an input text that creates new drivers with "Driver [driver-name]" and new trips with "Trip [driver] [start] [end] [miles]", it calculates the total miles driven for each driver and their total mph and then orders them from most miles driven to the lease. 

## Process
Given the instructions with how the application was going to need to take in a file through the command line, I knew I was going to need to bring in Node.js at some point since something like that is not built into vanilla javascript. Since I wasn't super familiar with Node.js, I decided to put that off and start with what I knew. Test Driving my app, I created Driver and Trip objects, giving them attributes and prototypical functions, using the instructions as my guide. Once finished and having all my tests passed and code refactored, I did some research on how exactly to utilize Node.js to allow the user to use the command prompt as described. After working on loading in Package.JSON and turning Jasmine into a dev tool of the node project, I got things wired up and working. In Hindsight, I would have started with the project being a Node.js project rather than loading all that stuff in afterwards. After that, just some final touches to clean up the tests and include an less requirements. 

## Operating the App
Once downloaded, you can run `npm test` in the terminal to run all the tests. To run the app you can run `npm start [file path]`. If you don't specify an input file, it will prompt you to until you do. Once given the input file, it will create an output file called output.txt in the project folder with the formatted output and  write the output in the terminal as well. 
