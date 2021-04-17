export default function ImagePopup({ card, onClose }) {
  return (
    <section className={Object.keys(card).length > 0 ? `popup popup-show-card popup_opened` : `popup popup-show-card`} onClick={onClose}>
      <div className="popup__body popup__body-card">
        <button className="popup__close button-hover" type="button" onClick={onClose}></button>
        <img className="popup__img" src={card.toString()} alt="#" />
        {/* <h2 className="popup__name">{card}</h2> */}
      </div>
    </section>
  )
}