var React = require('react'); 
var ThumbnailList = require('./thumbnail-list'); 

var options = {
  thumbnailData: [{
    title: "See tutorials",
    number: "69" , 
    header: "Learn React",
    description: "React is a new library for making awesome and dynamic pages",
    imageUrl: 'https://facebook.github.io/react/img/logo.svg' 
    }, {
    title: "See tutorials",
    number: "19" , 
    header: "Learn Gulp",
    description: "Gulp is a buildsystem that helps you get all the shit you need for React together.",
    imageUrl: 'https://avatars0.githubusercontent.com/u/6200624?v=3&s=400' 
    }]
}; 

//ask react to render the class
// this is essentially the cutout from the "cookie cutter" 
// pass the object 'options'as second argument

var element = React.createElement(ThumbnailList, options); 


// when we ask react to render, 
//we tell it where to place the rendered elemtn in the DOM
// first artguemnt is isntance,, the second is where we want to render to

  ReactDOM.render(element, document.querySelector('.container')); 
