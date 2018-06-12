import React, {Component} from 'react';
import Country from './Country';


export default class Bracket extends Component {


	getCountry(group, pos){
		return this.props.countries.find((country) => { 
			return (country.group === group && country.status === pos);
		});
	}

	getGameWinner(gameNum){
		return this.props.countries.find((country) => { 
			return (country.wins.includes(gameNum));
		});
	}



	render(){

		//getCountries for round of 16
			var a1 = this.getCountry('A', '1');
			var a2 = this.getCountry('A', '2');

			var b1 = this.getCountry('B', '1');
			var b2 = this.getCountry('B', '2');

			var c1 = this.getCountry('C', '1');
			var c2 = this.getCountry('C', '2');

			var d1 = this.getCountry('D', '1');
			var d2 = this.getCountry('D', '2');

			var e1 = this.getCountry('E', '1');
			var e2 = this.getCountry('E', '2');

			var f1 = this.getCountry('F', '1');
			var f2 = this.getCountry('F', '2');

			var g1 = this.getCountry('G', '1');
			var g2 = this.getCountry('G', '2');

			var h1 = this.getCountry('H', '1');
			var h2 = this.getCountry('H', '2');

		var w = []
		for(var i = 0; i < 15; i++){
			w[i] = this.getGameWinner(i);
		}

		return(

			<div className='bracket'>
				<div className="col c1">
					<h4>R16</h4>
					<div className="matchup">
						<Country 
							key={0}
							game={0}
							groupCountry={false}
							country={a1}
							updateWin={this.props.updateWin}
							filler={"A1"}
						/>

						<Country 
							key={1}
							game={0}
							groupCountry={false}
							country={b2} 
							updateWin={this.props.updateWin}
							filler={"B2"}
						/>
					</div>

					<div className="matchup">
						<Country 
							key={2}
							game={1}
							groupCountry={false}
							country={c1} 
							updateWin={this.props.updateWin}
							filler={"C1"}
						/>

						<Country 
							key={3}
							game={1}
							groupCountry={false}
							country={d2}
							updateWin={this.props.updateWin}
							filler={"D2"}
						/>
					</div>

					<div className="matchup">
						<Country 
							key={4}
							game={2}
							groupCountry={false}
							country={e1}
							updateWin={this.props.updateWin}
							filler={"E1"}
						/>

						<Country 
							key={5}
							game={2}
							groupCountry={false}
							country={f2}
							updateWin={this.props.updateWin}
							filler={"F2"}
						/>
					</div>

					<div className="matchup">
						<Country 
							key={6}
							game={3}
							groupCountry={false}
							country={g1}
							updateWin={this.props.updateWin}
							filler={"G1"}
						/>

						<Country 
							key={7}
							game={3}
							groupCountry={false}
							country={h2}
							updateWin={this.props.updateWin}
							filler={"H2"}
						/>
					</div>

					<div className="matchup">
						<Country 
							key={8}
							game={4}
							groupCountry={false}
							country={a2}
							updateWin={this.props.updateWin}
							filler={"A2"}
						/>

						<Country 
							key={9}
							game={4}
							groupCountry={false}
							country={b1}
							updateWin={this.props.updateWin}
							filler={"B1"}
						/>
					</div>

					<div className="matchup">
						<Country 
							key={10}
							game={5}
							groupCountry={false}
							country={c2}
							updateWin={this.props.updateWin}
							filler={"C2"}
						/>

						<Country 
							key={11}
							game={5}
							groupCountry={false}
							country={d1}
							updateWin={this.props.updateWin}
							filler={"D1"}
						/>
					</div>

					<div className="matchup">
						<Country 
							key={12}
							game={6}
							groupCountry={false}
							country={e2}
							updateWin={this.props.updateWin}
							filler={"E2"} 
						/>

						<Country 
							key={13}
							game={6}
							groupCountry={false}
							country={f1}
							updateWin={this.props.updateWin}
							filler={"F1"}
						/>
					</div>

					<div className="matchup">
						<Country 
							key={14}
							game={7}
							groupCountry={false}
							country={g2}
							updateWin={this.props.updateWin}
							filler={"G2"}
						/>

						<Country 
							key={15}
							game={7}
							groupCountry={false}
							country={h1}
							updateWin={this.props.updateWin}
							filler={"H1"}
						/>
					</div>
				</div>

				<div className="col c2">
					<h4>QF</h4>
					<div className="round-two">
						<div className="matchup">
							<Country 
								key={16}
								game={8}
								groupCountry={false}
								country={w[0]}
								updateWin={this.props.updateWin}
							/>

							<Country 
								key={17}
								game={8}
								groupCountry={false}
								country={w[1]} 
								updateWin={this.props.updateWin}
							/>
						</div>
					</div>

					<div className="round-two">
						<div className="matchup">
							<Country 
								key={16}
								game={9}
								groupCountry={false}
								country={w[2]}
								updateWin={this.props.updateWin}
							/>

							<Country 
								key={17}
								game={9}
								groupCountry={false}
								country={w[3]}
								updateWin={this.props.updateWin} 
							/>
						</div>
					</div>

					<div className="round-two">
						<div className="matchup">
							<Country 
								key={16}
								game={10}
								groupCountry={false}
								country={w[4]}
								updateWin={this.props.updateWin}
							/>

							<Country 
								key={17}
								game={10}
								groupCountry={false}
								country={w[5]} 
								updateWin={this.props.updateWin}
							/>
						</div>
					</div>


						<div className="matchup">
							<Country 
								key={16}
								game={11}
								groupCountry={false}
								country={w[6]}
								updateWin={this.props.updateWin}
							/>

							<Country 
								key={17}
								game={11}
								groupCountry={false}
								country={w[7]} 
								updateWin={this.props.updateWin}
							/>
						</div>
	

				</div>

				<div className="col c3">
					<h4>SF</h4>
					<div className="round-three">
						<div className="matchup">
							<Country 
								key={18}
								game={12}
								groupCountry={false}
								country={w[8]}
								updateWin={this.props.updateWin}
							/>

							<Country 
								key={19}
								game={12}
								groupCountry={false}
								country={w[9]} 
								updateWin={this.props.updateWin}
							/>
						</div>
					</div>

						<div className="matchup">
							<Country 
								key={20}
								game={13}
								groupCountry={false}
								country={w[10]}
								updateWin={this.props.updateWin}
							/>

							<Country 
								key={21}
								game={13}
								groupCountry={false}
								country={w[11]}
								updateWin={this.props.updateWin} 
							/>
						</div>
	
				</div>

				<div className="col c4">
					<h4>F</h4>
					<div className="matchup">
							<Country 
								key={22}
								game={14}
								groupCountry={false}
								country={w[12]}
								updateWin={this.props.updateWin}
							/>

							<Country 
								key={23}
								game={14}
								groupCountry={false}
								country={w[13]} 
								updateWin={this.props.updateWin}
							/>
					</div>
				</div>

				<div className="col c5">
					<div className="matchup">
							<h1>Winner</h1>
							<Country 
								key={24}
								game={15}
								groupCountry={false}
								country={w[14]}
								updateWin={this.props.updateWin}
							/>
					</div>
				</div>
			</div>
		)
	}
}