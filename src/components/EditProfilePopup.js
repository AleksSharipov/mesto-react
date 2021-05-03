import React from 'react';
import { useEffect, useState } from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {

  const currentUser = React.useContext(CurrentUserContext);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  function handleChangeName(e) {
    setName(e.target.value);
  }
  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm name="edit" title="Редактировать профиль" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
      <input required id="user-input" className="popup__input popup__input_type_name" type="text" name="user-name"
        placeholder="Введите имя" minLength="2" maxLength="40" value={name || ''} onChange={handleChangeName} />
      <span className=" user-input-error"></span>

      <input required className="popup__input popup__input_type_work" id="work-input" type="text" name="description"
        placeholder="Чем вы занимаетесь?" minLength="2" maxLength="200" value={description || ''} onChange={handleChangeDescription} />
      <span className=" work-input-error"></span>
      <button className="popup__form-btn popup__form-btn_a" type="submit">Сохранить</button>
    </PopupWithForm>
  )
}