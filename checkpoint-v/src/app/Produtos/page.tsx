import Produto from "../../components/Produto"
import './styles.css';

export default function Produtos() {
    return (
      <main className="produtos-container flex-auto">
        
      <Produto
      title="TÊNIS NEW BALANCE 9060"
      image="/img/new-balance.jpg"
      link="https://www.artwalk.com.br/tenis-new-balance-9060-u060p-h-001/p"
      preco={899.99}
    />
    <Produto
      title="TÊNIS ADIDAS HANDBALL SPEZIAL MASCULINO"
      image="/img/adidas-spezial.jpg"
      link="https://www.artwalk.com.br/tenis-adidas-handball-spezial-masculino-ie340-3-100/p"
      preco={499.99}></Produto>
      
    <Produto
      title="TÊNIS PUMA SLIPSTREAM ALWAYS ON MASCULINO"
      image="/img/puma-slipstream.jpg"
      link="https://www.artwalk.com.br/tenis-puma-slipstream-always-on-masculino-39428-5-002/p"
      preco={349.99}></Produto>

    <Produto
      title="TÊNIS NEW BALANCE 2002 MASCULINO"
      image="/img/newbalance-2002.jpg"
      link="https://www.artwalk.com.br/tenis-new-balance-2002-masculino-m02rd-q-200/p"
      preco={899.99}></Produto>

    <Produto
      title="TÊNIS PUMA MB.02 MASCULINO"
      image="/img/puma-mb02.jpg"
      link="https://www.artwalk.com.br/tenis-puma-mb-02-masculino-37942-0-001/p"
      preco={769.99}></Produto> 

      <Produto
      title="TÊNIS NIKE DUNK LOW RETRO MASCULINO"
      image="/img/nike-dunklow.jpg"
      link="https://www.artwalk.com.br/tenis-nike-dunk-low-retro-masculino-dv083-1-004/p"
      preco={699.99}></Produto>

    <Produto
      title="TÊNIS NIKE AIR MAX PLUS MASCULINO"
      image="/img/nike-air-max-plus.jpg"
      link="https://www.artwalk.com.br/tenis-nike-air-max-plus-masculino-dm003-2-005/p"
      preco={899.99}></Produto>

    <Produto
      title="TÊNIS NIKE AIR FORCE 1 '07 MASCULINO"
      image="/img/nike-air-force-107.jpg"
      link="https://www.artwalk.com.br/tenis-nike-air-force-1--07-masculino-fn743-9-133/p"
      preco={599.99}></Produto>
      
    <Produto
      title="TÊNIS ADIDAS SUPERSTAR MASCULINO"
      image="/img/adidas-superstar.jpg"
      link="https://www.artwalk.com.br/tenis-adidas-superstar-masculino-hp325-2-100/p"
      preco={349.99}></Produto>
    <Produto
      title="TÊNIS JORDAN TATUM 1 MASCULINO"
      image="/img/jordan-tatum.jpg"
      link="https://www.artwalk.com.br/tenis-jordan-tatum-1-masculino-fv016-9-400/p"
      preco={749.99}></Produto>

    

    </main>

    
    );
}