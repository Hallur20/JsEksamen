var express = require('express');

var GeoJSON = require('geojson');

var app = express();
app.set('view engine', 'ejs');

var singleobject = { name: 'Location A', category: 'Store', street: 'Market', lat: 39.984, lng: -75.343 }

console.log(GeoJSON.parse(singleobject, { Point: ['lat', 'lng'] }));

var polygonObject = 
    {name: 'Area A', category: 'Stores', street: 'Markets',
        polygon: [
            [[100.0, 0.0], [101.0, 0.0], [101.0, 1.0], [100.0, 1.0], [100.0, 0.0]]
        ]
    };

console.log(GeoJSON.parse(polygonObject, { 'Polygon': 'polygon' }));


app.get('/', (req, res)=>{
    res.render('index.ejs', {test: 1, single : GeoJSON.parse(singleobject, { Point: ['lat', 'lng'] }), polygon: GeoJSON.parse(polygonObject, { 'Polygon': 'polygon' })});
});

app.listen(3000, ()=>{
    console.log("server is up and running on port 3000");
});