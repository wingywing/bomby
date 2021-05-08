let map, popup, Popup;

/** Initializes the map and the custom popup. */
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat:8.6226312, lng: 25.8756613 },
    zoom: 3,
    mapTypeId: 'roadmap',
    disableDefaultUI: false
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
  // Images of cat
  img1 = new Popup(
    new google.maps.LatLng(35.737600675434315, 139.63567500839426),
    document.getElementById("img1")
  );
  img1.setMap(map);

  img41 = new Popup(
    new google.maps.LatLng(35.612976687159055, 139.57231366026988),
    document.getElementById("img41")
  );
  img41.setMap(map);

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

  img32 = new Popup(
    new google.maps.LatLng(36.582983191018116, -110.47497202985537),
    document.getElementById("img32")
  );
  img32.setMap(map);

  img33 = new Popup(
    new google.maps.LatLng(43.986394986788135, -121.22665495422875),
    document.getElementById("img33")
  );
  img33.setMap(map);

  img34 = new Popup(
    new google.maps.LatLng(43.97001707789423, -76.21126985057984),
    document.getElementById("img34")
  );
  img34.setMap(map);

  img35 = new Popup(
    new google.maps.LatLng(46.20555135748164, -121.47250727853546),
    document.getElementById("img35")
  );
  img35.setMap(map);

  img36 = new Popup(
    new google.maps.LatLng(44.58411264863449, -120.08407687252443),
    document.getElementById("img36")
  );
  img36.setMap(map);

  img37 = new Popup(
    new google.maps.LatLng(57.149043683501496, -2.100309890096192),
    document.getElementById("img37")
  );
  img37.setMap(map);

  img38 = new Popup(
    new google.maps.LatLng(24.076390022059634, 45.367709583540545),
    document.getElementById("img38")
  );
  img38.setMap(map);

  img39 = new Popup(
    new google.maps.LatLng(61.9641441445424, 76.73948897484512),
    document.getElementById("img39")
  );
  img39.setMap(map);

  img40 = new Popup(
    new google.maps.LatLng(63.05451908385415, 26.232462482704154),
    document.getElementById("img40")
  );
  img40.setMap(map);

  img42 = new Popup(
    new google.maps.LatLng(45.496205741302724, 12.265079583042246),
    document.getElementById("img42")
  );
  img42.setMap(map);

  img43 = new Popup(
    new google.maps.LatLng(48.8865578738251, 2.343690201268505),
    document.getElementById("img43")
  );
  img43.setMap(map)
  
  img44 = new Popup(
    new google.maps.LatLng(50.85517219252868, 0.5712007548399543),
    document.getElementById("img44")
  );
  img44.setMap(map)
  
  img45 = new Popup(
    new google.maps.LatLng(49.39121961115446, 0.1852045665162008),
    document.getElementById("img45")
  );
  img45.setMap(map)

  img46 = new Popup(
    new google.maps.LatLng(65.04318362145241, -18.379313238428704),
    document.getElementById("img46")
  );
  img46.setMap(map)

  img47 = new Popup(
    new google.maps.LatLng(25.728324274962887, 32.60134989562129),
    document.getElementById("img47")
  );
  img47.setMap(map)
  
  img48 = new Popup(
    new google.maps.LatLng(38.32504904378135, 23.316782423159992),
    document.getElementById("img48")
  );
  img48.setMap(map)

  img49 = new Popup(
    new google.maps.LatLng(52.37146347061129, 4.900240357182804),
    document.getElementById("img49")
  );
  img49.setMap(map)

  img50 = new Popup(
    new google.maps.LatLng(51.54197573505868, -0.13458413429731636),
    document.getElementById("img50")
  );
  img50.setMap(map)
  
  img51 = new Popup(
    new google.maps.LatLng(35.20274001975277, 102.09751990696466),
    document.getElementById("img51")
  );
  img51.setMap(map)

  img52 = new Popup(
    new google.maps.LatLng(35.72493974114879, 139.65828407811907),
    document.getElementById("img52")
  );
  img52.setMap(map)

  img53 = new Popup(
    new google.maps.LatLng(19.384041936317935, -99.13816183342783),
    document.getElementById("img53")
  );
  img53.setMap(map)

  img54 = new Popup(
    new google.maps.LatLng(35.65801897975877, 139.6994828065839),
    document.getElementById("img54")
  );
  img54.setMap(map)

  img55 = new Popup(
    new google.maps.LatLng(35.680332138607895, 139.71596228299492),
    document.getElementById("img55")
  );
  img55.setMap(map)

  img56 = new Popup(
    new google.maps.LatLng(29.852627096819756, 31.252227395711554),
    document.getElementById("img56")
  );
  img56.setMap(map)

  img57 = new Popup(
    new google.maps.LatLng(26.77603253376921, 30.224812197721032),
    document.getElementById("img57")
  );
  img57.setMap(map)

  img58 = new Popup(
    new google.maps.LatLng(35.66202609259645, 139.70995713424438),
    document.getElementById("img58")
  );
  img58.setMap(map)

  img59 = new Popup(
    new google.maps.LatLng(35.695491811710205, 139.76969528579554),
    document.getElementById("img59")
  );
  img59.setMap(map)

  img60 = new Popup(
    new google.maps.LatLng(35.12531178874009, 137.0121804016505),
    document.getElementById("img60")
  );
  img60.setMap(map)

  img61 = new Popup(
    new google.maps.LatLng(35.15226433546096, 136.7924538559816),
    document.getElementById("img61")
  );
  img61.setMap(map)

  img62 = new Popup(
    new google.maps.LatLng(-14.835332520878547, -74.93353854639768),
    document.getElementById("img62")
  );
  img62.setMap(map)

  img63 = new Popup(
    new google.maps.LatLng(48.010848471609805, 12.19359221171972),
    document.getElementById("img63")
  );
  img63.setMap(map)

  img64 = new Popup(
    new google.maps.LatLng(48.14339787956456, 12.288609186425408),
    document.getElementById("img64")
  );
  img64.setMap(map)

  img65 = new Popup(
    new google.maps.LatLng(52.38780400779425, 4.796743850412488),
    document.getElementById("img65")
  );
  img65.setMap(map)
  
  img66 = new Popup(
    new google.maps.LatLng(25.731569122830095, 32.597044155276414),
    document.getElementById("img66")
  );
  img66.setMap(map)

  img67 = new Popup(
    new google.maps.LatLng(31.33037886704959, 112.53982519744706),
    document.getElementById("img67")
  );
  img67.setMap(map)

  img68 = new Popup(
    new google.maps.LatLng(35.32991259810244, 108.86623777467312),
    document.getElementById("img68")
  );
  img68.setMap(map)
  
  img69 = new Popup(
    new google.maps.LatLng(40.292242959440955, 116.20816343948441),
    document.getElementById("img69")
  );
  img69.setMap(map)
    
  img70 = new Popup(
    new google.maps.LatLng(37.57939767221114, 112.36987286392969),
    document.getElementById("img70")
  );
  img70.setMap(map)
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
