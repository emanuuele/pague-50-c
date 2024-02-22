import { useEffect, useState } from "react";
import Footer from "../../common/Footer";
import formatToBrl from "../../fungeng";

export default function Home() {
  const [usuarioLogado, setUsuarioLogado] = useState({
    email: "",
    nome: "",
    senha: "",
  });
  const [dividas, setDividas] = useState([]);
  const [emprestimos, setEmprestimos] = useState([]);
  const [totais, setTotais] = useState({});

  function loadUser(id) {
    setUsuarioLogado({
      email: "emanuele@mailsac.com",
      nome: "Emanuele",
      senha: "aaaaa",
    });
  }

  function calcularTotais() {
    let totalEmprestimoAberto = 0;
    emprestimos.map((item) => (totalEmprestimoAberto += item.valor));
    let totalDividaAberto = 0;
    dividas.map((item) => (totalDividaAberto += item.valor));

    setTotais({ totalDividaAberto, totalEmprestimoAberto });
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

  useEffect(() => {
    // const id = localStorage.getItem('id')
    loadUser(1);
  }, []);

  useEffect(() => {
    calcularTotais();
  }, [emprestimos, dividas]);

  return (
    <div className="container">
      <h1>Olá, {usuarioLogado.nome}</h1>
      <h2>Empréstimos</h2>
      <div style={{ width: "250px" }} className="container-white">
        <p style={{ color: "#3F4440" }}>
          Total a receber: {formatToBrl(totais.totalEmprestimoAberto)}
        </p>
      </div>
      <h2>Dívidas</h2>
      <div style={{ width: "250px" }} className="container-white">
        <p style={{ color: "#3F4440" }}>
          Total a pagar: {formatToBrl(totais.totalDividaAberto)}
        </p>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
