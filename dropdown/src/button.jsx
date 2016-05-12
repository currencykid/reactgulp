var React = require('react'); 

//define a react comopnent class
// a class is the definitino of a component,, must be first instancaited

module.exports = React.createClass({
  render: function(){
    return <button onClick={this.props.whenClicked}
    className={"btn " + this.props.className}  type="button">
    {this.props.title} 
    <span className={this.props.subTitleClassName}>{this.props.subTitle}</span>
    </button>
  } 
});


