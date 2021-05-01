import React from 'react';
// import { useEffect, useState } from 'react';
import Card from './Card';
// import { api } from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick, cards, onCardLike, onCardDelete }) {

  // const [cards, setCards] = useState([]);
  const currentUser = React.useContext(CurrentUserContext);
  // const [like, setLike] = useState(false);
  // const [newCards, setNewCards] = useState([]);

  // useEffect(() => {
  //   api.getCards()
  //     .then((res) => {
  //       const data = res.map((item) => ({
  //         id: item._id,
  //         link: item.link,
  //         name: item.name,
  //         likes: item.likes,
  //         owner: item.owner
  //       }));
  //       setCards(data)
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }, [like, newCards])

  // function handleCardLike(likes, id) {
  //   const isLiked = likes.some((like) => like._id === currentUser._id);

  //   if (!isLiked) {
  //     setLike(false)
  //     api.likeCard(id)
  //       .then((newCard) => {
  //         setCards((state) => state.map((c) => c._id === id ? newCard : c));
  //       })
  //       .catch((err) => {
  //         console.log(err)
  //       })
  //       .finally(() => {
  //         setLike(true)
  //       })
  //   } else {
  //     setLike(true)
  //     api.deleteLikeCard(id)
  //       .then((newCard) => {
  //         setCards((state) => state.map((c) => c._id === id ? newCard : c));
  //       })
  //       .catch((err) => {
  //         console.log(err)
  //       })
  //       .finally(() => {
  //         setLike(false)
  //       })
  //   }
  // }

  // function handleCardDelete(cardId) {
  //   api.deleteCard(cardId)
  //     .then(() => {
  //       setNewCards(cards.filter((c) => c._id !== cardId))
  //       setCards(newCards)
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
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
            // console.log(card)
            return <Card
              key={card.id}
              {...card}
              handleCardClick={onCardClick}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
            />
          })}
        </ul>
      </section>
    </main >
  )
}