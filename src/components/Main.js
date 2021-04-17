import { useEffect, useState } from 'react';
import Card from './Card';
import { api } from '../utils/api';
import ImagePopup from './ImagePopup';
export default function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {

  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');

  useEffect(() => {
    api.getUserInfo()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])



  const [cards, setCards] = useState([]);
  useEffect(() => {
    api.getCards()
      .then((res) => {
        const data = res.map((item) => ({
          id: item._id,
          link: item.link,
          name: item.name,
          like: item.likes
        }));
        setCards(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])



  return (
    <main>
      <section className="profile">
        <div className="profile__card">
          <div className="profile__redact" onClick={onEditAvatar}>
            <img className="profile__avatar" src={userAvatar} alt="Аватарка" />
          </div>
          <div className="profile__info">
            <div className="profile__name-refactoring">
              <h1 className="profile__title">{userName}</h1>
              <button className="profile__button profile__button_refactoring_avatar button-hover" type="button" onClick={onEditProfile}></button>
            </div>
            <p className="profile__description">{userDescription}</p>
          </div>
        </div>
        <button className="profile__button profile__button_add_card button-hover" type="button" onClick={onAddPlace}></button>
      </section>
      <section className="elements">
        <ul className="element">
          {cards.map(card => {
            return <Card
              key={card.id}
              {...card}
              handleCardClick={onCardClick}
            // handleCardClick={handleCardClick(card.link)} 
            />
          })}
          {/* handleCardClick={() => {
              handleCardClick(card.link)

            } */}
        </ul>
      </section>
    </main >
  )
}

/**
 *
    handleEditAvatarClick
    handleEditProfileClick
    handleAddPlaceClick
 */