import { useState, type JSX } from "react";

type Sala = {
  id: number;
  Nome: string;
  capacidade: number;
  internet: boolean;
};

//crate
function AdicionarNovaSala({ nome, cap, net }:  { nome: string; cap: number; net: boolean; }): JSX.Element | null {
  const [registrar, setRegistrar] = useState(true);
  const [loading, setLoading] = useState(false);
  try {
    setLoading(true);
    /// registar nova sala
  } catch {
    setRegistrar(false);
  } finally {
    setLoading(false);
  }

  if (!registrar && !loading) {
    return <>Erro ao registrar;</>;
  }
  else{
    return(<>{nome}Registrado com sucesso,{cap},{net}</>)
  }
  
}
function MostrarSalas() {
  //filters
  return <>Salas</>;
}

//update
function AlterarSalaExistente() {
  return <div>Sala existente</div>;
}
//delete
function ApagarSalaExistente() {
  return <>Sala apagada</>;
}

export {
  AdicionarNovaSala,
  MostrarSalas,
  AlterarSalaExistente,
  ApagarSalaExistente,
  type Sala,
};
