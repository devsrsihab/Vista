import { Helmet } from "react-helmet-async";
import Categories from "../../components/Rooms/Category/Categories";
import Rooms from "../../components/Rooms/Rooms";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>{'Vista | Welcom To Vista'}</title>
      </Helmet>
      {/* Categorie Sections */}
      <Categories />
      {/* Rooms Sections */}
      <Rooms />
    </div>
  );
};

export default Home;
