import { AboutMe } from "@/components/AboutMe";
import { Banner } from "@/components/Banner";
import { Services } from "@/components/Services";

export default function Home() {
    return(
        <>
            <Banner />
            <Services />
            <AboutMe />
        </>
    );
}