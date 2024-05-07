import CreateUser from "../features/users/CreateUser";

function Home() {
  return (
    <div className=" my-20  text-center sm:my-16">
      <h1 className="z-10 mb-20 text-3xl font-bold text-yellow-100">
        The best pizza
        <br />
        <span className="text-xl font-semibold text-yellow-400">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      <CreateUser />
      <img
        className="absolute top-48 -z-20   scale-[250%] blur-[1px] md:-top-16  md:left-0 md:scale-[150%] "
        src="https://www.pizzanapoletana.org/struttura/pagine_bicolor/mobile/disciplinare_avpn_2.jpg"
        alt=""
      />
    </div>
  );
}

export default Home;
