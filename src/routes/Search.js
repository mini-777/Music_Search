import React from 'react';
import axios from 'axios';
import SearchMusic from '../components/SearchMusic';
import "./Home.css";
import Modal from '../components/Modal/Modal';

class Search extends React.Component {
  state = {
    isLoading: true,
    movies: [],
    value: "",
    name: "",
    isModalOpen: false,
    image:"",
    title:"",
    subtitle:"",
    i: 0,
    j: 5
  };


  openModal = (images, titles, subtitles) => {
    this.setState({ isModalOpen: true});
    this.setState({ image: images});
    this.setState({ title: titles});
    this.setState({ subtitle: subtitles});
  }
  
  closeModal = () => {
    this.setState({ isModalOpen: false }); 
  }
  
  getTest = () => {
    const search = this.state.value;
    for(var i=0;i<=20;i+=5){
    var options = {
      method: 'GET',
      url: 'https://shazam.p.rapidapi.com/search',
      params: {term: search, locale: 'en-US', offset: i, limit: '5'},
      headers: {
        'x-rapidapi-key': '424ced4acemsh23df6f0208aa7cap13e211jsn792b6f9f6e00',
        'x-rapidapi-host': 'shazam.p.rapidapi.com'
      }
    };
    if (search === "") {
      this.setState({movies: [], isLoading: false})
    }else if(this.state.isModalOpen == false){
    axios.request(options).then((response) => {
      this.setState({movies: this.state.movies.concat(response.data.tracks.hits), isLoading: false});
      console.log(this.state.movies[0][0]);
      console.log(this.state.movies);
    }).catch((error) => {
      console.error(error);
    });
  }
}
  };

  setPage = (pageNum) => {
    this.setState({i:pageNum, j:pageNum+5});
  }
  componentDidMount = () => {
    this.getTest();
  };

  handleChange = (e) => {
    this.setState({value: e.target.value});
  };

  handleSubmit = (e) => {
    this.setState({movies: []})
    e.preventDefault();
    this.getTest();
  };

  render() {
    const {movies, isLoading, name} = this.state;

    return (<section className="container">
      {
        isLoading
          ? (<div className="loader">
            <span className="loader__text">Loading..{this.state.name}</span>
          </div>)
          : (<form onSubmit={this.handleSubmit}>
            <div>
              <div className="input_div">
                <h1>음악 검색</h1>
                
                <input className="input_search" type="text" value={this.state.value} onChange={this.handleChange} placeholder="음악을 검색해 보세요."/>
              </div>

                <ul className="list">
                  {movies.slice(this.state.i, this.state.j).map((movies) => (<SearchMusic key={movies.track.key} id={movies.track.key} url={movies.track.url} images={movies.track.images.coverart} title={movies.track.title} subtitle={movies.track.subtitle} me={this} />))}
                  <div className="page">
              
                  <a href="javascript:;" onClick={() => this.setPage(0)} >1</a> | <a href="#" onClick={() => this.setPage(5)}>2</a> | <a href="#" onClick={() => this.setPage(10)}>3</a> | <a href="#" onClick={() => this.setPage(15)}>4</a> | <a href="#" onClick={() => this.setPage(20)}>5</a>  
                    
                </div>
                </ul>
                
                </div>
                
                <Modal isOpen={this.state.isModalOpen} close={this.closeModal} titles={this.state.title} subtitles={this.state.subtitle} images={this.state.image} />
                </form>
                
              
              
          )
      }
    </section>);
  }
}

export default Search;