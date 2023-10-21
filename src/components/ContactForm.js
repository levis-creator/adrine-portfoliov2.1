function ContactForm() {
  return (
    <form className="flex flex-col gap-3">
      <div className="flex flex-col gap-1">
        <label
          className="uppercase leading-relaxed text-sm"
          htmlFor="contact_name"
        >
          Enter your name
        </label>
        <input
          type="text"
          id="contact_name"
          className="border  w-full border-slate-700 px-3 py-3 rounded-sm outline-none"
          placeholder="Ex: john doe"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label
          className="uppercase leading-relaxed text-sm"
          htmlFor="contact_name"
        >
          Enter your Email
        </label>
        <input
          type="email"
          id="contact_email"
          className="border  w-full border-slate-700 px-3 py-3 rounded-sm outline-none"
          placeholder="Ex: johndoe@email.com"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="uppercase leading-relaxed text-sm" htmlFor="message">
          {" "}
          Your Message
        </label>
        <textarea
          name="message"
          className="border  w-full border-slate-700 px-3 py-3 rounded-sm outline-none"
          id="message"
          rows="6"
        />{" "}
      </div>
      <button className="uppercase px-5 py-3 bg-black text-white rounded-3xl w-fit">
        Send message
      </button>
    </form>
  );
}

export default ContactForm;
// TODO connect the form to emailjs
