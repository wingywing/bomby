import {PluggableMap, View} from 'ol';
import MapRenderer from 'ol/renderer/canvas/Map';
import TileLayerRenderer from 'ol/renderer/canvas/TileLayer';
import {Tile as TileLayer} from 'ol/layer';
import {XYZ} from 'ol/source';
import {defaults as controlDefaults} from 'ol/control';
import {defaults as interactionDefaults} from 'ol/interaction';
import MousePosition from 'ol/control/MousePosition';
import {createStringXY} from 'ol/coordinate';
import {defaults as defaultControls} from 'ol/control';

var mousePositionControl = new MousePosition({
  coordinateFormat: createStringXY(4),
  projection: 'EPSG:4326',
  undefinedHTML: '&nbsp;',
});

PluggableMap.prototype.createRenderer = function() {
  const renderer = new MapRenderer(this);
  renderer.registerLayerRenderers([TileLayerRenderer]);
  return renderer;
}
new PluggableMap({
  target: 'map',
  controls: controlDefaults(),
  interactions: interactionDefaults(),
  controls: defaultControls().extend([mousePositionControl]),
  layers: [
    new TileLayer({
      source: new XYZ({
        url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      })
    })
  ],
  target: 'map',
  view: new View({
    center: [0, 0],
    zoom: 3
  })
});

