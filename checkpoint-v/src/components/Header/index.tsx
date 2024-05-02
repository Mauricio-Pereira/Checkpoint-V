import Link from 'next/link';
import './styles.css';

const Header = () => {
    return (
        <>
            <header className="flex">
                <nav>
                    <ul>
                        <li><Link className="links" href="/">Página Inicial</Link></li>
                        <li><Link className="links" href="/Produtos">Produtos</Link></li>
                        <li><Link className="links" href="/Contato">Contatos</Link></li>
                        <li><Link className="links" href="/Sobre">Sobre</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;