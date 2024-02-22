import { useEffect, useState } from "react";
import DividaPorDevedor from "./DividaPorDevedor";
import { Dialog } from "primereact/dialog";
import Footer from "../../common/Footer";
import Title from "../../common/Title";
import CadastroDevedor from "./CadastroDevedor";

export default function Devedores() {
  const [devedores, setDevedores] = useState([]);
  const [dividaSelecionada, setDividaSelecionada] = useState({
    id: 0,
    nome_devedor: "",
  });
  const [openDialogDividas, setopenDialogDividas] = useState(0);
  const [adicionarDevedor, setAdicionarDevedor] = useState(false);
  function load() {
    const newDevedores = [
      {
        id_devedor: 1,
        nome_devedor: "João Silva",
        id_usuario_criou: 101,
        telefone_devedor: "123456789",
        ativo: "S",
      },
      {
        id_devedor: 2,
        nome_devedor: "Maria Souza",
        id_usuario_criou: 102,
        telefone_devedor: "987654321",
        ativo: "N",
      },
      {
        id_devedor: 3,
        nome_devedor: "Carlos Oliveira",
        id_usuario_criou: 103,
        telefone_devedor: "555666777",
        ativo: "S",
      },
    ];
    setDevedores(newDevedores);
  }

  function mostrarDividas(id, nome) {
    setDividaSelecionada({ id, nome_devedor: nome });
    setopenDialogDividas(true);
  }

  function addDevedor() {
    setAdicionarDevedor(true)
  }

  useEffect(() => {
    load();
  }, []);
  return (
    <>
      <div className="container">
        <Title label='Devedores' onclick={addDevedor}/>
        <div className="container-white">
          <div className="list">
            {devedores.map((devedor, index) => {
              return (
                <div
                  className="card"
                  onClick={() =>
                    mostrarDividas(devedor.id_devedor, devedor.nome_devedor)
                  }
                >
                  <p>{devedor.nome_devedor}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Dialog
        visible={openDialogDividas}
        modal={false}
        style={{ width: "50vw" }}
        onHide={() => setopenDialogDividas(false)}
      >
        <DividaPorDevedor
          id={dividaSelecionada.id}
          nome={dividaSelecionada.nome_devedor}
        />
      </Dialog>
      <Dialog
        visible={adicionarDevedor}
        modal={false}
        style={{ width: "50vw" }}
        onHide={() => setAdicionarDevedor(false)}
      >
        <CadastroDevedor/>
      </Dialog>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
