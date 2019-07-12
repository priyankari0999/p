alert("WELCOME")
var view;
var map;
var initialLocations;
var london;

function init() {
  initialLocations = ol.proj.fromLonHat([41.043316, 28.862457])
  london = ol.proj.fromLonLat([-0.12755,51.507222]);

  view = new ol.view({
    center: initialLocations,
    zoom :6
  map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source:new ol.source.OSM()
      })
 ],
  loadTilesWhileAnimating : true,
  view: view

});
}}
function panHome(){
  view.animate({
    center : london ,
    duration: 2000

  });
}

window.onload = init;
