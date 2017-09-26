var Rest = React.createClass({
	render: function() {
	console.log(JSON.stringify(this.props.data))
	
	const grpDetailsObj = this.props.data[0];
	console.log("asksk; "+this.props.data[0]);
	const Jsondata = [{"name": "test1"},{"name":"test2"}];
	const listItems = Jsondata.map((d) => <li key={d.name}>{d.name}</li>);
	const listItem = Object.keys(grpDetailsObj).map(function(keyname,keyindex){

		console.log(grpDetailsObj[keyname]);
		return <li>{keyname +' : ' +grpDetailsObj[keyname]}</li>;

		});

	return(
	<div>
	  <p>hello rest</p><br/>
	  <li>{listItem}</li>
	</div>
	)
	}

});
