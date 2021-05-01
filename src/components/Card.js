import React from 'react'
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function Card({ link, name, likes, owner, id, handleCardClick, onCardLike, onCardDelete }) {
  const currentUser = React.useContext(CurrentUserContext);

  const isLiked = (likes.some((like) => like._id === currentUser._id));
  const cardLikeButtonClassName = isLiked ? `element__like button-hover element__like_active` : `element__like button-hover`;

  const isOwn = owner._id === currentUser._id;
  const cardDeleteButtonClassName = isOwn ? `element__trash_visible button-hover` : `element__trash_hidden`;

  function handleClick() {
    handleCardClick({
      link,
      name
    });
  }

  function handleLikeClick() {
    onCardLike(likes, id)
  }

  function handleDeleteClick() {
    onCardDelete(id)
  }

  return (
    <li className="element__list">
      <button className={cardDeleteButtonClassName} onClick={handleDeleteClick}></button>
      <img className="element__images" src={link} alt={name} onClick={handleClick} />
      <div className="element__description">
        <h3 className="element__title">{name}</h3>
        <div className="element__support">
          <button className={cardLikeButtonClassName} onClick={handleLikeClick} type="button"></button>
          <span className="element__counter">{likes.length}</span>
        </div>
      </div>
    </li>
  )
}