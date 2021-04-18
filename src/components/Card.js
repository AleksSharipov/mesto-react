export default function Card({ link, name, likes, handleCardClick }) {
  function handleClick() {
    handleCardClick({
      link,
      name
    });
  }

  return (
    <li className="element__list">
      {/* <button className="element__trash button-hover"></button> */}
      <img className="element__images" src={link} alt={name} onClick={handleClick} />
      <div className="element__description">
        <h3 className="element__title">{name}</h3>
        <div className="element__support">
          <button className="element__like button-hover" type="button"></button>
          <span className="element__counter">{likes.length}</span>
        </div>
      </div>
    </li>
  )
}