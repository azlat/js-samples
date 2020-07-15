(function(exports) {
  "use strict";

  // This example creates a simple polygon representing the Bermuda Triangle.
  // When the user clicks on the polygon an info window opens, showing
  // information about the polygon's coordinates.

  function initMap() {
    exports.map = new google.maps.Map(document.getElementById("map"), {
      zoom: 5,
      center: {
        lat: 24.886,
        lng: -70.268
      },
      mapTypeId: "terrain"
    }); // Define the LatLng coordinates for the polygon.

    const triangleCoords = [
      {
        lat: 25.774,
        lng: -80.19
      },
      {
        lat: 18.466,
        lng: -66.118
      },
      {
        lat: 32.321,
        lng: -64.757
      }
    ]; // Construct the polygon.

    const bermudaTriangle = new google.maps.Polygon({
      paths: triangleCoords,
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 3,
      fillColor: "#FF0000",
      fillOpacity: 0.35
    });
    bermudaTriangle.setMap(exports.map); // Add a listener for the click event.

    bermudaTriangle.addListener("click", showArrays);
    exports.infoWindow = new google.maps.InfoWindow();
  }

  function showArrays(event) {
    // Since this polygon has only one path, we can call getPath() to return the
    // MVCArray of LatLngs.
    // @ts-ignore
    const polygon = this;
    const vertices = polygon.getPath();
    let contentString =
      "<b>Bermuda Triangle polygon</b><br>" +
      "Clicked location: <br>" +
      event.latLng.lat() +
      "," +
      event.latLng.lng() +
      "<br>"; // Iterate over the vertices.

    for (let i = 0; i < vertices.getLength(); i++) {
      const xy = vertices.getAt(i);
      contentString +=
        "<br>" + "Coordinate " + i + ":<br>" + xy.lat() + "," + xy.lng();
    } // Replace the info window's content and position.

    exports.infoWindow.setContent(contentString);
    exports.infoWindow.setPosition(event.latLng);
    exports.infoWindow.open(exports.map);
  }

  exports.initMap = initMap;
  exports.showArrays = showArrays;
})((this.window = this.window || {}));
