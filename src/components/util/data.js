const DataLoader = ({ data }) => {
  let printData = [];
  console.log(data);
  let { products } = data;
  if (!products) {
    let { users } = data;
    products = users;
  }

  printData =
    products &&
    products.length > 0 &&
    products.map((item, index) => {
      return (
        <li key={"test_product" + index}>
          {item.title || item.firstName + " " + item.lastName || "Empty"}
        </li>
      );
    });
  console.log(products);
  return <>{printData}</>;
};

export default DataLoader;
