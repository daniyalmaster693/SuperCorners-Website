import { Sparkle } from "lucide-react";

const features = [
  {
    title: "Additional Zones",
    description:
      "Go beyond the default corners and trigger actions when moving your mouse the middle of any screen edge for even greater control.",
    imgSrc: "https://dropoverapp.com/assets/images/tile-power-users.jpg",
  },
  {
    title: "Launch Apps",
    description:
      "Open your favorite apps instantly with a simple flick to a corner or zone. It’s never been faster to get started.",
    imgSrc: "https://dropoverapp.com/assets/images/tile-upload.jpg",
  },
  {
    title: "Run Shortcuts",
    description:
      "Unleash the power of Apple Shortcuts from any zone. Automate routines, control settings, and streamline tasks effortlessly.",
    imgSrc: "https://dropoverapp.com/assets/images/settings.jpg",
  },
  {
    title: "Access System Commands",
    description:
      "Trigger useful system commands such as Toggle Dark Mode, Keep Awake, or Minimize All Windows with a quick flick to stay focused without digging through menus.",
    imgSrc: "https://dropoverapp.com/assets/images/tile-instant-actions.jpg",
  },
  {
    title: "Built in Tools",
    description:
      "Useful tools are right at your finger tips. Open a counter, a floating note window, a powerful natural language calculator, a color picker, text extractor and more instantly.",
    imgSrc: "https://dropoverapp.com/assets/images/tile-upload.jpg",
  },
];

function FeatureDisplay() {
  return (
    <section className="bg-[#FFF] py-24 pb-16" id="features">
      <h2 className="tracking-tight font-bold text-center text-3xl lg:text-5xl lg:leading-[3.5rem]">
        More than just corners.
      </h2>
      <p className="text-center text-gray-700 font-medium text-lg lg:text-xl mt-2">
        Choose from 88 different actions, with more being added in every update.
      </p>

      <div className="max-w-sm sm:max-w-4xl lg:max-w-6xl mx-auto flex flex-col gap-20 mt-20">
        {features.map((feature, i) => (
          <div
            key={feature.title}
            className={`flex items-center gap-24 ${
              i % 2 === 1 ? "flex-row-reverse" : "flex-row"
            }`}
          >
            <img
              src={feature.imgSrc}
              alt={feature.title}
              className="w-[460px] h-[320px] rounded-[2rem] flex-shrink-0"
            />
            <div className="flex-1 max-w-2xl">
              <h3 className="text-3xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-700 break-words leading-relaxed text-med">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeatureDisplay;
