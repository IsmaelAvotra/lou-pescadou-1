import Link from "next/link";
import { use, useCallback, useEffect } from "react";
import { checkout } from "@/App/Features/Card/basketSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { login } from "@/App/Features/auth/authSlice";
import Bubbles2 from "../../components/mobile/inc/Bubbles2";
import { useRouter } from "next/router";
import { switchScreen } from "@/App/Features/manu/menuSlice";
import { showLoading } from "@/App/Features/loading/loadingSlice";

const Login = () => {
  const dispatch = useDispatch();
  const { checkoutSuccess, checkoutUrl, total } = useSelector(
    (state) => state.basket
  );
  const router = useRouter();
  const { Products } = useSelector((state) => state.basket);
  const { loading, user, error, success } = useSelector(
    (state) => state.auth.login
  );
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onchange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData));
  };

  useEffect(() => {
    if (success) {
      if (Products.length > 0) {
        const userData = JSON.parse(localStorage.getItem("user"));
        return dispatch(
          checkout({
            userId: userData.user._id,
            data: {
              products: Products.map((product) => {
                return {
                  _id: product.id,
                  quantity: product.quantity,
                  price: product.price,
                };
              }),
              amount: total,
              status: "Not processed",
              userEmail: userData.user.email
            },
          })
        );
      }
      router.push("/");
      dispatch(switchScreen({ screen: "home" }));
    }
  }, [success]);

  useEffect(() => {
    if (loading) showLoading({ toggled: true });
  }, [loading]);

  useEffect(() => {
    setTimeout(() => {
      dispatch(showLoading({ toggled: false }));
    }, 2000);
  }, []);

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
                      name="email"
                      value={email}
                      required
                      placeholder="Email"
                      onChange={(e) => onchange(e)}
                    />
                  </div>
                  <div className=" m-3">
                    <input
                      className="input"
                      name="password"
                      placeholder="Password"
                      value={password}
                      type="password"
                      required
                      onChange={(e) => onchange(e)}
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
                      <button
                        onClick={(e) => onSubmit(e)}
                        className="btn btn-secondary w-100  text-base text-black"
                      >
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
      <Bubbles2 />
      <div className="bg-pes"></div>
    </div>
  );
};
export default Login;
