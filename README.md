# Array-utils

A collection of utility functions for working with arrays.

## zip, unzip

Zip takes two arrays and creates an array of tuples from their elements.
Unzip does the same thing backwards; takes an array of tuples and returns
a tuple of arrays.

## mapMax, mapMaxIndex

Find the element (or its index) for which a custom mapped value is the
highest.

## divide

Sort an array into two separate arrays according to a filter.

If the second flag is set, leave holes in the arrays such that the
positions are preserved. Useful if you want to recombine them later.

## combine

Combines multiple arrays (with holes) into one. The inverse of divide
with the second flag set.

## applyWithCache

Takes a mapping function and optionally an initial state, returns a
function that takes an array and applies the mapper on any indices that
changed since the immediate last invocation.