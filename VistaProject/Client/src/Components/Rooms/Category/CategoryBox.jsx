import PropTypes from 'prop-types'; // ES6
import qs from 'query-string';
import { useNavigate, useSearchParams } from 'react-router-dom';

const CategoryBox = ({label, icon: Icon,selected}) => {

    // search params
    const [params] = useSearchParams();
    // navigations
    const navigate = useNavigate()
    

    // hanldle category params
    const handleCategoryParams = () =>{
       
        // current query
        let currentQuery = {}

        // if the params exsit
        if (params) {
            // re assign current query
            currentQuery = qs.parse(params.toString())
            // update the query
            const updatedQuery = {...currentQuery, category: label}
            // define the uri
            const uri = qs.stringifyUrl({
                url: '/',
                query: updatedQuery
            })
            // navigate accordign uri
            navigate(uri)
        }
    }

    console.log(params);

    // overview of set query in url
    // 1. useSearchParams() use this hook for check any params
    // 2. make a emplty object called currentQuery ={} for set query
    // 3. check the params. if url have any params then re assign currentQuery = qs.parse(params.toString())
    // 4. update the query const updatedQuery = {...currentQuery, category: label}
    // 5. define the uri const uri = qs.stringifyUrl({})
    // 6. navigate accordign uri




  return (
    <div
    onClick={handleCategoryParams}
    
    className={`flex
    flex-col
    items-center
    justify-center
    gap-3
    p-3
    border-b-2
    hover:text-neutral-800
    transition
    cursor-pointer
    ${selected ? 'border-b-neutral-800 text-neutral-800' : 'border-transparent text-neutral-500' }
    
    `} >
    <Icon size={26} />
    <div className="text-sm font-medium ">
    {label}
    </div>
    </div>
  )
}
// props validation
CategoryBox.propTypes = {
    label: PropTypes.string,
    icon: PropTypes.func,
    selected: PropTypes.bool,
}

export default CategoryBox