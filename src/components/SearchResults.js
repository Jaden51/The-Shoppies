import React, { Component } from 'react';
import MovieCard from './MovieCard';
import styled from 'styled-components';

class SearchResults extends Component {
    state = { nominations: [] }

    addNominationBtn = searches => {
        searches.forEach(function (element) {
            element.Nominated = false;
        })
    }

    nominations = search => {
        this.setState({ nominations: [...this.state.nominations, search] },
            () => {
                this.props.callBack(this.state.nominations);
            }
        )
    }

    render() {
        const { searches } = this.props;

        if (!(typeof searches === 'string' || searches instanceof String)) {
            this.addNominationBtn(searches);
        }

        return (
            <StyledSearchResults>
                <div className='col-1-2-left'>
                    <h2 className='title'>Search Results</h2>
                    {typeof searches === 'string' || searches instanceof String ? (
                        <div>{searches}</div>
                    ) : (
                            <div>
                                {
                                    searches.map(search => {
                                        return (
                                            <div>
                                                <MovieCard
                                                    key={searches.imdbID}
                                                    search={search}
                                                    nominations={this.state.nominations}
                                                    callBack={this.nominations} />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    }
                </div>
            </StyledSearchResults>
        )
    }
}

export default SearchResults;

const StyledSearchResults = styled.div`
    text-align: center;

    .title {
        text-align: center;
    }
`;