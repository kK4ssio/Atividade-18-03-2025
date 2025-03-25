import { api } from "./services/api";
import {
  MoonStars,
  GithubLogo,
  InstagramLogo,
  YoutubeLogo,
  LinkedinLogo,
  User,
} from "@phosphor-icons/react";
import { ButtonLink } from "./components/button-link";
import { useEffect, useState } from "react";

export function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    async function getUserData() {
      try {
        const response = await api.get("/users/kK4ssio");
        setUser(response.data);
      } catch (error) {
        console.log("erro ao buscar usuario ", error);
      }
    }

    getUserData();
  }, []);

  return (
    <div className="container">
      <div className="profile">
        <img
          src={user.avatar_url}
          alt={`imagem do ${user.name}`}
          className="img-profile"
        />
        <p>@{user.login}</p>
      </div>

      <div className="toggle-container">
        <div className="toggle-switch dark">
          <MoonStars size={16} />
        </div>
      </div>

      <div className="links">
        <ButtonLink
          name="Inscreva-se no NLW"
          link="https://www.rocketseat.com.br"
        />
        <ButtonLink
          name="Baixar meu e-book"
          link="https://www.rocketseat.com.br"
        />
        <ButtonLink
          name="Veja meu portfólio"
          link="https://www.rocketseat.com.br"
        />
        <ButtonLink
          name="Conheça o Explorer"
          link="https://www.rocketseat.com.br"
        />
      </div>

      <div className="social-media">
        <a href="github.com" target="_blank">
          <GithubLogo size={24} />
        </a>
        <a href="instagram.com" target="_blank">
          <InstagramLogo size={24} />
        </a>
        <a href="youtube.com" target="_blank">
          <YoutubeLogo size={24} />
        </a>
        <a href="linkedin.com" target="_blank">
          <LinkedinLogo size={24} />
        </a>
      </div>
    </div>
  );
}
