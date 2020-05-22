import React from 'react';
import Routes from './routes';
import MapboxGL from '@mapbox/react-native-mapbox-gl';

MapboxGL.setAccessToken('pk.eyJ1IjoidmluaWNpdXN2b2YiLCJhIjoiY2thaWZlaXF3MDA3NDJ0dGR5em92aWF1MyJ9.dgRwb_fi2IbIgfquYuwXnQ');

const App = () => <Routes />;

export default App;