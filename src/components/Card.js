import React from 'react'
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function Card({ card, handleCardClick, onCardLike, onCardDelete }) {
  const currentUser = React.useContext(CurrentUserContext);

  const isLiked = (card.likes.some((like) => like._id === currentUser._id));
  const cardLikeButtonClassName = isLiked ? `element__like button-hover element__like_active` : `element__like button-hover`;

  const isOwn = card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = isOwn ? `element__trash_visible button-hover` : `element__trash_hidden`;

  const link = card.link;
  const name = card.name;
  function handleClick() {
    handleCardClick({
      link,
      name
    });
  }

  function handleLikeClick() {
    onCardLike(card)
  }

  function handleDeleteClick() {
    onCardDelete(card._id)
  }

  return (
    <li className="element__list">
      <button className={cardDeleteButtonClassName} onClick={handleDeleteClick}></button>
      <img className="element__images" src={card.link} alt={card.name} onClick={handleClick} />
      <div className="element__description">
        <h3 className="element__title">{card.name}</h3>
        <div className="element__support">
          <button className={cardLikeButtonClassName} onClick={handleLikeClick} type="button"></button>
          <span className="element__counter">{card.likes.length}</span>
        </div>
      </div>
    </li>
  )
}