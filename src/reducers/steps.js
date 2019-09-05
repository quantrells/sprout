const initialState = {
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
      text: 'Lorem ipsum dolor sit amet',
      type: 'strong',
    },{
      text: ' In porta aliquet quam, sed faucibus urna malesuada ut. Suspendisse posuere justo eget tortor laoreet tincidunt',
    }],
    buttons: [{
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
