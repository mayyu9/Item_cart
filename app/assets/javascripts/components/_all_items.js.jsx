var AllItems = React.createClass({
  getIntialState(){
    return {items: []}
},

componentDidMount(){
  //console.log("all items component mounted");
  $.getJSON('http://localhost:3000/api/v1/items.json', (response) => { this.setState({items: response}) });
},

render(){
  var items = this.state.items.map((item) => {
    return (
      <div key= {item.id}>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      </div>
    )
});

return (
  <div>
    {items}
    </div>
  )
}
});
