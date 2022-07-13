import sweetsBackdrop from "../../assets/sweetsBg.jpg";

const SweetsBackdrop = () => {
  return (
    <div>
      <div className="sweets-backdrop"></div>
      <img src={sweetsBackdrop} alt="sweets" className="sweetsBg-image" />
    </div>
  );
};

export default SweetsBackdrop;
