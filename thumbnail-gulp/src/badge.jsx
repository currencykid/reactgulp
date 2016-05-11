//define a react comopnent class
// a class is the definitino of a component,, must be first instancaited
var Badge = React.createClass({
 render: function(){
  return <button className="btn btn-primary" type="button">
    {this.props.title} <span className="badge">{this.props.number}</span>
    </button>
 } 
});

