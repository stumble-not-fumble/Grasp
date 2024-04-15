import "../css/aboutus.css";
import gabriella from "../img/gabriella.png";
import zach from "../img/zach.png";
import ian from "../img/ian.png";
import mia from "../img/mia.png";
import druth from "../img/druth.png";

const AboutUs = () => {
  return (
    <div className="about_us_content">
      <div className="relative overflow-hidden bg-white">
        <div className="pb-90 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="heading">About Us</h1>
              <p className="paragraph mt-4 text-xl">
                We are four seniors at the University of Washington who have
                come together with a common goal of enhanc the registration
                process for students interested in or currently enrolled in the
                Informatics major. Our website aims to facilitate an informed
                decision-making process for UW students when selecting courses,
                enabling them to acquire a comprehensive understanding of course
                content and requirements, leading to fewer dropped classes and
                stressful scheduling conflicts.
              </p>
            </div>
            <div>
              <div className="mt-10">
                {/* <!-- Decorative image grid --> */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={zach}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          ></img>
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={mia}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          ></img>
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={druth}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          ></img>
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={ian}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          ></img>
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={gabriella}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          ></img>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
