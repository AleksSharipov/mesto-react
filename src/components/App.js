import { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { api } from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';


function App() {
  // console.log(CurrentUserContext)
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
    setSelectedCard({})
  }

  const [selectedCard, setSelectedCard] = useState({});
  const handleCardClick = (obj) => {
    return setSelectedCard(obj)
  }

  const [currentUser, setCurrentUser] = useState({});
  // console.log(currentUser)
  useEffect(() => {
    api.getUserInfo()
      .then((res) => {
        setCurrentUser(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  function handleUpdateUser(obj) {
    api.renameUserInfo(obj.name, obj.about)
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        closeAllPopups();
      })
  }

  function handleUpdateAvatar(linkNewAvater) {
    console.log(linkNewAvater.avatar)
    api.setUserAvatar(linkNewAvater.avatar)
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        closeAllPopups();
      })

  }

  const [cards, setCards] = useState([]);
  const [like, setLike] = useState(false);
  const [newCards, setNewCards] = useState([]);

  useEffect(() => {
    api.getCards()
      .then((res) => {
        const data = res.map((item) => ({
          id: item._id,
          link: item.link,
          name: item.name,
          likes: item.likes,
          owner: item.owner
        }));
        setCards(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [like, newCards])

  function handleCardLike(likes, id) {
    const isLiked = likes.some((like) => like._id === currentUser._id);

    if (!isLiked) {
      setLike(false)
      api.likeCard(id)
        .then((newCard) => {
          setCards((state) => state.map((c) => c._id === id ? newCard : c));
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
          setLike(true)
        })
    } else {
      setLike(true)
      api.deleteLikeCard(id)
        .then((newCard) => {
          setCards((state) => state.map((c) => c._id === id ? newCard : c));
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
          setLike(false)
        })
    }
  }

  function handleCardDelete(cardId) {
    api.deleteCard(cardId)
      .then(() => {
        setNewCards(cards.filter((c) => c._id !== cardId))
        setCards(newCards)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  function handleAddPlaceSubmit(obj) {
    console.log(obj)
    api.createCard(obj)
      .then((res) => {
        console.log(res)
        setCards([res, ...cards]);
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        closeAllPopups();
      })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="root">
        <Header />
        <Main
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onCardClick={handleCardClick}
          cards={cards}
          onCardDelete={handleCardDelete}
          onCardLike={handleCardLike}
        >
        </Main>
        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
        />

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
        />


        <Footer />
      </div >
    </CurrentUserContext.Provider >

  );
}

export default App;
