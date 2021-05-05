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

  img27 = new Popup(
    new google.maps.LatLng(25.850506953348784, 28.669480311777374),
    document.getElementById("img27")
  );
  img27.setMap(map);

  img8 = new Popup(
    new google.maps.LatLng(35.71142831943841, 139.48462696889717),
    document.getElementById("img8")
  );
  img8.setMap(map);

  img21 = new Popup(
    new google.maps.LatLng(35.704209680323316, 139.5291928450757),
    document.getElementById("img21")
  );
  img21.setMap(map);

  img22 = new Popup(
    new google.maps.LatLng(35.714209680323316, 139.5391928450757),
    document.getElementById("img22")
  );
  img22.setMap(map);

  img2 = new Popup(
    new google.maps.LatLng(43.6539700254478, 6.924129006233555),
    document.getElementById("img2")
  );
  img2.setMap(map);

  img13 = new Popup(
    new google.maps.LatLng(26.59951364103602, 29.8147491661269),
    document.getElementById("img13")
  );
  img13.setMap(map);

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

  img11 = new Popup(
    new google.maps.LatLng(53.45234001651708, -92.73971834740249),
    document.getElementById("img11")
  );
  img11.setMap(map);

  img12 = new Popup(
    new google.maps.LatLng(-35.29786691445173, -65.39384261271171),
    document.getElementById("img12")
  );
  img12.setMap(map);

  img14 = new Popup(
    new google.maps.LatLng(25.90842565719445, -81.67406697192239),
    document.getElementById("img14")
  );
  img14.setMap(map);

  img15 = new Popup(
    new google.maps.LatLng(22.59825474071593, 88.38034445921708),
    document.getElementById("img15")
  );
  img15.setMap(map);

  img16 = new Popup(
    new google.maps.LatLng(49.10786182667481, 0.2192491444014272),
    document.getElementById("img16")
  );
  img16.setMap(map);
  
  img17 = new Popup(
    new google.maps.LatLng(61.38028804907119, 93.79026957874022),
    document.getElementById("img17")
  );
  img17.setMap(map);

  img18 = new Popup(
    new google.maps.LatLng(21.05388627229193, 106.08979666577241),
    document.getElementById("img18")
  );
  img18.setMap(map);

  img19 = new Popup(
    new google.maps.LatLng(1.5576833551496956, 110.35266637802124),
    document.getElementById("img19")
  );
  img19.setMap(map);

  img20 = new Popup(
    new google.maps.LatLng(56.76698617444734, 11.263252760256497),
    document.getElementById("img20")
  );
  img20.setMap(map);

  img23 = new Popup(
    new google.maps.LatLng(43.73129690767164, -79.39456893014044),
    document.getElementById("img23")
  );
  img23.setMap(map);

  img24 = new Popup(
    new google.maps.LatLng(51.51104054473209, -0.15035639676851495),
    document.getElementById("img24")
  );
  img24.setMap(map);

  img25 = new Popup(
    new google.maps.LatLng(51.51482482151681, -0.18681039511624134),
    document.getElementById("img25")
  );
  img25.setMap(map);

  img26 = new Popup(
    new google.maps.LatLng(-37.6946610804612, 140.45652937874536),
    document.getElementById("img26")
  );
  img26.setMap(map);

  img28 = new Popup(
    new google.maps.LatLng(6.717334740501138, -1.5465741520275156),
    document.getElementById("img28")
  );
  img28.setMap(map);

  img29 = new Popup(
    new google.maps.LatLng(39.916472226101796, 116.39716532668957),
    document.getElementById("img29")
  );
  img29.setMap(map);

  img30 = new Popup(
    new google.maps.LatLng(51.26223503403885, 4.390672252625484),
    document.getElementById("img30")
  );
  img30.setMap(map);

  img31 = new Popup(
    new google.maps.LatLng(57.61593196850083, -4.956521331935193),
    document.getElementById("img31")
  );
  img31.setMap(map);
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
