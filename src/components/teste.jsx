import React from 'react';
import '../styles/Carousel.css';

const Carousel = () => {
  return (
    <div className="carousel">
      <div className="carousel-item">
        <img src="./images/portrait-beautiful-young-woman-standing-grey-wall1.jpg" alt="Testimonial" className="testimonial-image" />
        <h5 className="testimonial-text">
          Se busca confiança e um serviço que realmente gere resultados, está no lugar certo 
        </h5>
        <p className="testimonial-author">- Nest Informática</p>
      </div>
      <div className="carousel-item">
        <img src="./images/portrait-beautiful-young-woman-standing-grey-wall1.jpg" alt="Testimonial" className="testimonial-image" />
        <h5 className="testimonial-text">
          òtimas interfaces e design responsivo, além da preocupação com a UX.
        </h5>
        <p className="testimonial-author">- LuArtes </p>
      </div>
      <div className="carousel-item">
        <img src="./images/portrait-beautiful-young-woman-standing-grey-wall1.jpg" alt="Testimonial" className="testimonial-image" />
        <h5 className="testimonial-text">
          I worked with the Selo agency for the SEO of my personal blog. They worked great. Definitely recommend.
        </h5>
        <p className="testimonial-author">- May Larson</p>
      </div>
    </div>
  );
};

export default Carousel;
