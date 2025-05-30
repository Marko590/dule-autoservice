import React from "react";
import MainPageContainer from "../components/MainPageContainer";
const serviceCategories = [
  {
    title: "Automatic Transmission Service",
    description:
      "Keep your DSG, CVT, or automatic gearbox in top shape with oil changes, filter replacements, and full overhauls for smooth, reliable performance.",
  },
  {
    title: "Transmission Diagnostics & Fault Detection",
    description:
      "Experiencing gear slipping, rough shifts, or warning lights? Our advanced diagnostics pinpoint issues fast, preventing costly repairs.",
  },
  {
    title: "DSG & Automatic Gearbox Repair",
    description:
      "From mechatronics and clutch replacements to full rebuilds, we restore DSG, ZF, and automatic transmissions to peak performance.",
  },
  {
    title: "Performance Tuning & Software Upgrades",
    description:
      "Enhance your shifting speed, fuel efficiency, and transmission response with DSG tuning, torque increases, and software remaps for a smoother drive.",
  },
];

const Page = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-full">
      <MainPageContainer>
        <div className="flex-1">2</div>
      </MainPageContainer>
      <MainPageContainer className="shape-2">
        <div className="flex h-full w-full justify-center items-center">
          <div className="h-[75%] w-[75%] grid grid-cols-1 md:grid-cols-2 gap-4">
            {serviceCategories.map((service) => (
              <div className="cursor-pointer rounded-xl flex flex-col gap-8 h-full self-start p-4 bg-background-primary overflow-auto hover:scale-105 transition-all duration-300 ease-in-out">
                <span className="font-sans text-xl text-center text-primary">
                  {service.title}
                </span>
                <p className="text-l">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </MainPageContainer>
    </div>
  );
};

export default Page;
