import MainPageContainer from "./components/MainPageContainer";

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
      <MainPageContainer className="h-[100vh] shape-2 flex flex-col justify-center items-center md:pt-32">
        <div className="hidden md:grid grid-cols-2 md:grid-cols-2 w-[70%] h-[50%] ">
          <div className="flex justify-center bg-background-primary opacity-80 hover:opacity-100 transition-opacity duration-300 ease-in-out">
            1
          </div>
          <div className="flex justify-center bg-background-primary opacity-80 hover:opacity-100 transition-opacity duration-300 ease-in-out">
            1
          </div>

          <div className="flex justify-center bg-background-primary opacity-80 hover:opacity-100 transition-opacity duration-300 ease-in-out">
            1
          </div>
          <div className="flex justify-center bg-background-primary opacity-80 hover:opacity-100 transition-opacity duration-300 ease-in-out">
            1
          </div>
        </div>
        <div className="flex md:hidden flex-col gap-8 w-[90%] h-[80%] ">
          <div className="flex h-full justify-center bg-background-primary opacity-80 hover:opacity-100 transition-opacity duration-300 ease-in-out">
            <p>asdfsdgjaklgasdgklh</p>
          </div>
          <div className="flex h-full justify-center bg-background-primary opacity-80 hover:opacity-100 transition-opacity duration-300 ease-in-out">
            asd
          </div>
          <div className="flex h-full justify-center bg-background-primary opacity-80 hover:opacity-100 transition-opacity duration-300 ease-in-out">
            asd
          </div>
          <div className="flex h-full justify-center bg-background-primary opacity-80 hover:opacity-100 transition-opacity duration-300 ease-in-out">
            asd
          </div>
        </div>
      </MainPageContainer>
      <MainPageContainer className="h-[100vh] shape-2">asdf</MainPageContainer>
      <MainPageContainer className="h-[100vh]">asdf</MainPageContainer>
    </div>
  );
}
