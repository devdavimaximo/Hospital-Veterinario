import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Pagination } from "swiper/modules";

function Planos() {
  const swiperRef = useRef(null);

  return (
    <div className="plan">
      <h1 className="h1-plain">Planos e Preços</h1>

      {/* Container relativo para o Swiper e os botões */}
      <div className="swiper-container" style={{ position: "relative" }}>
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[EffectCoverflow, Pagination]}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div className="plan-1">
              <h2 className="basic">Básico</h2>
              <p className="price-1">R$ 39,90/mês</p>
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
            <div className="plan-2">
              <h2 className="essencial">Essencial</h2>
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
            <div className="plan-3">
              <h2 className="premium">Premium</h2>
              <p className="price-3">R$ 149,90/mês</p>
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
            <div className="plan-4">
              <h2 className="vip">Vip</h2>
              <p className="price-4">R$ 249,90/mês</p>
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

        {/* Botões externos flutuando sobre o Swiper */}
        <div
          className="swiper-buttons-left"
          style={{
            position: "absolute",
            top: "50%",
            left: "0px",
            transform: "translateY(-50%)",
            zIndex: 20,
          }}
        >
          <button onClick={() => swiperRef.current?.slidePrev()}>◀</button>
        </div>

        <div
          className="swiper-buttons-right"
          style={{
            position: "absolute",
            top: "50%",
            right: "0px",
            transform: "translateY(-50%)",
            zIndex: 20,
          }}
        >
          <button onClick={() => swiperRef.current?.slideNext()}>▶</button>
        </div>
      </div>
      <img src="img/patas.png" alt="" className="patas-fundo" />
      <img src="img/element.png" alt="" className="element" />
    </div>
  );
}

export default Planos;
