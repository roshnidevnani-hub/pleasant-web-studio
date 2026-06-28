export default function Services() {
  const services = [
    {
      title: "Website Development",
      description:
        "Fast, responsive and modern websites built using Next.js and React.",
      icon: "💻",
    },
    {
      title: "UI / UX Design",
      description:
        "Beautiful interfaces designed to improve user experience and conversions.",
      icon: "🎨",
    },
    {
      title: "SEO Optimization",
      description:
        "Improve your Google ranking with optimized and high-performance websites.",
      icon: "📈",
    },
  ];

  return (
    <section
      id="services"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Our Services
          </h2>

          <p className="mt-4 text-gray-600">
            Everything you need to grow your business online.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-gray-200 p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-6 text-5xl">
                {service.icon}
              </div>

              <h3 className="mb-4 text-2xl font-semibold">
                {service.title}
              </h3>

              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}