import PropTypes from "prop-types"; // ES6

import Calender from "./Calender";
import Button from "../Button/Button";
import { formatDistance } from "date-fns";
import { useEffect, useState } from "react";

const RoomReservation = ({ room }) => {
  // totall days
  const [totallPrice, setTotallPrice] = useState(0);
//   const [value, setValue] = useState({
//     startDate : new Date(room?.from),
//     endDate : new Date(room.to),
//     key: 'selection'
//   })
  useEffect(() => {
    const totalPriceCalc = async () => {
      if (room) {
        const to = new Date(room.to);
        const from = new Date(room.from);
        const totallDays = parseInt(formatDistance(to, from).split(" ")[0]);
        const totallPrice = totallDays * room?.price;
        return totallPrice;
      }
      return null;
    };

    totalPriceCalc().then((price)=>{
      setTotallPrice(price)
    })



  }, [room]);

  return (
    <>
      <div className=" rounded-xl border-[1px] border-neutral-200 overflow-hidden  bg-white ">
        <div className="flex items-center gap-1 p-4">
          <div className="text-2xl font-semibold">${room?.price}</div>
          <div className="font-light text-neutral-600">night</div>
          <hr />
        </div>

        <div className="flex w-full justify-center">
          <Calender   />
        </div>
        <hr />
        <div className="p-4">
          <Button label={"Reserve"} />
        </div>
        <hr />
        <div className="p-4 flex items-center justify-between font-semibold text-lg">
          <div>Totall: </div>
          <div>{totallPrice !== null ? `$${totallPrice}` : 'Calculating...'}</div>
        </div>
      </div>
    </>
  );
};

// props validation
RoomReservation.propTypes = {
  room: PropTypes.object,
};

export default RoomReservation;
