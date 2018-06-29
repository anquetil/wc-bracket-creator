import React, {Component} from 'react';

export default class Country extends Component {

	render(){
		const { country } = this.props;
		if(this.props.game == null){  //if in group stage
			var stat1, stat2;
			if(country.status === '0'){
				stat1 = 'off';
				stat2 = 'off';
			} else if (country.status === '1'){
				stat1 = 'on';
				stat2 = 'off';
			} else if (country.status === '2'){
				stat1 = 'off';
				stat2 = 'on';
			}
			return(

				<div className="groupCountryBox">
					<div className="countryName">{country.flag} {country.name}</div>

					<div className="checksDiv">
						<div className="check" status={stat1} /*onClick={() => (this.props.handleGroupPosition(country.name, '1'))}*/>1</div>
						<div className="check" status={stat2} /*onClick={() => (this.props.handleGroupPosition(country.name, '2'))}*/>2</div>
					</div>
					
				</div>
			)


		} else {
			if(this.props.country == null){ //if empty
				return(
					<div className="bracketCountryBox">
						<div className="countryName">{this.props.filler}</div>
					</div>
				)
			} else {

				var stat = 'off';
				if(country.wins.includes(this.props.game)){ 
					stat = 'on';
				}

				if(this.props.game === 15){ //if ifnal
					return (
						<div className="bracketCountryBox winner">

							<div className="countryName">{country.flag} {country.name}</div>
						</div>
					)

				}

				return (
					<div className="bracketCountryBox">

						<div className="countryName">{country.flag} {country.name}</div>
						
						<div className="checksDiv">
							<div className="check" status={stat} onClick={() => (this.props.updateWin(this.props.game, country.name))}></div>
						</div>
					</div>

				)
			}
		}
		

		
	}
}