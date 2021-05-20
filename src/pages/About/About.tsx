import React from "react";
import Title from "../../components/Title/Title";
import CoverPic1 from "../../images/CoverPictures/cover-pic1.png";
import CoverPic2 from "../../images/CoverPictures/cover-pic2.png";
import CoverPic3 from "../../images/CoverPictures/cover-pic3.png";
import CoverPic4 from "../../images/CoverPictures/cover-pic4.png";
import FullFrontPic from "../../images/CoverPictures/full-cover.png";
import { Global } from "./About.styles";

const About: React.FC = () => {
  return (
    <>
      <Global />
      <Title title="about" />
      <main>
        <div className="about-cover-pictures">
          <img src={CoverPic1} alt="cover pic1" />
          <img src={CoverPic2} alt="cover pic2" />
          <img src={CoverPic3} alt="cover pic3" />
          <img src={CoverPic4} alt="cover pic4" />
        </div>
        <div className="about-intro">
          <p>
            Launched a decade ago with the wish to fully embrace her ever
            growing audience into her fascinating journey, Lana has since turned
            her joy for fashion with TheGlamandGlitter into one of the most
            popular blog of her generation. Inspired by the strong women of her
            life; her mother, her sister and her grandmother, who have seen her
            growth from an aspiring pharmaceutical student to a successful
            entrepreneur at the head of her premium eyewear brand, has been
            recognized in the last few years as a charismatic figure in the
            fashion industry, empowering thousands of people around the world
            with her self confidence and refined sense of aesthetic.
            <br /> <br />
            Known as a style ambassador for the worlds most iconic fashion
            brands, Tamara has made TheGlamandGlitter an exciting place where
            she showcases her daily fashion discoveries ; from her powerful
            looks du Jour and her Oh-so glamorous fashion week front row reports
            to her personalised online shopping selections.
          </p>
        </div>
        <div className="full-cover-pic">
          <img src={FullFrontPic} alt="full cover pic" />
        </div>
        <Title title="recent achievements" />
        <div className="achievements">
          <ul>
            <li>
              OCT 14 -Project with <span>Kenzo</span> perfume in Paris
            </li>
            <li>
              FEB 15 – Exclusive Fashion Week report for <span>TheOutnet</span>
            </li>
            <li>
              FEB 17– Project with <span>Dior</span> Makeup in LA
            </li>
            <li>
              AUG 16 – <span>Michael Kors</span> readytowear shooting in New
              York
            </li>
          </ul>
          <ul>
            <li>
              NOV 17 – <span>Elle Style Awards</span> Influencer of the Year
              Award
            </li>
            <li>
              AUG 18 – <span>Omega</span> shooting in St-Petersburg
            </li>
            <li>
              SEP 18 – Fashion Editorial for <span>Harpers Bazaar</span>
            </li>
            <li>
              DEC 18 – <span>UNICEF</span> Campaign by{" "}
              <span>Louis Vuitton</span>
            </li>
          </ul>
          <ul>
            <li>
              NOV 19 – Experience with <span>Christian Louboutin</span> Beauté
              in Paris
            </li>
            <li>
              DEC 19 – <span>Lancôme</span> shooting with <span>Harrod’s</span>
            </li>
            <li>
              DEC 19 – <span>British Fashion Awards</span> with{" "}
              <span>Swarovski</span>
            </li>
            <li>
              DEC 19 – Experience with <span>La Mer</span> at Vals Thermal Bath
            </li>
          </ul>
        </div>
        <div className="comment-section"></div>
      </main>
    </>
  );
};

export default About;
