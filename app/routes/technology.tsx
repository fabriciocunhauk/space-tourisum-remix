import LayoutContainer from "~/components/layout-container/LayoutContainer";
import background from "../../public/assets/technology/background-technology-desktop.jpg";

export default function Technology() {
  return (
    <LayoutContainer image={background}>
      <div className="w-screen h-screen">
        <h1 className="text-slate-500 text-5xl">Space</h1>
      </div>
    </LayoutContainer>
  );
}
