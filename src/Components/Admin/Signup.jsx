import React from "react";
import "./Login.css";
import { useForm } from "react-hook-form";
// import { ContactRsolver } from "../../utils/Validation/ContactResolver";
export default function Signup() {
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
  };
  return (
    <div className="bgimage">
      <div className="container ">
        <div className="row justify-content-center">
          <div className="col-md-10 outerdiv  ">
            <div className="row">
              <div className="col-md-4  m-0 p-0 check">
                <div className="leftside">
                  <div className="heading">
                    <h3>Login</h3>
                    <h4>Welcome back</h4>
                  </div>
                </div>
              </div>
              <div className="col-md-8 check">
                <form onSubmit={handleSubmit(onSubmit)} className="row">
                  <div
                    className="form-group   col-md-6"
                    style={{ height: "50px" }}
                  >
                    <input
                      placeholder="First name"
                      name="firstname"
                      type="text"
                      {...register("firstname")}
                      className={`form-control ${
                        errors.firstname ? "is-invalid" : ""
                      }`}
                    />
                    <div className="invalid-feedback">
                      {errors.firstname?.message}
                    </div>
                  </div>

                  <div
                    className="form-group  col-md-6"
                    style={{ height: "50px" }}
                  >
                    <input
                      placeholder="Last name"
                      name="lastname"
                      type="text"
                      {...register("lastname")}
                      className={`form-control ${
                        errors.lastname ? "is-invalid" : ""
                      }`}
                    />
                    <div className="invalid-feedback">
                      {errors.lastname?.message}
                    </div>
                  </div>

                  <div
                    className="form-group  col-md-6"
                    style={{ height: "50px" }}
                  >
                    <input
                      placeholder="Contact No "
                      name="mobile"
                      type="text"
                      {...register("mobile")}
                      className={`form-control ${
                        errors.mobile ? "is-invalid" : ""
                      }`}
                    />
                    <div className="invalid-feedback">
                      {errors.mobile?.message}
                    </div>
                  </div>

                  <div
                    className="form-group  col-md-6"
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
                    className="form-group  col-md-6"
                    style={{ height: "50px" }}
                  >
                    <input
                      placeholder="Password"
                      name="text"
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
                    className="form-group  col-md-6"
                    style={{ height: "50px" }}
                  >
                    <input
                      placeholder="Confirm Password"
                      name="text"
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
                    className="form-group  col-md-6"
                    style={{ height: "50px" }}
                  >
                    <input
                      placeholder="Pin"
                      name="text"
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
                    className="form-group  col-md-6"
                    style={{ height: "50px" }}
                  >
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        value="option1"
                      />
                      <label class="form-check-label" for="inlineRadio1">
                        1
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio2"
                        value="option2"
                      />
                      <label class="form-check-label" for="inlineRadio2">
                        2
                      </label>
                    </div>
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
