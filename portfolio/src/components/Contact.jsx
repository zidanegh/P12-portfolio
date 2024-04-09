import { useState } from "react";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "76b314ad-435f-444a-ab73-3e6ff9093198");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <form onSubmit={onSubmit} className="form" action="">
        <div>
          <label htmlFor="email">email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="veuillez rentrer votre mail"
            required
          />
        </div>
        <div>
          <label htmlFor="titre">Object</label>
          <input
            type="titre"
            name="titre"
            id="titre"
            placeholder="veuillez rentrer votre object"
            required
          />
        </div>
        <div>
          <label htmlFor="message">message</label>
          <input
            type="message"
            name="message"
            id="message"
            placeholder="veuillez rentrer votre message"
            required
          />
        </div>
        <button type="submit">envoyer votre message</button>
      </form>
      <span>{result}</span>
    </>
  );
}
