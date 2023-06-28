import mmmStatement from "../Img/mmm-Statement.png";
import logo from "../Img/logo-close.png";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-around h-screen">
      <img src={logo} alt="logo" className="h-16 w-28 sm:h-24 sm:w-40 mt-4" />
      <div className="flex flex-col justify-around align-center w-11/12 sm:w-9/12 lg:w-8/12 xl:w-7/12 h-[72vh] sm:h-3/4 bg-white rounded-lg shadow-lg text-center">
        <h1 className="my-2" style={{ fontWeight: "bold" }}>
          The Mooovers & Milkshakers are proud to introduce you to our app,
          Mighty Mini Minds.
        </h1>
        <h2>
          We invite you to step into your Mighty Mini Mind to explore your
          emotions and thoughts each day.
        </h2>
        <h3>Why we decided to create Mighty Mini Minds</h3>
        <div className=" flex justify-center">
          <img
            src={mmmStatement}
            alt="Mighty Mini Minds Problem Statement"
            className="h-56 w-80"
          />
        </div>
        <p className="ml-20 mr-20">
          Our app encourages users to express their feelings effectively through
          journaling, fostering better self-expression, and emotional learning.
          Mighty Mini Minds provides a safe environment allowing privacy or the
          option to share feelings, which will help enable young people to
          navigate their thoughts with confidence.
        </p>
        <h3>We hope you enjoy your journey! 💜</h3>
      </div>
    </div>
  );
}
