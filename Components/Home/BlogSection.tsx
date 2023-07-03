import Image from "next/image";
import router from "next/router";
import { allBlogs } from "../../.contentlayer/generated";
import { IoChevronForward } from "react-icons/io5/index.js";

const BlogSection = () => {
  return (
    <section className="max-w-2xl font-gro w-full flex flex-col gap-y-3 ">
      <div className="w-full flex">
        <span className="text-4xl md:text-5xl px-2 my-4 w-full max-w-2xl text-center font-bold">
          Popular Posts
        </span>
      </div>
      <div className="max-w-2xl px-2 filter grid grid-cols-1 md:grid-cols-2 gap-5">
        {allBlogs.slice(0, 4).map((data) => {
          return (
            <div
              className="mb-3 bg-gray-50 dark:bg-dark  md:m-1"
              key={data._id}
            >
              <Image
                className="rounded-3xl  md:rounded-2xl  border-2 dark:border-gray-300 "
                src={data.image}
                width={550}
                height={350}
              />
              <h1
                className="px-4 mt-2 text-xl "
                onClick={() => router.push("/blog/[id]", `/blog/${data.slug}`)}
              >
                {data.title}
              </h1>
            </div>
          );
        })}
      </div>
      <div className="w-full px-4 mt-3 flex items-center justify-start">
        <a
          className=" text-green-800 text-lg dark:text-green-400 flex items-center justify-center  gap-x-2"
          onClick={() => router.push("/blog")}
        >
          Read All Post <IoChevronForward />
        </a>
      </div>
    </section>
  );
};

export default BlogSection;
