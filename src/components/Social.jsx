import React from "react";
import PeopleAltTwoToneIcon from "@mui/icons-material/PeopleAltTwoTone";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Social() {
  return (
    <div className="dark:text-zinc-200 text-color-text-cv mx-5">
      <h1 className=" font-bold text-2xl ">
        Social <PeopleAltTwoToneIcon fontSize="large" />
      </h1>
      <div className=" flex gap-5 my-5">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/rai-huerta-024207224/"
          className=" flex w-fit px-5 py-4 rounded-xl gap-1 border-2 hover:ring-1 dark:hover:ring-hover-buttom-social dark:border-hover-buttom-social border-zinc-300 hover:ring-zinc-300"
        >
          <h2 className=" text-linkedin font-semibold">Linkedin</h2>
          <LinkedInIcon className=" my-auto text-linkedin" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/Recon0131"
          className=" flex w-fit px-5 py-4 rounded-xl border-2 gap-1 hover:ring-1 dark:hover:ring-hover-buttom-social dark:border-hover-buttom-social border-zinc-300 hover:ring-zinc-300"
        >
          <h2 className=" text-zinc-400 font-semibold">Github</h2>
          <GitHubIcon className=" dark:text-zinc-400 my-auto text-zinc-600" />
        </a>
      </div>
    </div>
  );
}

export default Social;
