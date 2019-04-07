"use strict";

var landscapes = {
    read: function(path, callback) {

        var request = new XMLHttpRequest()
        request.open('GET', path)
        request.send()
    
        request.onload = function () {
            var landscapesAsString = request.response
            var landscapes = JSON.parse(landscapesAsString)
            callback(landscapes)
        }
    }
    
}
