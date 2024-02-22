import { useEffect, useState } from "react";
import formatToBrl from "../../fungeng";
import Footer from "../../common/Footer";
import Title from "../../common/Title";
import CadastroDivida from "./CadastroDivida";
import { Dialog } from "primereact/dialog";

export default function Dividas() {
  const [dividas, setDividas] = useState([]);
  const [adicionarDivida, setAdicionarDivida] = useState(false);

  function addDividas() {
    setAdicionarDivida(true)
  }

  useEffect(() => {
    const dividasDevedor = [
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

    setDividas(dividasDevedor);
  }, []);

  return (
    <>
      <div className="container">
        <Title label="Todas as dívidas" onclick={addDividas} />
        <div className="container-white">
          <div className="list">
            {dividas.map((divida, index) => {
              return (
                <div
                  className="card"
                  style={{ gap: "10px", cursor: "initial" }}
                >
                  <div>
                    <div>
                      <p>{formatToBrl(divida.valor)}</p>
                    </div>
                    <div>
                      <p>{divida.dtvencimento}</p>
                    </div>
                  </div>
                  <div style={{ gap: "10px", textAlign: "right" }}>
                    <p style={{ color: "#54bc52", cursor: "pointer" }}>Pagar</p>
                    <p style={{ color: "red", cursor: "pointer" }}>Arquivar</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <Dialog
          visible={adicionarDivida}
          modal={false}
          style={{ width: "50vw" }}
          onHide={() => setAdicionarDivida(false)}
        >
          <CadastroDivida />
        </Dialog>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}
