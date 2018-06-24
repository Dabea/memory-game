import React from 'react';
import "./Card.css";

class Card extends React.Component {
    render(){
        return(
            <div onClick={()  =>this.props.handleClick(this.props.cardCount)} className={` sprite-${this.props.cardCount} card-${this.props.color} card-container `} >
               
            </div>
        )
    }
}

export default Card;