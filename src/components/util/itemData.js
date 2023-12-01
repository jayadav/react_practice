import { useState } from "react";
import MyModal from "./MyModal";
import "./itemData.css";
import { add_item } from "../../store/actions/cartActions";


const ItemData = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState("");

  const handleOpenModal = (item) => {
    setSelectedContent(() => {
      return item;
    });
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  let printData = [];
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
        <>
          <div
            className="responsive"
            key={"product_" + item.title.trim() + index}
          >
            <div className="gallery">
              <div>
                <img
                  src={item.thumbnail || ""}
                  alt={item.title}
                  onClick={() => handleOpenModal(item)}
                />
              </div>
              <div className="desc">{item.description}</div>
            </div>
          </div>
        </>
      );
    });

  return (
    <>
      {printData}
      {selectedContent && (
        <MyModal
          isOpen={isModalOpen}
          closeModal={handleModalClose}
          addItem = {add_item}
          content={selectedContent}
        />
      )}
    </>
  );
};

export default ItemData;
