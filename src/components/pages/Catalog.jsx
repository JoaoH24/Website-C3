import ProductCard from "../organisms/ProductCard";
const Catalog = () => {
  return (
    <>
      <div className="flex flex-row justify-start py-28 px-20">
        <ProductCard
          name="Polo C3"
          description="Polo de algodón suave con diseño moderno."
          price="89.90"
          image="/src/assets/images/Polo.jpeg"
        />
      </div>
    </>
  );
};

export default Catalog;
