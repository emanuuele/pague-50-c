export default function CadastroDivida() {
  return (
    <div className="modal">
      <h2>Cadastro de dívidas</h2>

      <form action="" method="post">
        <div>
          <label htmlFor="devedor">Devedor</label>
          <select name="devedor" id="" className="input">

          </select>
        </div>
        <div>
          <label htmlFor="valor">Valor</label>
          <input className="input" name="valor" type="text" />
        </div>
        <div>
          <label htmlFor="vencimento">Vencimento</label>
          <input className="input" name="vencimento" type="date" />
        </div>
        <div>
          <button className="primary-button">Cadastrar</button>
        </div>
      </form>
    </div>
  );
}
