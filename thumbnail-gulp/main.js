(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/home/ck/reactgulp/thumbnail-gulp/src/app.jsx":[function(require,module,exports){
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

},{}]},{},["/home/ck/reactgulp/thumbnail-gulp/src/app.jsx"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS9jay9yZWFjdGd1bHAvdGh1bWJuYWlsLWd1bHAvc3JjL2FwcC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxJQUFJLE9BQU8sR0FBRztBQUNkLGFBQWEsRUFBRSxDQUFDO0FBQ2hCLEtBQUssRUFBRSxlQUFlO0FBQ3RCLE1BQU0sRUFBRSxJQUFJO0FBQ1osTUFBTSxFQUFFLGFBQWE7QUFDckIsV0FBVyxFQUFFLDZEQUE2RDtBQUMxRSxRQUFRLEVBQUUsK0NBQStDO0NBQ3hELEVBQUU7QUFDSCxLQUFLLEVBQUUsZUFBZTtBQUN0QixNQUFNLEVBQUUsSUFBSTtBQUNaLE1BQU0sRUFBRSxZQUFZO0FBQ3BCLFdBQVcsRUFBRSxvRkFBb0Y7QUFDakcsUUFBUSxFQUFFLDREQUE0RDtDQUNyRSxDQUFDO0FBQ0YsQ0FBQyxDQUFDOztBQUVGLCtCQUErQjtBQUMvQiwyREFBMkQ7QUFDM0QsOENBQThDOztBQUU5QyxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUMxRDs7QUFFQSxnQ0FBZ0M7QUFDaEMsMERBQTBEO0FBQzFELHlFQUF5RTs7RUFFdkUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBvcHRpb25zID0ge1xudGh1bWJuYWlsRGF0YTogW3tcbnRpdGxlOiBcIlNlZSB0dXRvcmlhbHNcIixcbm51bWJlcjogXCI2OVwiICwgXG5oZWFkZXI6IFwiTGVhcm4gUmVhY3RcIixcbmRlc2NyaXB0aW9uOiBcIlJlYWN0IGlzIGEgbmV3IGxpYnJhcnkgZm9yIG1ha2luZyBhd2Vzb21lIGFuZCBkeW5hbWljIHBhZ2VzXCIsXG5pbWFnZVVybDogJ2h0dHBzOi8vZmFjZWJvb2suZ2l0aHViLmlvL3JlYWN0L2ltZy9sb2dvLnN2ZycgXG59LCB7XG50aXRsZTogXCJTZWUgdHV0b3JpYWxzXCIsXG5udW1iZXI6IFwiMTlcIiAsIFxuaGVhZGVyOiBcIkxlYXJuIEd1bHBcIixcbmRlc2NyaXB0aW9uOiBcIkd1bHAgaXMgYSBidWlsZHN5c3RlbSB0aGF0IGhlbHBzIHlvdSBnZXQgYWxsIHRoZSBzaGl0IHlvdSBuZWVkIGZvciBSZWFjdCB0b2dldGhlci5cIixcbmltYWdlVXJsOiAnaHR0cHM6Ly9hdmF0YXJzMC5naXRodWJ1c2VyY29udGVudC5jb20vdS82MjAwNjI0P3Y9MyZzPTQwMCcgXG59XVxufTsgXG5cbi8vYXNrIHJlYWN0IHRvIHJlbmRlciB0aGUgY2xhc3Ncbi8vIHRoaXMgaXMgZXNzZW50aWFsbHkgdGhlIGN1dG91dCBmcm9tIHRoZSBcImNvb2tpZSBjdXR0ZXJcIiBcbi8vIHBhc3MgdGhlIG9iamVjdCAnb3B0aW9ucydhcyBzZWNvbmQgYXJndW1lbnRcblxudmFyIGVsZW1lbnQgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFRodW1ibmFpbExpc3QsIG9wdGlvbnMpOyBcblxuXG4vLyB3aGVuIHdlIGFzayByZWFjdCB0byByZW5kZXIsIFxuLy93ZSB0ZWxsIGl0IHdoZXJlIHRvIHBsYWNlIHRoZSByZW5kZXJlZCBlbGVtdG4gaW4gdGhlIERPTVxuLy8gZmlyc3QgYXJ0Z3VlbW50IGlzIGlzbnRhbmNlLCwgdGhlIHNlY29uZCBpcyB3aGVyZSB3ZSB3YW50IHRvIHJlbmRlciB0b1xuXG4gIFJlYWN0RE9NLnJlbmRlcihlbGVtZW50LCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJykpOyBcbiJdfQ==
