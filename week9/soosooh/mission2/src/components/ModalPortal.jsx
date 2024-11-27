import reactDom from "react-dom";

const ModalPortal = ({ children }) => {
  if (typeof window === "undefined") {
    return null;
  }

  const node = document.getElementById("portal");
  if (!node) {
    console.error("Portal 노드를 찾을 수 없습니다.");
    return null;
  }

  return reactDom.createPortal(children, node);
};

export default ModalPortal;
