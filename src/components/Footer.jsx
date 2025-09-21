function Footer() {
  return (
    <section className="footer">
      <div className="interior-footer">
        <h1 className="h1-footer">Hospital Veterinario Maxnay</h1>
        <ul className="links">
          <li>
            <a href="#">Início</a>
          </li>
          <li>
            <a href="#">Hospital</a>
          </li>
          <li>
            <a href="#">Serviços</a>
          </li>
          <li>
            <a href="#">Planos</a>
          </li>
        </ul>
        <ul className="social">
          <li>
            <a href="#">Instagram</a>
          </li>
          <li>
            <a href="#">WhatsApp</a>
          </li>
          <li>
            <a href="#">Facebook</a>
          </li>
          <li>
            <a href="#">Twiter</a>
          </li>
        </ul>
        <p className="direitos">Maxnay Todos Direitos Reservados @ 2025</p>
        <h2 className="h2-form">Mande sua mensagem</h2>
        <form className="form">
          <input
            className="name"
            type="text"
            name="name"
            id="name"
            placeholder="Seu nome"
            required
          ></input>
          <input
            className="email"
            type="email"
            name="email"
            id="email"
            placeholder="Seu email"
            required
          ></input>
          <textarea
            className="textarea"
            name="message"
            id="message"
            placeholder="Escreva sua mensagem ou dúvida..."
            required
          ></textarea>
          <input className="submit" type="submit" value="Enviar"></input>
        </form>
      </div>
    </section>
  );
}

export default Footer;
