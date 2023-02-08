import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="w-full flex items-center justify-center min-h-screen">
      <section className=" max-w-2xl flex items-center justify-center flex-col w-full p-3">
        <h2 className="pl-1 w-full text-left mb-4 text-3xl font-bold">
          About Me{" "}
        </h2>
        <Image
          className="rounded-2xl "
          src={"/totoro.jpg"}
          width={700}
          height={450}
        />
        <p className=" py-3 my-2">
          Ashwin is a beginner Indie Full-stack developer based in Indore,India
          with a passion for building and creating stuff that can be helpful to
          the masses. He has a knack for all things creating services, from
          planning and designing all the way to solving real-life problems with
          code. When not online, he loves hanging out with his football or
          sketchbook. Currently, he is learning about all things web.
        </p>
        <h2 className="pl-1 w-full text-left mb-4 text-3xl font-bold">
          My Skills
        </h2>
        <ul className="w-full text-left list-inside list-disc">
          <li>Developer</li>
          <li>Artist</li>
          <li>Creator</li>
        </ul>
      </section>
    </div>
  );
};
export default AboutPage;
