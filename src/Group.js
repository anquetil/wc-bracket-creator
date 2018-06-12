import React, {Component} from 'react';
import Country from './Country';

export default class Group extends Component {
	
	handleGroupPosition(countryname, pos){
		this.props.handleGroupPosition(this.props.name, countryname, pos);
	}


	render(){
		var countriesToShow = this.props.countries.map((country, num) => 
			(<Country 	
						key={num} 
						groupCountry={true}
						country={country} 
						handleGroupPosition={this.handleGroupPosition.bind(this)}/>));


		return(
			<div className="group">
				<div className="groupTitle">{"Group " + this.props.name}</div>
				{countriesToShow}

			</div>
		)
	}
}