import { useEffect, useState } from "react";
import Footer from "../../common/Footer";

export default function Perfil() {
  const [usuarioLogado, setUsuarioLogado] = useState({
    email: "",
    nome: "",
    senha: "",
  });
  const [disabled, setDisabled] = useState(true);

  function loadUser(id) {
    setUsuarioLogado({
      email: "emanuele@mailsac.com",
      nome: "Emanuele",
      senha: "aaaaa",
    });
  }

  useEffect(() => {
    // const id = localStorage.getItem('id')
    loadUser(1);
  }, []);

  return (
    <div className="container">
      <div className="title">
        <a style={{ display: "flex" }} href="/home">
          <img src="img/home.svg" alt="" />
        </a>
        <h1>Olá, {usuarioLogado.nome}</h1>
        <button className="add" type="button">
          <img src="img/logout.svg" alt="" />
        </button>
      </div>
      <div className="container-white">
        <form action="">
          <div>
            <label htmlFor="email">E-mail</label>
            <input
              className="input"
              name="email"
              type="email"
              defaultValue={usuarioLogado.email}
              onChange={() => setDisabled(false)}
            />
          </div>
          <div>
            <label htmlFor="senha">Senha</label>
            <input
              className="input"
              name="senha"
              type="password"
              defaultValue={usuarioLogado.senha}
              onChange={() => setDisabled(false)}
            />
          </div>
          <div>
            <label htmlFor="nome">Nome</label>
            <input
              className="input"
              name="nome"
              type="text"
              defaultValue={usuarioLogado.nome}
              onChange={() => setDisabled(false)}
            />
          </div>
          <div>
            <button className="primary-button cadastro" disabled={disabled}>
              Editar
            </button>
          </div>
        </form>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
