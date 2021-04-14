export const ImagePopup = ({ card, active, setActive }) => {
  return (
    <section className={card ? `popup popup-show-card popup_opened` : `popup popup-show-card`} onClick={() => { setActive(false) }}>
      <div className="popup__body popup__body-card">
        <button className="popup__close button-hover" type="button" onClick={() => { setActive(false) }}></button>
        <img className="popup__img" src={card.toString()} alt="#" />
        {/* <h2 className="popup__name">{card}</h2> */}
      </div>
    </section>
  )
}