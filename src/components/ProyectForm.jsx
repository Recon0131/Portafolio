import React from "react";
import InsertLinkTwoToneIcon from "@mui/icons-material/InsertLinkTwoTone";
import GitHub from '../icons/GitHub'


function ProyectForm({href,tecnologies,hrefGit,description,tittle,image}) {
    
  return (
    <div className=" flex movil:grid">
        <a
          className=" transition-all group"
          href={href}
          rel="noreferrer"
          target="_blank"
        >
          <div className=" relative w-96 h-50 dark:bg-background-image bg-background-image-white rounded-lg overflow-hidden group-hover:cursor-pointer">
            <img
              src={image}
              width="400"
              alt="page1"
              className=" relative -bottom-8 -right-8 group-hover:-bottom-6 group-hover:-right-6 duration-300 transition-all movil:w-96"
            />
          </div>
        </a>
        <div className=" ml-5">
          <h1 className=" font-bold dark:text-zinc-200 text-zinc-800">{tittle}</h1>
          <p className=" dark:text-zinc-200 text-zinc-600">
            {description}
          </p>
          <section className=" flex-col my-5 mx-2 space-x-3">
            {
                tecnologies.map((tecnologie,i)=>{
                    return <div className=" inline-flex " key={i}>{tecnologie}</div>;
                })
            }
          </section>
          <div className="flex w-fit gap-5 ">
            <a
              className="flex bg-zinc-900 text-zinc-100 dark:bg-zinc-100 dark:text-zinc-900 text-xl font-bold w-fit px-4 py-2 gap-1 m-auto rounded-lg"
              href={hrefGit}
              rel="noreferrer"
              target="_blank"
            >
              <h1 className=" my-auto">Code</h1>
              <GitHub className=" my-auto dark:text-zinc-900"/>
              
            </a>
            <a
              className="flex bg-zinc-900 text-zinc-100 dark:bg-zinc-100 dark:text-zinc-900 text-xl font-bold w-fit px-4 py-1 m-auto rounded-lg group transition-all"
              href={href}
              rel="noreferrer"
              target="_blank"
            >
              <h1 className=" my-auto">Link</h1>

              <InsertLinkTwoToneIcon fontSize="large" className=" ml-2 group-hover:ml-4 group-hover:rotate-45 group-hover:transition-all transition-all" />
            </a>
          </div>
        </div>
    </div>
  )
}

export default ProyectForm