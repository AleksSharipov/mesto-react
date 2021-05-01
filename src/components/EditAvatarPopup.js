import React, { useRef } from 'react';
import PopupWithForm from './PopupWithForm';

export default function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {

  const avatarRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    const avatar = avatarRef.current.value;
    onUpdateAvatar({
      avatar: avatar
    })
  }
  return (
    <PopupWithForm isOpen={isOpen} onClose={onClose} name="update-avatar" title="Обновить аватар" >
      <input id="card-link-avatar" ref={avatarRef} className="popup__input popup__input_type_img-links" type="url" name="description"
        placeholder="Ссылка на картинку" required />
      <span className="card-link-avatar-error"></span>
      <button className="popup__form-btn" type="submit" onClick={handleSubmit}>Сохранить</button>
    </PopupWithForm>
  )
}