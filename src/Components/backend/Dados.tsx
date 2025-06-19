import axios from "axios";
import { useEffect, useState } from "react";

import BlocoA from "../BlocoA";

type Dado = {
  id: number;
  sala: string;
  internet: boolean;
};

const Dados = () => {
  const [dados, setDados] = useState<Dado[]>([]);
  const [loading, setLoading] = useState(false);
  const [er, setEr] = useState(false);

  useEffect(() => {
    const PegarDados = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost/Salas/back/");
        setDados(response.data);
      } catch {
        setEr(true);
      } finally {
        setLoading(false);
      }
    };
    PegarDados();
  }, []);

  if (loading) return <div className="sala">Carregando.....</div>;
  if (er)
    return (
      <>
        <div className=" online sala">
          <h1>Não foi possivel carregar</h1>
        </div>
      </>
    );
  if (!er && !loading && dados) return <BlocoA listaDeDados={dados} />;
};

export default Dados;
