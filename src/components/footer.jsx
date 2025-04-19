import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2025 Camisetas LM10. Todos los derechos reservados.</p>
      <p>Diseñado por Jorge De Leon</p>
      <div className="payment-logos">
        <img src="/imgs/visa.webp" alt="Visa" className="payment-logo" />
        <img
          src="/imgs/mastercard.webp"
          alt="mastercard"
          className="payment-logo"
        />
        <img
          src="/imgs/mercado-pago.webp"
          alt="mercado-pago"
          className="payment-logo"
        />
      </div>
      <div className="footer-icons">
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-x-twitter"></i>
      </div>
    </footer>
  );
};

export default Footer;
