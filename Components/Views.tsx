import { useEffect } from "react";
import fetcher from "./lib/fetcher";

type Views = {
  views: Number;
};
type BlogSlug = {
  slug: String;
};

const ViewsManager = ({ slug }: BlogSlug) => {
  // useEffect(() => {
  //   const updateViews = () => {
  //     fetch(`/api/blog/view/${slug}`, {
  //       method: "POST",
  //     });
  //   };
  //   updateViews();
  // }, [slug]);
  return (
    <span className="font-mono flex items-center justify-center gap-x-1 text-gray-900 dark:text-gray-200">
      {/* {views === 0 ? 0 : views?.toString()} views */}
    </span>
  );
};
export default ViewsManager;
