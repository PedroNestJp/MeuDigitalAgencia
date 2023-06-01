import React from 'react';
import '../styles/Carousel.css';

const Carousel = () => {
  return (
    <div className="carousel">
      <div className="carousel-item">
        <img src="./images/logoNestSquare.png" alt="Testimonial" className="testimonial-image" />
        <h5 className="testimonial-text">
          Se busca confiança e um serviço que realmente gere resultados, está no lugar certo 
        </h5>
        <p className="testimonial-author">- Nest Informática</p>
      </div>
      <div className="carousel-item">
        <img src="./images/logoLuArtesCircle.png" alt="Testimonial" className="testimonial-image" />
        <h5 className="testimonial-text">
          òtimas interfaces e design responsivo, além da preocupação com a UX.
        </h5>
        <p className="testimonial-author">- LuArtes </p>
      </div>
      <div className="carousel-item">
        <img src="./images/priscilaPontesNailsDesign.png" alt="Testimonial" className="testimonial-image" />
        <h5 className="testimonial-text">
          Profisionais atenciosos, que de fato estão dedicados a efetivação da minha presença digital.
        </h5>
        <p className="testimonial-author">- Priscila Pontes Nails Design </p>
      </div>
    </div>
  );
};

export default Carousel;
