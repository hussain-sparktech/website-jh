import type { Language } from "@/lib/i18n";
import { content } from "@/lib/content";

export function ContactForm({ language }: { language: Language }) {
  const form = content[language].contact.form;

  return (
    <form className="contact-form">
      <label>
        {form.name}
        <input name="name" type="text" autoComplete="name" />
      </label>
      <label>
        {form.company}
        <input name="company" type="text" autoComplete="organization" />
      </label>
      <label>
        {form.email}
        <input name="email" type="email" autoComplete="email" />
      </label>
      <label>
        {form.topic}
        <select name="topic" defaultValue="">
          <option value="" disabled>
            {form.topic}
          </option>
          {form.options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
      <label className="full">
        {form.message}
        <textarea name="message" rows={6} />
      </label>
      <label className="checkbox full">
        <input name="privacy" type="checkbox" />
        <span>{form.consent}</span>
      </label>
      <button className="button full" type="submit">
        {form.submit}
      </button>
    </form>
  );
}
