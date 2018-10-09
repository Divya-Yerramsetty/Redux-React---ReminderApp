import React, {Component} from 'react'
import PropTypes from 'prop-types'

class SampleCard extends Component{
    
    constructor(){
        super()
        this.state = {
            enterText : " hey"
        };
    }

    
    handleChange(event) {
        console.log(event.target.value)
        this.setState(
            {enterText: event.target.enterText}
        );
      }

    render(){
        return(
            <div className = "reminder-card">
                <h4 align = "center" className = "card-title"> {this.props.cardHeading} 
                <div className= "card-image">
                        <img src = {this.props.cardImage} alt ="pic" height = "50px" width = "50px" align="left" />
                </div>
                </h4>
                <textarea className="card-content" rows="6" cols="30" value = {this.props.cardContent} onChange= {event => this.handleChange(event)}/>
                {
              this.props.isAddedToCart ?
              <div className="product-action">
                  <button onClick={()=>{ this.props.handleDeleteToSample(this.props.cardId) }}  className="delete" type="button"> Forget </button>
              </div> :
              <div className="product-action">
                  <button onClick={()=>{ this.props.handleAddToSample(this.props.cardId) }}  className="added" type="button"> Add to Remind </button>
              </div>  
            }
            </div>
        )
    }
}

SampleCard.propTypes = {
    cardHeading: PropTypes.string,
    cardContent: PropTypes.string,
    cardImage: PropTypes.string
}

SampleCard.defaultProps = {
    cardHeading: "Remind Me",
    cardContent: "Hey write something",
    cardImage: "https://visualpharm.com/assets/475/Thinking%20Male-595b40b85ba036ed117dac37.svg"
}

export default SampleCard