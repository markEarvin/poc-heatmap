"use strict";

app.Polygon = function(map){
    var self = this;
    self.map = map;
    self.locations = [];

    self.getPolygon = function(polyId){
        for (var i = 0; i < self.locations.length; i++){
            if (self.locations[i].getId() === polyId)
                return self.locations[i];
        }
        return null;
    };
};

app.Polygon.prototype.logMe = function() {
    console.log("Hello map!");
};

app.Polygon.prototype.addPolygon = function(geopoints){
    console.log("Adding polygon...");
    var self = this;
    // console.log(geopoints.toString());
    var points = geopoints;
    var poly = new google.maps.Polygon({
        paths: points,
        strokeColor: '#00FF00',
        strokeOpacity: 0.8,
        strokeWeight: 1,
        fillColor: '#AAFFAA',
        fillOpacity: 0.25
    });
    poly.setMap(self.map);
    var loc = new app.Location(poly);
    self.locations.push(new app.Location(poly));
    return loc.getId();
};

app.Polygon.prototype.setColor = function(colorCode, polyId){
    var poly = app.Location.get(polyId);
    poly.setOptions({fillColor: colorCode});
};
