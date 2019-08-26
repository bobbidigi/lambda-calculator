import React, {useState} from "react";
import {numbers} from '../../../data';
import NumberButton from './NumberButton';
//import any components needed
{/* <NumberButton key={index} text={item} /> */}
//Import your array data to from the provided data file
 const Numbers = () => {

  const [numbersBtn] = useState(numbers);
  return (
    <div>
      {numbersBtn.map((item, index) =>
          <NumberButton key={index} text={item} />
        )}
    </div>
    
  );
};

export default Numbers;