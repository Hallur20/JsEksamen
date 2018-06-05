var GeoJSON = require('geojson');


var singleobject = { name: 'Location A', category: 'Store', street: 'Market', lat: 39.984, lng: -75.343 }

console.log(GeoJSON.parse(singleobject, { Point: ['lat', 'lng'] }));

var polygonObject = 
    {name: 'Area A', category: 'Stores', street: 'Markets',
        polygon: [
            [[100.0, 0.0], [101.0, 0.0], [101.0, 1.0], [100.0, 1.0], [100.0, 0.0]]
        ]
    };

console.log(GeoJSON.parse(polygonObject, { 'Polygon': 'polygon' }));
