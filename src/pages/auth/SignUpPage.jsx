import {useRef} from "react";

// styling
import "../../assets/css/register.css";
import {Link, useNavigate} from "react-router-dom";
import {z} from "zod";
import {USERNAME_MAX_LENGTH, USERNAME_MIN_LENGTH} from "../../data/constants.js";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {createAccount} from "../../services/authServices.js";
import AxiosConsumer from "../../contexts/AxiosContext.jsx";

const registerSchema = z.object({
    username: z.string({
        required_error: "Please provide a username.",
    })
        .min(USERNAME_MIN_LENGTH)
        .max(USERNAME_MAX_LENGTH),

    email: z.string().email({
        required_error: "Please provide a valid email.",
    }),

    password: z.string({
        required_error: "Password must be at least 8 characters long",
    })
        .min(8),
});

export default function SignUpPage() {
    const axiosInstance = AxiosConsumer();
    const navigate = useNavigate();

    const usernameField = useRef();
    const emailField = useRef();
    const passwordField = useRef();

    const {
        register,
        handleSubmit,
        control,
        formState: {errors},
    } = useForm({
        resolver: zodResolver(registerSchema),
    });

    async function handleSignUp(data) {
        const {username, email, password} = data;

        await createAccount(email, password)
            .then(async credential => {
                await axiosInstance.post('/users', {
                    id: credential.user.uid,
                    username: username,
                    email: email,
                }, {
                    headers: {
                        'X-Account-Provision': true,
                    }
                })
                    .then(response => {
                        if (response.status === 201) {
                            navigate("/u");
                        }
                    })
            });
    }

    return (
            <section className="registerBody">
                <div className="registerContainer">
                    <h1 className="title">Tixcident</h1>
                    <p className="subtitle">Sign Up</p>
                    <form onSubmit={handleSubmit(handleSignUp)}>
                        <div className="inputbox">
                            <input placeholder="Username" ref={usernameField} {...register('username')} />
                            {errors.username && <span className="text-red-600"> Please enter a username </span>}
                        </div>
                        <div className="inputbox">
                            <input type="email" placeholder="Email" ref={emailField} {...register('email')} />
                            {errors.email && <span className="text-red-600"> Please enter an e-mail address </span>}
                        </div>
                        <div className="inputbox">
                            <input type="password" placeholder="Password" ref={passwordField} {...register('password')} minLength='8'/>
                            {errors.password && <span className="text-red-600"> Please enter a password </span>}
                        </div>
                        <button className="btn">
                            Create Account
                        </button>
                    </form>

                    <div className="links">
                        <p>Already have an account?<Link to={'/login'}> Login here</Link></p>
                    </div>
                </div>
            </section>
    )
}