export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="flex items-center justify-between px-8 py-6">
        <h1 className="text-2xl font-bold text-cyan-400">
          Pleasant Web Studio 🚀
        </h1>

        <button className="rounded-full bg-cyan-500 px-6 py-3 font-semibold hover:bg-cyan-400">
          Contact Us
        </button>
      </nav>

      <section className="mx-auto flex max-w-7xl flex-col items-center justify-center px-8 py-32 text-center">
        <h2 className="mb-6 text-6xl font-extrabold leading-tight">
          We Build Websites
          <br />
          That Grow Businesses
        </h2>

        <p className="mb-10 max-w-2xl text-xl text-gray-300">
          Pleasant Web Studio creates premium websites that are fast,
          beautiful, mobile-friendly, and designed to help businesses grow.
        </p>

        <div className="flex gap-6">
          <button className="rounded-full bg-cyan-500 px-8 py-4 text-lg font-bold hover:bg-cyan-400">
            Get Started
          </button>

          <button className="rounded-full border border-cyan-500 px-8 py-4 text-lg hover:bg-cyan-500 hover:text-black">
            View Portfolio
          </button>
        </div>
      </section>
    </main>
  );
}
