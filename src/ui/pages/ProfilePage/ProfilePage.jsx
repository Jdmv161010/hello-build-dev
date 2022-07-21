import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRepositories, setAuth } from "store/actions";
import RepositoryCard from "ui/components/RepositoryCard/RepositoryCard";
import "./ProfilePage.scss";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const { repositories } = useSelector((state) => state.app);

  const [favRepos, setFavRepos] = useState([]);
  const [sessionData, setSessionData] = useState(
    JSON.parse(sessionStorage.getItem("isAuthenticated"))
  );

  useEffect(() => {
    dispatch(setAuth(sessionData));
    dispatch(getRepositories());
  }, []);

  function onSelectRepo(repoId) {
    setFavRepos((prev) => [...prev, repoId]);
  }

  return (
    <main className="profilePage">
      <div className="profilePage__container">
        {repositories?.map(
          ({ id, name, private: privacy, html_url, description }) => (
            <RepositoryCard
              key={id}
              id={String(id)}
              name={name}
              privacy={privacy}
              url={html_url}
              description={description}
              onFavoriteClick={onSelectRepo}
            />
          )
        )}
      </div>
    </main>
  );
};

export default ProfilePage;
