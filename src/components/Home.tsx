import HomePageText from "../assets/HomePageText.png";
import HomePageGraphic from "../assets/HomePageGraphic.png";
import SponsorRedBull from "../assets/SponsorRedBull.png";
import SponsorForbes from "../assets/SponsorForbes.png";
import SponsorFortune from "../assets/SponsorFortune.png";
import EvolveText from "../assets/EvolveText.png";
import Btn from "./Btn";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

interface Props {
  setSelectedPage: (value: string) => void;
}

const Home = ({ setSelectedPage }: Props) => {
  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* Image and Main header */}
      <div className="md:flex w-5/6 items-center mx-auto justify-center md:h-full ">
        {/* Main Header */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* Heading */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="hidden md:flex absolute -top-20 -left-20 -z-10">
                <img src={EvolveText} alt="evolve-text" />
              </div>
              <img src={HomePageText} alt="home-page-text" />
            </div>

            <p className="mt-8 text-sm md:text-lg ">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
          </motion.div>
          {/* Actions */}
          <div className="mt-8 flex items-center gap-8">
            <Btn setSelectedPage={setSelectedPage}>Join Now</Btn>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage("contactus")}
              href="#contactus"
            >
              <p>Learn More</p>
            </AnchorLink>
          </div>
        </div>

        {/* Image */}
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 ">
          <img src={HomePageGraphic} alt="home-page-graphic" />
        </div>
      </div>
      {/* Sponsors */}
      <div className="hidden md:flex h-[150px] bg-primary-100 w-full gap-8 py-10">
        <div className="mx-auto w-5/6">
          <div className="flex w-3/5 justify-between items-center gap-8">
            <img src={SponsorRedBull} alt="redbull-sponsor" />
            <img src={SponsorForbes} alt="forbes-sponsor" />
            <img src={SponsorFortune} alt="fortune-sponsor" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
