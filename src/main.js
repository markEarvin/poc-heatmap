"use strict";

app.main = function main() {
  var map;
  var sql;        // sql query object for querying CartoDB SQL API
  var sublayers = [];
  var colorCodes = {
    'red': '#FFAAAA',
    'orange': '##FFA500',
    'yellow': '#FFFFAA',
    'green': '#AAFFAA'
  };
  // create google maps map
  var mapOptions = {
        zoom: 13,
        center: new google.maps.LatLng(14.4278, 120.9241),
        panControl: true,
        panControlOptions: {
        position: google.maps.ControlPosition.TOP_RIGHT
        },
        zoomControl: true,
        zoomControlOptions: {
        style: google.maps.ZoomControlStyle.LARGE,
        position: google.maps.ControlPosition.TOP_RIGHT
        },
    };
  map = new google.maps.Map(document.getElementById('map'),  mapOptions);
  // create layer and add to the map, then add some interactive elements
  // cartodb.createLayer(map, 'https://markearvin.cartodb.com/api/v2/viz/55d9a27c-690c-11e5-9594-0e5db1731f59/viz.json')
  // .addTo(map)
  // .on('done', function(layer) {
  //    var subLayerOptions = { sql: "SELECT * FROM sample2"}
  //     var sublayer = layer.getSubLayer(0);
  //     sublayer.set(subLayerOptions);
  //     sublayers.push(sublayer);

  //     sublayer.on('error', function(err) {
  //       cartodb.log.log('error: ' + err);
  //     });

  // })
  // .on('error', function() {
  //   cartodb.log.log("some error occurred");
  // });

  //points
  cartodb.createLayer(map, 'https://markearvin.cartodb.com/api/v2/viz/ccbc5106-6b40-11e5-b790-0e3ff518bd15/viz.json')
  .addTo(map)
  .on('done', function(layer) {

      var subLayerOptions = { sql: "SELECT * FROM pointsa"};
      var sublayer = layer.getSubLayer(0);
      sublayer.set(subLayerOptions);
      sublayers.push(sublayer);

      sublayer.on('error', function(err) {
        cartodb.log.log('error: ' + err);
      });

  })
  .on('error', function() {
    cartodb.log.log("some error occurred");
  });

  //polygons
  // test our Polygon class
  var triangleCoords = [
    {lat: 25.774, lng: -80.190},
    {lat: 18.466, lng: -66.118},
    {lat: 32.321, lng: -64.757},
    {lat: 25.774, lng: -80.190}
  ];
  var polygons = new app.Polygons(map);
  polygons.addPolygon(triangleCoords);

  };

  window.onload = app.main;
