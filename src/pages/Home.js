import Books from "./Books";

const Home = () => {
  return (
    <>
      <div className="hero py-16 bg-[#000000]">
        <div className="container mx-auto flex items-center justify-between">
          <div className="ml-20 w-1/2">
            <h6 className="text-lg">Scroll Less</h6>
            <h1 className="text-5xl font-bold">Read More</h1>
          </div>
          <div className="w-1/2">
            <img
              className="rounded-6xl"
              src="/images/bookHero.jpg"
              alt="hero"
            />
          </div>
        </div>
      </div>
      <div className="pb-24">
        <Books />
      </div>
    </>
  );
};

export default Home;
