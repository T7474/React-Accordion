import { useState } from "react";
import { BiShow,BiHide } from "react-icons/bi";

const SingleContent = ({ title, description }) => {
  const [showContent, setShowContent] = useState(false);
  return (
    <article className="content">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setShowContent(!showContent)}>
        {showContent ? <BiHide/> : <BiShow/>}
        </button>
      </header>
      {showContent && <p>{description}</p>}
    </article>
  );
};

export default SingleContent;
