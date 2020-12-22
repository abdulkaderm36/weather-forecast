import React from "react";

const InputLoc = (props) => {
  return (
    <form
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "1rem",
      }}
    >
      <input
        style={cityInput}
        value={props.city}
        palceholder="Enter a City..."
        onChange={props.updateCity}
      />
      <button style={citySubmit} onClick={props.submitCity}>
        <i className="fas fa-search"></i>
      </button>
    </form>
  );
};

const cityInput = {
  fontSize: "1.5rem",
  fontFamily: "Roboto, sanserif",
  textAlign: "center",
  border: "solid 1px #000",
  borderRight: "none",
  borderTopLeftRadius: "30px",
  borderBottomLeftRadius: "30px",
  padding: "0.5rem 1rem",
};

const citySubmit = {
  background: "#fff",
  border: "solid 1px #000",
  borderLeft: "none",
  borderTopRightRadius: "30px",
  borderBottomRightRadius: "30px",
  fontSize: "1.5rem",
  padding: "0.5rem",
  textAlign: "center",
  cursor: "pointer",
};

export default InputLoc;
