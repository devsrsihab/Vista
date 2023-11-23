import { Helmet } from "react-helmet-async";
import AddRoomForm from "../../../components/Form/AddRoomForm";
import { useState } from "react";
import imageUpload from "../../../Apis/Utilis";
import useAuth from "../../../hooks/useAuth";
import { insertRoom } from "../../../Apis/Rooms";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddRoom = () => {
  // auth context
  const { user } = useAuth();
  // navigate
  const navigate = useNavigate()
  // loading state
  const [loading, setLoading] = useState(false);
  // upload img text
  const [uploadImgText, setUploadImgText] = useState("Upload Image");
  // date state
  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // form data
    const form = e.target;
    const location = form.location.value;
    const category = form.category.value;
    const title = form.title.value;
    const price = form.price.value;
    const guests = form.guest.value;
    const bathrooms = form.bathrooms.value;
    const description = form.description.value;
    const bedrooms = form.bedrooms.value;

    // save img in imgbb
    const imageFile = form.image.files[0];
    const uploadImg = await imageUpload(imageFile);
    const image = uploadImg.data.display_url;

    const to = dates.endDate;
    const from = dates.startDate;

    // host info
    const host = {
      name: user?.displayName,
      image: user?.photoURL,
      email: user?.email,
    };
    // form data
    const formData = {
      location,
      category,
      title,
      price,
      guests,
      bathrooms,
      description,
      bedrooms,
      image,
      to,
      from,
      host,
    };

    // insert the form data in mongodb
    try {

      setLoading(true);
      const data = await insertRoom(formData);
      setLoading(false);
      toast.success("Room added successfully");
      console.log(data);
      navigate('/dashboard/my-listings')

    } catch (err) {

      toast.success(err.message);
      console.log(err);

    } finally {

      setLoading(false);

    }
    console.table(formData);
  };

  // handle date funtion from react date pcker
  const handleDates = (ranges) => {
    console.log(ranges);
    setDates(ranges.selection);
  };

  // handle upload img
  const hanleUploadImgText = (image) => {
    setUploadImgText(image.name);
  };

  return (
    <>
      <Helmet>
        <title>Dashboard | Add Room</title>
      </Helmet>
      <AddRoomForm
        handleDates={handleDates}
        dates={dates}
        handleSubmit={handleSubmit}
        hanleUploadImgText={hanleUploadImgText}
        uploadImgText={uploadImgText}
        loading={loading}
      />
    </>
  );
};

export default AddRoom;
