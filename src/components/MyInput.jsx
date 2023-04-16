import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";

function Password({label, cbChange}) {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("");

  const onShow = () => {
    setShow(true);
    setTimeout(() => {
      setShow(false)
    }, 300);
  }

  return (
    <div className="text-left">
      <div className="text-md mb-2">{label}</div>
      <div className=" md:w-96 w-80 h-12 bg-white p-2 rounded-md relative">
        <input
          onChange={(e) => {
            const valid = e.target.value.length < 30 ? e.target.value : value;
            if(cbChange)cbChange(valid);
            setValue(valid)
          }}
          value={value}
          type={show ? "text" : "password"}
          className="bg-transparent w-full h-full text-black border-transparent outline-none"
        ></input>
        <div onClick={onShow} className=" absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-black">
          <FontAwesomeIcon icon={show ? faEye : faEyeSlash} size="sm" />
        </div>
      </div>
    </div>
  );
}

const MyInput = {
  Password,
};

export default MyInput;
