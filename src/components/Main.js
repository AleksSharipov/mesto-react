import React from 'react';
import Card from './Card';
import { api } from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick, cards, onCardLike, onCardDelete }) {

  const currentUser = React.useContext(CurrentUserContext);

  // function handleCardLike(card) {
  //   // console.log(likes)
  //   // const isLiked = likes.some((like) => like._id === currentUser._id);
  //   const isLiked = card.likes.some(i => i._id === currentUser._id);
  //   if (!isLiked) {
  //     api.likeCard(card._id)
  //       .then((newCard) => {
  //         console.log(card._id)
  //         const newCards = cards.map((c) => c._id === card.id ? newCard : c);
  //         // console.log(newCards)
  //         setCards(newCards)
  //       })
  //       .catch((err) => {
  //         console.log(err)
  //       })
  //   } else {
  //     api.deleteLikeCard(card.id)
  //       .then((newCard) => {
  //         // setCards((state) => state.map((c) => c._id === id ? newCard : c));
  //       })
  //       .catch((err) => {
  //         console.log(err)
  //       })
  //   }
  // }

  return (
    <main>
      <section className="profile">
        <div className="profile__card">
          <div className="profile__redact" onClick={onEditAvatar}>
            <img className="profile__avatar" src={currentUser.avatar} alt="Аватарка" />
          </div>
          <div className="profile__info">
            <div className="profile__name-refactoring">
              <h1 className="profile__title">{currentUser.name}</h1>
              <button className="profile__button profile__button_refactoring_avatar button-hover" type="button" onClick={onEditProfile}></button>
            </div>
            <p className="profile__description">{currentUser.about}</p>
          </div>
        </div>
        <button className="profile__button profile__button_add_card button-hover" type="button" onClick={onAddPlace}></button>
      </section>
      <section className="elements">
        <ul className="element">
          {cards.map((card) => {
            return <Card
              key={card.id}
              // {...card}
              card={card}
              handleCardClick={onCardClick}
              // onCardLike={onCardLike}
              onCardDelete={onCardDelete}
              onCardLike={onCardLike}
            />
          })}
        </ul>
      </section>
    </main >
  )
}