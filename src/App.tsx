import Corredor from "./components/Corredor";
import Footer from "./footer";
import Header from "./Header";
import corredores from "./mock/salas.json";

function App() {
  return (
    <main className="mainapp">
      <Header />
      <div className="corredores">
        {corredores.map((e) => (
          <Corredor titulo={e.titulo} salas={e.salas} />
        ))}
      </div>

      <Footer />
  </main>
  );
}

export default App;
