import Produto from "../../components/Produto"
import './styles.css';

export default function Produtos() {
    return (
      <main className="produtos-container">
      <Produto
      title="TÊNIS NEW BALANCE 9060"
      image="/new-balance.jpg"
      link="https://www.artwalk.com.br/tenis-new-balance-9060-u060p-h-001/p"
      preco={899.99}
    />
    <Produto
      title="TÊNIS NIKE AIR MAX 2090"
      image="/nike-air-max.jpg"
      link="https://www.artwalk.com.br/tenis-nike-air-max-2090-cz4090-100/p"
      preco={799.99}></Produto>
      
    <Produto
      title="TÊNIS ADIDAS SUPERSTAR"
      image="/adidas-superstar.jpg"
      link="https://www.artwalk.com.br/tenis-adidas-superstar-fy7746/p"
      preco={399.99}></Produto>

    <Produto
      title="TÊNIS PUMA RS-X3"
      image="/puma-rs-x3.jpg"
      link="https://www.artwalk.com.br/tenis-puma-rs-x3-372715-01/p"
      preco={499.99}></Produto>

    <Produto
      title="TÊNIS VANS OLD SKOOL"
      image="/vans-old-skool.jpg"
      link="https://www.artwalk.com.br/tenis-vans-old-skool-vn0a4u3b15u/p"
      preco={349.99}></Produto> 
    </main>

    
    );
}