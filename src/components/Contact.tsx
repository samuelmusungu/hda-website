import { useMemo, useState } from "react";
import { Mail, Phone, MapPin, MessageCircle, ArrowRight, Check } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import Reveal from "@/components/shared/Reveal";
import { useSearchParams } from "react-router-dom";
import { services } from "@/content/services";
import { site } from "@/content/site";
import { useToast } from "@/hooks/use-toast";

const talentStage = "Hiring the team";

const stages = ["Idea, need to define it", "Have designs or specs", "Building now", "Scaling or rebuilding", "Hiring the team"];
const timelines = ["Urgent (under 2 weeks)", "Within 1 to 3 months", "3 to 6 months", "Flexible"];
const budgets = ["Under $5K", "$5K to $15K", "$15K to $50K", "$50K+", "Not sure yet"];

type Form = {
  name: string;
  email: string;
  company: string;
  services: string[];
  stage: string;
  timeline: string;
  budget: string;
  message: string;
};

const initial: Form = {
  name: "",
  email: "",
  company: "",
  services: [],
  stage: "",
  timeline: "",
  budget: "",
  message: "",
};

const Field = ({ label, children, required }: { label: string; children: React.ReactNode; required?: boolean }) => (
  <label className="block">
    <span className="block text-sm font-medium text-black mb-2">
      {label}
      {required && <span className="text-teal"> *</span>}
    </span>
    {children}
  </label>
);

const inputCls =
  "w-full rounded-xl border border-black/15 bg-white px-4 py-3.5 text-black placeholder:text-black/35 focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition";

