export default function CadastroDevedor() {
  return (
    <div className="modal">
      <h2>Cadastro de devedor</h2>

      <form action="" method="post">
        <div>
          <label htmlFor="email">Nome</label>
          <input className="input" name="nome" type="text" />
        </div>
        <div>
          <label htmlFor="email">Telefone</label>
          <input className="input" name="telefone" type="text" />
        </div>
        <div>
          <button className="primary-button">Cadastrar</button>
        </div>
      </form>
    </div>
  );
}
