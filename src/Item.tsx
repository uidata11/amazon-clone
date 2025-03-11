import React from "react";

interface Props {
  data: string;
  fn: () => void;
}

const Item = ({ data, fn }: Props) => {
  return (
    <div>
      Item:{data}
      {fn && <button onClick={fn}>{data}</button>}
    </div>
  );
};

export default Item;
