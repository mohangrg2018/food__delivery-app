import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="container lg:h-[80vh] mt-4 ">
      <div className="hero-bg rounded-xl h-full text-white flex flex-col gap-7 pl-8 pt-[20%] pb-5">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          Order your
          <br /> favourite food here
        </h1>
        <p className="md:w-[80%]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque,
          recusandae voluptatibus. Facilis dolorem, beatae quisquam id
          repellendus, reprehenderit mollitia necessitatibus nihil quaerat
          veniam, quam numquam ea vel sequi ipsum error.
        </p>
        <Link to="#view-menu">
          <button className="btn-secondary">View Menu</button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
