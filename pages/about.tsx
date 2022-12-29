import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="w-full flex items-center justify-center min-h-screen">
      <section className=" max-w-2xl flex items-center justify-center flex-col w-full p-3">
        <h2 className="w-full text-left  text-3xl font-bold">About Page </h2>
        <p className="py-3">
          Ashwin is a Indie Full-stack developer based in Indore,India with a
          passion for building digital services/stuff he wants. He has a knack
          for all things creating services, from planning and designing all the
          way to solving real-life problems with code. When not online, he loves
          hanging out with his sketchbook. Currently, he is learning about all
          things web.
        </p>
      </section>
    </div>
  );
};
export default AboutPage;
