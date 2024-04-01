const ContactForm = () => {
  return (
    <div className="max-w-md">
      <form
        action="#"
        className="w-full space-y-4"
        name="contact-form"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        <p className="hidden">
          <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
          </label>
        </p>
        <input
          type="text"
          id="name"
          className="contactform"
          placeholder="För- och efternamn *"
          required
          name="name"
        />
        <div className="flex gap-2 md:gap-4">
          <input
            type="email"
            name="email"
            id="email"
            className="contactform"
            placeholder="Email *"
            required
          />
          <input
            type="tel"
            name="tel"
            id="tel"
            className="contactform"
            placeholder="Telefonnummer"
          />
        </div>
        <textarea
          id="message"
          name="message"
          className="contactform min-h-[150px] resize-none"
          placeholder="Meddelande *"
        />
        <button
          type="submit"
          className="contactform font-base font-medium hover:bg-night-500 hover:text-vanilla-powder-500"
        >
          Skicka
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
