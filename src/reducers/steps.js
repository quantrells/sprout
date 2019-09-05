const initialState = {
  1: {
    title: 'Identify the services you would provide',
    copy: [{
      id: 1,
      text: 'Let’s start with identifying the services you want to provide to your customers',
      type: 'strong',
    },{
      id: 2,
      text: 'We are suggesting this action because you were uncertain on the services you want to provide.',
      type: 'highlight',
    }],
    buttons: [{
      id: 3,
      title: 'Get Started',
      href: '#'
    }]
  },
  2: {
    title: 'Identify your target market ',
    copy: [{
      id: 3,
      text: 'Thanks for sharing that.',
      type: 'strong',
    },{
      id: 4,
      text: 'Let’s start with identifying the services you want to provide to your customers.',
    },{
      id: 5,
      text: 'We are suggesting this action because you were uncertain on the services you want to provide.',
      type: 'highlight'
    }],
    buttons: [{
      id: 6,
      title: 'Do it now',
      href: '#'
    }]
  },
  3: {
    title: 'Final Step ',
    copy: [{
      id: 7,
      text: 'Lorem ipsum dolor sit amet',
      type: 'strong',
    },{
      id: 8,
      text: ' In porta aliquet quam, sed faucibus urna malesuada ut. Suspendisse posuere justo eget tortor laoreet tincidunt',
    }],
    buttons: [{
      id: 9,
      title: 'Do it now',
      href: '#'
    }]
  },
}

export default (state = initialState, action) => {
 switch (action.type) {
  default:
   return state
 }
}
