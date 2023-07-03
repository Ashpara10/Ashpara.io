import Image from "next/image";
import router from "next/router";
import React from "react";
import { Blog } from "../.contentlayer/generated";

type Views = {
  total: {
    views: number;
  };
};

const BlogCard = ({ post }: { post: Blog }) => {
  const { title, image } = post;
  return (
    <article className="max-w-sm overflow-hidden flex flex-col items-center justify-center  bg-gray-50 dark:bg-dark">
      <div className="px-2 py-2">
        <Image
          className=" rounded-3xl md:rounded-xl  "
          src={image}
          loading="lazy"
          width={600}
          height={400}
          objectFit="cover"
        />
      </div>
      <div className="w-full px-6 mt-3 flex flex-col  items-center justify-center">
        <h1
          className="text-xl  "
          onClick={() => router.push(`/blog/${post.slug}`)}
        >
          {title}
        </h1>

        {/* <div className="w-full flex items-center gap-x-3 justify-start mt-3 text-gray-900 dark:text-gray-100">
          <ViewIcon />
          <span>{views === "0" ? 0 : views}</span>
          <HeartIcon />
        </div> */}
      </div>
    </article>
  );
};

export default BlogCard;
