let map, popup, Popup;

/** Initializes the map and the custom popup. */
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat:8.6226312, lng: 25.8756613 },
    zoom: 3,
    mapTypeId: 'roadmap',
    disableDefaultUI: true
  });
  map.setOptions({ styles: styles["default"] });
  /**
   * A customized popup on the map.
   */
  class Popup extends google.maps.OverlayView {
    constructor(position, content) {
      super();
      this.position = position;
      content.classList.add("popup-bubble");
      // This zero-height div is positioned at the bottom of the bubble.
      const bubbleAnchor = document.createElement("div");
      bubbleAnchor.classList.add("popup-bubble-anchor");
      bubbleAnchor.appendChild(content);
      // This zero-height div is positioned at the bottom of the tip.
      this.containerDiv = document.createElement("div");
      this.containerDiv.classList.add("popup-container");
      this.containerDiv.appendChild(bubbleAnchor);
      // Optionally stop clicks, etc., from bubbling up to the map.
      Popup.preventMapHitsAndGesturesFrom(this.containerDiv);
    }
    /** Called when the popup is added to the map. */
    onAdd() {
      this.getPanes().floatPane.appendChild(this.containerDiv);
    }
    /** Called when the popup is removed from the map. */
    onRemove() {
      if (this.containerDiv.parentElement) {
        this.containerDiv.parentElement.removeChild(this.containerDiv);
      }
    }
    /** Called each frame when the popup needs to draw itself. */
    draw() {
      const divPosition = this.getProjection().fromLatLngToDivPixel(
        this.position
      );
      // Hide the popup when it is far out of view.
      const display =
        Math.abs(divPosition.x) < 4000 && Math.abs(divPosition.y) < 4000
          ? "block"
          : "none";

      if (display === "block") {
        this.containerDiv.style.left = divPosition.x + "px";
        this.containerDiv.style.top = divPosition.y + "px";
      }

      if (this.containerDiv.style.display !== display) {
        this.containerDiv.style.display = display;
      }
    }
  }
  img1 = new Popup(
    new google.maps.LatLng(35.737600675434315, 139.63567500839426),
    document.getElementById("img1")
  );
  img1.setMap(map);

  img8 = new Popup(
    new google.maps.LatLng(35.71142831943841, 139.48462696889717),
    document.getElementById("img8")
  );
  img8.setMap(map);

  img2 = new Popup(
    new google.maps.LatLng(43.6539700254478, 6.924129006233555),
    document.getElementById("img2")
  );
  img2.setMap(map);

  img3 = new Popup(
    new google.maps.LatLng(34.44302249584373, 131.58759446944737),
    document.getElementById("img3")
  );
  img3.setMap(map);

  img4 = new Popup(
    new google.maps.LatLng(30.57060038946036, 31.514864568765212),
    document.getElementById("img4")
  );
  img4.setMap(map);

  img5 = new Popup(
    new google.maps.LatLng(51.51745024347428, -0.1311303232782981),
    document.getElementById("img5")
  );
  img5.setMap(map);

  img6 = new Popup(
    new google.maps.LatLng(35.68409477589252, 139.746325060602),
    document.getElementById("img6")
  );
  img6.setMap(map);

  img7 = new Popup(
    new google.maps.LatLng(-8.431993776966408, -78.80703040190785),
    document.getElementById("img7")
  );
  img7.setMap(map);

  img9 = new Popup(
    new google.maps.LatLng(18.454271121646524, -102.65059763802265),
    document.getElementById("img9")
  );
  img9.setMap(map);

  img10 = new Popup(
    new google.maps.LatLng(34.98993824907651, 135.71746003434885),
    document.getElementById("img10")
  );
  img10.setMap(map);

}
const styles = { //Custom style from SnazzyMaps.com
  default: 
    [
      {
          "featureType": "administrative",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "administrative.country",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "administrative.country",
          "elementType": "geometry",
          "stylers": [
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "administrative.country",
          "elementType": "geometry.stroke",
          "stylers": [
              {
                  "color": "#bc882f"
              }
          ]
      },
      {
          "featureType": "landscape.man_made",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "landscape.natural",
          "elementType": "all",
          "stylers": [
              {
                  "color": "#ffe9d0"
                  
              }
          ]
      },
      {
          "featureType": "landscape.natural.landcover",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "off"
              },
              {
                  "hue": "#ff0000"
              }
          ]
      },
      {
          "featureType": "landscape.natural.terrain",
          "elementType": "all",
          "stylers": [
              {
                  "saturation": "7"
              },
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "poi",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "poi",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "poi.attraction",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "poi.business",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "poi.government",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "poi.medical",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "poi.park",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "poi.place_of_worship",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "transit",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "water",
          "elementType": "all",
          "stylers": [
              {
                  "color": "#c0ddf0"
              }
          ]
      },
      {
          "featureType": "water",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "saturation": "10"
              }
          ]
      }
  ]
  ,
  
};
