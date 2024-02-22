import { useEffect, useState } from "react";
import formatToBrl from "../../fungeng";
import Title from "../../common/Title";
import Footer from "../../common/Footer";
import { Dialog } from "primereact/dialog";
import CadastroEmprestimos from "./CadastroEmprestimo";

export default function Emprestimos() {
  const [emprestimos, setEmprestimos] = useState([]);
  const [adicionarEmprestimo, setAdicionarEmprestimo] = useState(false);

  function addEmprestimo() {
    setAdicionarEmprestimo(true);
  }

  useEffect(() => {
    const newEmprestimos = [
      {
        id_pagamento: 1,
        id_usuario_criou: 101,
        id_devedor: 1,
        dtvencimento: "22/02/2022",
        valor: 50.0,
        ativo: "S",
      },
      {
        id_pagamento: 2,
        id_usuario_criou: 101,
        id_devedor: 2,
        dtvencimento: "22/02/2022",
        valor: 75.0,
        ativo: "N",
      },
      {
        id_pagamento: 3,
        id_usuario_criou: 102,
        id_devedor: 3,
        dtvencimento: "22/02/2022",
        valor: 100.0,
        ativo: "S",
      },
    ];

    setEmprestimos(newEmprestimos);
  }, []);

  return (
    <>
      <div className="container">
        <Title label="Todos os empréstimos" onclick={addEmprestimo} />
        <div className="container-white">
          <div className="list">
            {emprestimos.map((emprestimo, index) => {
              return (
                <div
                  className="card"
                  style={{ gap: "10px", cursor: "initial" }}
                >
                  <div>
                    <div>
                      <p>{formatToBrl(emprestimo.valor)}</p>
                    </div>
                    <div>
                      <p>{emprestimo.dtvencimento}</p>
                    </div>
                  </div>
                  <div style={{ gap: "10px", textAlign: "right" }}>
                    <p style={{ color: "#54bc52", cursor: "pointer" }}>
                      Receber
                    </p>
                    <p style={{ color: "red", cursor: "pointer" }}>Arquivar</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Dialog
          visible={adicionarEmprestimo}
          modal={false}
          style={{ width: "50vw" }}
          onHide={() => setAdicionarEmprestimo(false)}
        >
          <CadastroEmprestimos />
        </Dialog>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}
