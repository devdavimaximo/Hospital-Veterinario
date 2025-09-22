function Main() {
  return (
    <main name="inicio">
      <div className="container">
        <p className="saude">Saúde e bem-estar</p>
        <h1 className="clinica">Hospital Veterinário</h1>
        <p className="description">
          Seja bem-vindo à Maxnay Hospital Veterinário! Aqui, cada detalhe foi{" "}
          <br />
          pensado para oferecer cuidado, carinho e atenção especial ao seu{" "}
          <br />
          melhor amigo. Contamos com uma equipe dedicada e apaixonada por <br />
          animais, pronta para garantir saúde, bem-estar e qualidade de vida em{" "}
          <br />
          todas as fases. Nosso espaço é acolhedor, seguro e equipado para{" "}
          <br />
          proporcionar o atendimento que seu pet merece, unindo experiência{" "}
          <br />
          profissional e amor pelos bichinhos.
        </p>
        <button className="contact">
          <a href="https://wa.me/5551997409304">Contato</a>
        </button>
        <p className="url">www.maxnay.com.br</p>
        <img className="dog" src="/dog-container1.png" alt="dog" />
        <p className="linha">____________</p>
        <img className="patas" src="/patas.png" alt="" />
        <img src="/inferior.png  " alt="" className="inferior" />
        <a href="https://wa.me/5551997409304">
          <i class="icon-wpp fa-brands fa-whatsapp"></i>
        </a>
        <a href="https://www.instagram.com/_nayaragrd?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
          <i class="icon-insta fa-brands fa-instagram"></i>
        </a>
        <a href="mailto:rodriguesgirardinayara@gmail.com">
          <i class="icon-email fa-regular fa-envelope"></i>
        </a>
      </div>
    </main>
  );
}

export default Main;
