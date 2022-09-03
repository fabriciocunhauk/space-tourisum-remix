import LayoutContainer from "~/components/layout-container/LayoutContainer";
import background from "../../public/assets/home/background-home-desktop.jpg";

export default function Home() {
  return (
    <LayoutContainer image={background}>
      <div className="flex flex-wrap justify-around w-screen mt-40">
        <div className="text-primary">
          <p className="text-secondary text-3xl font-Barlow-Condensed font-light leading-8">
            SO, YOU WANT TO TRAVEL TO
          </p>
          <h1 className="text-9xl font-Bellefair leading-normal">SPACE</h1>
          <p className="text-secondary text-left font-Barlow w-96 leading-6">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="w-96 h-96 mt-20 bg-primary flex items-center justify-center rounded-full hover:w-flex  hover:bg-opacity-5  bg-opacity-0 ease-in-out duration-500">
          <button className="bg-primary w-64 h-64 rounded-full flex items-center justify-center">
            <p className="text-3xl font-Bellefair">EXPLORE</p>
          </button>
        </div>
      </div>
    </LayoutContainer>
  );
}
