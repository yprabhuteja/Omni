import Image from "next/image";
import { ReactNode } from "react";
import bracket from "../public/svg/bracket.svg";
import blog1 from "../public/svg/blog1.svg";
import blog2 from "../public/svg/blog2.svg";
import logo1 from "../public/svg/client-logo-1.svg";
import logo2 from "../public/svg/client-logo-2.svg";
import logo3 from "../public/svg/client-logo-3.svg";
import logo4 from "../public/svg/client-logo-4.svg";
import computer from "../public/svg/computer.svg";
import contactUs from "../public/svg/contact-us.svg";
import job1 from "../public/svg/job1.svg";
import job2 from "../public/svg/job2.svg";
import location from "../public/svg/location.svg";
import mail from "../public/svg/mail.svg";
import open from "../public/svg/open.svg";
import page from "../public/svg/page.svg";
import person1 from "../public/svg/person1.svg";
import person2 from "../public/svg/person2.svg";
import person3 from "../public/svg/person3.svg";
import person4 from "../public/svg/person4.svg";
import phone from "../public/svg/phone.svg";
import settings from "../public/svg/settings.svg";
import teaching from "../public/svg/teaching.svg";
import user1 from "../public/svg/user1.svg";
import user2 from "../public/svg/user2.svg";
import work1 from "../public/svg/work1.svg";
import work2 from "../public/svg/work2.svg";
import work3 from "../public/svg/work3.svg";
import work4 from "../public/svg/work4.svg";
import work5 from "../public/svg/work5.svg";
import work6 from "../public/svg/work6.svg";

export default function AboutUs() {
  return (
    <div className="about-us">
      <AboutUs1></AboutUs1>
      <AboutUs2></AboutUs2>
      <AboutUs3></AboutUs3>
      <AboutUs4></AboutUs4>
      <AboutUs5></AboutUs5>
      <AboutUs6></AboutUs6>
      <AboutUs7></AboutUs7>
      {/* <AboutUs8></AboutUs8> */}
      <AboutUs9></AboutUs9>
      {/* <AboutUs10></AboutUs10> */}
      <AboutUs11></AboutUs11>
    </div>
  );
}

const AboutUs1 = () => (
  <section className="about-us-1 section-content">
    <div className="content">
      <h1>
        We Are The <span className="highlight"> Best Digital </span>Agency for
        business
      </h1>
      <h6>
        At Omnified Connections, we aspire to be your fundamental growth
        partners through the incorporation of the latest state-of-the-art
        services thereby, maximizing your value proposition and consequently
        leading to the enlargement of your business.
      </h6>
      <button className="red-button ">Contact Us</button>
    </div>
    <span>
      <Image alt="none" src={computer}></Image>
    </span>
  </section>
);

const AboutUs2 = () => (
  <section className="about-us-2 section-content">
    <Image alt="none" src={teaching}></Image>
    <div className="content">
      <p>About us</p>
      <h1>
        We Are <span className="highlight"> Making Ideas Better </span>For
        Everyone
      </h1>
      <h6>
        Trust us with your marketing needs so that you can focus on other
        priority things that matter to your business! Our dedicated team blends
        with your internal team to function seamlessly and yield results.
        <br></br>
        <br></br>
        Now forget resource management, just request tasks & expect quality
        delivery from us. We offer performance driven solutions for all kinds of
        businesses across the globe.
      </h6>
      <button className="red-button">Contact Us</button>
    </div>
  </section>
);

const AboutUs3 = () => (
  <div className="about-us-3">
    <AboutUs3Box icon={page}>
      World leader in consulting and finance
    </AboutUs3Box>
    <AboutUs3Box icon={bracket}>
      A focused team with a specialized skill
    </AboutUs3Box>
    <AboutUs3Box icon={settings}>
      Trusted and professional advisors for you
    </AboutUs3Box>
    <AboutUs3Box icon={open}>
      Experience to give you a better results
    </AboutUs3Box>
  </div>
);

const AboutUs3Box = ({
  children,
  icon,
}: {
  children?: ReactNode;
  icon: any;
}) => (
  <div>
    <Image src={icon} alt="none"></Image>
    <p>{children}</p>
  </div>
);

