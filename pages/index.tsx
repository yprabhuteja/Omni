import type { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import blogComments from "../public/svg/blog-comments.svg";
import blogCreatedBy from "../public/svg/blog-created-by.svg";
import blogCreatedOn from "../public/svg/blog-created-on.svg";
import blogImage1 from "../public/svg/blog-image-1.svg";
import blogImage2 from "../public/svg/blog-image-2.svg";
import blogImage3 from "../public/svg/blog-image-3.svg";
import capabilities from "../public/svg/capabilities.svg";
import quote from "../public/svg/doublequote.svg";
import face1 from "../public/svg/face1.svg";
import face2 from "../public/svg/face2.svg";
import face3 from "../public/svg/face3.svg";
import greatResults from "../public/svg/great-results.svg";
import grow from "../public/svg/grow.svg";
import highestRankings from "../public/svg/highest-rankings.svg";
import image1 from "../public/svg/image1.svg";
import image2 from "../public/svg/image2.svg";
import image3 from "../public/svg/image3.svg";
import image4 from "../public/svg/image4.svg";
import image5 from "../public/svg/image5.svg";
import image6 from "../public/svg/image6.svg";
import service1 from "../public/svg/service1.svg";
import service2 from "../public/svg/service2.svg";
import service3 from "../public/svg/service3.svg";
import service4 from "../public/svg/service4.svg";
import service5 from "../public/svg/service5.svg";
import service6 from "../public/svg/service6.svg";
import star from "../public/svg/star.svg";
import strategies from "../public/svg/strategies.svg";
import tick from "../public/svg/tick.svg";
import topExperts from "../public/svg/top-experts.svg";
import working from "../public/svg/working.svg";

const Home: NextPage = () => {
  return (
    <div className="home">
      <Home1></Home1>
      <Home2></Home2>
      <Home3></Home3>
      <Home4></Home4>
      <Home5></Home5>
      <Home6></Home6>
      <Home7></Home7>
      {/* <Home8></Home8> */}
      <Home9></Home9>
    </div>
  );
};

export default Home;

const Home1 = () => (
  <section className="home3 section-content">
    <div className="content">
      <h1>
        Choose <span className="highlight">What Matters</span> To Your Business
        & Your Customers.
      </h1>
      <h6>
        We are a creative digital services agency that empowers businesses with
        world class insights based on current market research, personalised
        platforms and customer behaviours which are needed to continuously and
        rapidly evolve your business to perform beyond expectations.
      </h6>
      <button className="red-button ">Contact Us</button>
    </div>
    <span>
      <Image alt="none" src={working}></Image>
    </span>
  </section>
);

const Home2 = () => (
  <section className="home2">
    <p className="highlight">Our Services</p>
    <h2>What We Do</h2>
    <div className="boxes">
      <Home2Box
        icon={service3}
        number="01"
        title="Graphic Design"
        subtitle="Mobile App, Website"
        content="First impression is always a lasting one. With that in mind, our Design team offers graphics and designs which are visually appealing and grabs attention. We design potential graphics which will surely catch the eye in the online world and will convey relevant and meaningful information without any trade-off on the quality of the design."
      ></Home2Box>
      <Home2Box
        icon={service6}
        number="02"
        title="Digital Marketing"
        subtitle="Mobile App, Website"
        content="Let our digital marketing team help you develop an online marketing strategy specially equipped to drive visitors to your site and convert those visitors into leads and sales.Our tailor made digital strategies are designed for maximum reach.We make sure your digital presence is enhanced by each passing day, because it's not just humans who need to improve themselves on a daily basis."
      ></Home2Box>
      <Home2Box
        icon={service2}
        number="03"
        title="Game Design"
        subtitle="Mobile App, Website"
        content={`"I have an idea about this amazing Game which is much newer than what's currently on the market, but I need someone to help me with the designing phase". 
        If this is you, then we have you covered. Our team offers the best services to design your concept and is not limited to any single platform. Our designers are quite proficient to generate graphics and build logics that are both portable and scalable.
        `}
      ></Home2Box>
      <Home2Box
        icon={service5}
        number="04"
        title="App Development"
        subtitle="Mobile App, Website"
        content="We develop apps on different platforms including Android,IOS among others.If you are unsure about the platform,fret not. Our analysts can help you to understand the platforms to target and choose a suitable development framework accordingly. After the initial affirmations,we provide end-to-end development of  different mobile apps. Right from the initial analysis,covering UI/UX design and all the way to testing and deployment to the online world."
      ></Home2Box>
      <Home2Box
        icon={service4}
        number="05"
        title="Web Design"
        subtitle="Mobile App, Website"
        content="If leaving a lasting impression on your clientele is the question, then our specialized web development services are the solution. We use only the most promising and state-of-the-art optimization techniques complimented with advanced languages to deliver high quality websites for our clients."
      ></Home2Box>
      <Home2Box
        icon={service1}
        number="06"
        title="UX Design"
        subtitle="Mobile App, Website"
        content="We prioritize a clear design process that meets deadlines and delivers the end result on time. Our teams are solely focussed on developing projects that provide the best and most importantly meaningful experience to the users."
      ></Home2Box>
    </div>
  </section>
);

const Home2Box = ({
  icon,
  number,
  title,
  subtitle,
  content,
}: {
  number: string;
  icon: any;
  title: string;
  subtitle: string;
  content: string;
}) => {
  const [more, setMore] = useState(true);
  const threshold = 200;
  return (
    <div className="box">
      <div className="header">
        <Image alt="none" src={icon}></Image>
        <p>{number}</p>
      </div>
      <div className="content">
        <h3>{title}</h3>
        <h6>{subtitle}</h6>
        <h6>
          {more ? (
            <>
              {`${content.substring(0, threshold)}...`}
              <span>
                <a
                  style={{ textDecoration: "underline" }}
                  onClick={() => setMore(!more)}
                >
                  &nbsp;read more
                </a>
              </span>
            </>
          ) : (
            content
          )}
        </h6>
      </div>
    </div>
  );
};
const Home3 = () => (
  <section className="home3 section-content">
    <div className="content">
      <p className="highlight">About Us</p>
      <h2>
        <span className="highlight">Grow</span> Your Business With Our Agency
      </h2>
      <h6>
        We are a Digital Agency on a journey to perfect the Digital World. We
        combine the best of technologies with the finest and dedicated team to
        craft timeless experiences for the Market Leaders.
      </h6>
      <h6>
        Our experienced team of designers and developers know exactly what it
        takes to drive your business ahead of your competitors.
      </h6>
      <Home3Point content="Innovative website design"></Home3Point>
      <Home3Point content="UI/UX design with global trends"></Home3Point>
      <Home3Point content="Web and email hosting service"></Home3Point>
    </div>
    <span>
      <Image alt="none" src={grow}></Image>
    </span>
  </section>
);

const Home3Point = ({ content }: { content: string }) => (
  <div className="point">
    <Image alt="none" src={tick} width={35} height={35}></Image>
    <p>{content}</p>
  </div>
);

const Home4 = () => (
  <section className="home4">
    <p>Our Case Study</p>
    <h1>Our Recent projects</h1>
    <nav>
      {/* <a href="">UX Design</a> */}
      <a href="">Web Design</a>
      <a href="">Marketing</a>
      {/* <a href="">App Development</a> */}
      {/* <a href="">Game Design</a> */}
      {/* <a href="">Graphic Design</a> */}
    </nav>
    <div className="images">
      <Image alt="none" src={image1}></Image>
      <Image alt="none" src={image2}></Image>
      <Image alt="none" src={image3}></Image>
      <Image alt="none" src={image4}></Image>
      <Image alt="none" src={image5}></Image>
      <Image alt="none" src={image6}></Image>
    </div>
  </section>
);

const Home5 = () => (
  <section className="home5">
    <p>Our Testimonial</p>
    <h1>What Our Client Saying</h1>

    <div className="boxes">
      <Home5Box
        icon={face1}
        content="Omnified Connections have built and developed our social platforms from scratch and we now have an excellent brand awareness. Website visitors increase month by month due to our social media campaigns and SEO development. They are extremely knowledgeable in digital marketing and enthusiastic and have become an extended part of our marketing team."
        name="Kavitha Reddy"
        title="Ethnic Collections"
      ></Home5Box>
      <Home5Box
        icon={face2}
        content="Being a small business it’s important for us that we keep control of our marketing spend and get maximum return on investment. Omnified Connections understood this need perfectly and have put together a successful social media and adwords campaign that has exceeded my expectation and met the brief perfectly. They continue to manage our online marketing and I don’t hesitate in recommending them."
        name="Bhuvneshwar Singh"
        title="Shiva Power Empire"
      ></Home5Box>
      <Home5Box
        icon={face3}
        content="Straight talking and clear outcomes. Wouldn’t go anywhere  else for my digital support. These guys got my website which was on page 3 of google to page 1 which increased my reach 10 fold. Thank you Omnified Connections."
        name="Sam"
        title="Mountain View"
      ></Home5Box>
    </div>
  </section>
);

const Home5Box = ({
  content,
  icon,
  name,
  title,
}: {
  content: string;
  icon: any;
  name: string;
  title: string;
}) => (
  <div className="box">
    <div className="stars">
      <Image alt="none" src={star}></Image>
    </div>
    <p>{content}</p>
    <div className="footer">
      <Image alt="none" src={icon}></Image>
      <div className="info">
        <p className="highlight">{name}</p>
        <p>{title}</p>
      </div>
      <Image alt="none" src={quote}></Image>
    </div>
  </div>
);

const Home6 = () => {
  return (
    <section className="home6">
      <div className="content">
        <p>Our Capabilities</p>
        <h1>
          <span className="highlight">Forward Thinking Team</span> Of Designers
          & Developers
        </h1>
        <h6>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus ut
          nisi, amet rhoncus volutpat neque. Ipsum in aliquam eget vitae purus
          felis eget massa felis. Eu mattis in malesuada facilisi proin vel.
        </h6>
        <div className="percentages">
          <div>
            <h3 className="highlight">80%</h3>
            <p>Softwer Development</p>
          </div>
          <div>
            <h3 className="highlight">90%</h3>
            <p>Graphic Design</p>
          </div>
          <div>
            <h3 className="highlight">85%</h3>
            <p>Game Deisgn</p>
          </div>
          <div>
            <h3 className="highlight">100%</h3>
            <p>Web Development</p>
          </div>
        </div>
      </div>
      <div>
        <Image src={capabilities} alt="blog created on" />
      </div>
    </section>
  );
};

const Home7 = () => {
  return (
    <section className="home7">
      <div className="contents">
        <div>
          <span>
            <Image src={topExperts} alt="" />
          </span>
          <h3>120</h3>
          <p>Top Experts</p>
        </div>
        <div>
          <span>
            <Image src={strategies} alt="" />
          </span>
          <h3>500</h3>
          <p>Strategies</p>
        </div>
        <div>
          <span>
            <Image src={greatResults} alt="" />
          </span>
          <h3>347</h3>
          <p>Great Results</p>
        </div>
        <div>
          <span>
            <Image src={highestRankings} alt="" />
          </span>
          <h3>120</h3>
          <p>Hight Rankings</p>
        </div>
      </div>
    </section>
  );
};

const Home8 = () => {
  return (
    <section className="home8">
      <p>Our Blog</p>
      <h1>Every Single Update From Here</h1>
      <div className="content">
        <Home8Box
          svg={blogImage1}
          heading="35 Stellar Graphic Design Blogs to Keep YouEducated and Inspired"
          blog={{
            createdOn: "January 25, 2021",
            createdBy: "Cristofer Westervelt",
            comments: 10,
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget nunc, sed sed sed. Sit integer at dui at non ipsum tellus ac. Est.",
          }}
        />
        <Home8Box
          svg={blogImage2}
          heading="Ridiculously powerful 2021 iPad Pro may drop this month"
          blog={{
            createdOn: "January 25, 2021",
            createdBy: "Cristofer Westervelt",
            comments: 10,
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget nunc, sed sed sed. Sit integer at dui at non ipsum tellus ac. Est.",
          }}
        />
        <Home8Box
          svg={blogImage3}
          heading="Memphis Design: the defining look of the 1980s"
          blog={{
            createdOn: "January 25, 2021",
            createdBy: "Cristofer Westervelt",
            comments: 10,
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget nunc, sed sed sed. Sit integer at dui at non ipsum tellus ac. Est.",
          }}
        />
      </div>
    </section>
  );
};

const Home8Box = ({
  svg,
  heading,
  blog: { createdOn, createdBy, comments, description },
}: {
  svg: any;
  heading: string;
  blog: {
    createdOn: string;
    description: string;
    createdBy: string;
    comments: number;
  };
}) => {
  return (
    <div className="box">
      <Image src={svg} alt="blog1" />
      <h2>{heading}</h2>
      <div>
        <p>
          <Image src={blogCreatedOn} alt="blog created on" />
          {createdOn}
        </p>
        <p>
          <Image src={blogCreatedBy} alt="blog created by" />
          {createdBy}
        </p>
        <p>
          <Image src={blogComments} alt="blog comments" />
          {comments} Comment
        </p>
      </div>
      <p>{description}</p>
      <button className="red-button">Read More</button>
    </div>
  );
};

const Home9 = () => {
  return (
    <section className="home9">
      <div>
        <div className="content">
          <p>Subscribe NewsletterCopy</p> <span className="line"></span>
          <h2>Lets Stay In Touch</h2>
        </div>
        <div className="user-input">
          <input placeholder="Enter your email" />
          <button>Subscribe Now</button>
        </div>
      </div>
    </section>
  );
};
