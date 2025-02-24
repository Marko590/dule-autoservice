"use client";
import { Mail, MapPin, Phone } from "lucide-react";
import MainPageContainer from "./components/MainPageContainer";
import ServicesGrid from "./components/ServicesGrid";
import MapComponent from "./components/MapComponent";
import AnimatedButton from "./components/AnimatedButton";
import Image from "next/image";
import { motion } from "framer-motion";
import CogTitle from "./components/CogTitle";
import AnimatedParagraph from "./components/AnimatedParagraph";
import ContactInfo from "./components/ContactInfo";
export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-[200vh]">
      <MainPageContainer>
        <div className="h-full w-full flex flex-col justify-end items-center">
          <div className="flex-grow flex items-center justify-center">
            <h1 className="base-text text-5xl p-4 xl:text-7xl font-light font-sans pt-16">
              Maintenance of
              <span className="text-primary"> automatic transmissions </span>
              at
              <span className="text-secondary"> affordable prices </span>
            </h1>
          </div>
          <div className="w-full flex justify-center  mb-12">
            <h2 className="text-secondary-text w-[90%] font-sans text-md lg:text-xl text-center md:text-left">
              Our auto repair shop specializes in the repair and maintenance of
              automatic transmissions. We provide reliable services to ensure
              your vehicle runs smoothly.
            </h2>
          </div>
          <div className="flex w-full justify-center gap-8 mb-16">
            <AnimatedButton text="Call" icon={<Phone />} animationType="ping" />
            <AnimatedButton
              text="Location"
              icon={<MapPin />}
              animationType="bounce"
            />
          </div>
        </div>
      </MainPageContainer>
      <MainPageContainer className="shape-2 flex justify-center items-center ">
        <ServicesGrid />
      </MainPageContainer>
      <MainPageContainer className="flex flex-col shape-2 order-4 md:order-3">
        <div className="flex-1">
          <div className="flex flex-col items-center p-6">
            <CogTitle title="Contact" />
            <div className="flex flex-col items-start gap-8 mt-16">
              <ContactInfo text="+381-65-456-28-46" icon={<Phone />} />
              <ContactInfo
                text="Emanuela Laskera 24, Belgrade"
                icon={<MapPin />}
              />
              <ContactInfo text="dusan.trajkovic@gmail.com" icon={<Mail />} />
            </div>
          </div>
        </div>
        <div className="flex-1 p-8">
          <MapComponent />
        </div>
      </MainPageContainer>
      <MainPageContainer className="flex flex-col order-3 md:order-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, type: "spring" }}
          viewport={{ once: true }}
          className="flex-[1] relative"
        >
          <Image
            className="md:p-8 object-contain md:object-cover"
            src="/orange-car.webp"
            layout="fill"
            alt="Orange-car"
          />
        </motion.div>
        <div className="flex-[1] flex flex-col items-center gap-2 p-8 pt-0">
          <span className="base-text text-4xl font-sans">About us</span>
          <div className="flex flex-col gap-4 md:gap-8">
            <AnimatedParagraph>
              At <span className="text-primary">{"Dule's Repair Shop"}</span>,
              we specialize in
              <span className="text-secondary">
                automatic transmission repair
              </span>
              , ensuring smooth and reliable performance for your vehicle.
            </AnimatedParagraph>

            <AnimatedParagraph>
              Whether you need transmission servicing, repairs, or a complete
              rebuild, we use the latest tools and high-quality parts to keep
              your car running flawlessly.
            </AnimatedParagraph>
            <AnimatedParagraph>
              Visit us for professional and affordable automatic gearbox repair
              in <span className="text-primary">Belgrade, Miljakovac 3 </span>
              and get back on the road with confidence!
            </AnimatedParagraph>
          </div>
        </div>
      </MainPageContainer>
    </div>
  );
}
