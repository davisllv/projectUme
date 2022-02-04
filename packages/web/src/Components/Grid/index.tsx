import React, { useState } from "react";
import Square from "../square";
import { toast } from "react-toastify";
import axios from "axios";

import "./styles.scss";

interface ICar {
  image: string;
  x: number;
  y: number;
  finalPosition: string;
}

interface ICarImage {
  image: string;
}

let carImage: ICarImage = {
  image: "/assets/images/northArrow.png",
};

const Grid: React.FC = () => {
  const [value, setValue] = useState("");
  const [carPositionImage, setCarPositionImage] = useState<ICar>({
    image: "/assets/images/northArrow.png",
    x: 0,
    y: 0,
    finalPosition: "North",
  });
  const verticalAxis = ["1", " 2", "3", "4", "5"];
  const horizontalAxis = ["a", "b", "c", "d", "e"];

  let grid = [];

  function handleChangeValue(ev: React.ChangeEvent<HTMLInputElement>): void {
    ev.target.value = ev.target.value.replace(/([^mlrMLR])|\d|\W/g, "");
    setValue(ev.target.value);
  }

  async function handleSubmitMoviment(
    ev: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    ev.preventDefault();

    if (!value) {
      toast.info("Please, set a moviment");
      return;
    }

    try {
      const { data } = await axios.post("http://localhost:3333/moviment", {
        comands: value,
      });
      console.log(data);
      if (data.finalPosition === "North") {
        carImage.image = "/assets/images/northArrow.png";
      } else if (data.finalPosition === "West") {
        carImage.image = "/assets/images/westArrow.png";
      } else if (data.finalPosition === "South") {
        carImage.image = "/assets/images/southArrow.png";
      } else if (data.finalPosition === "East") {
        carImage.image = "/assets/images/eastArrow.png";
      }

      setCarPositionImage({
        image: carImage.image,
        x: data.x,
        y: data.y,
        finalPosition: data.finalPosition,
      });
      toast.success("Your robot has been moved");
    } catch (erro) {
      toast.error("You are of the limits, try to reset");
    }

    setValue("");
  }

  async function handleClickReset() {
    await axios.post("http://localhost:3333/moviment", {
      comands: "RESET",
    });

    setCarPositionImage({
      image: "/assets/images/northArrow.png",
      x: 0,
      y: 0,
      finalPosition: "North",
    });
  }

  let image = undefined;

  for (let j = verticalAxis.length - 1; j >= 0; j--) {
    for (let i = 0; i < horizontalAxis.length; i++) {
      image = undefined;
      if (carPositionImage.x === i && carPositionImage.y === j) {
        image = carPositionImage.image;
      }

      grid.push(<Square image={image} />);
    }
  }

  return (
    <div id="main-page">
      <aside>
        <img src="/assets/images/illustration.svg" alt="" />
        <form onSubmit={(ev) => handleSubmitMoviment(ev)}>
          <input
            type="text"
            name="movimentInput"
            placeholder="Set your moviment"
            onChange={handleChangeValue}
            value={value}
          />
          <button type="submit">Submit</button>
        </form>
      </aside>
      <main>
        <div id="grid">{grid}</div>
        <button type="button" onClick={handleClickReset}>
          Reset
        </button>
      </main>
    </div>
  );
};

export default Grid;
