
var React = require('react'); 
var Thumbnail = require('./thumbnail'); 

//gonna use map on an array to call a function on every element in the array
module.exports = React.createClass({
  render: function(){
    var list = this.props.thumbnailData.map(function(thumbnailProps){
    // the following is a React shortcut for passing in an entire object
    // take entire thumbnailProps options object and create instance of thumbanil and pass in all properties
    // list is now an array of thumbnail instance
      return <Thumbnail {...thumbnailProps} /> 
}); 
  return <div> 
  {list} 
  </div>
}
});

