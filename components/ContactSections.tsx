"use client";

import { FormEvent, useState } from "react";
import { HeroVisual } from "@/components/HeroVisual";
import type { ContactContent } from "@/lib/contactContent";
import type { Language } from "@/lib/i18n";
import { siteImagery } from "@/lib/siteImagery";

type FormValues = {
  name: string;
  company: string;
  email: string;
  topic: string;
  message: string;
  privacy: boolean;
};

type ErrorMap = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  company: "",
  email: "",
  topic: "",
  message: "",
  privacy: false
};

export function PageHero({
  eyebrow,
  headline,
  body,
  lang
}: ContactContent["hero"] & { lang: Language }) {
  return (
    <section className="contact-hero has-atmosphere atmosphere--ground has-hero-panel">
      <div className="contact-hero-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h1 lang={lang}>{headline}</h1>
        <p>{body}</p>
      </div>
      <HeroVisual
        src={siteImagery.grass}
        alt="Succulent from above — organic growth and material presence"
        focus="center"
        className="contact-hero-art"
      >
        <span className="contact-orbit contact-orbit-one" />
        <span className="contact-path contact-path-one" />
      </HeroVisual>
    </section>
  );
}

export function ContactDetailsCard({ details }: { details: ContactContent["details"] }) {
  return (
    <aside className="contact-details-card">
      <p className="eyebrow">{details.labels.heading}</p>
      <h2>{details.name}</h2>
      <div className="contact-detail-list">
        <div>
          <span aria-hidden="true">A</span>
          <div>
            <strong>{details.labels.address}</strong>
            <p>{details.address}</p>
          </div>
        </div>
        <div>
          <span aria-hidden="true">E</span>
          <div>
            <strong>{details.labels.email}</strong>
            <a href={`mailto:${details.email}`}>{details.email}</a>
          </div>
        </div>
        <div>
          <span aria-hidden="true">T</span>
          <div>
            <strong>{details.labels.phone}</strong>
            <a href={`tel:${details.phone.replace(/[^+\d]/g, "")}`}>{details.phone}</a>
          </div>
        </div>
      </div>
    </aside>
  );
}

export function FormInput({
  label,
  name,
  type = "text",
  value,
  error,
  required,
  autoComplete,
  onChange
}: {
  label: string;
  name: keyof FormValues;
  type?: string;
  value: string;
  error?: string;
  required?: boolean;
  autoComplete?: string;
  onChange: (name: keyof FormValues, value: string) => void;
}) {
  return (
    <label className="contact-field">
      <span>
        {label}
        {required ? <em>*</em> : null}
      </span>
      <input
        aria-invalid={Boolean(error)}
        autoComplete={autoComplete}
        name={name}
        type={type}
        value={value}
        onChange={(event) => onChange(name, event.target.value)}
      />
      {error ? <small>{error}</small> : null}
    </label>
  );
}

export function FormSelect({
  label,
  value,
  options,
  error,
  required,
  onChange
}: {
  label: string;
  value: string;
  options: string[];
  error?: string;
  required?: boolean;
  onChange: (name: keyof FormValues, value: string) => void;
}) {
  return (
    <label className="contact-field">
      <span>
        {label}
        {required ? <em>*</em> : null}
      </span>
      <select
        aria-invalid={Boolean(error)}
        name="topic"
        value={value}
        onChange={(event) => onChange("topic", event.target.value)}
      >
        <option value="" disabled>
          {label}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error ? <small>{error}</small> : null}
    </label>
  );
}

export function FormTextarea({
  label,
  value,
  error,
  required,
  onChange
}: {
  label: string;
  value: string;
  error?: string;
  required?: boolean;
  onChange: (name: keyof FormValues, value: string) => void;
}) {
  return (
    <label className="contact-field full">
      <span>
        {label}
        {required ? <em>*</em> : null}
      </span>
      <textarea
        aria-invalid={Boolean(error)}
        name="message"
        rows={7}
        value={value}
        onChange={(event) => onChange("message", event.target.value)}
      />
      {error ? <small>{error}</small> : null}
    </label>
  );
}

export function CheckboxField({
  label,
  checked,
  error,
  onChange
}: {
  label: string;
  checked: boolean;
  error?: string;
  onChange: (checked: boolean) => void;
}) {
  return (
    <label className="contact-checkbox full">
      <input
        aria-invalid={Boolean(error)}
        checked={checked}
        name="privacy"
        type="checkbox"
        onChange={(event) => onChange(event.target.checked)}
      />
      <span>{label}</span>
      {error ? <small>{error}</small> : null}
    </label>
  );
}

export function ContactForm({ form }: { form: ContactContent["form"] }) {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<ErrorMap>({});
  const [success, setSuccess] = useState(false);

  function updateValue(name: keyof FormValues, value: string) {
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    setSuccess(false);
  }

  function validate() {
    const nextErrors: ErrorMap = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!values.name.trim()) nextErrors.name = form.errors.name;
    if (!emailPattern.test(values.email.trim())) nextErrors.email = form.errors.email;
    if (!values.topic) nextErrors.topic = form.errors.topic;
    if (!values.message.trim()) nextErrors.message = form.errors.message;
    if (!values.privacy) nextErrors.privacy = form.errors.privacy;

    return nextErrors;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setSuccess(true);
    }
  }

  return (
    <form className="contact-page-form" noValidate onSubmit={handleSubmit}>
      <FormInput
        autoComplete="name"
        error={errors.name}
        label={form.labels.name}
        name="name"
        required
        value={values.name}
        onChange={updateValue}
      />
      <FormInput
        autoComplete="organization"
        error={errors.company}
        label={form.labels.company}
        name="company"
        value={values.company}
        onChange={updateValue}
      />
      <FormInput
        autoComplete="email"
        error={errors.email}
        label={form.labels.email}
        name="email"
        required
        type="email"
        value={values.email}
        onChange={updateValue}
      />
      <FormSelect
        error={errors.topic}
        label={form.labels.topic}
        options={form.topics}
        required
        value={values.topic}
        onChange={updateValue}
      />
      <FormTextarea
        error={errors.message}
        label={form.labels.message}
        required
        value={values.message}
        onChange={updateValue}
      />
      <CheckboxField
        checked={values.privacy}
        error={errors.privacy}
        label={form.labels.privacy}
        onChange={(checked) => {
          setValues((current) => ({ ...current, privacy: checked }));
          setErrors((current) => ({ ...current, privacy: undefined }));
          setSuccess(false);
        }}
      />
      <p className="contact-privacy-note full">{form.privacyNote}</p>
      {success ? <p className="contact-success full">{form.success}</p> : null}
      <button className="contact-submit full" type="submit">
        {form.labels.submit}
      </button>
    </form>
  );
}

export function ContactPanel({ content }: { content: ContactContent }) {
  return (
    <section className="contact-panel-section">
      <div className="contact-panel-grid">
        <ContactDetailsCard details={content.details} />
        <div className="contact-form-card">
          <p className="eyebrow">{content.form.labels.heading}</p>
          <ContactForm form={content.form} />
        </div>
      </div>
    </section>
  );
}

export function ClosingNote({ note }: { note: string }) {
  return (
    <section className="contact-note">
      <p>{note}</p>
    </section>
  );
}
