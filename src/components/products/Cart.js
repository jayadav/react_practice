import { useNavigate } from "react-router-dom";
import { delete_item } from "../../store/actions/cartActions";
import { useDispatch, useSelector } from "react-redux";


const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const printItem = state.map((item, index) => {
    return (
      <li key={"cart_" + index}>
        {item.title} - {item.quantity}
        &nbsp;
        <input
          type="button"
          value="Delete"
          onClick={() => {
            delete_item(item);
          }}
        />
      </li>
    );
  });

  const handleCheckout = ()=>{
    dispatch({
      type: "RESET_STATE"
    })
    navigate("/home")
  }

  const customStyle = {
    main: {
      width: "30%",
      marginLeft: "25%",
      position: "relative",
    },
    button: {
      width: "100%",
    }
  }

  return (
    <>
      {state.length < 1 && "No Item Found in Cart"}
      {state.length > 0 && (
        <div style={customStyle.main}>
          <ul>{printItem}</ul> <button type="button" style={customStyle.button} onClick={handleCheckout}>Checkout</button>
        </div>
      )}
    </>
  );
};

export default Cart;
