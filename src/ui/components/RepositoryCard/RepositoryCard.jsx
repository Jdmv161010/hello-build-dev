import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { useState } from "react";
import "./RepositoryCard.scss";

const RepositoryCard = ({
  id,
  name,
  privacy,
  url,
  description,
  onFavoriteClick,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  function onClick(e, id) {
    e.preventDefault();
    setIsFavorite((prev) => !prev);
    onFavoriteClick(id);
  }

  return (
    <main
      className={`repositoryCard ${isFavorite && "repositoryCard__selected"}`}
    >
      <section className="repositoryCard__header">
        <button
          className="repositoryCard__favorite"
          type="button"
          onClick={(e) => onClick(e, id)}
        >
          {isFavorite ? <Favorite /> : <FavoriteBorder />}
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

export default RepositoryCard;
