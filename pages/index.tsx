import BlogSection from "../Components/Home/BlogSection";
import HomeSection from "../Components/Home/HomeSection";

const Home = () => {
  return (
    <div className="w-full min-h-screen  flex flex-col items-center justify-center">
      <HomeSection />
      <BlogSection />
    </div>
  );
};
export default Home;
