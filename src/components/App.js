import { useEffect, useState } from 'react';
// import { Header } from './Header';
// import { Main } from './Main';
// import { Footer } from './Footer';
// import { PopupWithForm } from './PopupWithForm';
// import { api } from '../utils/api';
// import { Card } from './Card';
// import { ImagePopup } from './ImagePopup';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import { api } from '../utils/api';
import Card from './Card';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const handleEditAvatarClick = () => {
    return setIsEditAvatarPopupOpen(true);
  }

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const handleEditProfileClick = () => {
    return setIsEditProfilePopupOpen(true)
  }

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const handleAddPlaceClick = () => {
    return setIsAddPlacePopupOpen(true)
  }



  const [userName, setUserName] = useState([]);
  /*getUserInfo */
  useEffect(() => {
    api.getUserInfo()
      .then((res) => {
        setUserName(res.name)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const [userDescription, setUserDescription] = useState([]);
  /*getUserInfo */
  useEffect(() => {
    api.getUserInfo()
      .then((res) => {
        setUserDescription(res.about)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const [userAvatar, setUserAvatar] = useState([]);
  useEffect(() => {
    api.getUserInfo()
      .then((res) => {
        setUserAvatar(res.avatar)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const [cards, setCards] = useState([]);
  useEffect(() => {
    api.getCard()
      .then((res) => {
        const data = res.map((item) => ({
          id: item._id,
          link: item.link,
          name: item.name,
          like: item.likes
        }));
        setCards(data)
      })
  })

  const [selectedCard, setSelectedCard] = useState('');
  const handleCardClick = (link) => {
    // console.log(link)
    return setSelectedCard(link)
  }

  return (
    <div className="root">
      <Header />
      <Main
        name={userName}
        description={userDescription}
        avatar={userAvatar}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
      >{cards.map(card => {
        return <Card key={card.id} {...card} handleCardClick={() => {
          handleCardClick(card.link)

        }} ></Card>
      })}</Main>


      <ImagePopup
        card={selectedCard}
        // active={false}
        setActive={setSelectedCard} />

      <PopupWithForm name="update-avatar" title="Обновить аватар" active={isEditAvatarPopupOpen} setActive={setIsEditAvatarPopupOpen}>
        <input id="card-link-avatar" className="popup__input popup__input_type_img-links" type="url" name="description"
          placeholder="Ссылка на картинку" required />
        <span className="card-link-avatar-error"></span>
        <button className="popup__form-btn" type="submit">Сохранить</button>
      </PopupWithForm>

      <PopupWithForm name="edit" title="Редактировать профиль" active={isEditProfilePopupOpen} setActive={setIsEditProfilePopupOpen}>
        <input required id="user-input" className="popup__input popup__input_type_name" type="text" name="user-name"
          placeholder="Введите имя" minLength="2" maxLength="40" />
        <span className=" user-input-error"></span>

        <input required className="popup__input popup__input_type_work" id="work-input" type="text" name="description"
          placeholder="Чем вы занимаетесь?" minLength="2" maxLength="200" />
        <span className=" work-input-error"></span>
        <button className="popup__form-btn popup__form-btn_a" type="submit">Сохранить</button>
      </PopupWithForm>

      <PopupWithForm name="add-card" title="Новое место" active={isAddPlacePopupOpen} setActive={setIsAddPlacePopupOpen}>
        <input id="card-name-input" className="popup__input popup__input_type_card-name" type="text" name="user-name"
          placeholder="Название" required minLength="2" maxLength="200" />
        <span className=" card-name-input-error"></span>
        <input id="card-link-input" className="popup__input popup__input_type_img-links" type="url" name="description"
          placeholder="Ссылка на картинку" required />
        <span className=" card-link-input-error"></span>
        <button className="popup__form-btn popup__form-add-btn" type="submit">Сохранить</button>
      </PopupWithForm>
      <Footer />

      {/* <template id="card-template">
        <li className="element__list">
          <button className="element__trash button-hover"></button>
          <img className="element__images" src="#" alt="#" />
          <div className="element__description">
            <h3 className="element__title"></h3>
            <div className="element__support">
              <button className="element__like button-hover" type="button"></button>
              <span className="element__counter"></span>
            </div>

          </div>
        </li>
      </template> */}

      {/* <section className="popup popup-show-card ">
        <div className="popup__body popup__body-card">
          <button className="popup__close button-hover" type="button"></button>
          <img className="popup__img" src="#" alt="#" />
          <h2 className="popup__name"></h2>
        </div>
      </section> */}

      <section className="popup popup-delite-card">
        <div className="popup__body">
          <button className="popup__close button-hover" type="button"></button>
          <h2 className="popup__title">Вы уверены?</h2>
          <form className="popup__form popup__form-delite-card" action="" name="popup-delite" noValidate>
            <button className="popup__form-btn popup-delite-card-dnt" type="submit">Да</button>
          </form>
        </div>
      </section>
    </div >
  );
}

export default App;
