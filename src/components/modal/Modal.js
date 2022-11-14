import "./modal.scss";
import { ModalMetamask, WalletConnect } from "../../assets/images";
import { GrFormNext, GrFormClose } from "react-icons/gr";
const Modal = ({ handleClose, show }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className="modal_header">
          <span>Connect Wallet</span>{" "}
          <span onClick={handleClose} style={{ cursor: "pointer" }}>
            <GrFormClose />
          </span>
        </div>
        <div className="border" />
        <div className="modal_wallet">
          <p>Choose your preferred wallet:</p>
          <button>
            <span>
              <img src={ModalMetamask} alt="" />
              Metamask
            </span>
            <span>
              <GrFormNext />
            </span>
          </button>
          <button>
            <span>
              <img src={WalletConnect} alt="" />
              Wallet Connect
            </span>

            <span>
              <GrFormNext />
            </span>
          </button>
        </div>
        {/* {children} */}
      </section>
    </div>
  );
};

export default Modal;
