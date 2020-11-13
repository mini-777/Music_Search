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
    subtitle:""
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
  
  getTest = async () => {
    const search = this.state.value;
    const options = {
      method: 'GET',
      url: 'https://shazam.p.rapidapi.com/search',
      params: {term: search, locale: 'en-US', offset: '0', limit: '5'},
      headers: {
        'x-rapidapi-key': '424ced4acemsh23df6f0208aa7cap13e211jsn792b6f9f6e00',
        'x-rapidapi-host': 'shazam.p.rapidapi.com'
      }
    };
    if (search === "") {
      this.setState({movies: [], isLoading: false})
    }else{
    axios.request(options).then((response) => {
      this.setState({movies: response.data.tracks.hits, isLoading: false});
      console.log(this.state.movies);
    }).catch((error) => {
      console.error(error);
    });
  }
  };

  componentDidMount() {
    this.getTest();
  };

  handleChange = (e : any) => {
    this.setState({value: e.target.value});
  };

  handleSubmit = (e : any) => {
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
                  {movies.map(movie => (<SearchMusic key={movie.track.key} url={movie.track.url} images={movie.track.images.coverart} title={movie.track.title} subtitle={movie.track.subtitle} me={this} />))}
                </ul>
                <Modal isOpen={this.state.isModalOpen} close={this.closeModal} titles={this.state.title} subtitles={this.state.subtitle} images={this.state.image} />
              </div>
          
          </form>)
      }
    </section>);
  }
}

export default Search;