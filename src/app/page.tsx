import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

import { AboutMe } from "@/components/AboutMe";
import { Banner } from "@/components/Banner";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";

export default function Home() {
    return(
        <>
            <Banner />
            <Services />
            <AboutMe />
            <Projects />
            <Experience />
            <Footer />

            <Tooltip id="my-tooltip" style={{ color: "#F9F9F9", background: "#00DF5E" }} />
        </>
    );
}