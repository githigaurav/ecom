import { useState } from "react";

function Login() {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        // console.log(e.target.name);
        // console.log(e.target.value);
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    console.log(user);
    return (
        <div className="w-full h-screen flex justify-center items-center">
            
            <form className="flex flex-col gap-3 w-full max-w-[600px] text-center bg-blue-400 p-5 rounded-lg">
                <h3 className="font-bold uppercase text-2xl m-5">Login</h3>                              
                    <input
                        type="email"
                        value={user.email}
                        onChange={handleChange}
                        name="email"
                        placeholder="username/email"
                        className="p-3"
                    ></input>
                    <input
                        type="password"
                        value={user.password}
                        onChange={handleChange}
                        name="password"
                        placeholder="Password"
                        className="p-3"
                    ></input>
                    {/* <select name="" id="" className="p-3 text-blue-600">
                        <option value="">Type</option>
                        <option value="seller">Seller</option>
                        <option value="admin">Admin</option>
                    </select> */}
                <div>

                    <button className="bg-blue-600 py-2 px-6 text-white uppercase">Login</button>
                </div>
            </form>
        </div>
    );
}

export default Login;
