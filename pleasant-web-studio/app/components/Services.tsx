import {
  Monitor,
  Palette,
  Search,
} from "lucide-react";

const services = [
  {
    title: "Website Development",
    description:
      "Fast, responsive and scalable websites built with modern technologies.",
    icon: Monitor,
  },
  {
    title: "UI / UX Design",
    description:
      "Clean, beautiful interfaces that improve user engagement and conversions.",
    icon: Palette,
  },
  {
    title: "SEO Optimization",
    description:
      "Technical SEO that helps your website rank higher on Google.",
    icon: Search,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-white py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="font-semibold text-blue-600">
            OUR SERVICES
          </span>

          <h2 className="mt-4 text-5xl font-bold">
            Digital solutions designed to
            <span className="text-blue-600"> grow your business.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            We build premium websites focused on speed,
            performance and user experience.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-3xl border border-gray-200 bg-white p-10 transition duration-300 hover:-translate-y-3 hover:shadow-2xl"
              >
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 transition group-hover:bg-blue-600">
                  <Icon
                    size={30}
                    className="text-blue-600 group-hover:text-white"
                  />
                </div>

                <h3 className="mb-4 text-2xl font-semibold">
                  {service.title}
                </h3>

                <p className="leading-7 text-gray-600">
                  {service.description}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}