"use client";
import MainPageContainer from "./components/MainPageContainer";
import { CircleDollarSign, CogIcon, Timer, Wrench } from "lucide-react";
import RotatingCog from "./components/RotatingCog";
import ServicesGrid from "./components/ServicesGrid";
export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-[200vh]">
      <MainPageContainer className="h-[100vh] md:py-8">
        <div className="h-full w-full flex flex-col gap-8 justify-center md:justify-end md:pb-36 items-start px-4 ">
          <p className="base-text text-5xl font-light font-sans w-[70%]">
            Popravka <span className="text-primary">automatskih menjača</span>
            po
            <span className="text-secondary"> drugarskim cenama </span>
          </p>
          <p className="text-secondary-text w-[70%] font-sans ">
            Generate a website or landing page color scheme with two highlight
            colors. Adding color contrast can be a great way to grab the
            viewer's attention.
          </p>
        </div>
      </MainPageContainer>
      <MainPageContainer className="min-h-screen shape-2 flex flex-col justify-center items-center md:pt-32">
        <ServicesGrid />
      </MainPageContainer>
      <MainPageContainer className="h-[100vh] flex flex-col shape-2">
        <div className="flex-1 "></div>
        <div className="flex-1 bg-slate-800"></div>
      </MainPageContainer>
      <MainPageContainer className="h-[100vh] flex flex-col">
        <div className="flex-[2]">
          <RotatingCog className="w-32 h-32" />
        </div>
        <div className="flex-[3]">asdf</div>
      </MainPageContainer>
    </div>
  );
}
