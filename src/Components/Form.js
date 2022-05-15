import React, { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("pankaj@gmail.com");
  const [pass, setPass] = useState("123456");
  const [add, setAdd] = useState("A-3, Bakrol Gate, Bakrol, Anand");
  const [city, setCity] = useState("Ahemdabad");
  const [allUser, setAllUser] = useState([]);
  const submitData = (e) => {
    e.preventDefault();
    const newUser = { email, pass, add, city };
    setAllUser([...allUser, newUser]);
    setEmail("");
    setPass("");
    setAdd("");
    setCity("");
  };
  return (
    <>
      <h1 className="text-white bg-success text-center top-sticky">
        Crud operation form
      </h1>
      <div className="container">
        <div className="row">
          <div className="col-12 text-left">
            <form className="row g-3" onSubmit={submitData}>
              <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputPassword4" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword4"
                  value={pass}
                  onChange={(e) => {
                    setPass(e.target.value);
                  }}
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="1234 Main St"
                  value={add}
                  onChange={(e) => {
                    setAdd(e.target.value);
                  }}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputCity" className="form-label">
                  City
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputCity"
                  value={city}
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                />
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary">
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
