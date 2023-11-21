import { useSearchParams } from "react-router-dom";
import Container from "../../Shared/Container";
import CategoryBox from "./CategoryBox";
import { categories } from "./categoriesData";

const Categories = () => {

  // show the params 
  const [params] = useSearchParams()
  const category = params.get('category')
  console.log(category);




  return (
    <Container>
      <div className="py-4 flex items-center justify-between overflow-x-auto " >

        {categories.map(
          (item,index) =>
           <CategoryBox
            label={item.label}
             icon={item.icon}
              key={index}
              selected= {category === item.label}
              
              /> )}
        
      </div>
    </Container>
  );
};

export default Categories;
