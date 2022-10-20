
# Team Profile Generator

![MIT Licence](https://img.shields.io/badge/licence-MIT-green?style=flat)

## Description

This is a commandline tool designed to build a web page showcasing your team from a template. 

It makes use of basic object oriented design principals to build employees and provide some built-in helper functions to allow for easy data retrieval from the employee objects.  

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Technology](#technology)
- [Credits](#credits)
- [License](#licence)

## Installation

To install this application:
1. Download the application pacakage
2. Run `npm install` to gather and install all dependencies 
3. You are done! 

## Usage

This application is fairly straightforward to run. Simply run it by invoking it with `node` from the project folder: 

```
node index.js
```

This application is interactive and as such, should be mostly self-explanatory. 

Teams generated using this can only have one manager as it is expected that you are only generating one team at a time. 

Output of this application will be written to the `./dist` folder in this project's directory and will always be written as index.html. 

This file is styled from a custom template using Bootstrap CSS. 

[An example team is included here](./dist/index.html)

## Tests

Automated testing has only been configured for the class structure of this project (as per the requirements for the assignment). 

These tests, powered by jest, can be invoked by running: 

```
npm test
```

## Technology

- nodejs
- npm
- inquirer
- jest
- Bootstrap CSS


## Credits

- James Prince



## Licence

URL: https://choosealicense.com/licenses/mit/

```

  MIT License

  Copyright (c)  James Prince
  
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
```

  

---

## How to Contribute

At this time, as this is a project completed as part of a programming bootcamp course, contributions are not requested at this time.

If you do think that you have something to add to this project, feel free to contact me at the links below. 

## Questions

[My Github](https://github.com/Auralise)

[Email me](mailto:james.prince1@gmail.com)

---

Copyright &copy; 2022, James Prince