const AboutUs4 = () => (
  <section className="about-us-4 section-content">
    <div className="content">
      <p>Our Expereince</p>
      <h1>
        We Have Completed<span className="highlight"> Many Projects </span>
        Succesfully
      </h1>
      <h6>
        We create tailored solutions to yield positive ROI for all business
        categories. We utilize the power of tools and automation to capture data
        within your web ecosystem to drive smart & effective decisions. Data is
        the key!
        <br></br>
        <br></br>
        We steadily work with your internal marketing arm to construct a long
        term digital strategy combining your subject knowledge and our marketing
        expertise, thus we work in tandem with your internal processes,
        optimizing costs and boosting your end results.
      </h6>
      <button className="red-button">Contact Us</button>
    </div>
    <div className="boxes">
      <div>
        <AboutUs4Box number="250+" text="Web Design"></AboutUs4Box>
        <AboutUs4Box number="156+" text="App Development"></AboutUs4Box>
      </div>
      <div>
        <br></br>
        <br></br>
        <AboutUs4Box number="50+" text="Digital Marketing"></AboutUs4Box>
        <AboutUs4Box number="15+" text="Social Media Marketing"></AboutUs4Box>
      </div>
    </div>
  </section>
);

const AboutUs4Box = ({ number, text }: { number: string; text: string }) => (
  <div className="box">
    <h1>{number}</h1>
    <p>{text}</p>
  </div>
);

const AboutUs5 = () => (
  <section className="about-us-5">
    <p>Team Member</p>
    <h1>
      We Have
      <br></br>
      <span className="highlight"> Some Awesome </span>
      People
    </h1>
    <div className="boxes">
      <AboutUs5Box
        title="Gustavo Herwitz"
        subtitle="UI/UX Designer"
        image={person1}
      ></AboutUs5Box>
      <AboutUs5Box
        title="Phillip Curtis"
        subtitle="Graphic Designer"
        image={person2}
      ></AboutUs5Box>
      <AboutUs5Box
        title="Talan Torff"
        subtitle="Web Developer"
        image={person3}
      ></AboutUs5Box>
      <AboutUs5Box
        title="Abram Vaccaro"
        subtitle="App Developer"
        image={person4}
      ></AboutUs5Box>
    </div>
  </section>
);

const AboutUs5Box = ({
  title,
  subtitle,
  image,
}: {
  title: string;
  subtitle: string;
  image: any;
}) => (
  <div className="box">
    <Image alt="none" src={image}></Image>
    <h2>{title}</h2>
    <p>{subtitle}</p>
  </div>
);

const AboutUs6 = () => (
  <section className="about-us-6">
    <p>Our Work</p>
    <h1>
      We Have Some
      <br></br>
      <span className="highlight">Designed & Development</span> Projects
    </h1>
    <nav>
      <a href="">Web Design</a>
      <a href="">Marketing</a>
      {/* <a href="">UI/UX design</a>
      <a href="">Web Development</a> */}
    </nav>
    <div className="images">
      <div>
        <Image alt="none" src={work1}></Image>
        <Image alt="none" src={work2}></Image>
      </div>
      <div>
        <Image alt="none" src={work3}></Image>
        <Image alt="none" src={work4}></Image>
      </div>
      <div>
        <Image alt="none" src={work5}></Image>
        <Image alt="none" src={work6}></Image>
      </div>
    </div>
  </section>
);

const AboutUs9 = () => {
  return (
    <section className="about-us-9">
      <AboutUsContactInformation />
      <AboutUsContactUsForm />
    </section>
  );
};

const AboutUsContactInformation = () => {
  return (
    <div className="contact-us">
      <div className="title">
        <p>Contact Us</p>
        <h1>
          Feel <span className="highlight">Free to Contact</span> With Us
        </h1>
      </div>
      <div className="boxes">
        <AboutUs9Box icon={mail} title={"Drop a line"} subtitle={"Mail Us"}>
          <p>
            omnifiedconnections@gmail.com
          </p>
        </AboutUs9Box>
        <AboutUs9Box icon={phone} title="24/7 Service" subtitle="Call Us">
          <p>0 80196 09629</p>
        </AboutUs9Box>
        <AboutUs9Box icon={location} title={"Location"} subtitle={"Visit Us"}>
          <p>VIP Hills, Silicon Valley, Hitech city, Hyd 500081</p>
        </AboutUs9Box>
      </div>
    </div>
  );
};

const AboutUs9Box = ({
  icon,
  children,
  title,
  subtitle,
}: {
  children?: ReactNode;
  icon: any;
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="box">
      <div className="box-header">
        <span className="icon">
          <Image src={icon} alt="contact"></Image>
        </span>
        <span className="headings">
          <h4>
            <span className="highlight">{title}</span>
          </h4>
          <h5>{subtitle}</h5>
        </span>
      </div>
      <div className="box-contents">{children}</div>
    </div>
  );
};

