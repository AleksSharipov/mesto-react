import React from 'react';
import Card from './Card';
import { api } from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick, cards, onCardLike, onCardDelete }) {

  const currentUser = React.useContext(CurrentUserContext);

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
              card={card}
              handleCardClick={onCardClick}
              onCardDelete={onCardDelete}
              onCardLike={onCardLike}
            />
          })}
        </ul>
      </section>
    </main >
  )
}