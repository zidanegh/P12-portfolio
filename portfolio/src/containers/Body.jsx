import Caroussel from "../components/Caroussel";
import APropos from "../components/APropos";

export default function Body() {
  return (
    <>
      <main>
        <APropos />
        <div id="projet">
          <Caroussel />
        </div>
      </main>
    </>
  );
}
