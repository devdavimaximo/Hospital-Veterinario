import { Swiper, SwiperSlide } from "swiper/react";

// Importações de CSS do Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

// Importação dos módulos do Swiper
import { EffectCoverflow, Pagination } from "swiper/modules";

function PlanosMobile() {
  return (
    <div className="planos-container">
      <h1 className="title-plan">Planos e Preços</h1>
      <img src="/element.png" alt="" className="element-img" />

      <Swiper
        modules={[EffectCoverflow, Pagination]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        spaceBetween={-30}
        pagination={{ clickable: true }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        
      >
        <SwiperSlide>
          <div className="plano">
            <h2 className="h2-1">Básico</h2>
            <p className="price-1">R$ 49,90/mês</p>
            <ul className="ul-1">
                <li>- Consulta de rotina (2 por ano)</li>
                <li>- Desconto em vacinas (10%)</li>
                <li>- Check-up anual simples</li>
                <li>- Orientação nutricional básica</li>
              </ul>
              <button className="btn-plan">
                <a href="#">Saiba mais</a>
              </button>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="plano">
            <h2 className="h2-2">Essencial</h2>
            <p className="price-2">R$ 79,90/mês</p>
            <ul className="ul-2">
                <li>- Consultas ilimitadas</li>
                <li>- Vacinação anual</li>
                <li>- Desconto em exames (20%)</li>
                <li>- Check-up completo anual</li>
                <li>- Emergência com desconto</li>
              </ul>
              <button className="btn-plan">
                <a href="#">Saiba mais</a>
              </button>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="plano">
            <h2 className="h2-3">Premium</h2>
            <p className="price-3">R$ 129,90/mês</p>
            <ul className="ul-3">
                <li>- Consultas ilimitadas</li>
                <li>- Vacinação anual</li>
                <li>- Exames laboratoriais</li>
                <li>- Emergência 24h c/desconto</li>
                <li>- Desconto em cirurgias (20%)</li>
              </ul>
              <button className="btn-plan">
                <a href="#">Saiba mais</a>
              </button>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="plano">
            <h2
            className="h2-4">Vip</h2>
            <p className="price-4">R$ 199,90/mês</p>
            <ul className="ul-4">
                <li>- Consultas e vacinas ilimitadas</li>
                <li>- Exames laboratoriais</li>
                <li>- Emergência 24h gratuito</li>
                <li>- Cirurgia com até 50% desconto</li>
                <li>- Internação inclusa</li>
              </ul>
              <button className="btn-plan">
                <a href="#">Saiba mais</a>
              </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default PlanosMobile;
