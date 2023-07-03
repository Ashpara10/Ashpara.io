import type { GetStaticProps, NextPage } from "next";
import { allBlogs, Blog } from "../.contentlayer/generated";
import { pick } from "@contentlayer/client";
import BlogCard from "../Components/BlogCard";
import { create, StoreApi } from "zustand";
import Fuse from "fuse.js";

type State = {
  search: string;
};
type Actions = {
  setSearch: (q: string) => void;
};

const useBearStore = create<State & Actions>((set) => ({
  search: "",
  setSearch: (query: string) =>
    set((state) => ({
      search: (state.search = query),
    })),
}));

const BlogPage = ({ posts }: { posts: Blog[] }) => {
  const [search, setSearch] = useBearStore((state) => [
    state?.search,
    state.setSearch,
  ]);

  const options: Fuse.IFuseOptions<Blog> = {
    includeScore: true,
    keys: ["title", "description"],
  };
  const fuse = new Fuse(posts, options);
  const results = fuse.search(search);

  return (
    <div className="w-full font-gro min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-md w-full flex items-center justify-center">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for Blogs..."
          className="p-2 rounded-md  focus-visible:outline-none max-w-xl md:max-w-sm  w-full border border-gray-300 dark:border-[#272727] bg-gray-50 dark:bg-[#191919] "
        />
        <button className="rounded-lg px-4 mx-2 py-2 dark:bg-bdark">
          Search
        </button>
      </div>
      {search.length > 0 && (
        <div className="rounded-lg max-w-lg ">
          {results.map((e) => {
            return (
              <h1>
                {e.item.title}
                <br /> {" : "}
                {e.matches?.map((e) => e.value)}
              </h1>
            );
          })}
        </div>
      )}
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
