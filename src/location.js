"use strict";

app.Location = function(poly){
    var self = this;
    self.polygon = poly;
    self.pointsInsideMe = [];
    self.id = CryptoJS.MD5(poly.getPaths().toString()).toString();
    // console.log(self.id);
};

app.Location.prototype.addPointInsideMe = function(point) {
    var self = this;
    self.pointsInsideMe.push(point);
};

app.Location.prototype.getId = function() {
    var self = this;
    return self.id;
};

app.Location.prototype.getPoly = function() {
    var self = this;
    return self.polygon;
};

app.Location.prototype.getPointsInside = function() {
    var self = this;
    return self.pointsInsideMe;
};

app.Location.prototype.getNumberOfPointsInside = function() {
    var self = this;
    return self.pointsInsideMe.length;
};
