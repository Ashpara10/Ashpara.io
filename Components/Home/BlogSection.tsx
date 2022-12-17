import Image from "next/image";
import router from "next/router";
import { allBlogs } from "../../.contentlayer/generated";
import { IoChevronForward } from "react-icons/io5/index.js";

const BlogSection = () => {
  return (
    <section className="max-w-2xl  w-full flex flex-col gap-y-3 ">
      <div>
        <span className="text-3xl px-4 pb-3 w-full max-w-2xl text-left font-semibold">
          Blogs
        </span>
      </div>
      <div className="max-w-2xl px-2 filter grid grid-cols-1 md:grid-cols-2 gap-5">
        {allBlogs.slice(0, 4).map((data) => {
          return (
            <div className="mb-3 md:m-1" key={data._id}>
              <Image
                className="rounded-3xl md:rounded-lg  border-2 dark:border-gray-300 -z-10"
                src={data.image}
                width={550}
                height={350}
                loading="lazy"
              />
              <h1
                className="px-4 pt-2 text-lg"
                onClick={() => router.push("/blog/[id]", `/blog/${data.slug}`)}
              >
                {data.title}
              </h1>
            </div>
          );
        })}
      </div>
      <div className="w-full px-4 flex items-center justify-start">
        <a
          className=" text-green-800 dark:text-green-400 flex items-center justify-center mt-2 gap-x-2"
          onClick={() => router.push("/blog")}
        >
          Read All Post <IoChevronForward />
        </a>
      </div>
    </section>
  );
};

export default BlogSection;
