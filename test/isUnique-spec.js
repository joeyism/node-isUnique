"use strict";
var expect = require("chai").expect;
require("../index");

describe("isUnique", function(){

    describe("isUnique", function(){

        it("should return true since the array is unique", function(){
            expect([1,2].isUnique()).to.be.true;
            expect([1].isUnique()).to.be.true;
            expect([1,2,3].isUnique()).to.be.true;
        });

        it("should return false since the array is not unique", function(){
            expect([1,1].isUnique()).to.be.false; 
            expect([1,1,2].isUnique()).to.be.false; 
            expect([1,2,2].isUnique()).to.be.false; 
            expect([1,2,1].isUnique()).to.be.false; 
            expect([1,1,1].isUnique()).to.be.false; 
            expect([1,1,1,1].isUnique()).to.be.false; 
            expect([1,1,1,2].isUnique()).to.be.false; 
            expect([1,1,2,1].isUnique()).to.be.false; 
            expect([1,1,2,2].isUnique()).to.be.false; 
            expect([1,2,1,1].isUnique()).to.be.false; 
            expect([1,2,1,2].isUnique()).to.be.false; 
            expect([1,2,2,1].isUnique()).to.be.false; 
            expect([1,2,2,2].isUnique()).to.be.false; 
            expect([2,1,1,1].isUnique()).to.be.false; 
            expect([2,1,1,2].isUnique()).to.be.false; 
            expect([2,1,2,1].isUnique()).to.be.false; 
            expect([2,1,2,2].isUnique()).to.be.false; 
            expect([2,2,1,1].isUnique()).to.be.false; 
            expect([2,2,1,2].isUnique()).to.be.false; 
            expect([2,2,2,1].isUnique()).to.be.false; 
            expect([2,2,2,2].isUnique()).to.be.false; 
        });
    });

    describe("getUnique", function(){

        it("should return the unique version of input array", function(){
            expect([1].getUnique()).to.deep.equal([1]);
            expect([1,2].getUnique()).to.deep.equal([1,2]);
            expect([1,1].getUnique()).to.deep.equal([1]);
            expect([1,2,1].getUnique()).to.deep.equal([1,2]);
            expect([1,1,2].getUnique()).to.deep.equal([1,2]);
            expect([1,1,1].getUnique()).to.deep.equal([1]);
            expect([1,1,1,1].getUnique()).to.deep.equal([1]); 
            expect([1,1,1,2].getUnique()).to.deep.equal([1,2]); 
            expect([1,1,2,1].getUnique()).to.deep.equal([1,2]); 
            expect([1,1,2,2].getUnique()).to.deep.equal([1,2]); 
            expect([1,2,1,1].getUnique()).to.deep.equal([1,2]); 
            expect([1,2,1,2].getUnique()).to.deep.equal([1,2]); 
            expect([1,2,2,1].getUnique()).to.deep.equal([1,2]); 
            expect([1,2,2,2].getUnique()).to.deep.equal([1,2]); 
            expect([2,1,1,1].getUnique()).to.deep.equal([2,1]); 
            expect([2,1,1,2].getUnique()).to.deep.equal([2,1]); 
            expect([2,1,2,1].getUnique()).to.deep.equal([2,1]); 
            expect([2,1,2,2].getUnique()).to.deep.equal([2,1]); 
            expect([2,2,1,1].getUnique()).to.deep.equal([2,1]); 
            expect([2,2,1,2].getUnique()).to.deep.equal([2,1]); 
            expect([2,2,2,1].getUnique()).to.deep.equal([2,1]); 
            expect([2,2,2,2].getUnique()).to.deep.equal([2]); 
        }); 
    });
});
