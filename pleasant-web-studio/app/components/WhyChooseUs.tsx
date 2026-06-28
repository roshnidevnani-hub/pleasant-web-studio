const features = [
  {
    title: "Modern Design",
    description: "Beautiful interfaces built with the latest design trends.",
    icon: "✨",
  },
  {
    title: "Fast Performance",
    description: "Optimized websites that load quickly on every device.",
    icon: "⚡",
  },
  {
    title: "Mobile Responsive",
    description: "Looks perfect on phones, tablets and desktops.",
    icon: "📱",
  },
  {
    title: "SEO Ready",
    description: "Built with clean code and search engine optimization.",
    icon: "🔍",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Why Choose Us?</h2>

          <p className="mt-4 text-gray-600">
            We create websites that are fast, modern and built to grow your
            business.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl bg-white p-8 shadow transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-4 text-5xl">{feature.icon}</div>

              <h3 className="mb-3 text-2xl font-semibold">
                {feature.title}
              </h3>

              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}