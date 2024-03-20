import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";

export default class DestinationData extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="des-text">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>

        <Link to="/service" className="image">
          <img alt="desc-img" src={this.props.img1} />
          <img alt="desc-img" src={this.props.img2} />
          {/* <img alt='desc-img' src={img3}/>
            <img alt='desc-img' src={img4}/> */}
        </Link>
      </div>
    );
  }
}
