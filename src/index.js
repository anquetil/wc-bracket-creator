import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import './format.css';
import App from './App';

var countries =	[	
					{
						name: 'Russia',
						group: 'A',
						flag: '🇷🇺',
					}, 
					{
						name: 'Saudi Arabia',
						group: 'A',
						flag: '🇸🇦',
					}, 
					{ 
						name: 'Egypt',
						group: 'A',
						flag: '🇪🇬',
					}, 
					{ 
						name: 'Uruguay',
						group: 'A',
						flag: '🇺🇾',
					}, 
					{ 
						name: 'Portugal',
						group: 'B',
						flag: '🇵🇹',
					}, 
					{ 
						name: 'Spain',
						group: 'B',
						flag :'🇪🇸'
					}, 
					{
						name: 'Morocco',
						group: 'B',
						flag: '🇲🇦'
					}, 
					{
						name: 'Iran',
						group: 'B',
						flag: '🇮🇷'
					},
					{
						name: 'France',
						group: 'C',
						flag: '🇫🇷'
					}, 
					{
						name: 'Australia',
						group: 'C',
						flag: '🇦🇺'
					}, 
					{
						name: 'Peru',
						group: 'C',
						flag: '🇵🇪'
					}, 
					{
						name: 'Denmark',
						group: 'C',
						flag: '🇩🇰'
					},
					{
						name: 'Argentina',
						group: 'D',
						flag: '🇦🇷'
					}, 
					{
						name: 'Iceland',
						group: 'D',
						flag: '🇮🇸'
					}, 
					{
						name: 'Croatia',
						group: 'D',
						flag: '🇭🇷',
					}, 
					{
						name: 'Nigeria',
						group: 'D',
						flag: '🇳🇬',
					},
					{
						name: 'Brazil',
						group: 'E',
						flag: '🇧🇷',
					}, 
					{
						name: 'Switzerland',
						group: 'E',
						flag: '🇨🇭',
					}, 
					{
						name: 'Costa Rica',
						group: 'E',
						flag: '🇨🇷',
					}, 
					{
						name: 'Serbia',
						group: 'E',
						flag: '🇷🇸',
					},
					{
						name: 'Germany',
						group: 'F',
						flag: '🇩🇪',
					}, 
					{
						name: 'Mexico',
						group: 'F',
						flag: '🇲🇽',
					}, 
					{
						name: 'Sweden',
						group: 'F',
						flag: '🇸🇪',
					}, 
					{
						name: 'South Korea',
						group: 'F',
						flag: '🇰🇷',
					},
					{
						name: 'Belgium',
						group: 'G',
						flag: '🇧🇪'
					}, 
					{
						name: 'Panama',
						group: 'G',
						flag: '🇵🇦'
					}, 
					{
						name: 'Tunisia',
						group: 'G',
						flag: '🇹🇳'
					}, 
					{
						name: 'England',
						group: 'G',
						flag: '🇬🇧'
					},
					{
						name: 'Poland',
						group: 'H',
						flag: '🇵🇱'
					}, 
					{
						name: 'Senegal',
						group: 'H',
						flag: '🇸🇳'
					}, 
					{
						name: 'Colombia',
						group: 'H',
						flag :'🇨🇴'
					}, 
					{
						name: 'Japan',
						group: 'H',
						flag: '🇯🇵'
					}];

ReactDOM.render(<App 	countries={countries}/>, 
						document.getElementById('root'));
