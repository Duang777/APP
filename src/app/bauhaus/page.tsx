import Link from 'next/link';

const stats = [
  { value: '24', label: 'Modules aligned', shape: 'circle', tone: 'bg-[#D02020]' },
  { value: '3', label: 'Primary colors only', shape: 'square', tone: 'bg-[#1040C0]' },
  { value: '8px', label: 'Max hard shadow', shape: 'diamond', tone: 'bg-[#F0C020]' },
  { value: '1920s', label: 'Poster energy', shape: 'triangle', tone: 'bg-white' },
];

const features = [
  {
    title: 'Constructed hierarchy',
    body: 'Headlines, blocks, and dividers are composed like a poster rather than stacked like a template.',
    tone: 'bg-[#D02020] text-white',
    mark: 'circle',
  },
  {
    title: 'Geometric utility',
    body: 'Buttons, cards, and section shells use thick borders and hard shadows so every interaction feels mechanical and deliberate.',
    tone: 'bg-white text-[#121212]',
    mark: 'square',
  },
  {
    title: 'System before surface',
    body: 'This page is built to live inside the repo cleanly, so future views can reuse the same compositional grammar instead of improvising chaos.',
    tone: 'bg-[#F0C020] text-[#121212]',
    mark: 'triangle',
  },
];

const steps = [
  'Map a grid, then break it on purpose.',
  'Assign each section one dominant color plane.',
  'Use shadow and translation as physical feedback.',
  'Let typography behave like architecture, not decoration.',
];

const posts = [
  { title: 'Poster logic for product pages', shape: 'rounded-none', tone: 'bg-[#1040C0]' },
  { title: 'Why hard shadows still work', shape: 'rounded-full', tone: 'bg-[#F0C020]' },
  { title: 'Bauhaus isn\'t retro if the system is real', shape: 'rounded-none', tone: 'bg-[#D02020]' },
];

function Shape({ type, className = '' }: { type: 'circle' | 'square' | 'triangle' | 'diamond'; className?: string }) {
  if (type === 'circle') return <span className={`block rounded-full ${className}`} />;
  if (type === 'triangle') return <span className={`block [clip-path:polygon(50%_0%,0%_100%,100%_100%)] ${className}`} />;
  if (type === 'diamond') return <span className={`block rotate-45 ${className}`} />;
  return <span className={`block ${className}`} />;
}

function SectionTitle({ eyebrow, title, body, invert = false }: { eyebrow: string; title: string; body: string; invert?: boolean }) {
  return (
    <div className="max-w-3xl">
      <p className={`bauhaus-label mb-4 ${invert ? 'text-white' : 'text-[#121212]'}`}>{eyebrow}</p>
      <h2 className={`font-[Outfit] text-4xl font-black uppercase leading-[0.9] tracking-[-0.06em] sm:text-6xl lg:text-7xl ${invert ? 'text-white' : 'text-[#121212]'}`}>
        {title}
      </h2>
      <p className={`mt-5 max-w-2xl text-lg font-medium leading-relaxed ${invert ? 'text-white/85' : 'text-[#121212]/80'}`}>{body}</p>
    </div>
  );
}

