
import Corredor from "./components/Corredor";
import Footer from "./footer";
import Header from "./Header";

function App() {
  const corredores = [
    {
      titulo: "A",
      salas: [
        {
          numero: 101,
          internet: false,
        },
        {
          numero: 102,
          internet: true,
        },
        {
          numero: 102,
          internet: true,
        },
        {
          numero: 102,
          internet: true,
        },
      ],
    },
    {
      titulo: "B",
      salas: [
        {
          numero: 101,
          internet: false,
        },
      ],
    },
    {
      titulo: "C",
      salas: [],
    },
  ];

  return (<>
    <Header />
    <div className="corredores">
      {corredores.map((e) => (
        <Corredor titulo={e.titulo} salas={e.salas} />
      ))}
    </div>

    <Footer/>
    </>
  );
}

export default App;
