var React = require('react'); 
var Dropdown = require('./dropdown'); 

var options = {
  title: "Choose a course" ,// what the word on the button that opn/closes dropdown
  items: [ // items that show in the dropdown 
    'React',
    'Rails',
    'Angular'
  ]
}; 


//ask react to render the class
// this is essentially the cutout from the "cookie cutter" 
// pass the object 'options'as second argument

var element = React.createElement(Dropdown, options); 


// when we ask react to render, 
//we tell it where to place the rendered elemtn in the DOM
// first artguemnt is isntance,, the second is where we want to render to

ReactDOM.render(element, document.querySelector('.container')); 
