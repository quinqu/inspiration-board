import React from 'react';
import PropTypes from 'prop-types';
import emojiDictionary from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {
  const cardContents = () => {
      if(props.emoji && props.text){
        return (<p  className='card__content card__content-text card__content-emoji'>
          {props.text} {emojiDictionary.getUnicode(props.emoji)}
          </p>);
      }else if(props.text){
        return (<p className='card__content card__content-text'>{props.text} </p>);
      }else{
        return ((<p  className='card__content card__content-emoji'>{emojiDictionary.getUnicode(props.emoji)}</p>))
      }
    }

  const deleteCardCallback = (event) => {
    event.preventDefault();
    props.deleteCard(props.id);
  }

  return (
    <div className="card" id={props.id} onClick={deleteCardCallback}>
      {cardContents()}
      <input type='button' className='card__delete' value='delete' />
    </div>
  )
}

Card.propTypes = {
  text: PropTypes.string,
  emoji:PropTypes.string,
  deleteCard: PropTypes.func.isRequired
};

export default Card;
