import React from "react";
import "./Detail.css";
class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return (<div className="frame">
        <p>노래의 제목은 : {location.state.title}</p>
        <p>노래의 가수는 : {location.state.subtitle}</p>
        <a href={location.state.url}><img width="400px" height="400px" src={location.state.images}/></a>
      </div>
      
      );
    } else {
      return null;
    }
  }
}
export default Detail;
