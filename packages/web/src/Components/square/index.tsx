import "./styles.scss";

interface ISquareProps {
  image?: string;
}

const Square = ({ image }: ISquareProps) => {
  return (
    <div className="square">
      <img src={image} />
    </div>
  );
};

export default Square;
