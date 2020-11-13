import React from 'react';
import './Modal.scss';
import ReactTransitionGroup from 'react-addons-css-transition-group';
const Modal = ({ isOpen, close, images, titles, subtitles}) => {
    return (
        <React.Fragment>
        {
          isOpen ?
          <ReactTransitionGroup
            transitionName={'Modal-anim'}
            transitionEnterTimeout={200}
            transitionLeaveTimeout={200}
          >
            <div className="Modal-overlay" onClick={close} />
            <div className="Modal">
              <p className="title">{titles}</p>
              <div className="content">
              <img src={images}></img>
                <p>
                {subtitles}
                </p>
              </div>
              <div className="button-wrap">
                <button onClick={close}>Confirm</button>
              </div>
            </div>
          </ReactTransitionGroup>
          :
          <ReactTransitionGroup transitionName={'Modal-anim'} transitionEnterTimeout={200} transitionLeaveTimeout={200} />
}
          </React.Fragment>
      )
//   return (
//     <React.Fragment>
//     {

//     //   isOpen ?
//     //   <React.Fragment>
//     //     <div className="Modal-overlay" onClick={close} />
//     //     <div className="Modal">
//     //       <p className="title"></p>
//     //       <div className="content">
//     //       <img src={images}></img>
//     //         <p>
//     // 		  {subtitles}
//     // 	    </p>
//     //       </div>
//     //       <div className="button-wrap">
//     //         <button onClick={close}>Confirm</button>
//     //       </div>
//     //     </div>
//     //   </React.Fragment>
//     //   :
//     //   null
      
// }
// </React.Fragment>
// )
}

export default Modal;