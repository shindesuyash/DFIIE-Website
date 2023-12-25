import React from "react";
import MainLayout from "../layout/Main.layout";
import { Helmet } from "react-helmet";
import news1 from "../components/images/World-Entrepreneurship-Day.png";
import news2 from "../components/images/Idea-To-Enterprise.png";
import news3 from "../components/images/facdev.jpg";
import news4 from "../components/images/vadke.jpg";
import Image from "../components/Image";
import augustVolume1 from "../components/images/augustVolume1.png";
import september1 from "../components/images/newsletter-2.png";
import october1 from "../components/images/newsletter-3.jpg";
import Adv from '../components/images/Adv.jpg'
import { FaArrowCircleRight } from "react-icons/fa";


const NewsAndAnnouncement = () => {
  const newsletter = [
    {
      img: augustVolume1,
      newslettername: "DFIIE Newsletter Volume-1 (August 2023)",
      path: "https://drive.google.com/file/d/1gTJvO6KE4LEj8th1Ez4UeOlm2eernEGl/view",
    },
    {
      img: september1,
      newslettername: "DFIIE Newsletter Volume-2 (September 2023)",
      path: "https://drive.google.com/file/d/1GxjI95QYpRbfkj6FbQ9mtqfx0MF9uIOy/view?usp=sharing",
    },
    {
      img: october1,
      newslettername: "DFIIE Newsletter Volume-3 (October 2023)",
      path: "https://drive.google.com/file/d/1JRsBTCOVpIGyENdAdLqn9PN-7h8JLo5f/view?usp=sharing",
    },



  ];

  return (
    <>
      <Helmet>
        <title>News & Announcement | DFIIE</title>
      </Helmet>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center py-2.5 rounded-xl lg:w-10/12 w-11/12">
          <h1 className="text-center font-semibold text-3xl py-2.5">Events</h1>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="border p-2 shadow rounded">
              <a href={news3} target="_blank" rel="noreferrer">
                <Image
                  src={news3}
                  width={"100%"}
                  alt="World Enterpreneurship Day"
                />
              </a>
              <p className="pt-1.5" style={{ textAlign: "justify" }}>
                DFIIE, Lonere Organized <b>Faculty Orientation Programme</b> for the Faculty Members of University and Affiliated Institutions to create awareness about the Various employment and Startup Opportunities for their Students from 16th-18th October, 2023 at Dr. BATU Lonere
              </p>
            </div>
            <div className="border p-2 shadow rounded">
              <a href={news4} target="_blank" rel="noreferrer">
                <Image
                  src={news4}
                  width={"100%"}
                  alt="World Enterpreneurship Day"
                />
              </a>
              <p className="pt-1.5" style={{ textAlign: "justify" }}>
                DFIIE, Lonere Organized Workshop on <b>How to go for Startup and Entrepreneurship</b> on 10th October 2023, at Dr. Babasaheb Ambedkar Technological University, Lonere. More than 200 participants attended the Programme.
              </p>
            </div>
            <div className="border p-2 shadow rounded">
              <a href={news1} target="_blank" rel="noreferrer">
                <Image
                  src={news1}
                  width={"100%"}
                  alt="World Enterpreneurship Day"
                />
              </a>
              <p className="pt-1.5" style={{ textAlign: "justify" }}>
                DFIIE, Lonere celebrated World Entrepreneurship Day on{" "}
                <b>21st August 2023</b>, at Dr. Babasaheb Ambedkar Technological
                University, Lonere. More than 200 participants
                attended the programme.
              </p>
            </div>
            <div className="border p-2 shadow rounded">
              <a href={news2} target="_blank" rel="noreferrer">
                <Image
                  src={news2}
                  width={"100%"}
                  alt="World Enterpreneurship Day"
                />
              </a>
              <p className="pt-1.5" style={{ textAlign: "justify" }}>
                DFIIE, Lonere has conducted <b>One Day Orientation Programme for Startups</b>
                at Government College of Engineering, Aurangabad. More than 60
                aspiring startups and faculty members were
                attended the programme.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center py-2.5 rounded-xl lg:w-10/12 w-11/12">
          <h1 className="text-center font-semibold text-3xl py-2.5">
            Newsletter
          </h1>
          <div className="grid sm:grid-cols-3 md:grid-cols-5 gap-4">
            {newsletter.map((item, index) => {
              return (

                <div className="border p-2 shadow rounded">
                  <a href={item.path} target="_blank" rel="noreferrer">
                    <Image
                      key={index}
                      src={item.img}
                      width={"100%"}
                      alt="August Volume 1"
                    />
                  </a>
                  <a href={item.path} className="newsletter-text" style={{ cursor: "pointer" }}>
                    <p className="pt-1.5">{item.newslettername}</p>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
        <div className="py-6 md:px-12 px-6 rounded-xl lg:w-10/12 w-11/12">
          <div className="text-center font-semibold text-3xl py-2.5">Announcement</div>

          <div className='flex flex-column items-center gap-6'>
            <div>
              <FaArrowCircleRight />
            </div>
            <a href="https://drive.google.com/file/d/18VzuyCMBqrJL3_7tgsgoqhbBLG7BUtfb/view?usp=drive_link" target="_blank" rel="noreferrer">
              {/* <img src={Adv} alt="Description" style={{ width: '400px', height: '280px' }} /> */}

              <h2><b>Advertisement for the Post of
                Incubation Manager and Accounts Officer</b></h2>
            </a>

          </div>
          <div className='flex flex-column items-center gap-6'>
            <div>
              <FaArrowCircleRight />
            </div>
            <a href="https://drive.google.com/file/d/1mspNY1rMqHe6RqcSF5vI6PjWZo_4RZm1/view?usp=drive_link" target="_blank" rel="noreferrer">
              {/* <img src={Adv} alt="Description" style={{ width: '400px', height: '280px' }} /> */}
              <h2><b>List of Shortlisted Candidates for Interview for the Post of Incubation Manager and Accounts Officer at DBATU Forum of Innovation, Incubation & Enterprise</b></h2>
            </a>
          </div>


        </div>

      </div>
    </>
  );
};

export default MainLayout(NewsAndAnnouncement);
