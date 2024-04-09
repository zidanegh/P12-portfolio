import React, { useEffect, useState } from "react";
import data from "../assets/code-projet.json";
import { useDispatch, useSelector } from "react-redux";
import { chosenLogoSlice } from "../store/store";

export default function Logo({ Click }) {
  const logos = data.logos;
  const dispatch = useDispatch();
  const reduxLogo = logos.find((logo) => logo.logoName === "Redux");
  const GlobeLogo = logos.find(
    (logo) => logo.logoGlobe === "fa-solid fa-globe"
  );
  const chosenLogo = useSelector((state) => state.chosenLogo);
  const [stringChosenLogo, setStringChosenLogo] = useState(
    chosenLogo.chosenLogo
  );

  useEffect(() => {
    setStringChosenLogo(chosenLogo.chosenLogo);
  }, [chosenLogo]);

  const handleClick = () => {
    if (Click) {
      dispatch(chosenLogoSlice.actions.changeChosenLogo(reduxLogo.logoName));
    }
  };

  const handleClickLogo = (logo) => () => {
    if (Click) {
      dispatch(chosenLogoSlice.actions.changeChosenLogo(logo.logoName));
      console.log(stringChosenLogo);
    }
  };

  return (
    <>
      {Click ? (
        <i
          className={`${GlobeLogo.logoGlobe} ${
            Click
              ? stringChosenLogo === GlobeLogo.logoName
                ? `${GlobeLogo.logoName}`
                : ""
              : ""
          }`}
          onClick={Click ? handleClickLogo(GlobeLogo) : null}
        ></i>
      ) : (
        ""
      )}
      {logos.map((logo) => (
        <i
          className={`${logo.LogoChemin} ${
            Click
              ? stringChosenLogo === logo.logoName
                ? `${logo.logoName}`
                : ""
              : ""
          }`}
          onClick={Click ? handleClickLogo(logo) : null}
          key={logo.id}
        ></i>
      ))}
      <img
        src={reduxLogo.imgLogo}
        alt="logo redux"
        className={`logoRedux ${
          stringChosenLogo === "Redux" ? "" : "grayscale"
        }`}
        onClick={handleClick}
      />
    </>
  );
}