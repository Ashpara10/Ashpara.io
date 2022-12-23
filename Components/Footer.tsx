const Footer = () => {
  const year = new Date();
  return (
    <footer className=" w-full text-center dark:text-gray-400 mt-20 mb-3 pb-5  flex flex-col items-center justify-center">
      © {year.getFullYear()} Ashwin Parande. All Rights <br /> Reserved.
    </footer>
  );
};

export default Footer;
