import { useState } from "react";
import { FAQ } from "../utils/constants";

const Section = ({ id, title, description, show, setVisible }) => {
  return (
    <div key={id} className="items-center bg-gray-200 w-8/12 m-auto">
      <div
        className="flex justify-between  cursor-pointer my-2 p-3"
        onClick={() => (show ? setVisible(false) : setVisible(true))}
      >
        <span className="font-bold ">{title}</span>
        <span>{show ? "▲" : "▼"}</span>
      </div>
      {show && <div className=" p-3"> {description}</div>}
    </div>
  );
};

const Help = () => {
  const [show, setShow] = useState("");
  return (
    <div className="m-4 pt-20">
      <div
        className=" bg-slate-900 w-8/12 m-auto p-3 text-white font-extrabold
       text-center text-2xl"
      >
        FAQ
      </div>
      {FAQ.map((item) => (
        <Section
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          show={item.id === show}
          setVisible={(param) => {
            if (param) {
              setShow(item.id);
            } else {
              setShow("");
            }
          }}
        />
      ))}
    </div>
  );
};
export default Help;
