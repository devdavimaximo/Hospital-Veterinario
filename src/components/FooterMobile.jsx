function FooterMobile() {
  return (
    <section className="footermob">
      <div className="interiormob">
        <p className="direitosmob">Maxnay Todos Direitos Reservados @ 2025</p>
        <h2 className="h2-formmob">Mande sua mensagem</h2>
        <form className="formmob">
          <input
            className="namemob"
            type="text"
            name="name"
            id="name"
            placeholder="Seu nome"
            required
          ></input>
          <input
            className="emailmob"
            type="email"
            name="email"
            id="email"
            placeholder="Seu email"
            required
          ></input>
          <textarea
            className="textareamob"
            name="message"
            id="message"
            placeholder="Escreva sua mensagem ou dúvida..."
            required
          ></textarea>
          <input className="submitmob" type="submit" value="Enviar"></input>
        </form>
      </div>
    </section>
  );
}

export default FooterMobile;
