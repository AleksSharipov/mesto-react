export const PopupWithForm = ({ title, name, children, active, setActive }) => {
  return (
    <section className={active ? `popup popup-${name} popup_opened` : `popup popup-${name}`} onClick={() => { setActive(false) }}>
      <div className="popup__body" onClick={(e) => {
        e.stopPropagation();
      }}>
        <button className="popup__close button-hover" type="button" onClick={() => { setActive(false) }}></button>
        <h2 className="popup__title">{title}</h2>
        <form className={`popup__form popup__form-${name}`} action="" name="popup-refactoring" noValidate>
          {children}
        </form>
      </div>
    </section >
  )
}