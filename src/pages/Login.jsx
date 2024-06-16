import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const checkLogin = () => {
    if (email === "rentalcar@gmail.com" && password === "oke123") {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        navigate("/admin");
      }, 1000);
    }
  };

  return (
    <>
      <div className="container-fluid px-0 overflow-x-hidden overflow-y-hidden">
        <div className="row">
          <div className="col-md-8">
            <img
              src="/images/image.png"
              alt=""
              className="img-fluid bg-primary"
            />
          </div>
          <div className="col-md-4 bg-white" style={{ placeContent: "center" }}>
            <div className="container-md">
              <div className="component-signin px-md-5">
                <h2 className="pt-4">Welcome, Admin BCR</h2>

                <div>
                  <form >
                    <div className="mb-3">
                      <label htmlFor="email">
                      </label>
                      <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email" value={email} onChange={(e) => { setEmail(e.target.value); }} required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" >
                      </label>
                      <input type="password" className="form-control" id="password" name="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required
                      />
                    </div>
                    <button type="submit" className="btn btn-primary full-width mt-3" onClick={checkLogin} disabled={isLoading}
                    >
                      {isLoading ? "Loading..." : "Login"}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
