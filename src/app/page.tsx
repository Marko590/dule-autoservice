import MainPageContainer from "./components/MainPageContainer";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-[180vh]">
      <MainPageContainer className="h-[90vh] py-8">
        <div className="h-full w-full flex flex-col gap-8 justify-center pt-32 items-center pr-18">
          <p className="base-text text-5xl font-light font-sans w-[60%]">
            Two color web-site <span className="text-primary">color</span>
            <span className="text-secondary"> palette </span>generator
          </p>
          <p className="text-secondary-text w-[60%] font-sans ">
            Generate a website or landing page color scheme with two highlight
            colors. Adding color contrast can be a great way to grab the
            viewer's attention.
          </p>
        </div>
      </MainPageContainer>
      <MainPageContainer className="h-[90vh] shape-2">asdf</MainPageContainer>
      <MainPageContainer className="h-[90vh] shape-1">asdf</MainPageContainer>
      <MainPageContainer className="h-[90vh]">asdf</MainPageContainer>
    </div>
  );
}
