export const Card = ({ link, name, like, handleCardClick }) => {
  return (
    <li className="element__list">
      {/* <button className="element__trash button-hover"></button> */}
      <img className="element__images" src={link} alt="#" onClick={handleCardClick} />
      <div className="element__description">
        <h3 className="element__title">{name}</h3>
        <div className="element__support">
          <button className="element__like button-hover" type="button"></button>
          <span className="element__counter">{like.length}</span>
        </div>
      </div>
    </li>
  )
}