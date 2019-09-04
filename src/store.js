import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

export const initialState = {
  currentStep : 1, 
  steps: {
    1: {
      title: 'Identify the services you would provide',
      copy: [{
        text: 'Let’s start with identifying the services you want to provide to your customers',
        type: 'strong',
      },{
        text: 'We are suggesting this action because you were uncertain on the services you want to provide.',
        type: 'highlight',
      }],
      buttons: [{
        title: 'Get Started',
        href: '#'
      }]
    },
    2: {
      title: 'Identify your target market ',
      copy: [{
        text: 'Thanks for sharing that.',
        type: 'strong',
      },{
        text: 'Let’s start with identifying the services you want to provide to your customers.',
      },{
        text: 'We are suggesting this action because you were uncertain on the services you want to provide.',
        type: 'highlight'
      }],
      buttons: [{
        title: 'Do it now',
        href: '#'
      }]
    },
    3: {
      title: 'Final Step ',
      copy: [{
        text: 'Thanks for sharing that.',
        type: 'strong',
      },{
        text: 'Let’s start with identifying the services you want to provide to your customers.',
      },{
        text: 'We are suggesting this action because you were uncertain on the services you want to provide.',
      }],
      buttons: [{
        title: 'Do it now',
        href: '#'
      }]
    },
  }
}

export default function configureStore(initialState={}) {
 return createStore(
   rootReducer,
   initialState,
   applyMiddleware(thunk)
 );
}