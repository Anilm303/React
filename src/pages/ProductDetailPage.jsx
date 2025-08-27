import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import axios from "axios";   // <-- Add this line
import Products from "./Products";

const ProductDetailPage = () => {
  const { id } = useParams();

  const { data: product, isLoading, isError, error } = useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const response = await axios.get(
        `https://api.escuelajs.co/ausepi/v1/products/${id}`
      );
      return response.data;
    },
  });

  return (
    <div>
      {isLoading ? (
        "loading ..."
      ) : isError ? (
        <p>{error.message}</p>
      ) : (
        <div className="max-w-6xl">
          <img src={product.images[0]} alt={product.title} />
          <div>
            <h1>{product.title}</h1>
            <p>{product.price}</p>

            <h3>Description</h3>
            <p>{product.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;
