// import "./contact.css";

export default function Contact() {
    return(
        <section id="contact">
      <h2>Contact Me</h2>
      <p>If you have any questions or want to work together, feel free to send me a message.</p>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <br />
        <label>
          Message:
          <textarea name="message"></textarea>
        </label>
        <br />
        <button type="submit">Send Message</button>
      </form>
    </section>
    );
}