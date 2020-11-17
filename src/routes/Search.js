import React from 'react';
import SearchMusic from '../components/SearchMusic';
import "./Search.css";
import sample from './sample.json';

class Search extends React.Component {
    state = {
        isLoading: false,
        movies: [],
        value: "",
        name: "",
        image: "",
        title: "",
        subtitle: "",
        startNum: 0,
        endNum: 5,
    };

    getTest = () => {
        const search = this.state.value;
        this.setState({movies: sample.tracks.hits});
    };

    setPage = (pageNum) => {
        this.setState({
            startNum: pageNum,
            endNum: pageNum + 5
        });
    }
    componentDidMount = () => {
        this.getTest();
    };

    handleChange = (e) => {
        this.setState({value: e.target.value});
    };

    handleSubmit = (e) => {
        this.setState({movies: [], showPageNum: true})
        e.preventDefault();
        this.getTest();
    };

    render() {
        const {movies, isLoading, name} = this.state;
        localStorage.setItem('items', JSON.stringify(movies));
        return (
            <section className="container">
                {
                    isLoading
                        ? (
                            <div className="loader">
                                <span className="loader__text">Loading..{this.state.name}</span>
                            </div>
                        )
                        : (
                            <form onSubmit={this.handleSubmit}>
                                <div>
                                    <div className="input_div">
                                        <h1>음악 검색</h1>

                                        <input
                                            className="input_search"
                                            type="text"
                                            value={this.state.value}
                                            onChange={this.handleChange}
                                            placeholder="음악을 검색해 보세요."/>
                                    </div>

                                    <ul className="list">
                                        {
                                            movies
                                                .slice(this.state.startNum, this.state.endNum)
                                                .map((movies) => (
                                                    <SearchMusic
                                                        key={movies.track.key}
                                                        id={movies.track.key}
                                                        url={movies.track.url}
                                                        images={movies.track.images.coverart}
                                                        title={movies.track.title}
                                                        subtitle={movies.track.subtitle}
                                                        me={this}/>
                                                ))
                                        }

                                        <div className="page">
                                            <a href="javascript:;" onClick={() => this.setPage(0)}>1</a>
                                            |
                                            <a href="#" onClick={() => this.setPage(5)}>2</a>
                                            |
                                            <a href="#" onClick={() => this.setPage(10)}>3</a>
                                            |
                                            <a href="#" onClick={() => this.setPage(15)}>4</a>
                                            |
                                            <a href="#" onClick={() => this.setPage(20)}>5</a>
                                        </div>
                                    </ul>

                                </div>

                            </form>

                        )
                }
            </section>
        );
    }
}

export default Search;