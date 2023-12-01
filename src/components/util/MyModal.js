import { useState } from "react";
import ReactModal from "react-modal";
ReactModal.setAppElement("#root");

const MyModal = ({ isOpen, closeModal, addItem, content }) => {
  console.log("seleted item...", content);
  const item = content;
  const [image, setImage] = useState(item.images[item.images.length - 1]);

  const customStyle = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
    price: {
      color: "blue",
      fontWeight: "bold",
      marginLeft: "2%",
    },
    discount: {
      color: "grey",
      fontWeight: "bold",
      marginLeft: "2%",
    },
    totalPrice: {
      color: "green",
      fontWeight: "bold",
      marginLeft: "2%",
    },
  };
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="View Item"
      style={customStyle}
    >
      <div>
        {/* <h2>Modal Type</h2> */}
        {/* {console.log(content)} */}
        <div className="" key={"product_" + item.title.trim()}>
          <div className="gallery">
            <div>
              <img
                src={
                  image
                    ? image
                    : item.images[item.images.length - 2] ||
                      item.thumbnail ||
                      ""
                }
                alt={item.title}
              />
            </div>
            {item.images.length > 0 &&
              item.images.map((i, k) => {
                return (
                  <input
                    type="button"
                    key={"butt" + k}
                    onClick={() => {
                      setImage(i);
                    }}
                    value={k + 1}
                  />
                );
              })}
            <div>
              <span style={customStyle.price}>Price: {item.price}</span>
              <span style={customStyle.discount}>
                Discount: {item.discountPercentage + "%"}
              </span>
              <span style={customStyle.totalPrice}>
                Discounted Price:{" "}
                {(
                  item.price -
                  (item.price * item.discountPercentage) / 100
                ).toFixed(2)}
              </span>
            </div>
            <div className="desc">{item.description}</div>
          </div>
        </div>

        <div className="clearfix">
          <button type="button" className="cancelbtn" onClick={closeModal}>
            Close
          </button>
          <button type="button" className="signupbtn" onClick={()=>{
            addItem(item);
            closeModal()
          }}>
            Add To Cart
          </button>
        </div>
      </div>
    </ReactModal>
  );
};

export default MyModal;
