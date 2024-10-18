import Confetti from "react-confetti";

const ConfettiComponent = ({ show }) => {
  return show ? (
    <Confetti width={window.innerWidth} height={window.innerHeight} />
  ) : null;
};

export default ConfettiComponent;
