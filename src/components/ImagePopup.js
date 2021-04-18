export default function ImagePopup({ card, onClose }) {
  return (
    <section className={card.link ? `popup popup-show-card popup_opened` : `popup popup-show-card`}
      onClick={onClose}>
      <div className="popup__body popup__body-card">
        <button className="popup__close button-hover" type="button" onClick={onClose}></button>
        <img className="popup__img" src={card.link} alt={card.name} />
        <h2 className="popup__name">{card.name}</h2>
      </div>
    </section>
  )
}