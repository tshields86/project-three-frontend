import kk from '../components/keys';

const mapz = {
  access: L.mapbox.accessToken = kk.mpx,
  map: L.mapbox.map('map', 'mapbox.streets').setView([40.7527, -73.9772], 13)
}

export default mapz;
