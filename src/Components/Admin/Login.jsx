import React from "react";
import "./Login.css";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

// import { ContactRsolver } from "../../utils/Validation/ContactResolver";
export default function Login() {
  let history = useHistory();

  const admin = {
    email: "ash@gmail.com",
    password: 123,
  };
  const handleChange = (event) => {
    // alert(event);
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: "" });

  const handleonChange = async (value) => {
    console.log("Captcha value:", value);
    // var body = {
    //   value: value,
    // };
  };
  const onSubmit = async (data) => {
    // var result = await postData("Contactus/addnewrecord", body);
    if (data.email == admin.email) {
      alert("success");
      localStorage.setItem("user", data.email);
      history.push("/LandingPage");
    } else {
      alert("failed");
    }
  };
  return (
    <div className="bgimage">
      <div className="container ">
        <div className="row justify-content-center">
          <div className="col-md-10 outerdiv  ">
            <div className="row">
              <div className="col-md-4  m-0 p-0 ">
                <div className="leftside">
                  <div className="headingside">
                    <h3>Login</h3>
                    <h4>Welcome back</h4>
                  </div>
                </div>
              </div>
              <div className="col-md-8 ">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="row rightside"
                >
                  <div
                    className="form-group  col-md-10"
                    style={{ height: "50px" }}
                  >
                    <input
                      placeholder="Email"
                      name="email"
                      type="text"
                      {...register("email")}
                      className={`form-control ${
                        errors.email ? "is-invalid" : ""
                      }`}
                    />
                    <div className="invalid-feedback">
                      {errors.email?.message}
                    </div>
                  </div>
                  <div
                    className="form-group  col-md-10"
                    style={{ height: "50px" }}
                  >
                    <input
                      placeholder="Password"
                      name="password"
                      type="text"
                      {...register("password")}
                      className={`form-control ${
                        errors.email ? "is-invalid" : ""
                      }`}
                    />
                    <div className="invalid-feedback">
                      {errors.password?.message}
                    </div>
                  </div>
                  <div
                    className="form-group  col-md-4"
                    style={{ height: "50px" }}
                  >
                    <button type="Submit" className="btn btn-warning">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
