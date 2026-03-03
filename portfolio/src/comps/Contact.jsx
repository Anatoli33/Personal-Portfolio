import "./contact.css";

export default function Contact() {
  return (
    <section className="contact">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <p>
          If you have a project in mind or want to collaborate, feel free to
          send me a message. I'll get back to you as soon as possible.
        </p>

        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
            ></textarea>
          </div>

          <button type="submit" className="btn primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}