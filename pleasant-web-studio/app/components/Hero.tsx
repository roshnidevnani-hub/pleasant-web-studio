import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-linear-to-b from-white to-blue-50">
      <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-between gap-12 px-6 py-20 md:flex-row">

        {/* Left Side */}
        <div className="max-w-xl">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            🚀 Professional Website Development
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight md:text-6xl">
            We Build
            <span className="text-blue-600"> Beautiful </span>
            Websites
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            We create modern, responsive and high-performance websites
            that help businesses grow online.
          </p>

          <div className="mt-10 flex gap-4">

            <Link
              href="#contact"
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Get Started
            </Link>

            <Link
              href="#portfolio"
              className="rounded-lg border border-gray-300 px-6 py-3 font-semibold hover:bg-gray-100"
            >
              View Portfolio
            </Link>

          </div>

        </div>

        {/* Right Side */}

        <div className="flex justify-center">

          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900"
            alt="Developer Workspace"
            className="w-full max-w-lg rounded-3xl shadow-2xl"
          />

        </div>

      </div>
    </section>
  );
}