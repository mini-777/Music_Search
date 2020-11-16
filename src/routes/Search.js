import React from 'react';
import axios from 'axios';
import SearchMusic from '../components/SearchMusic';
import "./Home.css";
import Modal from '../components/Modal/Modal';
import PageNum from '../components/pageNum';
import sample from './sample.json';
class Search extends React.Component {
  state = {
    isLoading: false,
    movies: [],
    value: "",
    name: "",
    isModalOpen: false,
    image:"",
    title:"",
    subtitle:"",
    i: 0,
    j: 5,
    index: 0,
    showPageNum: false
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
    // for(var i=0;i<=20;i+=5){
    // var options = {
    //   method: 'GET',
    //   url: 'https://shazam.p.rapidapi.com/search',
    //   params: {term: search, locale: 'en-US', offset: i, limit: '5'},
    //   headers: {
    //     'x-rapidapi-key': 'd9b1070366msh0eb8db71f2246a7p18ddf4jsnf4e9c00c4292',
    //     'x-rapidapi-host': 'shazam.p.rapidapi.com'
    //   }
    // };
    // if (search === "") {
    //   this.setState({movies: [], isLoading: false})
    // }else if(this.state.isModalOpen == false){
    // axios.request(options).then((response) => {
    //   this.setState({movies: this.state.movies.concat(response.data.tracks.hits), isLoading: false});
    //   console.log(response.data);
    // }).catch((error) => {
    //   console.error(error);
    // });
  // }
// }
    this.setState({movies: sample.tracks.hits});
  };
 
  setPage = (pageNum) => {
    this.setState({i:pageNum, j:pageNum+5});
  }
  componentDidMount = () => {
    const { history, location } = this.props;
    if (location.state) {
      this.getTest();
    }
    
  };

  handleChange = (e) => {
    this.setState({value: e.target.value});
  };

  handleSubmit = (e) => {
    this.setState({movies: [], showPageNum:true})
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
                  
                  {this.state.showPageNum ? <PageNum me={this} /> : null}
                  
              
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