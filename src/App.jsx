import Navbar from "./components/Navbar";
import "./App.css";
import Card from "./components/Card";
import Footer from "./components/Footer";
import CardPrincipal from "./components/CardPrincipal";

export default function App() {
  return (
    <main>
      <Navbar />
      <section className="tenis">
        <CardPrincipal
          img={"./tenis1.jpg"}
          preco={399}
          desc={"Tênis Nike Pegasus Turbo Next Nature Masculino"}
          tipo={"Corrida"}
        />
        <CardPrincipal
          img={"./tenis2.jpg"}
          preco={699}
          desc={"Tênis Nike Zoom Metcon Turbo 2 Masculino"}
          tipo={"Social"}
        />
        <CardPrincipal
          img={"./tenis3.jpg"}
          preco={1399}
          desc={"Tênis Nike Vaporfly 3 Masculino"}
          tipo={"Academia"}
        />
      </section>
      <div className="info">
        <div className="info-esquerda">
          <img src="./caminhao.png" alt="" />
          <span>Frete Grátis</span>
        </div>
        <div className="info-meio">
          <img src="./cartao.png" alt="" />
          <span>Em até 10x no cartão</span>
        </div>
        <div className="info-direita">
          <img src="./celular.png" alt="" />
          <span>Pagamento via PIX</span>
        </div>
      </div>
      <section className="interesse">
        <h1>Talvez você se interesse</h1>
        <div className="cards">
          <Card
            img="./banner1.jpg"
            titulo={"Tênis Nike Pegasus Turbo Next Nature Masculino"}
            preco={399}
          />
          <Card
            img="./banner2.jpg"
            titulo={"Tênis Nike Downshifter 12 Masculino"}
            preco={899}
          />
          <Card
            img="./banner3.jpg"
            titulo={"Tênis Nike Air Max Alpha Trainer 5 Masculino"}
            preco={199}
          />
          <Card
            img="./banner4.jpg"
            titulo={"Tênis Nike Legend Essential 3 Next Nature Masculino"}
            preco={599}
          />
        </div>
      </section>
      <Footer />
    </main>
  );
}
