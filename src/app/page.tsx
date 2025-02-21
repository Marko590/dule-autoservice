"use client";
import { MapPin, Phone } from "lucide-react";
import MainPageContainer from "./components/MainPageContainer";
import RotatingCog from "./components/RotatingCog";
import ServicesGrid from "./components/ServicesGrid";
import { motion } from "framer-motion";
import MapComponent from "./components/MapComponent";
export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-[200vh]">
      <MainPageContainer className="h-[100vh]">
        <div className="h-full w-full flex flex-col justify-end items-center">
          <p className="base-text text-4xl md:text-5xl font-light font-sans w-full text-center mb-16">
            Popravka <span className="text-primary">automatskih menjača </span>
            po
            <span className="text-secondary"> drugarskim cenama </span>
          </p>
          <div className="w-full flex justify-center  mb-16 ">
            <p className="text-secondary-text w-[70%] font-sans text-center md:text-left">
              Generate a website or landing page color scheme with two highlight
              colors. Adding color contrast can be a great way to grab the
              viewer's attention.
            </p>
          </div>
          <div className="flex w-[100%] justify-center gap-8 mb-24">
            <button className="group flex items-center gap-2 w-[40%] justify-center border-primary border-2 px-6 py-2 text-primary-text rounded-3xl font-sans text-l uppercase transition-all duration-300 hover:bg-primary hover:scale-110">
              <motion.div className="group-hover:animate-ping">
                <Phone className="w-6 h-6" />
              </motion.div>
              Call
            </button>
            <button className=" group flex items-center gap-2 w-[40%] justify-center border-2 border-primary px-6 py-2 text-primary-text text-l rounded-3xl font-sans uppercase transition-all duration-300 hover:bg-primary hover:scale-110">
              <motion.div className="group-hover:animate-bounce">
                <MapPin className="w-6 h-6" />
              </motion.div>{" "}
              Location
            </button>
          </div>
        </div>
      </MainPageContainer>
      <MainPageContainer className="min-h-screen shape-2 flex flex-col justify-center items-center ">
        <ServicesGrid />
      </MainPageContainer>
      <MainPageContainer className="h-[100vh] flex flex-col shape-2 order-4 md:order-3">
        <div className="flex-1 ">
          <div className="relative flex-[1] flex justify-center p-6">
            <span className="base-text font-sans text-4xl">Contact</span>
            <div className="absolute flex top-16 left-0 right-0 justify-center items-start">
              <RotatingCog className="w-10 h-10 mx-[-4px]" />
              <RotatingCog className="w-10 h-10 mx-[-4px]" reverse />
              <RotatingCog className="w-10 h-10 mx-[-4px]" />
              <RotatingCog className="w-10 h-10 mx-[-4px]" reverse />
              <RotatingCog className="w-10 h-10 mx-[-4px]" />
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
