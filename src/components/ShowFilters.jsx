import { ProductsFilter } from "./Filter";
import { products } from "../mocks/products.json";
import { CSSTransition } from "react-transition-group";

export default function ShowFilters() {
    return (
        <CSSTransition>
          <div>
            <ProductsFilter products={products} />
          </div>
        </CSSTransition>
      );
}
