/* eslint-disable react/prop-types */
import "./Card.css";

export default function CardPrincipal({ img, preco, desc, tipo }) {
  return (
    <div className="card-principal">
      <div className="card-principal-cima">
        <img src={img} alt="Imagem" />
        <span>R${preco}</span>
      </div>
      <p>{tipo}</p>
      <h2>{desc}</h2>
    </div>
  );
}
