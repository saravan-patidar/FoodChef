import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { changeName } from "../utils/userSlice";

const validationSchema = yup.object({
  email: yup.string().email("Invalid Email").required("Required"),
  password: yup
    .string()
    .min(6, "Password must be 6 characters")
    .required("Required"),
});

const Login = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema,
    onSubmit: (value, resetForm) => {
      dispatch(changeName(value.email.split("@")[0]));
      resetForm.resetForm();
    },
  });
  return (
    ({ values, handleChange, handleBlur, handleSubmit, touched, errors } =
      formik),
    (
      <div className="h-[80vh] flex justify-center items-center">
        <div className="mt-24 my-5  w-2/6 bg-orange-300  shadow-xl m-auto border">
          <h2 className="font-bold text-center text-xl p-3 bg-slate-700 text-white  ">
            LOGIN
          </h2>
          <form className="p-7 text-center" onSubmit={handleSubmit}>
            <div className="my-2 flex flex-col w-4/6 m-auto">
              <label htmlFor="email" className="text-xl font-bold text-left">
                Email
              </label>
              <input
                className="p-2 my-2 outline-none rounded-lg font-semibold"
                type="email"
                name="email"
                id="email"
                autoComplete="off"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email ? (
                <div className="text-red-500 font-bold text-center">
                  {errors.email}
                </div>
              ) : null}
            </div>
            <div className="my-2 flex flex-col w-4/6 m-auto">
              <label htmlFor="password" className="text-xl font-bold text-left">
                Password
              </label>
              <input
                className="p-2 my-2 outline-none rounded-lg"
                type="text"
                name="password"
                id="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password ? (
                <div className="text-red-500 font-bold text-center ">
                  {errors.password}
                </div>
              ) : null}
            </div>
            <button
              type="submit"
              className=" p-2 m-auto w-3/6 font-bold tetx-xl text-center bg-blue-400 rounded-full hover:bg-blue-700"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    )
  );
};
export default Login;
