import { Formik } from "formik";
import Container from "../Components/Container";
import Input from "../Components/input";
import * as Yup from "yup";
import Swal from "sweetalert2";

const Contact = () => {
  const initialValues = {
    name: "",
    surname: "",
    age: "",
    email: "",
    message: "",
  };
  const validate = Yup.object({
    name: Yup.string().required().min(18).max(65),
    surname: Yup.string().required(),
    age: Yup.number().required(),
    email: Yup.string().required(),
    message: Yup.string().required(),
  });

  const formSubmit = (value, { resetForm }) => {
    console.log(value);
    Swal.fire({
      icon: "success",
      title: "Uğurlu!",
      text: "Mesajınız göndərildi",
      confirmButtonText: "OK",
    }).then(() => {
      resetForm();
    });
  };

  return (
    <div className="py-10">
      <Container>
        <h2 className="uppercase text-2xl text-primary font-medium">
          Contact page
        </h2>
        <div className="h-0.5 w-full bg-main mb-4"></div>

        <Formik
          initialValues={initialValues}
          onSubmit={formSubmit}
          validationSchema={validate}
        >
          {({ values, handleChange, handleSubmit, errors }) => (
            <form className="flex flex-col gap-4 m-4" onSubmit={handleSubmit}>
              <Input
                name="name"
                value={values.name}
                onChange={handleChange}
                placeholder="Adınız"
                type="text"
                error={errors.name}
              />

              <Input
                name="surname"
                value={values.surname}
                onChange={handleChange}
                placeholder="Soyadınız"
                type="text"
                error={errors.surname}
              />

              <Input
                name="age"
                value={values.age}
                onChange={handleChange}
                placeholder="Yaşınız"
                type="number"
                error={errors.age}
              />

              <Input
                name="email"
                value={values.email}
                onChange={handleChange}
                placeholder="Email"
                type="email"
                error={errors.email}
              />

              <Input
                name="message"
                value={values.message}
                onChange={handleChange}
                placeholder="Mesaj"
                type="text"
                error={errors.message}
              />

              <button
                type="submit"
                className="bg-main text-white text-2xl p-3 rounded-xl"
              >
                Göndər
              </button>
            </form>
          )}
        </Formik>
      </Container>
    </div>
  );
};

export default Contact;
