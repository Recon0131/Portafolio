import React from "react";
import WorkTwoToneIcon from "@mui/icons-material/WorkTwoTone";
import Next from "../icons/Next";
import Rea from "../icons/React";
import Tailwind from "../icons/Tailwind";
import ProyectForm from "./ProyectForm";
import Mongodb from '../icons/Mongodb'
import Express from '../icons/Express'

function Proyectos() {
  return (
    <div className="text-zinc-200 mx-auto">
      <h1 className=" font-bold text-2xl mx-5">
        Proyectos <WorkTwoToneIcon fontSize="large" />
      </h1>
      <section className=" flex my-10">
      <ProyectForm
          href="https://practicefakestore.vercel.app/"
          tittle="Fake Store"
          description="Web hecha en forma de practica. Uso de carrito de compras y
            buscador."
          image="https://res.cloudinary.com/dpuap0fag/image/upload/v1703703168/Page1_odyc21.png"
          tecnologies={[<Next />, <Rea />, <Tailwind />]}
          hrefGit="https://github.com/Recon0131/FakeStoreProyect"
        />
      </section>
      <section className=" flex my-10">
      <ProyectForm
          href="https://frontend-proyect2.onrender.com/"
          tittle="Find your doctor"
          image="https://res.cloudinary.com/dpuap0fag/image/upload/v1703715045/Page2_c3yuhg.png"
          description="Web en forma de practica. Uso de base de datos,jwt y cookies."
          tecnologies={[<Rea />, <Tailwind />,<Mongodb/>,<Express/>]}
          hrefGit="https://github.com/Recon0131/proyect2-fullstack"
        />
      </section>
    </div>
  );
}

export default Proyectos;
