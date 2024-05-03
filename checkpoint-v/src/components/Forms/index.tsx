import "./styles.css"
const ContatoForms = () => {
    return(
        <>
        <div className='flex-form'>
            <form className="form-contato">
                <label htmlFor='nome'>Nome completo</label>
                <input className="input" type="text" placeholder="Nome" />
                
                <label htmlFor="email">Email</label>
                <input className = "input" type="text" placeholder='Email' />

                <label htmlFor="telefone">Telefone</label>
                <input className = "input" type="tel" placeholder='XXXXX-XXXX' />

                <label htmlFor="mensagem">Mensagem</label>
                <textarea className = "input input-mensagem" placeholder='Mensagem' />
                
                
                
                <button className="botao">Enviar</button>

            </form>
            <img className="imagem-contato" src="/img/imagemContato.jpg" alt="" />

        </div>
        </>
    );
}

export default ContatoForms;