import { useNavigate } from "react-router-dom";
import "./style.css";

export default function Login() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <h1>Login</h1>
      <div className="container-white">
        <form action="">
          <div>
            <label htmlFor="email">E-mail</label>
            <input className="input" name="email" type="email" />
          </div>
          <div>
            <label htmlFor="senha">Senha</label>
            <input className="input" name="senha" type="password" />
          </div>
          <div>
            <button type="button" className="primary-button" onClick={()=>{navigate('/home')}}>Entrar</button>
          </div>

          <div style={{width: '100%'}}>
            <label htmlFor="" style={{textAlign: "center"}}>ou</label>
          </div>

          <div>
            <button type="button" className="primary-button cadastro" onClick={()=>{navigate('/cadastro')}}>Cadastre-se</button>
          </div>
        </form>
      </div>
    </div>
  );
}
