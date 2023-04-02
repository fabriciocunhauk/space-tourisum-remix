import LayoutContainer from "~/components/layout-container/LayoutContainer";
import background from "../../public/assets/launch/background-technology-desktop.jpg";
import { Navbar } from "~/components/navbar/Navbar";
import Container from "~/components/Container/Container";

export default function Launch() {
  return (
    <LayoutContainer image={background} className="text-white">
      <Navbar />
      <Container>
        <h1>Launch</h1>
      </Container>
    </LayoutContainer>
  );
}
