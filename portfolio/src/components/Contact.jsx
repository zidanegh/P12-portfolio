function Contact() {
  return (
    <>
      <form className="form" action="">
        <div className="form-information">
          <label htmlFor="email">email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="veuillez rentrer votre mail"
          />
          <label htmlFor="titre">Object de votre demande</label>
          <input
            type="titre"
            name="titre"
            id="titre"
            placeholder="veuillez rentrer votre object"
          />
          <button type="submit">envoyer votre message</button>
        </div>
        <div className="form-message">
          <label htmlFor="message">message</label>
          <input
            type="message"
            name="message"
            id="message"
            placeholder="veuillez rentrer votre message"
          />
        </div>
      </form>
    </>
  );
}
export default Contact;
