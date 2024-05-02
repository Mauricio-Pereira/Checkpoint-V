import Produto from "../../components/Produto"

export default function Produtos() {
    return (
      <main className="flex-auto">
      <Produto
      title="TÊNIS NEW BALANCE 9060"
      image="/new-balance.jpg"
      link="https://www.artwalk.com.br/tenis-new-balance-9060-u060p-h-001/p"
      preco={899.99}
    />
    </main>
    );
}