# JavaScript Katas

Made for pairing at GHC. Use TDD!

## Getting started

1. Fork and clone this project.
2. Run `npm install` from the project directory.
3. `cd` into one of the kata directories.
4. Run `jasmine-node *.spec.js` to run all tests.
5. See which test failed and fix it!

## Notes

There will be a handful of tests to start you off, but the first time you run the tests, only the first test is executed. The rest are ignored. After you make the first test pass, go into the test file (the file name ends with `.spec.js`) and remove the `x` from the `xit` of the second test. Now when you run the tests, both the first and second test will execute. Keep going until no more tests are ignored.

You'll have to write some of your own tests to make sure your code is completely correct!

If you get really stuck, check out the `solutions` folder for one way to solve the problem.