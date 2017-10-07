var origins = ['Cory Hall, Berkeley, United States'];
var destinations = ['Dwinelle Hall, Berkeley, United States'];

var service = new google.maps.DistanceMatrixService();
service.getDistanceMatrix(
  {
    origins: origins,
    destinations: destinations,
    travelMode: 'WALKING',
  }, callback);


function callback(response, status) {
  if (status == 'OK') {
    var origins = response.originAddresses;
    var destinations = response.destinationAddresses;

    for (var i = 0; i < origins.length; i++) {
      var results = response.rows[i].elements;
      for (var j = 0; j < results.length; j++) {
        var element = results[j];
        var distance = element.distance.text;
        var duration = element.duration.text;
        var from = origins[i];
        var to = destinations[j];
      }
    }
  }
}