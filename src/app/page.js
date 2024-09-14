import Banner from "@/components/Banner";
import Funds from "@/components/Funds";
import Portfolio from "@/components/Portfolio";
import Slogan from "@/components/Slogan";
import Team from "@/components/Team";

export default function Home() {
  return (
    <>
      <Banner />
      <Slogan />
      <Funds />
      <Portfolio />
      <Team />
    </>
  );
}
