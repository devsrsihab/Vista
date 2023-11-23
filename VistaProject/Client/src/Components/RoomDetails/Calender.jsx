import PropTypes from "prop-types"; // ES6
import {  DateRange } from "react-date-range"

const Calender = ({value}) => {
  console.log(value);
  return (
    <DateRange
      ranges={[value]}
      rangeColors={['#F43F5E']}
      showDateDisplay={false}
      direction="vertical"
    />
  )
}

// props validation
Calender.propTypes = {
    value: PropTypes.object,
  };

export default Calender