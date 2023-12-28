import { Email as Em } from "@mui/icons-material";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { CopyToClipboard } from "react-copy-to-clipboard";
import toast, { Toaster } from "react-hot-toast";
import WestIcon from '@mui/icons-material/West';

function Email() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const form = useRef();

  const sendEmail = (e) => {
    emailjs
      .sendForm(
        "service_mj9b9nq",
        "template_not3k4n",
        form.current,
        "iQAi7OxNlfYArr73r"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="dark:text-zinc-200 mx-3 text-color-text-cv">
      <section className="flex mb-2 gap-2">
        <h1 className="font-bold text-2xl">Email</h1>
        <CopyToClipboard text="raihuerta01@gmail.com">
          <button onClick={()=> toast("Email copiado")}>
            <Em fontSize="large" className=" animate-pulse"/>
          </button>
        </CopyToClipboard>
          <div className=" my-auto"><WestIcon/> Click para copiar mi email</div>
        <Toaster/>
      </section>

      <form
        ref={form}
        onSubmit={handleSubmit((data) => {
          sendEmail(data);
          toast("Email enviado")
        })}
      >
        <section className=" grid gap-5 ">
          <label className="font-bold text-2xl "> Correo </label>
          <input
            type="email"
            {...register("from_name", { required: true })}
            name="from_name"
            className=" dark:bg-background-email bg-background-image-white dark:text-zinc-200 text-zinc-800 rounded-xl p-2"
          ></input>
          {errors.from_name && (
            <span className=" text-red-500">A email is required</span>
          )}
        </section>
        <section className=" grid gap-5 my-2">
          <label className="font-bold text-2xl">Comentario</label>
          <textarea
            type="text"
            name="message"
            cols="15"
            rows="5"
            {...register("message", { required: true })}
            className=" dark:bg-background-email bg-background-image-white dark:text-zinc-200 text-zinc-800 rounded-xl p-2 "
          ></textarea>
          {errors.message && (
            <span className=" text-red-500">A message is required </span>
          )}
        </section>

        <input
          className=" bg-background-buttom-white px-4 py-2 my-4 rounded-xl cursor-pointer text-zinc-700 "
          type="submit"
          value="Enviar"
          
        />
        <Toaster/>
      </form>
    </div>
  );
}

export default Email;
