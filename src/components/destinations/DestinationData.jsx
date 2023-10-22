
import React, { Component } from 'react'
 

export default class DestinationData extends Component {
  render() {
    return (
        <div className={this.props.className}>

        <div className='des-text'>
            <h2>{this.props.heading}</h2>
            <p>{this.props.text}</p>
        </div>

        <div className='image'>
            <img alt='desc-img' src={this.props.img1}/>
            <img alt='desc-img' src={this.props.img2}/>
            {/* <img alt='desc-img' src={img3}/>
            <img alt='desc-img' src={img4}/> */}
        </div>

    </div>
    )
  }
}
