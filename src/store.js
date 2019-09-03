import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const initialState = {
 currentStep : 1, 
 steps: {
  1: {
   title: '',
   copy: [{
    text: 'Thanks for sharing that.',
    type: 'strong',
   },{
    text: 'Let’s start with identifying the services you want to provide to your customers.',
   },{
    text: 'We are suggesting this action because you were uncertain on the services you want to provide.',
    type: 'highlight'
   }]
  }
 }
}

export default function configureStore(initialState={}) {
 return createStore(
   rootReducer,
   initialState,
   applyMiddleware(thunk)
 );
}