import { useEffect, useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
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

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setSelectedCard(false)
  }

  const [selectedCard, setSelectedCard] = useState({});
  const handleCardClick = (obj) => {
    return setSelectedCard(obj.target.currentSrc)
  }

  return (
    <div className="root">
      <Header />
      <Main
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onCardClick={handleCardClick}
      >
      </Main>
      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />

      <PopupWithForm name="update-avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <input id="card-link-avatar" className="popup__input popup__input_type_img-links" type="url" name="description"
          placeholder="Ссылка на картинку" required />
        <span className="card-link-avatar-error"></span>
        <button className="popup__form-btn" type="submit">Сохранить</button>
      </PopupWithForm>

      <PopupWithForm name="edit" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <input required id="user-input" className="popup__input popup__input_type_name" type="text" name="user-name"
          placeholder="Введите имя" minLength="2" maxLength="40" />
        <span className=" user-input-error"></span>

        <input required className="popup__input popup__input_type_work" id="work-input" type="text" name="description"
          placeholder="Чем вы занимаетесь?" minLength="2" maxLength="200" />
        <span className=" work-input-error"></span>
        <button className="popup__form-btn popup__form-btn_a" type="submit">Сохранить</button>
      </PopupWithForm>

      <PopupWithForm name="add-card" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <input id="card-name-input" className="popup__input popup__input_type_card-name" type="text" name="user-name"
          placeholder="Название" required minLength="2" maxLength="200" />
        <span className=" card-name-input-error"></span>
        <input id="card-link-input" className="popup__input popup__input_type_img-links" type="url" name="description"
          placeholder="Ссылка на картинку" required />
        <span className=" card-link-input-error"></span>
        <button className="popup__form-btn popup__form-add-btn" type="submit">Сохранить</button>
      </PopupWithForm>
      <Footer />
    </div >
  );
}

export default App;