export default function BauhausPage() {
  return (
    <main className="min-h-screen bg-[#F0F0F0] text-[#121212] [font-family:Outfit,sans-serif]">
      <section className="border-b-4 border-black px-4 py-5 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Shape type="circle" className="h-5 w-5 bg-[#D02020] border-2 border-black" />
            <Shape type="square" className="h-5 w-5 bg-[#1040C0] border-2 border-black" />
            <Shape type="triangle" className="h-5 w-5 bg-[#F0C020] border-2 border-black" />
            <span className="bauhaus-label">Bauhaus System 02</span>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm font-bold uppercase tracking-[0.18em]">
            <Link href="/" className="bauhaus-chip">Monochrome</Link>
            <a href="#features" className="bauhaus-chip">Features</a>
            <a href="#journal" className="bauhaus-chip">Journal</a>
          </div>
        </div>
      </section>

      <section className="border-b-4 border-black px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-12 lg:items-stretch">
          <div className="space-y-8 lg:col-span-7">
            <p className="bauhaus-label">New page / built inside existing Next.js repo</p>
            <h1 className="max-w-4xl text-5xl font-black uppercase leading-[0.88] tracking-[-0.07em] sm:text-7xl lg:text-[8.5rem]">
              Form.
              <br />
              Color.
              <br />
              Structure.
            </h1>
            <p className="max-w-2xl text-lg font-medium leading-relaxed sm:text-xl">
              A Bauhaus landing page built as a second visual system inside the same codebase—poster-like, geometric, blunt, and maintainable instead of being a one-off art dump.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#system" className="bauhaus-button bg-[#D02020] text-white">Inspect system</a>
              <a href="#cta" className="bauhaus-button bg-white text-black">Open next phase</a>
            </div>
          </div>

          <div className="relative min-h-[28rem] overflow-hidden border-4 border-black bg-[#1040C0] shadow-[8px_8px_0px_0px_black] lg:col-span-5">
            <div className="absolute -right-10 top-8 h-40 w-40 rounded-full border-4 border-black bg-[#F0C020]" />
            <div className="absolute left-8 top-14 h-32 w-32 rotate-45 border-4 border-black bg-white" />
            <div className="absolute bottom-10 left-1/2 h-48 w-48 -translate-x-1/2 border-4 border-black bg-[#D02020]" />
            <div className="absolute bottom-16 left-1/2 h-24 w-24 -translate-x-1/2 [clip-path:polygon(50%_0%,0%_100%,100%_100%)] bg-[#F0C020]" />
            <div className="absolute inset-x-0 bottom-0 border-t-4 border-black bg-white/90 px-6 py-5 backdrop-blur-0">
              <p className="bauhaus-label mb-2">Constructivist panel</p>
              <p className="max-w-xs text-lg font-bold uppercase leading-tight">Shapes overlap. Borders stay loud. Nothing is polite.</p>
            </div>
            <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(#fff 2px, transparent 2px)', backgroundSize: '20px 20px' }} />
          </div>
        </div>
      </section>

      <section className="border-b-4 border-black bg-[#F0C020] px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-0 border-4 border-black bg-[#F0C020] lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="border-b-4 border-black p-6 last:border-b-0 lg:border-b-0 lg:border-r-4 lg:last:border-r-0">
              <div className="mb-6 flex h-16 items-center">
                <Shape type={stat.shape as 'circle' | 'square' | 'triangle' | 'diamond'} className={`h-14 w-14 border-4 border-black ${stat.tone}`} />
              </div>
              <div className="text-5xl font-black uppercase tracking-[-0.06em]">{stat.value}</div>
              <p className="mt-3 max-w-[14rem] text-base font-bold uppercase leading-snug">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="system" className="border-b-4 border-black bg-[#F0F0F0] px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionTitle
              eyebrow="System"
              title="Built like a composition, not a stack."
              body="The repo already had a monochrome route. This second route keeps the codebase clean while letting the visual language swing hard in a different direction. Same stack, different discipline."
            />
          </div>
          <div id="features" className="grid gap-6 md:grid-cols-2 lg:col-span-7 lg:grid-cols-3">
            {features.map((feature, index) => (
              <article
                key={feature.title}
                className={`group relative border-4 border-black p-6 shadow-[8px_8px_0px_0px_black] transition duration-200 ease-out hover:-translate-y-1 ${feature.tone}`}
              >
                <div className="mb-10 flex items-start justify-between gap-4">
                  <span className="bauhaus-label">0{index + 1}</span>
                  <Shape type={feature.mark as 'circle' | 'square' | 'triangle'} className="h-5 w-5 border-2 border-black bg-white group-hover:scale-110" />
                </div>
                <h3 className="text-3xl font-black uppercase leading-none tracking-[-0.05em]">{feature.title}</h3>
                <p className="mt-4 text-base font-medium leading-relaxed opacity-85">{feature.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b-4 border-black bg-[#D02020] px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <SectionTitle
              eyebrow="Method"
              title="The grid exists so you can break it with intent."
              body="Bauhaus works when it feels engineered, not messy. So the code keeps strong primitives—container rhythm, section dividers, reusable chips and buttons—even while the visuals punch harder."
              invert
            />
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step} className="relative border-4 border-black bg-white p-5 shadow-[6px_6px_0px_0px_black] transition duration-200 hover:-translate-y-1">
                <div className="mb-8 flex items-center justify-between">
                  <div className={`flex h-14 w-14 items-center justify-center border-4 border-black bg-[#F0C020] text-xl font-black ${index % 2 === 0 ? 'rotate-45' : ''}`}>
                    <span className={index % 2 === 0 ? '-rotate-45' : ''}>{index + 1}</span>
                  </div>
                  <Shape type={index === 1 ? 'triangle' : index === 2 ? 'diamond' : 'circle'} className={`h-6 w-6 border-2 border-black ${index === 1 ? 'bg-[#1040C0]' : index === 2 ? 'bg-[#D02020]' : 'bg-[#F0C020]'}`} />
                </div>
                <p className="text-base font-bold uppercase leading-snug">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="journal" className="border-b-4 border-black bg-[#1040C0] px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Journal"
            title="Color blocks can still carry content."
            body="So instead of dumping a bland three-card blog row, this section uses alternating geometry, grayscale imagery, and thick frames to keep the poster language alive."
            invert
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {posts.map((post, index) => (
              <article key={post.title} className="group border-4 border-black bg-white p-4 text-[#121212] shadow-[8px_8px_0px_0px_black] transition duration-200 hover:-translate-y-2">
                <div className={`relative mb-5 h-52 overflow-hidden border-4 border-black ${post.shape}`}>
                  <div className={`absolute inset-0 ${post.tone}`} />
                  <div className="absolute inset-0 bg-[radial-gradient(#ffffff_2px,transparent_2px)] [background-size:20px_20px] opacity-30" />
                  <div className="absolute inset-0 grayscale transition duration-300 group-hover:grayscale-0">
                    <div className="absolute -left-6 top-6 h-24 w-24 rounded-full border-4 border-black bg-white/90" />
                    <div className="absolute right-5 top-5 h-20 w-20 rotate-45 border-4 border-black bg-[#F0F0F0]/90" />
                    <div className="absolute bottom-5 left-1/2 h-24 w-24 -translate-x-1/2 [clip-path:polygon(50%_0%,0%_100%,100%_100%)] border-4 border-black bg-white/90" />
                  </div>
                </div>
                <p className="bauhaus-label mb-3">Field note 0{index + 1}</p>
                <h3 className="text-2xl font-black uppercase leading-tight">{post.title}</h3>
                <p className="mt-4 text-base font-medium leading-relaxed text-[#121212]/75">Geometric treatments, hard borders, and asymmetry keep the section from collapsing into generic SaaS filler.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="cta" className="relative overflow-hidden bg-[#F0C020] px-4 py-14 sm:px-6 md:py-20 lg:px-8 lg:py-24">
        <div className="absolute -left-16 top-10 h-44 w-44 rounded-full border-4 border-black bg-white/50" />
        <div className="absolute -right-10 bottom-10 h-40 w-40 rotate-45 border-4 border-black bg-[#D02020]/50" />
        <div className="mx-auto grid max-w-7xl gap-8 border-4 border-black bg-[#F0F0F0] p-8 shadow-[8px_8px_0px_0px_black] lg:grid-cols-12 lg:items-center lg:p-10">
          <div className="lg:col-span-8">
            <p className="bauhaus-label mb-4">Final CTA</p>
            <h2 className="text-4xl font-black uppercase leading-[0.9] tracking-[-0.06em] sm:text-6xl lg:text-7xl">Now the repo has two very different visual systems and neither one is generic.</h2>
            <p className="mt-5 max-w-3xl text-lg font-medium leading-relaxed text-[#121212]/80">Next move is simple: keep expanding this as a proper page library, or pick one route and evolve it into the product shell. Either way, the system has actual bones now.</p>
          </div>
          <div className="flex flex-wrap gap-4 lg:col-span-4 lg:justify-end">
            <a href="https://github.com/Duang777/APP" className="bauhaus-button bg-[#121212] text-white">View repo</a>
            <Link href="/" className="bauhaus-button bg-white text-black">Back home</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
