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

        <p className="description-mobile">
          Seja bem-vindo à Maxnay Hospital <br />Veterinário! Aqui, cada detalhe foi <br />pensado para oferecer cuidado, carinho <br />e atenção especial ao seu melhor amigo. <br />Contamos com uma equipe dedicada e <br />apaixonada por animais, pronta para <br />garantir saúde, bem-estar e qualidade <br />de vida em todas as fases. Nosso espaço <br />é acolhedor, seguro e equipado para <br />proporcionar o atendimento que seu pet <br /> merece, unindo experiência profissional <br />e amor pelos bichinhos.
        </p>
        <button className="contact">
          <a href="#">Contato</a>
        </button>
        <p className="url">www.maxnay.com.br</p>
        <img className="dog" src="/dog-container1.png" alt="dog" />
        <p className="linha">____________</p>
        <img className="patas" src="/patas.png" alt="" />
        <img src="/inferior.png  " alt="" className="inferior" />
        <a href="#">
          <i class="icon-wpp fa-brands fa-whatsapp"></i>
        </a>
        <a href="#">
          <i class="icon-insta fa-brands fa-instagram"></i>
        </a>
        <a href="#">
          <i class="icon-email fa-regular fa-envelope"></i>
        </a>
      </div>
    </main>
  );
}

export default Main;
