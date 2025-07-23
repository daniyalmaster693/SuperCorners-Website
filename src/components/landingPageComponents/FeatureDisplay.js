import { Sparkle } from "lucide-react";

const features = [
  {
    title: "Additional Zones",
    description:
      "Trigger actions when moving your mouse the middle of any screen edge.",
    imgSrc: "https://dropoverapp.com/assets/images/tile-power-users.jpg",
  },
  {
    title: "Launch Apps",
    description: "Launch apps directly from corners and zones.",
    imgSrc: "https://dropoverapp.com/assets/images/tile-upload.jpg",
  },
  {
    title: "Run Shortcuts",
    description:
      "Trigger actions when moving your mouse the middle of any screen edge.",
    imgSrc: "https://dropoverapp.com/assets/images/settings.jpg",
  },
  {
    title: "Access System Commands",
    description: "Launch apps directly from corners and zones.",
    imgSrc: "https://dropoverapp.com/assets/images/tile-instant-actions.jpg",
  },
];

function FeatureDisplay() {
  return (
    <section className="bg-[#FFF] py-24 pb-16" id="features">
      <div className="max-w-sm sm:max-w-4xl lg:max-w-6xl mx-auto flex flex-col gap-20">
        <h2 className="tracking-tight font-bold text-center text-3xl lg:text-5xl lg:leading-[3.5rem]">
          More than just corners.
        </h2>

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
