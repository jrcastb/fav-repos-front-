import {
    colors, 
} from "../components/Styles";

export default function SearchBar(props) {
  return (
    <input 
        style={{width: "100%",
            padding: "12px 20px",
            margin: "8px 0",
            display: "inline-block",
            border: "1px solid #ccc",
            borderRadius: "4px",
            boxSizing: "border-box",
            backgroundColor: colors.darker,
            color: colors.green,
            outlineColor: colors.green,
        }}
        name="repo"
        type="text"
        placeholder="type github user"
        onChange={props.onChange}
    />
  );
}