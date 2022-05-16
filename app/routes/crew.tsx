import LayoutContainer from "~/components/LayoutContainer/LayoutContainer";
import background from "../../public/assets/crew/background-crew-desktop.jpg";

const crew = () => {
  return (
    <LayoutContainer image={background}>
      <div className="w-screen h-screen">
        <h1 className="text-slate-500 text-5xl">Space Tourism </h1>
      </div>
    </LayoutContainer>
  );
};

export default crew;
