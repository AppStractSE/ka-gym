const ContactForm = () => {
  return (
    <div>
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
          className="contactform font-medium hover:bg-[#141513] hover:text-vanilla-powder-500 hover:outline hover:outline-vanilla-powder-500 disabled:opacity-50 disabled:hover:bg-vanilla-powder-500 disabled:hover:text-[#141513] disabled:hover:outline-0"
        >
          Skicka
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
