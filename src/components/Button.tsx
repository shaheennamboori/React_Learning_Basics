interface Props {
  buttonText: string;
  onClick: () => void;
}
const Button = ({ buttonText, onClick }: Props) => {
  return (
    <button type="button" className="btn btn-primary" onClick={onClick}>
      {buttonText}
    </button>
  );
};

export default Button;
