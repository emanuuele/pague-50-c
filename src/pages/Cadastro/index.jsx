import "./style.css";
export default function Cadastro() {
  return (
    <div className="container">
      <h1>Cadastre-se, é rapidinho... 😊</h1>
      <div className="container-white">
        <form action="">
          <div>
            <label htmlFor="nome">Nome</label>
            <input className="input" name="nome" type="text" />
          </div>
          <div>
            <label htmlFor="email">E-mail</label>
            <input className="input" name="email" type="email" />
          </div>
          <div>
            <label htmlFor="senha">Senha</label>
            <input className="input" name="senha" type="password" />
          </div>
          <div>
            <label htmlFor="csenha">Confirme a senha</label>
            <input className="input" name="csenha" type="password" />
          </div>
          <div>
            <button className="primary-button">Cadastrar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
