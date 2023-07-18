import "./Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <div className="esquerda">
        <img src="./logo.png" alt="" width={100} />
        <h1>Mike</h1>
      </div>
      <div className="pesquisar">
        <input type="text" name="pesquisa" id="pesquisa" />
        <img src="./lupa.svg" alt="lupa" />
      </div>
      <div className="direita">
        <img src="./carrinho.svg" alt="" />
        <img src="./conta.svg" alt="" />
      </div>
    </nav>
  );
}
