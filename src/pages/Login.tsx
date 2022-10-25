import { AtSymbolIcon, EyeIcon } from "@heroicons/react/24/outline";
import { Navigate, useNavigate } from "react-router-dom";
import { login } from "../context/login";
import useInput from "../hooks/useInput";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, onEmailChange, setEmail] = useInput("");
  const [password, onPasswordChange, setPassword] = useInput("");
  return (
    <div className="mx-auto flex min-h-screen max-w-screen-xl items-center px-4 py-16 sm:px-6 lg:px-8">
      <div className="w-full">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Login</h1>
        </div>
        <form
          onSubmit={(e) => {
            login(e, email, password);
            navigate("/");
          }}
          className="mx-auto mt-8 mb-0 max-w-md space-y-4 text-dark dark:text-light"
        >
          <div>
            <div className="relative">
              <label className="border-gray-200 relative block overflow-hidden border-b pt-3 text-dark">
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={onEmailChange}
                  className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                />
                <span className="absolute left-0 top-2 -translate-y-1/2 text-xs text-light transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs dark:text-dark">
                  Email
                </span>
              </label>
              <span className="absolute inset-y-0 right-4 inline-flex items-center">
                <AtSymbolIcon className="h-5 w-5 text-gray-400" />
              </span>
            </div>
          </div>

          <div>
            <label className="sr-only">Password</label>
            <div className="relative">
              <label className="border-gray-200 relative block overflow-hidden border-b pt-3 text-dark">
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={onPasswordChange}
                  className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                />

                <span className="absolute left-0 top-2 -translate-y-1/2 text-xs text-light transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs dark:text-dark">
                  Password
                </span>
              </label>

              <span className="absolute inset-y-0 right-4 inline-flex items-center">
                <EyeIcon className="h-5 w-5 text-gray-400" />
              </span>
            </div>
          </div>
          <button
            type="submit"
            className="inline-block w-full rounded-lg bg-dark px-5 py-3 text-sm font-medium text-dark dark:bg-light dark:text-light"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
