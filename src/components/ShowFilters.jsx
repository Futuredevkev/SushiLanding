import { ProductsFilter } from "./Filter";
import { products } from "../mocks/products.json";


export default function ShowFilters() {
    return (
          <div>
            <ProductsFilter products={products} />
          </div>
      );
}
