import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";
import Container from "../Shared/Container";
import { useSearchParams } from "react-router-dom";
import Heading from "../Shared/Heading/Heading";
import Loader from "../Shared/Loader";
import { getAllRooms } from "../../Apis/Rooms";

const Rooms = () => {
  //  room state
  const [rooms, setRooms] = useState([]);
  const [params] = useSearchParams()
  const category = params.get('category')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
      getAllRooms()
      .then((data) =>{
        if (category) {
          const filteredCategory = data.filter( item => item.category === category)
          setRooms(filteredCategory)
        }else {
          setRooms(data)
        }
        setLoading(false)

      });
  }, [category]);

  if(loading) return <Loader/>

  return (
    <>
      <Container>
        <div className={`grid ${ rooms.length === 0 ? ' grid-cols-1' : 'sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6' }  `}>

          {
          
          rooms.length === 0  ?
          <div className="flex items-center justify-center min-h-[calc(100vh-300px)] ">

          <Heading title="No Rooms Found" subtitle="Sorry, we did not find any rooms" center={true} /> 
          </div>
          
          : 
          rooms.map((room) => (
            <Card key={room._id} room={room} />
          ))
          
          }


        </div>
      </Container>
    </>
  );
};

export default Rooms;
