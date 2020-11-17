import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  state = {
    whatIsTitle: '노래의 제목은 :',
    whoIsSinger: '노래의 가수는 :'
  }
    componentDidMount() {
        const {location, history} = this.props;
        if (location.state === undefined) {
            history.push("/");
        }
    }
    render() {
        const {location} = this.props;
        if (location.state) {
            return (
                <div className="frame">
                    <p>{this.state.whatIsTitle} {location.state.title}</p>
                    <p>{this.state.whoIsSinger} {location.state.subtitle}</p>
                    <a href={location.state.url}><img width="400px" height="400px" src={location.state.images}/></a>
                </div>

            );
        } else {
            return null;
        }
    }
}
export default Detail;
