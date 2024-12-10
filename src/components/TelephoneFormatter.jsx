import { useState } from "react"
import "../App.css"

const TelephoneFormatter = () => {
    const [inpVal, setInpVal] = useState("");

    const extractNum = (txt) => {
        return [...txt].filter(s => Number.isInteger(+s) && s !== " ").join("");
    }

    const inputTxtFormatter = (txt) => {
        const numStr = extractNum(txt);
        return numStr.length > 3 ? "+(" + numStr.substring(0, 3) + ") - " + numStr.substring(3) : numStr;
    }

    const handleInputChange = (e) => {
        let txt = e.target.value;
        let val = inputTxtFormatter(txt)
        setInpVal(val);
    }

  return (
    <div className="container">
      <input type="text" maxLength={16} value={inpVal} onChange={handleInputChange} />
      <p>+(123) - 4567890</p>
    </div>
  )
}

export default TelephoneFormatter
