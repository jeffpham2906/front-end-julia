import ProductRow from "./ProductRow";
import Spinner from "../../ui/Spinner";
import useGetAllProducts from "./useGetAllProducts";

function ProductTable() {
  const { error, isLoading, products } = useGetAllProducts();

  return (
    <>
      {error && (
        <p className="col-span-6">Product cannot be fetch successfully</p>
      )}
      {isLoading && (
        <div className="col-span-6 flex items-center justify-center p-4">
          <Spinner />
          <span>Loading...</span>
        </div>
      )}
      {!isLoading &&
        !error &&
        products.map((product) => (
          <ProductRow key={product._id} product={product} />
        ))}
    </>
  );
}

export default ProductTable;
