import { GrPauseFill, GrPlayFill } from "react-icons/gr";

interface Props {
  pauseSlider: boolean;
  handlePauseSlider: () => void;
}

const PlayButton = ({ pauseSlider, handlePauseSlider }: Props) => {
  return (
    <div
      className="cursor-pointer rounded-md border border-vanilla-powder-500 p-2.5 text-lg text-vanilla-powder-500 opacity-75 hover:bg-night-600 hover:opacity-100"
      onClick={handlePauseSlider}
    >
      {pauseSlider ? <GrPlayFill /> : <GrPauseFill />}
    </div>
  );
};

export default PlayButton;
