"use client";
import { Mail, MapPin, Phone } from "lucide-react";
import MainPageContainer from "./components/MainPageContainer";
import RotatingCog from "./components/RotatingCog";
import ServicesGrid from "./components/ServicesGrid";
import MapComponent from "./components/MapComponent";
import AnimatedButton from "./components/AnimatedButton";
export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-[200vh]">
      <MainPageContainer className="h-[100vh]">
        <div className="h-full w-full flex flex-col justify-end items-center">
          <p className="base-text text-4xl md:text-5xl font-light font-sans w-full text-center mb-16">
            Maintenance of{" "}
            <span className="text-primary"> automatic transmissions </span>
            at
            <span className="text-secondary"> affordable prices </span>
          </p>
          <div className="w-full flex justify-center  mb-12 ">
            <p className="text-secondary-text w-[70%] font-sans text-center md:text-left">
              Our auto repair shop specializes in the repair and maintenance of
              automatic transmissions. With a team of skilled technicians and
              state-of-the-art equipment, we provide reliable services to ensure
              your vehicle runs smoothly.
            </p>
          </div>
          <div className="flex w-[100%] justify-center gap-8 mb-16">
            <AnimatedButton text="Call" icon={<Phone />} animationType="ping" />
            <AnimatedButton
              text="Location"
              icon={<MapPin />}
              animationType="bounce"
            />
          </div>
        </div>
      </MainPageContainer>
      <MainPageContainer className="min-h-screen shape-2 flex flex-col justify-center items-center ">
        <ServicesGrid />
      </MainPageContainer>
      <MainPageContainer className="h-[100vh] flex flex-col shape-2 order-4 md:order-3">
        <div className="flex-1 ">
          <div className="relative flex-[1] flex flex-col items-center p-6">
            <span className="base-text font-sans text-4xl">Contact</span>
            <div className="absolute flex top-16 left-0 right-0 justify-center items-start">
              <RotatingCog className="w-10 h-10 mx-[-4px]" />
              <RotatingCog className="w-10 h-10 mx-[-4px]" reverse />
              <RotatingCog className="w-10 h-10 mx-[-4px]" />
              <RotatingCog className="w-10 h-10 mx-[-4px]" reverse />
              <RotatingCog className="w-10 h-10 mx-[-4px]" />
            </div>
            <div className="flex flex-col items-start gap-8 mt-16">
              <div>
                <span className="flex base-text gap-4 font-sans items-center text-xl md:text-2xl font-light">
                  <Phone className="w-4 h-4 md:w-8 md:h-8" />
                  +38165-456-28-46
                </span>
              </div>
              <div>
                <span className="flex base-text gap-4 font-sans items-center text-xl md:text-2xl font-light">
                  <MapPin className="w-4 h-4  md:w-8 md:h-8" />
                  Emanuela Laskera 24, Belgrade
                </span>
              </div>
              <div>
                <span className="flex base-text gap-4 font-sans items-center text-xl md:text-2xl font-light">
                  <Mail className="w-4 h-4  md:w-8 md:h-8" />
                  dusan.trajkovic@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-slate-800">
          <MapComponent />
        </div>
      </MainPageContainer>
      <MainPageContainer className="h-[100vh] flex flex-col order-3 md:order-4">
        <div className="flex-[1]">asdf</div>
      </MainPageContainer>
    </div>
  );
}
