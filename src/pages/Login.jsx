import Link from "next/link";
import Bubbles2 from "../../components/mobile/inc/Bubbles2";

const Login = () => {
  return (
    <div className="container pt-[200px] font-mono capitalize">
      <div className="row d-flex justify-content-center m-0">
        <div className="login-contianer m-0 glass">
          <div className="row justify-content-center">
            <h2 className="text-light text-center text-2xl mb-4">
              Welcome Back
            </h2>
          </div>
          <div className="col">
            <div className="row w-100">
              <div className="col">
                <form>
                  <div className=" m-3">
                    <input
                      type="email"
                      className="input"
                      placeholder="Enter email"
                    />
                  </div>
                  <div className=" m-3">
                    <input
                      type="password"
                      className="input"
                      placeholder="Password"
                    />
                  </div>

                  <div className="w-full p-3">
                    <Link
                      href="/Signup"
                      className="text-center w-full d-block text-light"
                    >
                      Tu n'as pas un compte ?
                      <span className="underline text-sm text-[#0b0960] ms-2">
                        Sinscrire{" "}
                      </span>
                    </Link>
                  </div>

                  <div className="row m-1">
                    <div className="col">
                      <button className="btn btn-secondary w-100  text-base text-black">
                        Se connecter
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Bubbles2/>
      <div className="bg-pes"></div>
    </div>
  );
};
export default Login;
