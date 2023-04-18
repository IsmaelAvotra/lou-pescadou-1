import Link from "next/link";
import Bubbles2 from "../../components/mobile/inc/Bubbles2";

const Signup = () => {
  return (
    <div className="container pt-[200px] font-mono capitalize">
      <div className="row d-flex justify-content-center">
        <div className="col-6 login-contianer  m-0 glass">
          <div className="row justify-content-center">
            <h2 className="text-light text-center text-2xl mb-4">
              Create your account
            </h2>
          </div>
          <div className="col">
            <div className="w-100">
              <form action="" method="get" className="w-full m-auto">
                <div className="m-2">
                  <input
                    className="input"
                    type="email"
                    required
                    placeholder="Name"
                  />
                </div>
                <div className="m-2">
                  <input
                    className="input"
                    type="email"
                    required
                    placeholder="Email"
                  />
                </div>
                <div className="m-2">
                  <input
                    className="input"
                    type="text"
                    required
                    placeholder="Password"
                  />
                </div>
                <div className="w-full p-3">
                  <Link
                    href="/Login"
                    className="text-center w-full d-block text-light"
                  >
                    Tu as déjà un compte?
                    <span className="underline text-sm text-[#0b0960] ms-2">
                      Se conncter{" "}
                    </span>
                  </Link>
                </div>
                <div className="flex text-center w-full items-center justify-center">
                  <button className="btn btn-light p-1 me-4">
                    <img
                      className="svg-icon"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACJElEQVR4nO3Zy4tOcRzH8ZfkVi6Ta1FYkY2dBQnZuY6SWEmILCyGjGEle7kUNm4L8xeQLNDYumVh4ZLMgmmyGBZGZMyjo5+SnMvMOc95ztR513f3PN/f5/N7zvf3Pb/vQ01NTU1NhZiJ9diP4+jEHmzEUhVlHo7hKX6ikRC9uIS1KrLb5/E1RXRc9LTSSDs+jlL4v3EFU8oSPg6nMVyQ+EaI55hfhoELBQtvhOjG+GaLPzGWxa/DUAYxT9CFVViI2ViGHbiGwVaIn4w3KcJfYlOGXHNxMdRQKeIjjqaIv43pI8y5sizxE9CXIP5++ExlaU8Q3xeaWaW5kWDgoDFAb4z4gao/OkJhxu3+Tdm4Fcz+ifd4mzHuycnyBAMdGXP05Ghwg3kNrE5IvrMEA428h0SSgV0lGZg1lh+hRngLGDXTEl6bu0sw8EMBvItJ/gkTM3x/Cw6kxEDMGi+KMHA9YYcOFZB/RUL+qwXk/72DcQv05y0y3E3IH/06uYm67YeERR7k6MiRwLi8Ue0tVhAdKcV2BzNGmDO64HxP2ZjCmIRXKSZeY2vGk+1shvnRBgWzJuOV8hlOhia4KHTSJdgWbmKfM+R4GKYfhdOZsylliS/BcNM410Txw9iuBE41YbA1hH1KZHPoA0WI729G0WahDWf+M+vJGt9wGXO0mEjAETzKcFJFx+fj8N/BAhWkLUzx9gaRURzG7jALmtpqgTU1NTU1/uYXnjQjWWouP2QAAAAASUVORK5CYII="
                      alt="gogle icon"
                    />
                  </button>

                  <button className="btn btn-light p-1">
                    <img
                      className="svg-icon"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACd0lEQVR4nO2Zv2sUQRTHP+evwigSrCyiAWOpTXpBxcRcCkn8BVrZif+AjUJQSA5Jo4VpbMQiJtrE/CCojZ3YGEQx9nYaE6PRxOJWBp4Qwu7czuzb3Tm4L3zhmn1vPszsm7fvoKWWgtceoArUgGlgEfgO/BWb35+A58AI0CfPBKGKLGgSWAciR/8BJoAzEqsUXQDeeyw+yQvAYJEAR4BXigBb/QLoyhviHLCSI0QkXgUu5wFgzu9QAQDRFtc03x0TaKwEiEj8QAtmpESISHwnK8SlACAi8ZUs1emn0iLMffFQSraJux/YB7QDncBRYLRBjB/AYR8QrRL7EjiQIt/VFLHmXSHOK0HMAjtS5kwDYjyQFqKidGN/kyOEMsi7tFWsT2k3hh0gXEAioDdNwEklkGOWHN3Afcn1328dYo83gtjr2cXGVZjtFoiNjPF/A7ttIFXFTjZJj5Ry9NhAakpJXltyfCniHZxWSjKXEL8iX4saOaZsIJ8V74847VKKH8lnc6KWmgjkqw1ko4lA1rVBBqT522zbdKQ9wXcd85q1JmrZA+Q0Onri0QIlarFEENNDueT9aAs2WxLINmBNs/wOlwRySPvzt98j4HXpnza7y3Ihdsf4mkfeXhuIacR+eQQtuvyuAW2NtvlpE4BMkEI9TQByKg2IOccfAgZZwEFnAwapUuA4KC+QeTzUKVPxUEBWgIN4yjSE9QBA6sBFMup2ACBDKOleiSCjKOuGwzHTAKlr7kTcX2/LBYAsucx4s3SqMzmCTAEdFKh+y5jTB+SNzJ1L03HgsYxJXUFWZfJoYgQjs8iTwE0pDHHaCTwDbgEn5JmWWiJg/QOlYrQmouYwLQAAAABJRU5ErkJggg=="
                      alt="facebook icon"
                    />
                  </button>
                </div>
                <br />
                <div className="row m-1">
                  <div className="col">
                    <button className="btn btn-secondary w-100 text-base text-black">
                      Signup
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-pes"></div>
      <Bubbles2 />
    </div>
  );
};
export default Signup;
