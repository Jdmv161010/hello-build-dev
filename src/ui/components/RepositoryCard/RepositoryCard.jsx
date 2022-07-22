import { Favorite, FavoriteBorder } from "@mui/icons-material";
import PropTypes from "prop-types";
import { useState } from "react";
import "./RepositoryCard.scss";

const RepositoryCard = ({
  description,
  id,
  isFavorite,
  name,
  onFavoriteClick,
  privacy,
  url,
}) => {
  const [isNewFavorite, setIsNewFavorite] = useState(isFavorite);

  function onClick(e) {
    e.preventDefault();
    setIsNewFavorite((prev) => !prev);
    onFavoriteClick(id);
  }

  return (
    <main
      className={`repositoryCard ${
        isNewFavorite && "repositoryCard__selected"
      }`}
    >
      <section className="repositoryCard__header">
        <button
          className="repositoryCard__favorite"
          type="button"
          onClick={onClick}
        >
          {isNewFavorite ? <Favorite /> : <FavoriteBorder />}
        </button>
        <span className="repositoryCard__title">{name}</span>
      </section>

      <section className="repositoryCard__body">
        <span>
          <b>Privacy:</b> {privacy ? "Private" : "Public"}
        </span>
        <span className="repositoryCard__label">
          <b>Description:</b> {description || "No description"}
        </span>
      </section>

      <section className="repositoryCard__footer">
        <a href={url} target="_blank">
          View
        </a>
      </section>
    </main>
  );
};

RepositoryCard.propTypes = {
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  onFavoriteClick: PropTypes.func.isRequired,
  privacy: PropTypes.bool.isRequired,
  url: PropTypes.string.isRequired,
};

export default RepositoryCard;
