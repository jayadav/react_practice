import withLoader from "../../hoc/WithLoder";
import store from "../../store/store";
// import DataLoader from "../util/data";


import { fetchFunc } from "../util/fetchFunc";
import ItemData from "../util/itemData";
const api = "products?limit=10";
const Loaddata = withLoader(ItemData, api, fetchFunc, 'product_data');

const Products = () => {
  console.log(store);
  const product_grid = {
    with: '80%',
    margin: '2%',
  }
  const h1 = {
    color: 'grey',
    marginLeft:'3%'
  }
  return (
    <>
      <h1 style={h1}>Product List:</h1>
      <div style={product_grid}>
        <Loaddata />
      </div>
    </>
  );
};

export default Products;
