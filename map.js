  // Initialize the map
  var map = L.map('map', {
  scrollWheelZoom: false // disables zooming with mouse scroll
}).setView([38.7946, 106.5348], 3);


  // Add map tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  // Add markers for your locations
 L.marker([37.774929, -122.419418]).addTo(map)
    .bindPopup('WCS Golden Gate Park, San Francisco, California').openPopup();

L.marker([36.169941, -115.139832]).addTo(map)
    .bindPopup('WCS Fremont Street, Las Vegas, Nevada').openPopup();

L.marker([35.689487, -105.944183]).addTo(map)
    .bindPopup('WCS Santa Fe Plaza, Santa Fe, New Mexico').openPopup();

L.marker([44.058173, -121.315308]).addTo(map)
    .bindPopup('WCS Pilot Butte, Bend, Oregon').openPopup();

L.marker([40.760780, -111.891045]).addTo(map)
    .bindPopup('WCS Temple Square, Salt Lake City, Utah').openPopup();

L.marker([30.267153, -97.743057]).addTo(map)
    .bindPopup('WCS Zilker Park, Austin, Texas').openPopup();

L.marker([43.073051, -89.401230]).addTo(map)
    .bindPopup('WCS State Capitol, Madison, Wisconsin').openPopup();

L.marker([42.360081, -71.058884]).addTo(map)
    .bindPopup('WCS Boston Common, Boston, Massachusetts').openPopup();

L.marker([35.227085, -80.843124]).addTo(map)
    .bindPopup('WCS Freedom Park, Charlotte, North Carolina').openPopup();

L.marker([27.950575, -82.457176]).addTo(map)
    .bindPopup('WCS Tampa Riverwalk, Tampa, Florida').openPopup();

    L.marker([47.620422, -122.349358]).addTo(map)
    .bindPopup('WCS Space Needle, Seattle, Washington').openPopup();

L.marker([37.819929, -122.478255]).addTo(map)
    .bindPopup('WCS Golden Gate Bridge, San Francisco, California').openPopup();

L.marker([36.106965, -112.112997]).addTo(map)
    .bindPopup('WCS Grand Canyon Village, Arizona').openPopup();

L.marker([44.428000, -110.588455]).addTo(map)
    .bindPopup('WCS Old Faithful, Yellowstone National Park, Wyoming').openPopup();

L.marker([40.689247, -74.044502]).addTo(map)
    .bindPopup('WCS Statue of Liberty, New York').openPopup();

L.marker([25.197197, -80.920845]).addTo(map)
    .bindPopup('WCS Everglades National Park, Florida').openPopup();

L.marker([41.882702, -87.619392]).addTo(map)
    .bindPopup('WCS Navy Pier, Chicago, Illinois').openPopup();

L.marker([32.715736, -117.161087]).addTo(map)
    .bindPopup('WCS Balboa Park, San Diego, California').openPopup();

L.marker([39.099724, -94.578331]).addTo(map)
    .bindPopup('WCS Union Station, Kansas City, Missouri').openPopup();

L.marker([35.084385, -106.650421]).addTo(map)
    .bindPopup('WCS Sandia Peak Tramway, Albuquerque, New Mexico').openPopup();

    L.marker([40.748817, -73.985428]).addTo(map)
    .bindPopup('WCS Empire State Building, New York City, New York').openPopup();

L.marker([34.134117, -118.321495]).addTo(map)
    .bindPopup('WCS Hollywood Sign, Los Angeles, California').openPopup();

L.marker([37.774929, -122.419416]).addTo(map)
    .bindPopup('WCS Alcatraz Island, San Francisco, California').openPopup();

L.marker([38.889931, -77.009003]).addTo(map)
    .bindPopup('WCS United States Capitol, Washington, D.C.').openPopup();

L.marker([44.979965, -93.263836]).addTo(map)
    .bindPopup('WCS Stone Arch Bridge, Minneapolis, Minnesota').openPopup();

L.marker([33.748997, -84.387985]).addTo(map)
    .bindPopup('WCS Centennial Olympic Park, Atlanta, Georgia').openPopup();

L.marker([47.802107, -123.604352]).addTo(map)
    .bindPopup('WCS Hoh Rain Forest, Olympic National Park, Washington').openPopup();

L.marker([37.865101, -119.538330]).addTo(map)
    .bindPopup('WCS Yosemite Valley, California').openPopup();

L.marker([36.162663, -86.781601]).addTo(map)
    .bindPopup('WCS Broadway, Nashville, Tennessee').openPopup();

L.marker([39.739236, -104.990251]).addTo(map)
    .bindPopup('WCS Red Rocks Amphitheatre, Morrison, Colorado').openPopup();

L.marker([37.096528, -113.568416]).addTo(map)
    .bindPopup('WCS Zion National Park, Utah').openPopup();

L.marker([48.759613, -113.787023]).addTo(map)
    .bindPopup('WCS Glacier National Park, Montana').openPopup();

L.marker([44.314844, -85.602364]).addTo(map)
    .bindPopup('WCS Sleeping Bear Dunes, Michigan').openPopup();

L.marker([32.083541, -81.099834]).addTo(map)
    .bindPopup('WCS Forsyth Park, Savannah, Georgia').openPopup();

L.marker([29.951065, -90.071533]).addTo(map)
    .bindPopup('WCS French Quarter, New Orleans, Louisiana').openPopup();

L.marker([44.368316, -100.351662]).addTo(map)
    .bindPopup('WCS Mount Rushmore, South Dakota').openPopup();

L.marker([35.149532, -90.048981]).addTo(map)
    .bindPopup('WCS Beale Street, Memphis, Tennessee').openPopup();

L.marker([45.523064, -122.676483]).addTo(map)
    .bindPopup('WCS Portland Japanese Garden, Portland, Oregon').openPopup();

L.marker([40.014984, -105.270546]).addTo(map)
    .bindPopup('WCS Pearl Street Mall, Boulder, Colorado').openPopup();

L.marker([34.730369, -86.586104]).addTo(map)
    .bindPopup('WCS U.S. Space & Rocket Center, Huntsville, Alabama').openPopup();
