import juiceBackdrop from "../../assets/juiceBg.jpg";

const JuiceBackdrop = () => {
  return (
    <div>
      <div className="juice-backdrop"></div>
      <img src={juiceBackdrop} alt="juice" className="juiceBg-image" />
    </div>
  );
};

export default JuiceBackdrop;
