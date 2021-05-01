export default function PopupWithForm({ title, name, children, isOpen, onClose, onSubmit }) {
  return (
    <section className={isOpen ? `popup popup-${name} popup_opened` : `popup popup-${name}`} onClick={onClose}>
      <div className="popup__body" onClick={(e) => {
        e.stopPropagation();
      }}>
        <button className="popup__close button-hover" type="button" onClick={onClose}></button>
        <h2 className="popup__title">{title}</h2>
        <form onSubmit={onSubmit} className={`popup__form popup__form-${name}`} action="" name="popup-refactoring" noValidate>
          {children}
        </form>
      </div>
    </section >
  )
}

/**
 * onClick={() => { setIsOpen(false) }
 */