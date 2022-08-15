
import React from "react";
import "./Repos.css"
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useStateValue } from "../../StateProvider";

function Repos({ name, description, language, id, removeBtn }) {
  const [{}, dispatch] = useStateValue();
  const addToFav = () => {
    dispatch({
      type: "add-fav",
      item: {
        id: id,
        name: name,
        description: description,
        language: language,
      },
    });
  };
  const remove = () => {
    dispatch({
      type: "remove-fav",
      id: id,
    });
  };
  return (
    <>
      {removeBtn ? (
        <div className="gh-container">
          <div className="gh-repo">
            <p>{language}</p>
            <h2>
              <span>Repository name:</span> {name}
            </h2>
            <h4>
              <span>Description:</span> {description}
            </h4>
          </div>
          <button onClick={remove}> REMOVE</button>
        </div>
      ) : (
        <div className="gh-container">
          <div className="gh-repo">
            <p>{language}</p>
            <h2>
              <span>Repository name:</span> {name}
            </h2>
            <h4>
              <span>Description:</span> {description}
            </h4>
          </div>
          <button className="fav-star-icon">
            {" "}
            <StarBorderIcon/> Add to favorites
          </button>
        </div>
      )}
    </>
  );
}

export default Repos;


