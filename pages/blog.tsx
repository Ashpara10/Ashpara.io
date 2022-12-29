import type { GetStaticProps, NextPage } from "next";
import { allBlogs, Blog } from "../.contentlayer/generated";
import { pick } from "@contentlayer/client";
import BlogCard from "../Components/BlogCard";
import { useState, useContext, useEffect } from "react";
import context from "../Components/Context/context";

const BlogPage = ({ posts }: { posts: Blog[] }) => {
  const c = useContext(context);
  useEffect(() => {
    console.log(c);
  }, [c.search]);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
      <section className="mt-10 max-w-2xl min-h-screen flex flex-col items-center justify-start gap-5">
        {posts.map((data: Blog) => (
          <BlogCard key={data.slug} post={data} />
        ))}
      </section>
    </div>
  );
};

export default BlogPage;

export const getStaticProps: GetStaticProps = async () => {
  const posts = allBlogs.map((post) =>
    pick(post, [
      "title",
      "description",
      "createdAt",
      "image",
      "slug",
      "body",
      "wordCount",
      "readingTime",
    ])
  );

  return {
    props: { posts },
  };
};
type SearchInput = {
  query: string;
  onChange: any;
};

const SearchBox = ({ query, onChange }: SearchInput) => {
  return (
    <input
      value={query}
      placeholder="Search for Blogs..."
      onChange={onChange}
      className="p-2.5 rounded-md font-mono focus-visible:outline-none max-w-xl md:max-w-sm  w-full border border-gray-300 dark:border-[#272727] bg-gray-50 dark:bg-[#191919] "
    />
  );
};
