export default function YouwareProject() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* NAVIGATION */}
      <nav className="flex items-center justify-between px-6 py-8 md:px-12">
        <a
          href="/"
          className="text-sm font-bold tracking-[0.25em]"
        >
          FRANS
        </a>

        <a
          href="/"
          className="text-sm text-gray-400 transition hover:text-white"
        >
          ← Back to Work
        </a>
      </nav>


      {/* PROJECT INTRO */}
      <section className="px-6 pb-20 pt-16 md:px-12 md:pt-24">

        <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
          AI Product Video
        </p>

        <h1 className="mt-6 max-w-5xl text-5xl font-bold leading-[0.95] md:text-8xl">
          Youware
          <br />
          450ml Tumbler
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-400">
          A premium AI-generated product advertisement created
          for social commerce and digital marketing.
        </p>

      </section>


      {/* HERO IMAGE */}
      <section className="px-6 md:px-12">

        <div className="overflow-hidden bg-gray-900">
          <img
            src="/images/youware.jpg"
            alt="Youware 450ml Tumbler"
            className="h-auto w-full object-cover"
          />
        </div>

      </section>


      {/* PROJECT INFO */}
      <section className="grid gap-10 px-6 py-20 md:grid-cols-3 md:px-12">

        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
            Project
          </p>

          <p className="mt-3 text-lg">
            Youware 450ml Tumbler
          </p>
        </div>


        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
            Category
          </p>

          <p className="mt-3 text-lg">
            AI Product Advertisement
          </p>
        </div>


        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
            Deliverable
          </p>

          <p className="mt-3 text-lg">
            Social Media Video
          </p>
        </div>

      </section>


      {/* ABOUT */}
      <section className="border-t border-gray-900 px-6 py-24 md:px-12">

        <div className="grid gap-16 md:grid-cols-2">

          <div>

            <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
              The Idea
            </p>

            <h2 className="mt-5 text-4xl font-bold md:text-6xl">
              Turning a product
              <br />
              into a story.
            </h2>

          </div>


          <div className="max-w-xl text-gray-400">

            <p className="leading-relaxed">
              The project started from a simple product image.
              The goal was to transform the tumbler into a premium
              visual advertisement designed for social media.
            </p>

            <p className="mt-6 leading-relaxed">
              AI-generated environments, lighting and camera
              movement were used to create a realistic product
              experience while preserving the original product
              identity.
            </p>

          </div>

        </div>

      </section>


      {/* VIDEO PLACEHOLDER */}
      <section className="border-t border-gray-900 px-6 py-24 md:px-12">

        <div className="mb-10">

          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            Final Output
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-6xl">
            Product Film
          </h2>

        </div>


        <div className="overflow-hidden bg-gray-900">
  <video
    className="w-full"
    controls
    playsInline
    preload="metadata"
  >
    <source src="/videos/youware.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

        </div>

      </section>


      {/* CREATIVE PROCESS */}
      <section className="border-t border-gray-900 px-6 py-24 md:px-12">

        <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
          Creative Process
        </p>

        <h2 className="mt-5 text-4xl font-bold md:text-6xl">
          From image
          <br />
          to product film.
        </h2>


        <div className="mt-16 grid gap-6 md:grid-cols-4">

          {/* STEP 01 */}
          <div className="border border-gray-800 p-6">

            <p className="text-sm text-gray-500">
              01
            </p>

            <h3 className="mt-10 text-xl font-medium">
              Product Reference
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-gray-500">
              Original product image used as the primary
              visual reference.
            </p>

          </div>


          {/* STEP 02 */}
          <div className="border border-gray-800 p-6">

            <p className="text-sm text-gray-500">
              02
            </p>

            <h3 className="mt-10 text-xl font-medium">
              AI Environment
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-gray-500">
              AI-generated environments, lighting and
              composition designed around the product.
            </p>

          </div>


          {/* STEP 03 */}
          <div className="border border-gray-800 p-6">

            <p className="text-sm text-gray-500">
              03
            </p>

            <h3 className="mt-10 text-xl font-medium">
              AI Video
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-gray-500">
              Product movement and cinematic camera
              animation generated with AI.
            </p>

          </div>


          {/* STEP 04 */}
          <div className="border border-gray-800 p-6">

            <p className="text-sm text-gray-500">
              04
            </p>

            <h3 className="mt-10 text-xl font-medium">
              Final Editing
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-gray-500">
              Final pacing, sound, transitions and
              social-media-ready composition.
            </p>

          </div>

        </div>

      </section>


      {/* TOOLS */}
      <section className="border-t border-gray-900 px-6 py-24 md:px-12">

        <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
          Tools & Skills
        </p>

        <div className="mt-8 flex flex-wrap gap-3">

          <span className="border border-gray-800 px-5 py-3 text-sm">
            AI Image Generation
          </span>

          <span className="border border-gray-800 px-5 py-3 text-sm">
            AI Video Generation
          </span>

          <span className="border border-gray-800 px-5 py-3 text-sm">
            Prompt Engineering
          </span>

          <span className="border border-gray-800 px-5 py-3 text-sm">
            Creative Direction
          </span>

          <span className="border border-gray-800 px-5 py-3 text-sm">
            Video Editing
          </span>

        </div>

      </section>


      {/* NEXT PROJECT */}
      <section className="border-t border-gray-900 px-6 py-24 md:px-12">

        <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
          Next Project
        </p>

        <a
          href="/"
          className="mt-6 block text-4xl font-bold transition hover:text-gray-400 md:text-7xl"
        >
          Goojodoq Turbo Fan →
        </a>

      </section>


      {/* FOOTER */}
      <footer className="border-t border-gray-900 px-6 py-10 md:px-12">

        <div className="flex flex-col justify-between gap-4 md:flex-row">

          <p className="text-sm text-gray-500">
            © 2026 FRANS
          </p>

          <a
            href="/"
            className="text-sm text-gray-500 transition hover:text-white"
          >
            Back to Home
          </a>

        </div>

      </footer>

    </main>
  );
}