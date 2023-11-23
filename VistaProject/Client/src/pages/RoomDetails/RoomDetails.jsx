import Container from "../../components/Shared/Container";
import { Helmet } from "react-helmet-async";
import Header from "../../components/RoomDetails/Header";
import RoomInfo from "./RoomInfo";
import RoomReservation from "../../components/RoomDetails/RoomReservation";
import { useLoaderData } from "react-router-dom";

const RoomDetails = () => {

 const room = useLoaderData()

  return (
    <Container>
      <div className="max-w-screen-lg mx-auto">
        <Helmet>
          <title>{`Vista | ${room.title}`}</title>
        </Helmet>
        {/* header */}
        <div className="flex flex-col gap-8 ">
          <Header room={room} />
        </div>

          {/* /* details info */ }
          <div className=" grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-10">
            {/* room info */}
            <RoomInfo room={room} />
            {/* calender  */}
            <div className="calener-div col-span-3 order-first md:order-last ">
              <h1 className="text-3xl">Calender</h1>
              <RoomReservation room={room} />
            </div>
          </div>

      </div>
    </Container>
  );
};

export default RoomDetails;