const Contact = () => {
  const [searchParams] = useSearchParams();
  const wantsTalent = searchParams.get("type") === "talent";
  const [form, setForm] = useState<Form>(() =>
    wantsTalent
      ? { ...initial, stage: talentStage, services: ["Talent Sourcing"] }
      : initial
  );
  const { toast } = useToast();

  const set = <K extends keyof Form>(key: K, value: Form[K]) => setForm((f) => ({ ...f, [key]: value }));

  const toggleService = (title: string) =>
    set(
      "services",
      form.services.includes(title) ? form.services.filter((s) => s !== title) : [...form.services, title]
    );

  // The brief text updates live and is what gets sent to you.
  const brief = useMemo(() => {
    const lines = [
      `New project brief from ${form.name || "[name]"}${form.company ? ` (${form.company})` : ""}`,
      "",
      `Services: ${form.services.length ? form.services.join(", ") : "Not specified"}`,
      `Stage: ${form.stage || "Not specified"}`,
      `Timeline: ${form.timeline || "Not specified"}`,
      `Budget: ${form.budget || "Not specified"}`,
      `Email: ${form.email || "[email]"}`,
      "",
      "About the project:",
      form.message || "[Tell us about the project]",
    ];
    return lines.join("\n");
  }, [form]);

  const subject = `Project brief: ${form.services[0] ?? "New enquiry"}${form.company ? ` · ${form.company}` : ""}`;
  const mailHref = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(brief)}`;
  const waHref = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(brief)}`;

  const onEmail = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = mailHref;
    toast({
      title: "Your brief is ready to send",
      description: "Your email app should open with the brief filled in. We reply within 24 hours.",
    });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow={wantsTalent ? "Request a shortlist" : "Start a brief"}
          title={
            wantsTalent ? (
              <>Tell us who you're <span className="italic text-teal">hiring</span>.</>
            ) : (
              <>Tell us what you're <span className="italic text-teal">building</span>.</>
            )
          }
          description="Answer a few questions and we'll prepare the brief for you. Send it by email or WhatsApp, and we'll reply within a working day."
        />

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Builder */}
          <Reveal className="lg:col-span-7">
            <form onSubmit={onEmail} className="space-y-10">
              <fieldset>
                <legend className="text-sm font-medium text-black mb-4">What do you need? *</legend>
                <div className="flex flex-wrap gap-2">
                  {services.map((s) => {
                    const on = form.services.includes(s.title);
                    return (
                      <button
                        type="button"
                        key={s.slug}
                        aria-pressed={on}
                        onClick={() => toggleService(s.title)}
                        className={`rounded-full px-4 py-2.5 text-sm font-medium border transition-all duration-200 flex items-center gap-2 ${
                          on ? "bg-black text-white border-black" : "border-black/15 text-black/70 hover:border-black/40"
                        }`}
                      >
                        {on && <Check className="w-3.5 h-3.5 text-teal-glow" />}
                        {s.title}
                      </button>
                    );
                  })}
                </div>
              </fieldset>

              <div className="grid sm:grid-cols-2 gap-6">
                <Field label="Where are you in the project?">
                  <select className={inputCls} value={form.stage} onChange={(e) => set("stage", e.target.value)}>
                    <option value="">Select a stage</option>
                    {stages.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </Field>
                <Field label="When do you need it?">
                  <select className={inputCls} value={form.timeline} onChange={(e) => set("timeline", e.target.value)}>
                    <option value="">Select a timeline</option>
                    {timelines.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </Field>
              </div>

              <Field label="Rough budget (USD)">
                <div className="flex flex-wrap gap-2">
                  {budgets.map((b) => (
                    <button
                      type="button"
                      key={b}
                      aria-pressed={form.budget === b}
                      onClick={() => set("budget", form.budget === b ? "" : b)}
                      className={`rounded-full px-4 py-2 text-sm border transition-colors ${
                        form.budget === b ? "bg-teal text-white border-teal" : "border-black/15 text-black/70 hover:border-black/40"
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </Field>

              <div className="grid sm:grid-cols-2 gap-6">
                <Field label="Your name" required>
                  <input
                    required
                    className={inputCls}
                    value={form.name}
                    onChange={(e) => set("name", e.target.value)}
                    placeholder="Sam Mwangi"
                    autoComplete="name"
                  />
                </Field>
                <Field label="Email" required>
                  <input
                    required
                    type="email"
                    className={inputCls}
                    value={form.email}
                    onChange={(e) => set("email", e.target.value)}
                    placeholder="sam@company.com"
                    autoComplete="email"
                  />
                </Field>
              </div>

              <Field label="Company (optional)">
                <input
                  className={inputCls}
                  value={form.company}
                  onChange={(e) => set("company", e.target.value)}
                  placeholder="Company or project name"
                />
              </Field>

              <Field label="Tell us more">
                <textarea
                  rows={4}
                  className={`${inputCls} resize-y`}
                  value={form.message}
                  onChange={(e) => set("message", e.target.value)}
                  placeholder="Goals, who it's for, anything we should know..."
                />
              </Field>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="group flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-black hover:bg-teal text-white py-4 font-semibold transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Send by email
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-black/20 hover:border-[#25D366] hover:text-[#128C4B] text-black py-4 font-semibold transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Send on WhatsApp
                </a>
              </div>
            </form>
          </Reveal>

          {/* Live preview and contact details */}
          <Reveal delay={0.15} className="lg:col-span-5 space-y-8">
            <div className="rounded-3xl bg-black/[0.03] border border-black/10 p-7">
              <p className="eyebrow text-black/50 mb-4">Your brief, live</p>
              <pre className="whitespace-pre-wrap font-mono text-[13px] leading-relaxed text-black/75 min-h-[240px]">
                {brief}
              </pre>
            </div>

            <div className="space-y-2">
              <a href={`mailto:${site.email}`} className="flex items-center gap-4 p-4 -mx-4 rounded-2xl hover:bg-black/[0.04] transition-colors">
                <span className="w-11 h-11 rounded-full bg-teal/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-teal" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wider text-black/50">Email</span>
                  <span className="font-medium">{site.email}</span>
                </span>
              </a>
              <a href={`tel:${site.phoneTel}`} className="flex items-center gap-4 p-4 -mx-4 rounded-2xl hover:bg-black/[0.04] transition-colors">
                <span className="w-11 h-11 rounded-full bg-teal/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-teal" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wider text-black/50">Phone</span>
                  <span className="font-medium">{site.phoneDisplay}</span>
                </span>
              </a>
              <div className="flex items-center gap-4 p-4 -mx-4">
                <span className="w-11 h-11 rounded-full bg-teal/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-teal" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wider text-black/50">Presence</span>
                  <span className="font-medium">{site.presence}</span>
                </span>
              </div>
            </div>

            <p className="text-sm text-black/55 leading-relaxed border-t border-black/10 pt-6">
              Talent requests follow the same route. Mention the roles and the time zone overlap you need, and we'll
              send back a shortlist plan.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
