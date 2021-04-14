import { PopupWithForm } from './PopupWithForm';
export default function Main({ onEditProfile, onAddPlace, onEditAvatar, name, avatar, description, children }) {



  return (
    <main>
      <section className="profile">
        <div className="profile__card">
          <div className="profile__redact" onClick={onEditAvatar}>
            <img className="profile__avatar" src={avatar} alt="Аватарка" />
          </div>
          <div className="profile__info">
            <div className="profile__name-refactoring">
              <h1 className="profile__title">{name}</h1>
              <button className="profile__button profile__button_refactoring_avatar button-hover" type="button" onClick={onEditProfile}></button>
            </div>
            <p className="profile__description">{description}</p>
          </div>
        </div>
        <button className="profile__button profile__button_add_card button-hover" type="button" onClick={onAddPlace}></button>
      </section>
      <section className="elements">
        <ul className="element">
          {children}
        </ul>
      </section>
    </main>
  )
}

/**
 *
    handleEditAvatarClick
    handleEditProfileClick
    handleAddPlaceClick
 */