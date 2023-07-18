/* eslint-disable react/prop-types */
import "./Card.css";

export default function Card({ img, titulo, preco }) {
  return (
    <div className="card">
      <div className="card-cima">
        <img src={img} alt="Imagem" />
      </div>
      <div className="card-baixo">
        <h2>{titulo}</h2>
        <p>R${preco}</p>
        <div className="card-baixo-botoes">
          <button>Comprar</button>
          <div className="carrinho-mais">
            <span>+</span>
            <img src="./carrinho-black.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
