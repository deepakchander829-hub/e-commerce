




import { Link } from "react-router-dom";

const Naviconbtn = (props) => {
  return (
    <Link
      to={props.to}
      className="h-12 w-15 rounded-4 flex flex-col items-center justify-center text-decoration-none"
    >
      <i className={`${props.icon} text-purple-900`}></i>

      <span className="text-black text-xs leading-none">
        {props.label}
      </span>
    </Link>
  );
};

export default Naviconbtn;
