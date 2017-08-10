import { AppRegistry } from 'react-native';

// @todo remove when RN upstream is fixed
console.ignoredYellowBox = ['Warning: Failed propType: SceneView'];

import setup from './js/setup';

AppRegistry.registerComponent('JangkooUniversal', setup);
