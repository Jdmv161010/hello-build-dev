import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getRepositories,
  saveFavRepositories,
  setLogin,
  setLogout,
} from "store/actions";
import Navbar from "ui/components/Navbar/Navbar";
import RepositoryCard from "ui/components/RepositoryCard/RepositoryCard";
import "./ProfilePage.scss";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { repositories } = useSelector((state) => state.app);
  const [favoriteRepositories, setFavoriteRepositories] = useState([]);

  const sessionAuth = JSON.parse(sessionStorage.getItem("isAuthenticated"));
  const sessionUser = sessionStorage.getItem("user");

  function onSave() {
    dispatch(saveFavRepositories(favoriteRepositories));
  }

  function onLogout() {
    sessionStorage.clear();
    navigate("/auth");
    dispatch(setLogout());
  }

  function onSelectRepo(repositoryId) {
    const duplicatedRepositories = favoriteRepositories.find(
      (repository) => repository === repositoryId
    );

    setFavoriteRepositories((prev) => {
      if (duplicatedRepositories) {
        return prev.filter(
          (repository) => repository !== duplicatedRepositories
        );
      }

      return [...prev, repositoryId];
    });
  }

  useEffect(() => {
    const oldFavoriteRepositories = repositories
      .filter((repository) => repository.isFavorite === true)
      .map(({ id }) => String(id));

    setFavoriteRepositories(oldFavoriteRepositories);
  }, [repositories]);

  useEffect(() => {
    dispatch(setLogin(sessionAuth));
    dispatch(getRepositories());
  }, []);

  return (
    <main className="profilePage">
      <Navbar user={sessionUser} onLogout={onLogout} onSave={onSave} />

      <div className="profilePage__container">
        {repositories?.map(
          ({ description, id, isFavorite, name, privacy, url }) => (
            <RepositoryCard
              key={id}
              description={description}
              id={String(id)}
              isFavorite={isFavorite}
              name={name}
              onFavoriteClick={onSelectRepo}
              privacy={privacy}
              url={url}
            />
          )
        )}
      </div>
    </main>
  );
};

export default ProfilePage;
