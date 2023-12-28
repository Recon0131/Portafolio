import React from "react";
import PeopleAltTwoToneIcon from "@mui/icons-material/PeopleAltTwoTone";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Social() {
  return (
    <div className="text-zinc-200 mx-5">
      <h1 className=" font-bold text-2xl ">
        Social <PeopleAltTwoToneIcon fontSize="large" />
      </h1>
      <div className=" flex gap-5 my-5">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/rai-huerta-024207224/"
          className=" flex w-fit px-5 py-4 rounded-xl gap-1 border-2 hover:ring-1 hover:ring-hover-buttom-social border-hover-buttom-social"
        >
          <h2 className=" text-linkedin">Linkedin</h2>
          <LinkedInIcon className=" my-auto text-linkedin" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/Recon0131"
          className=" flex w-fit px-5 py-4 rounded-xl border-2 gap-1 hover:ring-1 hover:ring-hover-buttom-social border-hover-buttom-social"
        >
          <h2 className=" text-zinc-400">Github</h2>
          <GitHubIcon className=" text-zinc-400 my-auto" />
        </a>
      </div>
    </div>
  );
}

export default Social;
