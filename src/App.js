import React, { Component } from 'react';
import SearchResults from './components/SearchResults';
import Search from './components/Search';
import Nominations from './components/Nominations';
import styled from 'styled-components';

class App extends Component {
	state = { search: [], error: null, nominations: [] };

	searchMovie = movieQuery => {
		this.setState({ search: [] })
		fetch(`https://www.omdbapi.com/?s=${movieQuery}&apikey=b0788735`)
			.then(response => response.json())
			.then(json => {
				if (json.Response === "True") {
					this.setState({ search: json.Search });
				}
				else {
					this.setState({ search: json.Error });
				}

			})
			.catch(error => alert(error.message));
	}

	setNominations = nominations => {
		this.setState({ nominations })
	}

	render() {
		return (
			<StyledApp>
				<div classname='body'>
					<div className='header'>
						<h2>The Shoppies</h2>
					</div>
					<Search classname='search' searchMovie={this.searchMovie} />
					<SearchResults
						callBack={this.setNominations}
						searches={this.state.search} />
					<Nominations nominations={this.state.nominations} searches={this.state.search} />
				</div>
			</StyledApp>
		);
	}
}

export default App;

const StyledApp = styled.div`
	margin: 0;
	padding 0;

  	.header {
    	text-align: center;
    	font-size: 30px;
    	padding: 1.5%;
    	font-family: 'Economica', sans-serif;
		flex: none;
		background: #1abc9c;
		margin-top: 0
  	}

  	.button-search {
    	font-family: 'Roboto Condensed', sans-serif;
    	background-color: #008CBA;
    	border: none;
    	color: white;
    	padding: 10px;
    	text-align: center;
    	text-decoration: none;
    	display: inline-block;
    	font-size: 16px;
    	cursor: pointer;
  	}
  
  	.col-1-2-left {
    	float: left;
    	width: 50%;
  	}

  	.col-1-2-right {
    	float: right;
    	width: 50%;
  	}
`;