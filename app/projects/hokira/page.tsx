export default function HokiraPage() {
  return (
    <main className="min-h-screen bg-white text-black">

      {/* NAVIGATION */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-6 border-b border-black/10">
        <a
          href="/"
          className="text-xl font-bold tracking-tight"
        >
          FRANS
        </a>

        <a
          href="/"
          className="text-sm uppercase tracking-widest hover:opacity-50 transition"
        >
          ← Back to Work
        </a>
      </nav>


      {/* INTRO */}
      <section className="px-6 md:px-12 pt-20 pb-12">
        <p className="text-sm uppercase tracking-[0.3em] text-black/50 mb-6">
          AI Product Video
        </p>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight max-w-5xl">
          Hokira Fiber Biscuit
        </h1>

        <p className="mt-8 text-lg md:text-xl text-black/60 max-w-2xl leading-relaxed">
          AI-powered product advertising created to transform a simple
          product visual into an engaging social media advertisement.
        </p>
      </section>


      {/* HERO IMAGE */}
      <section className="px-6 md:px-12">
        <div className="overflow-hidden bg-black">
          <img
            src="/images/hokira.jpg"
            alt="Hokira Fiber Biscuit"
            className="w-full object-cover"
          />
        </div>
      </section>


      {/* PROJECT INFO */}
      <section className="px-6 md:px-12 py-20 border-b border-black/10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          <div>
            <p className="text-xs uppercase tracking-widest text-black/40">
              Project
            </p>
            <p className="mt-3 font-medium">
              Hokira Fiber Biscuit
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-black/40">
              Category
            </p>
            <p className="mt-3 font-medium">
              AI Product Advertisement
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-black/40">
              Role
            </p>
            <p className="mt-3 font-medium">
              AI Creative Designer
            </p>
          </div>

        </div>

      </section>


      {/* THE IDEA */}
      <section className="px-6 md:px-12 py-24">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-black/40">
              01 — The Idea
            </p>

            <h2 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight">
              From product image
              <br />
              to product story.
            </h2>
          </div>

          <div className="text-lg leading-relaxed text-black/60">
            <p>
              The goal was to create a product advertisement that feels
              natural, modern and visually engaging for social media.
            </p>

            <p className="mt-6">
              Instead of relying only on a static product image, AI was
              used to develop a visual concept that gives the product
              more presence and creates a stronger advertising experience.
            </p>
          </div>

        </div>

      </section>


      {/* VIDEO */}
      <section className="px-6 md:px-12 py-24 bg-black text-white">

        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.25em] text-white/40">
            02 — Final Output
          </p>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight">
            Product Film
          </h2>
        </div>

        <div className="max-w-5xl mx-auto bg-black">

          <video
            className="w-full"
            controls
            playsInline
            preload="metadata"
          >
            <source
              src="/videos/hokira.mp4"
              type="video/mp4"
            />

            Your browser does not support the video tag.
          </video>

        </div>

      </section>


      {/* CREATIVE PROCESS */}
      <section className="px-6 md:px-12 py-24">

        <p className="text-sm uppercase tracking-[0.25em] text-black/40">
          03 — Creative Process
        </p>

        <h2 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight">
          How it was created.
        </h2>


        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-16">

          <div>
            <span className="text-sm text-black/40">01</span>

            <h3 className="mt-4 text-xl font-semibold">
              Product Reference
            </h3>

            <p className="mt-4 text-black/60 leading-relaxed">
              The original Hokira product image was used as the main
              visual reference.
            </p>
          </div>


          <div>
            <span className="text-sm text-black/40">02</span>

            <h3 className="mt-4 text-xl font-semibold">
              Visual Concept
            </h3>

            <p className="mt-4 text-black/60 leading-relaxed">
              A suitable advertising environment and composition were
              developed around the product.
            </p>
          </div>


          <div>
            <span className="text-sm text-black/40">03</span>

            <h3 className="mt-4 text-xl font-semibold">
              AI Generation
            </h3>

            <p className="mt-4 text-black/60 leading-relaxed">
              AI tools were used to create and refine the visual
              elements and product presentation.
            </p>
          </div>


          <div>
            <span className="text-sm text-black/40">04</span>

            <h3 className="mt-4 text-xl font-semibold">
              Video Production
            </h3>

            <p className="mt-4 text-black/60 leading-relaxed">
              The final visuals were transformed into a short-form
              product advertisement.
            </p>
          </div>

        </div>

      </section>


      {/* TOOLS */}
      <section className="px-6 md:px-12 py-24 border-t border-black/10">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-black/40">
              04 — Tools & Skills
            </p>

            <h2 className="mt-6 text-4xl font-bold">
              Creative toolkit
            </h2>
          </div>

          <div className="text-lg text-black/60 space-y-3">
            <p>AI Image Generation</p>
            <p>AI Video Generation</p>
            <p>Product Advertising</p>
            <p>Prompt Engineering</p>
            <p>Visual Storytelling</p>
            <p>Short-form Content</p>
          </div>

        </div>

      </section>


      {/* NEXT PROJECT */}
      <section className="px-6 md:px-12 py-24 bg-black text-white">

        <p className="text-sm uppercase tracking-[0.25em] text-white/40">
          Next Project
        </p>

        <a
          href="/projects/youware"
          className="group block mt-8"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight group-hover:opacity-50 transition">
            Youware 450ml Tumbler →
          </h2>
        </a>

      </section>


      {/* FOOTER */}
      <footer className="px-6 md:px-12 py-10 flex flex-col md:flex-row justify-between gap-4 text-sm text-black/50">

        <p>
          © 2026 FRANS
        </p>

        <p>
          AI Creative Designer
        </p>

      </footer>

    </main>
  );
}