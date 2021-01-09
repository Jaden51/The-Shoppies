import React, { Component } from 'react';
import styled from 'styled-components';

class MovieCard extends Component {
    state = {
        search: this.props.search
    }

    nomination() {
        this.setState({ search: { ...this.state.search, Nominated: true } },
            () => {
                this.props.callBack(this.state.search)
            }
        )
    }

    disableBtn = () => {
        for (var i = 0; i < this.props.nominations.length; i++) {
            if (this.props.nominations[i].Title === this.state.search.Title) {
                return true;
            }
        }
        return false;
    }

    render() {
        const { imdbID, Title, Year, Poster } = this.state.search;

        return (
            <StyledMovieCard>
                <div key={imdbID} className='movie'>
                    <div>
                        <h3 className='movie-text'>{Title} - {Year}</h3>
                        <img
                            src={Poster}
                            alt='movie'
                            className='movie-image'>
                        </img>
                    </div>
                    <div>
                        <button
                            disabled={this.disableBtn()}
                            onClick={() => this.nomination()}
                        >Nominate</button>
                    </div>
                </div>
            </StyledMovieCard>
        )
    }
}

export default MovieCard;

const StyledMovieCard = styled.div`
    .movie {
        width: auto;
        height: auto;
        position: relative;
        display: inline-block;
        margin: 20px;
        cursor: pointer;
    }
    .movie-image {
        width: 150px;
        height: 222.5px;
    }
    .movie-text {
        position: absolute;
        width: 150px;
        bottom: 0px;
        background-color: black;
        color: white;
        padding-top: 5px;
        padding-bottom: 5px;
    }
`;