import { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaGithub, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AuthContext } from "../componenst/providers/AuthProviders";


const Register = () => {

    const {
        createUserSignUpWithEmailPassword,
        updateUserProfile,
        google,
        github
    } = useContext(AuthContext) || {};

    const [showPassword, setShowPassword] = useState(false);

    // handle sing up email and password
    const handleSingUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
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

        // create user
        createUserSignUpWithEmailPassword(email, password)
            .then((result) => {
                // update user
                updateUserProfile({
                    displayName: name, photoURL: photo
                })
                toast.success("Sing Up successful")
                console.log(result.user);
            })
            .catch(error => {
                const element = error.message.split(" ")
                toast.error(element[2].split("/")[1].split(")")[0]);
            })



    }

    // google sing in 
    const handleGoogle = () => {
        // google
        google()
            .then(() => {
                toast.success("Google singup successful")
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
                    <h1 className="my-1 text-4xl font-bold">Sign Up</h1>
                    <p className="text-sm dark:text-gray-600">Sign up to create an account</p>
                </div>
                <form onSubmit={handleSingUp} noValidate="" action="" className="space-y-4 lg:w-[400px] md:w-[400px]">
                    <div className="space-y-2">
                        <div>
                            <label htmlFor="emanameil" className="block mb-2 text-sm">Your name</label>
                            <input type="text" name="name" id="name" placeholder="Enter your name" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                            <input type="email" name="email" id="email" placeholder="Enter your email" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                        <div>
                            <label htmlFor="photo" className="block mb-2 text-sm">photo address</label>
                            <input type="text" name="photo" id="photo" placeholder="Enter your photoURL" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label htmlFor="password" className="text-sm">Password</label>
                                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-600">Forgot password?</a>
                            </div>
                            <div className="flex  items-center relative">
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
                            <button className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50 bg-green-500">Sign up</button>
                        </div>
                        <p className="px-6  text-sm text-center dark:text-gray-600">Already have an account.
                            <Link rel="noopener noreferrer" to="/login" className="hover:underline dark:text-violet-600 ml-2">Sign in</Link>.
                        </p>
                    </div>
                </form>
                <div className="flex gap-3 mt-2">
                    <button onClick={handleGoogle} className="w-full flex justify-center items-center gap-1 px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50 border border-green-400">
                        <FcGoogle size="25" />
                        Google
                    </button>
                    <button onClick={handleGithub} className="w-full flex justify-center gap-2 items-center px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50 border border-purple-400"><FaGithub size="20" /> Github </button>
                </div>
            </div>
            <Toaster toastOptions={{ duration: 3000 }} />
        </div>
    );
};

export default Register;