import toast from "react-hot-toast";
import { ToastNotify } from "./Toast";

export const FormContact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      e.target[0].value.trim() === "" ||
      e.target[1].value.trim() === "" ||
      e.target[2].value.trim() === ""
    ) {
      toast.custom((t) => {
        return (
          <ToastNotify
            t={t}
            message={"Please fill in all fields!"}
            type={"warning"}
          />
        );
      });
      return;
    }
    const name = e.target[0].value;
    const email = e.target[1].value;
    const message = e.target[2].value;
    console.log(name, email, message);
    toast.custom((t) => {
      return (
        <ToastNotify
          t={t}
          message={"Message sent successfully!"}
          type={"success"}
        />
      );
    });
  };
  return (
    <>
      <form action="" className="formContact" onSubmit={handleSubmit}>
        <div className="formContact__group">
          <label htmlFor="name">{"</name>"}</label>
          <input type="text" id="name" />
        </div>
        <div className="formContact__group">
          <label htmlFor="email">{"</email>"}</label>
          <input type="email" id="email" />
        </div>
        <div className="formContact__group">
          <label htmlFor="message">{"</message>"}</label>
          <textarea name="message" id="message" cols="30" rows="10"></textarea>
        </div>
        <button type="submit">{"</submit>"}</button>
      </form>
    </>
  );
};
