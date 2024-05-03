import Link from 'next/link';
import './styles.css';
import Image from 'next/image';

const Header = () => {
    return (
        <>
            <header className="flex header-options">
                <nav><Link href={"/"}><Image src="/img/logo-laranja.png" width={200} height={200} alt="Logo da empresa" className='img'/></Link>
                    <ul>
                        <li><Link className="links" href="/">Página Inicial</Link></li>
                        <li><Link className="links" href="/Produtos">Produtos</Link></li>
                        <li><Link className="links" href="/Contato">Contato</Link></li>
                        <li><Link className="links" href="/Sobre">Sobre</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;