import titan from "../../../public/assets/destination/image-titan.png";

const Titan = () => {
  return (
    <div>
      <div className="flex mb-20">
        <span className="text-secondary text-3xl font-Barlow-Condensed font-light leading-8 mr-3">
          01
        </span>
        <p className="text-secondary text-3xl font-Barlow-Condensed font-light leading-8">
          PICK YOUR DESTINATION
        </p>
      </div>
      <img src={titan} alt="planet" className="w-96 h-96" />
    </div>
  );
};

export default Titan;
