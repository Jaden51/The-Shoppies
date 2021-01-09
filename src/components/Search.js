import React, { Component } from 'react';
import styled from 'styled-components';

class Search extends Component {
    state = { movieQuery: '' };

    updateMovieQuery = event => {
        this.setState({ movieQuery: event.target.value });
    }

    handleKeyPress = event => {
        if (event.key === 'Enter') {
            this.searchMovie();
        }
    }

    searchMovie = () => {
        this.props.searchMovie(this.state.movieQuery);
    }

    render() {
        return (
            <StyledSearch>
                <div className='search'>
                    <input
                        onChange={this.updateMovieQuery}
                        placeholder='Search for Movies'
                        onKeyPress={this.handleKeyPress}
                        className='search'>
                    </input>
                    <button className='button-search' onClick={this.searchMovie}>Search</button>
                </div>
            </StyledSearch>
        )
    }
}

export default Search;

const StyledSearch = styled.div`
    .search {
        text-align: center;
        font-size: 16px;
        padding: 8px;
        font-family: 'Economica', sans-serif;
    }
`;