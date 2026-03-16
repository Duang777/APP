const stats = [
  ['12', 'Editorial sections'],
  ['0', 'Rounded corners'],
  ['100ms', 'Interaction ceiling'],
  ['B/W', 'Entire visual palette'],
];

const features = [
  {
    title: 'Typography as structure',
    body: 'Oversized serif headlines carry hierarchy without leaning on color, gradients, or decorative noise.',
  },
  {
    title: 'Borders do the talking',
    body: 'Hairlines, thick rules, and sharp geometry replace shadows and faux depth with something cleaner and tougher.',
  },
  {
    title: 'Built for expansion',
    body: 'The repo starts with a reusable system so later pages inherit the same discipline instead of drifting into one-offs.',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="hero-shell section-rule relative overflow-hidden px-6 py-10 md:px-10 lg:px-14">
        <div className="mx-auto grid min-h-[88vh] max-w-7xl grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="label mb-6">MINIMALIST MONOCHROME / SYSTEM 01</p>
            <div className="mb-8 flex items-center gap-4">
              <span className="h-4 w-4 border-2 border-foreground" />
              <span className="h-1 w-24 bg-foreground md:w-40" />
            </div>
            <h1 className="font-display text-[4.5rem] leading-[0.9] tracking-[-0.06em] md:text-[8rem] lg:text-[11rem]">
              BLACK
              <br />
              MATTERS
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              A severe editorial interface language built from serif scale, sharp rules, inverted emphasis, and enough white space to make the whole thing breathe.
            </p>
          </div>

          <div className="lg:col-span-4">
            <div className="border-2 border-foreground bg-background p-6">
              <p className="label mb-4">CURRENT BUILD</p>
              <p className="text-2xl leading-tight">
                Repo scaffolded for a long-lived multi-page product, not a disposable pretty mockup.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a className="button-primary" href="#system">View system</a>
                <a className="button-secondary" href="#next">Next steps</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-rule bg-foreground px-6 py-16 text-background md:px-10 lg:px-14">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 xl:grid-cols-4">
          {stats.map(([value, label]) => (
            <div key={label} className="stat-block border-l-2 border-background pl-4">
              <div className="font-display text-5xl italic md:text-7xl">{value}</div>
              <div className="label mt-3 text-background/80">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="system" className="section-rule px-6 py-20 md:px-10 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="label mb-6">SYSTEM</p>
              <h2 className="font-display text-5xl leading-none tracking-[-0.05em] md:text-7xl">
                Form follows restraint.
              </h2>
            </div>
            <div className="lg:col-span-8">
              <p className="dropcap max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                Every part of the UI is being set up to obey the same strict grammar: monochrome palette, zero-radius geometry, serif-led hierarchy, line-based separation, and instant interactive feedback.
              </p>
              <div className="mt-12 grid gap-6 md:grid-cols-3">
                {features.map((feature) => (
                  <article key={feature.title} className="feature-card border border-foreground p-6 transition-colors duration-100 hover:bg-foreground hover:text-background">
                    <p className="label mb-4">0{features.indexOf(feature) + 1}</p>
                    <h3 className="font-display text-3xl leading-tight">{feature.title}</h3>
                    <p className="mt-4 text-base leading-relaxed text-inherit/80">{feature.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-rule px-6 py-20 md:px-10 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <p className="label mb-6">QUOTE</p>
            <blockquote className="relative border-t-4 border-foreground pt-8 font-display text-4xl italic leading-tight md:text-6xl">
              <span className="absolute -left-2 -top-6 text-8xl not-italic md:text-9xl">“</span>
              If the interface still looks strong after you remove color, shadow, and softness, the design probably had a spine to begin with.
            </blockquote>
          </div>
          <div id="next" className="lg:col-span-5">
            <div className="border-2 border-foreground p-6">
              <p className="label mb-4">NEXT</p>
              <ul className="space-y-4 text-lg leading-relaxed">
                <li>Build reusable layout and content primitives.</li>
                <li>Add more pages on the same token system.</li>
                <li>Keep the repo coherent instead of vibe-coding random screens.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
