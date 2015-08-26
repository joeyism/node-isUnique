"use strict";

Array.prototype.isUnique = function(){
    var that = this;
    var result = true;
    for (var i = 0; i < that.length; i++){
        for (var j = i+1; j < that.length; j++){
            if(that[i] === that[j]){
                result = false;
            }
        }
    }
    return result;
};

Array.prototype.getUnique = function(){
    var that = this;
    for (var i = 0; i < that.length; i++){
        for (var j = i+1; j < that.length; j++){
            if(that[i] === that[j]){
                that.splice(j, 1);
                j--;
            }
        }
    }
    return that;
};
