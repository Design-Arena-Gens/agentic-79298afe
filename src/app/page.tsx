import Link from "next/link";
import {
  ArrowRight,
  Flame,
  Rocket,
  Sparkles,
  Target,
  Workflow,
  Zap,
  Quote,
  Palette,
  LineChart,
} from "lucide-react";

export default function Home() {
  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "Services", href: "#services" },
    { name: "Approach", href: "#approach" },
    { name: "Insights", href: "#insights" },
  ];

  const stats = [
    { label: "Experience crafted", value: "120+" },
    { label: "Conversion lift", value: "26%" },
    { label: "Retention boost", value: "3.2x" },
  ];

  const services = [
    {
      name: "Brand Momentum",
      description:
        "Narratives, identities, and launch campaigns engineered to create gravity around your brand.",
      icon: Sparkles,
      highlights: ["Narrative strategy", "Visual identity", "Campaign systems"],
    },
    {
      name: "Digital Products",
      description:
        "Web and product experiences that balance velocity, craft, and measurable business outcomes.",
      icon: Rocket,
      highlights: ["Product discovery", "Design & build", "Growth optimization"],
    },
    {
      name: "Lifecycle Marketing",
      description:
        "Lifecycle orchestration and automation that nurtures loyal customers and maximizes LTV.",
      icon: Workflow,
      highlights: ["CRM design", "Automation", "Experiment frameworks"],
    },
  ];

  const approach = [
    {
      step: "01 — Illuminate",
      title: "Find the signal in your story",
      detail:
        "We start with immersive workshops and research to uncover the momentum points hiding in your brand, product, and audience.",
    },
    {
      step: "02 — Design the spark",
      title: "Prototype experiences that convert",
      detail:
        "Strategy alchemists and product designers pair up to map journeys, validate hypotheses, and iterate rapidly alongside your team.",
    },
    {
      step: "03 — Scale the glow",
      title: "Ship, measure, and amplify impact",
      detail:
        "We launch with instrumentation in place, translate insights into experiments, and evolve the experience through compounding cycles.",
    },
  ];

  const testimonials = [
    {
      quote:
        "The Lumen team transformed how we position and deliver value. Our relaunch shipped in six weeks and conversions shot up overnight.",
      name: "Mara Chen",
      role: "VP Growth, Aether Labs",
    },
    {
      quote:
        "Working with them feels like adding an elite product squad. They obsess over the craft and the numbers in equal measure.",
      name: "Lewis Hart",
      role: "Founder, Orbit Analytics",
    },
  ];

  const insights = [
    {
      title: "Designing for the second glance",
      summary: "Micro-moments and motion principles that stop the scroll.",
    },
    {
      title: "Lifecycle blueprints for PLG teams",
      summary: "Building retention loops that compound from day one.",
    },
    {
      title: "Crafting narrative with data",
      summary: "Turning customer intelligence into resonant storytelling.",
    },
  ];

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute -top-32 right-20 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 top-96 hidden h-[28rem] w-[28rem] -rotate-12 border border-white/10 bg-white/5 blur-2xl lg:block" />

      <header className="sticky top-0 z-20 border-b border-white/10 bg-[rgba(5,5,16,0.7)] backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-emerald-400 text-lg font-semibold text-white shadow-lg shadow-violet-500/40">
              L
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
                Lumen Studio
              </p>
              <p className="text-xs text-white/60">
                Digital products & lifecycle storytelling
              </p>
            </div>
          </div>
          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="transition hover:text-white"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <Link
            href="#contact"
            className="hidden items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-sm font-medium text-white shadow-sm shadow-emerald-400/30 transition hover:bg-white/20 md:inline-flex"
          >
            Start a project
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </header>

      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-32 px-6 pb-24 pt-20">
        <section className="flex flex-col gap-16 lg:flex-row lg:items-center">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.22em] text-white/70">
              <Flame className="h-4 w-4 text-emerald-300" />
              <span>Creative acceleration studio</span>
            </div>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              We ignite luminous digital experiences that convert curiosity into
              conviction.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/70">
              Strategy, product design, and lifecycle storytelling woven
              together by a hybrid collective of researchers, designers, and
              growth engineers. We build movements, not just marketing.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="#contact"
                className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-emerald-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/40 transition hover:shadow-emerald-400/40"
              >
                Book a discovery call
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#work"
                className="inline-flex items-center gap-2 text-sm text-white/70 transition hover:text-white"
              >
                View our latest launch
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/20">
                  <Zap className="h-3.5 w-3.5" />
                </span>
              </Link>
            </div>
            <dl className="mt-10 grid gap-6 text-sm text-white/60 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-black/20 p-5 shadow-inner shadow-white/5"
                >
                  <dt className="uppercase tracking-widest text-xs text-white/50">
                    {stat.label}
                  </dt>
                  <dd className="mt-2 text-2xl font-semibold text-white">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative flex-1">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-violet-500/20 to-emerald-400/10 blur-2xl" />
            <div className="relative h-full min-h-[26rem] rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 shadow-2xl shadow-purple-600/30 backdrop-blur">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-white/50">
                <span>Pulse dashboard</span>
                <span>Live</span>
              </div>
              <div className="mt-10 flex gap-6">
                <div className="flex-1 space-y-6">
                  <article className="rounded-2xl border border-white/10 bg-black/30 p-5 shadow-lg shadow-black/20">
                    <div className="flex items-center gap-3 text-sm font-medium text-white/70">
                      <Target className="h-4 w-4 text-emerald-300" />
                      Growth trajectory
                    </div>
                    <p className="mt-3 text-3xl font-semibold text-white">
                      +218%
                    </p>
                    <p className="text-xs text-white/50">
                      Qualified conversions YoY after launch
                    </p>
                  </article>
                  <article className="rounded-2xl border border-white/10 bg-black/30 p-5 shadow-lg shadow-black/20">
                    <div className="flex items-center gap-3 text-sm font-medium text-white/70">
                      <Palette className="h-4 w-4 text-violet-300" />
                      Experience quality
                    </div>
                    <p className="mt-3 flex items-baseline gap-2 text-3xl font-semibold text-white">
                      94
                      <span className="text-xs font-medium text-white/50">
                        NPS
                      </span>
                    </p>
                    <p className="text-xs text-white/50">
                      Audience sentiment tracked post engagement
                    </p>
                  </article>
                </div>
                <div className="flex h-full flex-1 flex-col justify-between rounded-2xl border border-white/10 bg-black/30 p-5 shadow-lg shadow-black/20">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-white/50">
                      Signal map
                    </p>
                    <p className="mt-4 text-xl font-semibold text-white">
                      Stories aligned with intent
                    </p>
                    <p className="mt-2 text-xs text-white/50">
                      Each node represents a high-intent journey synced with
                      lifecycle cadence.
                    </p>
                  </div>
                  <div className="mt-6">
                    <div className="flex items-center justify-between text-xs text-white/50">
                      <span>Momentum</span>
                      <span>89%</span>
                    </div>
                    <div className="mt-2 h-2 rounded-full bg-white/10">
                      <div className="h-2 w-[89%] rounded-full bg-gradient-to-r from-emerald-400 to-violet-500" />
                    </div>
                    <div className="mt-8 flex items-center gap-3 text-xs text-white/60">
                      <div className="h-2 w-2 rounded-full bg-emerald-400" />
                      Launch cadence optimized
                    </div>
                    <div className="mt-2 flex items-center gap-3 text-xs text-white/60">
                      <div className="h-2 w-2 rounded-full bg-violet-400" />
                      Lifecycle orchestration deployed
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="space-y-10">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-white/50">
                Services
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                Strategy, product, and lifecycle — fused into one momentum team.
              </h2>
            </div>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.35em] text-white/60 transition hover:border-white/40 hover:text-white"
            >
              Build your custom roadmap
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.name}
                className="group relative flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.04] p-8 transition hover:border-white/20 hover:bg-white/[0.07]"
              >
                <service.icon className="h-8 w-8 text-emerald-300 transition group-hover:scale-110 group-hover:text-emerald-200" />
                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-white">
                    {service.name}
                  </h3>
                  <p className="mt-3 text-sm text-white/60">
                    {service.description}
                  </p>
                </div>
                <ul className="mt-6 space-y-2 text-xs text-white/50">
                  {service.highlights.map((point) => (
                    <li key={point} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet-400 to-emerald-400" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="approach" className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.35em] text-white/50">
              Approach
            </p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              An orchestration model built to uncover clarity and compound
              growth.
            </h2>
            <p className="text-base text-white/70">
              We partner deeply with product and revenue teams to transform
              insight into momentum. Each engagement merges brand, product, and
              lifecycle disciplines into one fluent crew.
            </p>
            <div className="mt-6 grid gap-4 rounded-3xl border border-white/10 bg-white/[0.05] p-6 sm:grid-cols-3">
              <div>
                <p className="text-3xl font-semibold text-white">72 hrs</p>
                <p className="text-xs text-white/50">
                  Time to first interactive prototype in our labs
                </p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-white">3 squads</p>
                <p className="text-xs text-white/50">
                  Strategist, designer, growth engineer embedded
                </p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-white">∞ loops</p>
                <p className="text-xs text-white/50">
                  Continuous feedback fused into experiments
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-lg shadow-purple-900/20">
            <h3 className="text-lg font-semibold text-white">Core believers</h3>
            <p className="mt-4 text-sm text-white/60">
              “Exceptional teams design systems, not just screens. We align
              leadership, build instrumentation, and deliver the narrative that
              makes growth inevitable.”
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-violet-500 text-lg font-semibold">
                E
              </div>
              <div>
                <p className="text-sm font-medium text-white">Eden Solace</p>
                <p className="text-xs text-white/50">
                  Founding Partner & Narrative Architect
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 rounded-3xl border border-white/10 bg-white/[0.03] p-10 lg:grid-cols-3">
          {approach.map((item) => (
            <article
              key={item.title}
              className="flex flex-col gap-4 rounded-2xl border border-white/5 bg-black/20 p-6"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                {item.step}
              </p>
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="text-sm text-white/60">{item.detail}</p>
            </article>
          ))}
        </section>

        <section id="work" className="space-y-12">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-white/50">
                Selected launch
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                Orbital. A SaaS launch built to magnetize product-led teams.
              </h2>
            </div>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-white/[0.08] px-5 py-2 text-sm font-medium text-white transition hover:bg-white/[0.12]"
            >
              Request full case study
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
            <article className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 shadow-lg shadow-purple-900/20">
              <div className="flex items-center gap-3 text-sm text-white/70">
                <LineChart className="h-5 w-5 text-emerald-300" />
                B2B SaaS · Product-led growth
              </div>
              <p className="mt-6 text-2xl font-semibold text-white">
                Rebuilt the entire activation flow around narrative-driven
                onboarding with real-time usage intelligence.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-white/60">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  42% reduction in time-to-value through interactive product
                  tours and intent-based support.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-violet-400" />
                  31% increase in expansion revenue via lifecycle experiments
                  and automated playbooks.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
                  Brand system extended to marketing, product, and investor
                  storytelling.
                </li>
              </ul>
            </article>
            <article className="flex flex-col justify-between gap-6 rounded-3xl border border-white/10 bg-white/[0.04] p-8">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-white/40">
                  Launch stack
                </p>
                <p className="mt-4 text-lg font-semibold text-white">
                  Figma design tokens, Next.js, Vercel, HubSpot, Amplitude, and
                  Retool automation.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                  Team
                </p>
                <p className="mt-3 text-sm text-white/60">
                  Product strategist, senior product designer, full-stack
                  engineer, lifecycle architect, performance analyst.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
            <div className="flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-white/40">
              <Quote className="h-5 w-5 text-emerald-300" />
              Testimonials
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {testimonials.map((testimonial) => (
                <blockquote
                  key={testimonial.name}
                  className="relative rounded-2xl border border-white/5 bg-black/20 p-6 text-sm text-white/70"
                >
                  <p>“{testimonial.quote}”</p>
                  <footer className="mt-4 text-xs uppercase tracking-[0.25em] text-white/40">
                    <p>{testimonial.name}</p>
                    <p className="mt-1 text-white/60">{testimonial.role}</p>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-emerald-500/30 bg-emerald-500/10 p-8 shadow-lg shadow-emerald-500/20">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-200">
              Insights lab
            </p>
            <ul className="mt-6 space-y-5 text-sm text-emerald-50/80">
              {insights.map((insight) => (
                <li key={insight.title} className="space-y-2 rounded-2xl border border-emerald-400/20 bg-emerald-500/10 p-4">
                  <p className="font-semibold text-emerald-100">
                    {insight.title}
                  </p>
                  <p className="text-xs text-emerald-100/70">{insight.summary}</p>
                </li>
              ))}
            </ul>
            <Link
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-xs uppercase tracking-[0.35em] text-white transition hover:bg-white/20"
            >
              Subscribe to the signal
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </section>

        <section
          id="contact"
          className="grid gap-10 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-10 lg:grid-cols-[1.2fr_1fr]"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-white/50">
              Let’s collaborate
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Tell us about the momentum you&apos;re chasing.
            </h2>
            <p className="mt-4 text-sm text-white/70">
              We curate partnerships each quarter. Share your challenge and
              we&apos;ll craft a dedicated squad to make it inevitable.
            </p>
            <form className="mt-8 grid gap-4">
              <div className="grid gap-2">
                <label
                  htmlFor="name"
                  className="text-xs uppercase tracking-[0.3em] text-white/50"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Avery Quinn"
                  className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-white/30 focus:outline-none"
                />
              </div>
              <div className="grid gap-2">
                <label
                  htmlFor="email"
                  className="text-xs uppercase tracking-[0.3em] text-white/50"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="avery@brand.com"
                  className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-white/30 focus:outline-none"
                />
              </div>
              <div className="grid gap-2">
                <label
                  htmlFor="challenge"
                  className="text-xs uppercase tracking-[0.3em] text-white/50"
                >
                  What do you want to create?
                </label>
                <textarea
                  id="challenge"
                  name="challenge"
                  rows={4}
                  placeholder="Launch a flagship product, increase activation, refresh our brand..."
                  className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-white/30 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 via-violet-500 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-400/30 transition hover:shadow-violet-500/30"
              >
                Send the signal
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
          <aside className="flex flex-col justify-between rounded-3xl border border-white/10 bg-black/30 p-8">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                Availability
              </p>
              <p className="mt-4 text-lg font-semibold text-white">
                Q3 waitlist opens July 15
              </p>
              <p className="mt-2 text-sm text-white/60">
                Three partnership slots reserved for climate, health, and
                frontier tech teams.
              </p>
            </div>
            <div className="mt-10 space-y-4 text-sm text-white/60">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                  Headquarters
                </p>
                <p className="mt-2">Remote-first across NYC · SF · London</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                  Studio hotline
                </p>
                <Link
                  href="mailto:hello@lumen.studio"
                  className="mt-2 inline-flex items-center gap-2 text-white transition hover:text-emerald-200"
                >
                  hello@lumen.studio
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </aside>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black/30 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Lumen Studio. Momentum for visionaries.</p>
          <div className="flex gap-5 text-xs uppercase tracking-[0.3em]">
            <Link href="#services" className="transition hover:text-white">
              Services
            </Link>
            <Link href="#work" className="transition hover:text-white">
              Work
            </Link>
            <Link href="#contact" className="transition hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
