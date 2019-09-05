import { combineReducers } from 'redux';

import currentStep from './currentStep';
import steps from './steps';
import assistance from './assistance';

export default combineReducers({
 currentStep,
 steps,
 assistance,
});