const AboutUsContactUsForm = () => {
  return (
    <div className="contact-form" id="contact-us">
      <span>
        <Image src={contactUs} alt="contact"></Image>
      </span>
      <div>
        <h2>
          Send Your <span className="highlight">Message To Us</span>
        </h2>
        <div className="inputs">
          <div>
            <input placeholder="Name" />
            <input placeholder="Email" />
          </div>
          <div>
            <input placeholder="Mobile No" />
            <input placeholder="Subject" />
          </div>
          <div>
            <textarea placeholder="Send Message" rows={5} />
          </div>
        </div>
        <button className="red-button">Send Message</button>
      </div>
    </div>
  );
};

const AboutUs10 = () => {
  return (
    <section className="about-us-10">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.1952557968516!2d78.37860001424214!3d17.450366205580274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93ded9f6f0d7%3A0xa3d91e5d00d50b63!2sCyber%20Towers!5e0!3m2!1sen!2sin!4v1633256788539!5m2!1sen!2sin"
        width="400"
        height="300"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </section>
  );
};

const AboutUs11 = () => {
  return (
    <section className="about-us-11">
      <span>
        <Image src={logo1} alt="client-logo-1"></Image>
      </span>
      <span>
        <Image src={logo2} alt="client-logo-2"></Image>
      </span>
      <span>
        <Image src={logo3} alt="client-logo-3"></Image>
      </span>
      <span>
        <Image src={logo4} alt="client-logo-4"></Image>
      </span>
    </section>
  );
};
const AboutUs7 = () => (
  <section className="about-us-7">
    <p>Clients Feedback</p>
    <h1>
      Some{" "}
      <span className="highlight">
        Great <br></br>Words
      </span>{" "}
      From Our Clients
    </h1>
    <div className="boxes">
      <AboutUs7Box title="Justin Septimus" subtitle="CEO,word yt" image={job1}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit a laoreet
        libero dis eget maecenas bibendum. Morbi lacinia eu, etiam volutpat
        morbi et amet, sagittis adipiscing.{" "}
      </AboutUs7Box>
      <AboutUs7Box
        title="Ashlynn Gouse"
        subtitle="Managing Director"
        image={job2}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit a laoreet
        libero dis eget maecenas bibendum. Morbi lacinia eu, etiam volutpat
        morbi et amet, sagittis adipiscing.
      </AboutUs7Box>
    </div>
    <div className="navigation">
      <span></span>
      <span></span>
    </div>
  </section>
);

const AboutUs7Box = ({
  title,
  subtitle,
  children,
  image,
}: {
  children?: ReactNode;
  title: string;
  subtitle: string;
  image: any;
}) => (
  <div className="box">
    <span className="image">
      <Image alt="none" src={image}></Image>
    </span>
    <div className="content">
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <p>{children}</p>
    </div>
  </div>
);

const AboutUs8 = () => (
  <section className="about-us-8">
    <p>Our Blog</p>
    <h1>
      Our Latest{" "}
      <span className="highlight">
        {" "}
        Blogs <br></br> Will Keep
      </span>{" "}
      Everyone Updated
    </h1>
    <div className="boxes">
      <AboutUs8Box
        header="Graphic Design"
        title="35 Stellar Graphic
Design Blogs to Keep You
Educated and Inspired"
        mainImage={blog1}
        userImage={user1}
        userName="Cristofer Westervelt"
        userDate="January 25, 2021 5 min Read"
      ></AboutUs8Box>
      <AboutUs8Box
        header="Managing Director"
        title="Ridiculously powerful
2021 iPad Pro may drop this
month"
        mainImage={blog2}
        userImage={user2}
        userName="Haylie Mango"
        userDate="January 25, 2021 5 min Read"
      ></AboutUs8Box>
    </div>
  </section>
);

const AboutUs8Box = ({
  header,
  title,
  mainImage,
  userImage,
  userDate,
  userName,
}: {
  title: string;
  mainImage: any;
  userImage: any;
  header: string;
  userDate: string;
  userName: string;
}) => (
  <div className="box">
    <div className="content">
      <div>
        <p>{header}</p>
        <h2>{title}</h2>
      </div>
      <span className="image">
        <Image alt="none" src={mainImage}></Image>
      </span>
    </div>
    <div className="user">
      <Image alt="none" src={userImage}></Image>
      <div>
        <h4>{userName}</h4>
        <p>{userDate}</p>
      </div>
    </div>
  </div>
);
