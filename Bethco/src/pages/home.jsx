import Blogs from "../components/Home/Blogs";
import Description from "../components/Home/Description";
import Gallery from "../components/Home/Gallery";
import HeroSection from "../components/Home/Hero";
import Programs from "../components/Home/Programs";
import Projects from "../components/Home/Projects";
import Partners from "./Partners";
import Map from "../components/Home/Map";
import FoundingMembers from "../components/Home/Memeber";
import GetInvolved from "../components/Home/GetInvlolved";
import TargetGroups from "../components/Home/TargetGroups";

function Home() {
  return (
    <>
      <HeroSection />
      <Description />
      <Programs />
      <Projects />
      <Blogs />
      <Gallery />
      <Partners />
      <Map />
      <FoundingMembers />
      <GetInvolved />
      <TargetGroups />
    </>
  );
}

export default Home;
