# isUnique

[![Build Status](https://travis-ci.org/joeyism/node-isUnique.svg)](https://travis-ci.org/joeyism/node-isUnique)

Checks to see if an array has only unique values

## Installation

    > npm install --save isunique

## Usage

### isUnique
Returns true if the array only has unique elements. Otherwise, return false

    [1].isUnique() // true
    [1,2].isUnique() // true
    [1,1].isUnique() // false

## getUnique
Gets the unique version of the array. If there are two matching elements, the latter is removed

    [1].getUnique() // [1]
    [1,1].getUnique() // [1]
    [1,2].getUnique() // [1,2]
    [1,2,1,2].getUnique() // [1,2]
    [1,2,2,2].getUnique() // [1,2]

## Version
**1.0.0**
* First working version
