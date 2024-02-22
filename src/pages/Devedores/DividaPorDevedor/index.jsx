import { useEffect, useState } from "react";
import formatToBrl from "../../../fungeng";

export default function DividaPorDevedor({ id, nome }) {
  const [dividas, setDividas] = useState([]);
  useEffect(() => {
    const dividasDevedor = [
      {
        id_pagamento: 1,
        id_usuario_criou: 101,
        id_devedor: id,
        dtvencimento: "22/02/2022",
        valor: 50.0,
        ativo: "S",
      },
      {
        id_pagamento: 2,
        id_usuario_criou: 101,
        id_devedor: id,
        dtvencimento: "22/02/2022",
        valor: 75.65,
        ativo: "N",
      },
      {
        id_pagamento: 3,
        id_usuario_criou: 102,
        id_devedor: id,
        dtvencimento: "22/02/2022",
        valor: 100.0,
        ativo: "S",
      },
    ];

    setDividas(dividasDevedor);
  }, [id]);

  return (
    <>
      <div className="modal">
        <h2>Dívidas de {nome}</h2>
        <div className="list">
          {dividas.map((divida, index) => {
            return (
              <div className="card" style={{ gap: "10px" }}>
                <div>
                  <div>
                    <p>{formatToBrl(divida.valor)}</p>
                  </div>
                  <div>
                    <p>{divida.dtvencimento}</p>
                  </div>
                </div>
                <div style={{ gap: "10px", textAlign: "right" }}>
                  <p style={{ color: "#54bc52" }}>Pagar</p>
                  <p style={{ color: "red" }}>Arquivar</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
