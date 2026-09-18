export default function GoojodoqProject() {
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
          AI UGC Product Video
        </p>

        <h1 className="mt-6 max-w-5xl text-5xl font-bold leading-[0.95] md:text-8xl">
          Goojodoq
          <br />
          Turbo Fan
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-400">
          A realistic AI-generated UGC product video designed
          for social commerce and short-form content.
        </p>

      </section>


      {/* HERO IMAGE */}
      <section className="px-6 md:px-12">

        <div className="overflow-hidden bg-gray-900">

          <img
            src="/images/goojodoq.jpg"
            alt="Goojodoq Turbo Fan"
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
            Goojodoq Turbo Fan
          </p>
        </div>


        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
            Category
          </p>

          <p className="mt-3 text-lg">
            AI UGC
          </p>
        </div>


        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
            Deliverable
          </p>

          <p className="mt-3 text-lg">
            Social Commerce Video
          </p>
        </div>

      </section>


      {/* THE IDEA */}
      <section className="border-t border-gray-900 px-6 py-24 md:px-12">

        <div className="grid gap-16 md:grid-cols-2">

          <div>

            <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
              The Idea
            </p>

            <h2 className="mt-5 text-4xl font-bold md:text-6xl">
              Making product
              <br />
              content feel real.
            </h2>

          </div>


          <div className="max-w-xl text-gray-400">

            <p className="leading-relaxed">
              The concept was created as a natural UGC-style
              product demonstration for short-form social media.
            </p>

            <p className="mt-6 leading-relaxed">
              AI-generated hands, environment, lighting and
              camera movement were combined to create a
              realistic product experience while maintaining
              the original product appearance.
            </p>

          </div>

        </div>

      </section>


      {/* FINAL VIDEO */}
      <section className="border-t border-gray-900 px-6 py-24 md:px-12">

        <div className="mb-10">

          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            Final Output
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-6xl">
            UGC Product Video
          </h2>

        </div>


        <div className="overflow-hidden bg-gray-900">

          <video
            className="w-full"
            controls
            playsInline
            preload="metadata"
          >

            <source
              src="/videos/goojodoq.mp4"
              type="video/mp4"
            />

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
          From product
          <br />
          to UGC story.
        </h2>


        <div className="mt-16 grid gap-6 md:grid-cols-4">

          <div className="border border-gray-800 p-6">

            <p className="text-sm text-gray-500">
              01
            </p>

            <h3 className="mt-10 text-xl font-medium">
              Product Reference
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-gray-500">
              Original product image used as the visual
              reference.
            </p>

          </div>


          <div className="border border-gray-800 p-6">

            <p className="text-sm text-gray-500">
              02
            </p>

            <h3 className="mt-10 text-xl font-medium">
              UGC Environment
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-gray-500">
              Realistic home environment and hand interaction
              designed for social commerce.
            </p>

          </div>


          <div className="border border-gray-800 p-6">

            <p className="text-sm text-gray-500">
              03
            </p>

            <h3 className="mt-10 text-xl font-medium">
              AI Video
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-gray-500">
              Product interaction and camera movement
              generated with AI.
            </p>

          </div>


          <div className="border border-gray-800 p-6">

            <p className="text-sm text-gray-500">
              04
            </p>

            <h3 className="mt-10 text-xl font-medium">
              Final Edit
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-gray-500">
              Final pacing and presentation optimized for
              short-form social media.
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
            UGC Creative
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
          Hokira Fiber Biscuit →
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