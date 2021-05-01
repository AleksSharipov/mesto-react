import React from 'react';
import { useEffect, useState } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';
export default function AddPlacePopup({ isOpen, onClose, onAddPlace }) {

  const currentUser = React.useContext(CurrentUserContext);

  const [newCardName, setNewCardName] = useState('');
  const [newCardLink, setNewCardLink] = useState('');

  function handleNewCardName(e) {
    setNewCardName(e.target.value);
  }
  function handleNewCardLink(e) {
    setNewCardLink(e.target.value);
  }

  useEffect(() => {
    setNewCardName(currentUser.name);
    setNewCardLink(currentUser.about);
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({
      link: newCardLink,
      name: newCardName
    })
  }

  return (
    <PopupWithForm name="add-card" title="Новое место" isOpen={isOpen} onClose={onClose}>
      <input id="card-name-input" className="popup__input popup__input_type_card-name" type="text" name="user-name"
        placeholder="Название" required minLength="2" maxLength="200" onChange={handleNewCardName} />
      <span className=" card-name-input-error"></span>
      <input id="card-link-input" className="popup__input popup__input_type_img-links" type="url" name="description"
        placeholder="Ссылка на картинку" onChange={handleNewCardLink} required />
      <span className=" card-link-input-error"></span>
      <button className="popup__form-btn popup__form-add-btn" type="submit" onClick={handleSubmit}>Сохранить</button>
    </PopupWithForm>
  )
}