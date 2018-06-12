import React, {Component} from 'react';
import Group from './Group';
import Bracket from './Bracket';
import Modal from 'react-modal';
import {CopyToClipboard} from 'react-copy-to-clipboard';
Modal.setAppElement('#root'); //modal appears over root

export default class App extends Component {

	constructor(props){
		super(props);

		var newState = this.props.countries;
		for(var i = 0; i < 32; i++){
			newState[i].status = '0';
			newState[i].wins = [];
		}

		this.state = {
			countries: newState,
			modalIsOpen: false,
			inText: '',
			copied: '',
		};

	}

	openModal() {
		this.setState({ modalIsOpen: true, inText: this.exportToText()})
	}

	closeModal() {
		this.setState({ modalIsOpen: false, copied: '' });
	}


	handleGroupPosition(group, name, pos){ 
		//pos is either '1' or '2'
		var newState = this.state;
		for(var i = 0; i < 32; i++){
			var country = newState.countries[i];
			if(country.name === name){
				if(country.status === pos){ //if clicked on current pos, remove it
					country.status = '0';
					country.wins = []
				} else {
					country.status = pos;
					country.wins = []; //remove their wins since they changed pos
				}
			} else if ((country.status === pos) && (country.group === group)){ //change others if it took someone's pos
				country.status = '0';
				country.wins = []; //remove their wins bc switching pos
			}
		}

		this.setState(newState);
	}

	getGroupsArray(){
		var groupsArray = [{name: 'A', countries: []},
							{name: 'B', countries: []},
							{name: 'C', countries: []},
							{name: 'D', countries: []},
							{name: 'E', countries: []},
							{name: 'F', countries: []},
							{name: 'G', countries: []},
							{name: 'H', countries: []}];

		for(var i = 0; i < 32; i++){
			var countryGroup = this.state.countries[i].group;
			var groupIndex = countryGroup.charCodeAt(0) - 'A'.charCodeAt(0);
			groupsArray[groupIndex].countries.push(this.props.countries[i]); //put in right group
		}

		return groupsArray;
	}

	updateBracketWin(gameWon, name){
		var newState = this.state;

		for(var i = 0; i < 32; i++){
			if(newState.countries[i].name === name){
				if(!newState.countries[i].wins.includes(gameWon)){ //update this countries' wins
					newState.countries[i].wins.push(gameWon);
				} else { //count as win removal
					var ind = newState.countries[i].wins.indexOf(gameWon);
					newState.countries[i].wins = newState.countries[i].wins.slice(0, ind);
				}
			} else if(newState.countries[i].wins.includes(gameWon)){ //if other team has won it
				var index = newState.countries[i].wins.indexOf(gameWon);
				newState.countries[i].wins = newState.countries[i].wins.slice(0, index);
			}
		}
		this.setState(newState);
	}





	getCountry(countries, group, pos){
		return countries.find((country) => { 
			return (country.group === group && country.status === pos);
		});
	}

	getGameWinner(countries, gameNum){
		return countries.find((country) => { 
			return (country.wins.includes(gameNum));
		});
	}

	exportToText(){
		var countries = this.state.countries.slice();	
		var charArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
		var storedSeeds = [];
		for(var i = 0; i < 8; i++){
			for(var j = 1; j <= 2; j++){
				var country = this.getCountry(countries, charArray[i], j.toString());
				var name = '(NONE)';
				if(country != null){
					name = country.name.substring(0, 8);
				}
				storedSeeds.push(charArray[i] + j + ': ' + name);
			}
		}

		var w = [];
		for(var k = 0; k < 15; k++){
			var c = this.getGameWinner(countries, k);
			var cname = '(NONE)';
			if( c != null){
				cname = c.name.substring(0,8);
			}
			w[k] = cname;
		}



		var s = 'Group Picks';
		for(var l = 0 ; l < 16; l+= 2){
			s += '\n' + storedSeeds[l] + '  ' + storedSeeds[l + 1];
		}


		/*UGLY CODE - USED FOR EXPORTING BRACKET */
			s += '\n\nBracket Picks\nR16 \t\t QF \t SF \t F \t Winner\n';
			s += '\n' + storedSeeds[0];
			s += '\n\t\t' + w[0];
			s += '\n' + storedSeeds[3];
			s += '\n\t\t\t' + w[8]; //qf
			s += '\n' + storedSeeds[4];
			s += '\n\t\t' + w[1];
			s += '\n' + storedSeeds[7];

			s += '\n\t\t\t\t' + w[12]; //semi

			s += '\n' + storedSeeds[8];
			s += '\n\t\t' + w[2];
			s += '\n' + storedSeeds[11];
			s += '\n\t\t\t' + w[9]; //qf
			s += '\n' + storedSeeds[12];
			s += '\n\t\t' + w[3];
			s += '\n' + storedSeeds[15];

			s += '\n\t\t\t\t\t' + w[14]; //final

			s += '\n' + storedSeeds[1];
			s += '\n\t\t' + w[4];
			s += '\n' + storedSeeds[2];
			s += '\n\t\t\t' + w[10]; //qf
			s += '\n' + storedSeeds[5];
			s += '\n\t\t' + w[5];
			s += '\n' + storedSeeds[6];

			s += '\n\t\t\t\t' + w[13]; //semi

			s += '\n' + storedSeeds[9];
			s += '\n\t\t' + w[6];
			s += '\n' + storedSeeds[10];
			s += '\n\t\t\t' + w[11]; //qf
			s += '\n' + storedSeeds[13];
			s += '\n\t\t' + w[7];
			s += '\n' + storedSeeds[14];


		return s;
	}


	getParent() {
		return document.querySelector('.container');
	}


	render(){


		var groupsArray = this.getGroupsArray();

		var groupDisplay = groupsArray.map((group, num) => 
				(<Group 	key={num} 
							name={group.name} 
							countries={group.countries} 
							handleGroupPosition={this.handleGroupPosition.bind(this)}/>));

		return(
			<div className="container">
				<Modal
					isOpen={this.state.modalIsOpen}
					onRequestClose={this.closeModal.bind(this)} 
					shouldReturnFocusAfterClose={false}
					className="modal"
					parentSelector={this.getParent}
					style={{overlay: {backgroundColor: 'rgba(0, 0, 0, 0.25)'}}} >

					<h2>Share your predictions!</h2>
					<CopyToClipboard text={this.state.inText} 
						onCopy={() => this.setState({copied: 'Copied!\n Set font to Courier New (or any monospace font) for best formatting.'})}>
			        	<button className="copyButton">Copy to clipboard</button>
			        </CopyToClipboard>
					
					<span><i> Or screenshot your bracket!</i></span>
					<div style={{padding: '0 0 1rem 2rem', color: 'green'}}><i>{this.state.copied}</i></div>

					<p className="desc" >
						
						{this.state.inText}
					</p>

				</Modal>


				<button onClick={this.openModal.bind(this)} className="exportButton">Share</button>
				<div className="groupColumns">
					<h3>Group Stage</h3>
					{groupDisplay}
				</div>


				<Bracket 	countries={this.state.countries} 
							updateWin={this.updateBracketWin.bind(this)} />
				

			</div>





		)
	}
}