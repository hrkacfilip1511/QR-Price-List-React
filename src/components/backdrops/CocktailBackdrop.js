import cocktailBackdrop from "../../assets/cocktailBg.jpg";

const CocktailBackdrop = () => {
  return (
    <div>
      <div className="cocktail-backdrop"></div>
      <img src={cocktailBackdrop} alt="cocktail" className="cocktailBg-image" />
    </div>
  );
};

export default CocktailBackdrop;
