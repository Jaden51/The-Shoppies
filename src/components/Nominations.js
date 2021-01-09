import React, { Component } from 'react';
import styled from 'styled-components';

class Nominations extends Component {
    state = { updatedNoms: [] }

    removeNomination = title => {
        for (var i = 0; i < this.props.nominations.length; i++) {
            if (this.props.nominations[i].Title === title) {
                this.props.nominations.splice(i, 1);
            }
        }

        this.setState({ updatedNoms: this.props.nominations });
    }

    render() {
        const { nominations } = this.props;
        return (
            <StyledNominations>
                <div className='col-1-2-right'>
                    <h2 className='title'>Your Nominations</h2>
                    {nominations.length >= 5 ? (
                        <div className='alert'>
                            <strong>You have 5 Nominations!</strong>
                        </div>
                    ) : (
                            <div></div>
                        )}
                    {
                        nominations.map(nomination => {
                            return (
                                <div key={nomination.imdbID} className='movie'>
                                    <div>
                                        <h3 className='movie-text'>
                                            {nomination.Title} - {nomination.Year}</h3>
                                        <img
                                            src={nomination.Poster}
                                            alt='movie'
                                            className='movie-image'>
                                        </img>
                                    </div>
                                    <div>
                                        <button
                                            className='button'
                                            onClick={() => this.removeNomination(nomination.Title)}
                                        >Remove</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </StyledNominations>
        )
    }
}

export default Nominations;

const StyledNominations = styled.div`
    text-align: center;

    .title {
        text-align: center;
    }
    .alert {
        padding: 20px;
        background-color: #f44336;
        color: white;
    }  
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