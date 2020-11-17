import React from 'react';
import "./Search.css";

class SearchBar extends React.Component {
    state = {
        value: ''
    };

    handleChange = (e) => {
        this.setState({value: e.target.value});
    };

    handleSubmit = (e) => {
        e.preventDefault();
        window.location.assign("/#/search");
    };

    render() {
        return (
            <section className="container">
                {

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

                            </div>

                        </form>

                }
            </section>
        );
    }
}

export default SearchBar;