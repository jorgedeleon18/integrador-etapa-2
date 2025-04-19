import useTitulo from "../hooks/useTitulo";
import "./Contacto.scss";

const Contacto = () => {
  useTitulo("Contacto");

  return (
    <main className="main-form">
      <form className="main-form__form">
        <fieldset className="main-form__form__fieldset">
          <legend className="main-form__form__legend">Datos personales</legend>

          <div className="main-form__form__name">
            <label htmlFor="name">Nombre</label>
            <input id="name" type="text" />
          </div>

          <div className="main-form__form__mail">
            <label htmlFor="mail">Mail</label>
            <input id="mail" type="email" />
          </div>

          <div className="main-form__form__tel">
            <label htmlFor="tel">Teléfono</label>
            <input id="tel" type="tel" />
          </div>

          <div className="main-form__form__descr">
            <label htmlFor="descr">Ingrese un comentario</label>
            <textarea id="descr" />
          </div>

          <button type="submit" className="main-form__form__button">Enviar</button>
        </fieldset>
      </form>
    </main>
  );
};

export default Contacto;
