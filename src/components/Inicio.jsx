import React from 'react'
import ContactPageTwoToneIcon from '@mui/icons-material/ContactPageTwoTone';


function Inicio() {
    

  return (
    <section className=' text-zinc-200'>
          <div className=' flex w-fit  rounded-porcent p-2 bg-color-rounded float-right my-9 movil:float-none movil:mx-auto  tablet:float-none tablet:mx-auto '>
          <img src='https://res.cloudinary.com/dpuap0fag/image/upload/v1703436869/0540202222367_u2orcv.png' alt='face' height="50" width="150" className=' rounded-porcent h-36 movil:h-48 movil:w-44 tablet:h-48 tablet:w-44'/>
          </div>
        <section className='inline-flex text-2xl my-2 movil:grid movil:justify-center movil:text-3xl tablet:grid tablet:justify-center tablet:text-3xl' >
          <h1 className=' flex'> Hola! , soy <p className=' mx-2 font-bold'> Victor Huerta</p> 👋</h1>
        </section>
        <p className=' hidden movil:flex movil:justify-center movil:text-2xl movil:text-zinc-400 tablet:flex tablet:justify-center tablet:text-2xl tablet:text-zinc-400'>Apasionado por el desarrollo web.</p>
          <p className=' flex mr-48 font-openSans movil:hidden tablet:hidden'> Un desarrollador front end junior autodidacta con 2 años de experiencia no laboral. 
            Me dedico a mis estudios universitarios y, en mis tiempos libres, creo proyectos,
             siempre actualizándome en las últimas tendencias y tecnologías. Estoy comprometido y perseverante en crear mi camino 
             como desarrollador web y actualmente busco adquirir experiencia en el mercado laboral.
          </p>
          <a href='https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:9283ed0a-4953-437f-a679-ca9d613c2c9a' rel="noreferrer" target="_blank" className=' flex w-fit bg-background-buttom-dark px-6 py-2 font-bold my-5 rounded-xl hover:bg-background-buttom-dark-hover transition-all movil:mx-auto tablet:mx-auto'> <ContactPageTwoToneIcon/>  Curriculum </a>
          
    </section>
  )
}

export default Inicio