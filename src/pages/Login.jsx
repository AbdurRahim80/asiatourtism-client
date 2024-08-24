import { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaGithub, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AuthContext } from "../componenst/providers/AuthProviders";

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);

    const {
        userSignIn,
        google,
        github
    } = useContext(AuthContext) || {};

    // handle sing up email and password
    const handleSingUp = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        //password validation
        if (password.length < 6) {
            toast.error("Length must be at least 6 character");
            return
        }
        if (!/[A-Z]/.test(password)) {
            toast.error("Must have a Uppercase letter in the password");
            return;
        }
        if (!/[a-z]/.test(password)) {
            toast.error("Must have a Lowercase letter in the password");
            return;
        }

        // sign in with email and password
        userSignIn(email, password)
            .then(result => {
                toast.success("Sign In successful")
                console.log(result.user);
            })
            .catch(error => {
                toast.error(error.message);
            })

    }

    // handle sing in
    const handleGoogle = () => {
        // google
        google()
            .then(() => {
                toast.success("Google singin successful")
            })
            .catch(error => {
                toast.error(error.message);
            })
    }

    // handle gtihub
    const handleGithub = () => {
        // google
        github()
            .then(() => {
                toast.success("Sign in with Github successful")
            })
            .catch(error => {
                toast.error(error.message);
            })
    }


    return (
        <div className="flex justify-center items-center min-h-[calc(100vh-353.077px)]">
            <div className="flex flex-col p-6 rounded-md border-2 border-black/30 dark:bg-gray-50 dark:text-gray-800">
                <div className="mb-2 text-center">
                    <h1 className="my-1 text-4xl font-bold">Sign In</h1>
                    <p className="text-sm dark:text-gray-600">Sign in to access your account</p>
                </div>
                <form onSubmit={handleSingUp} noValidate="" action="" className="space-y-4 lg:w-[400px] md:w-[400px]">
                    <div className="space-y-2">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                            <input type="email" name="email" id="email" placeholder="Enter your email" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label htmlFor="password" className="text-sm">Password</label>
                                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-600">Forgot password?</a>
                            </div>
                            <div className="flex   items-center relative">
                                <input type={showPassword ? "text" : "password"} name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 " />
                                <span className='hover:cursor-pointer absolute right-0 pr-3' onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ? <FaRegEyeSlash /> : <FaRegEye />
                                    }

                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-500 dark:text-gray-50 bg-green-500">Sign up</button>
                        </div>
                        <p className="px-6  text-sm text-center dark:text-gray-600">Don't have an account yet?
                            <Link rel="noopener noreferrer" to="/register" className="hover:underline dark:text-violet-500 ml-2">Sign up</Link>.
                        </p>
                    </div>
                </form>
                <div className="flex flex-col gap-3 mt-2">
                    <button onClick={handleGoogle} className="w-full flex justify-center items-center gap-1 px-8 py-3 font-semibold rounded-md dark:bg-violet-500 dark:text-gray-50 border">
                        <FcGoogle size="25" />
                        Sing In with Google
                    </button>
                    <button onClick={handleGithub} className="w-full flex justify-center gap-2 items-center px-8 py-3 font-semibold rounded-md dark:bg-violet-500 dark:text-gray-50 border"><FaGithub size="20" />Sing In with Github </button>
                </div>
            </div>
            <Toaster toastOptions={{ duration: 3000 }} />
        </div>
    );
};

export default Login;