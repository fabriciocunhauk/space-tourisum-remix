import LayoutContainer from "~/components/LayoutContainer/LayoutContainer";
import background from "../../public/assets/technology/background-technology-desktop.jpg";

const technology = () => {
  return (
    <LayoutContainer image={background}>
      <div className="w-screen h-screen">
        <h1 className="text-slate-500 text-5xl">Space</h1>
      </div>
    </LayoutContainer>
  );
};

export default technology;
