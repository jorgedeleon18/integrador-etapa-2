import useTitulo from "../hooks/useTitulo";
import "../components/components-alta/Nosotros.scss";

const Nosotros = () => {
  useTitulo("Nosotros");

  return (
    <main className="about-us">
      <section className="intro">
        <h2>Quiénes Somos</h2>
        <p>
          Somos un equipo apasionado por ofrecer los mejores productos y servicios en el mercado. Con años de experiencia, buscamos brindar calidad y satisfacción a cada uno de nuestros clientes.
        </p>
      </section>

      <section className="our-mission">
        <h2>Nuestra Misión</h2>
        <p>
          En nuestra empresa nos enfocamos en mejorar la experiencia de compra de nuestros usuarios, ofreciendo productos de alta calidad, atención personalizada y entrega rápida.
        </p>
      </section>

      <section className="contact-us">
        <h2>Contáctanos</h2>
        <p>
          Si deseas saber más sobre nosotros, no dudes en ponerte en contacto. Estaremos encantados de resolver tus dudas y ofrecerte la mejor atención.
        </p>
      </section>
    </main>
  );
};

export default Nosotros;
