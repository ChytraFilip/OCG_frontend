import { useState } from 'react';
import bgsi from '../assets/si.jpg'

const Signin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");



    const submittedForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        //  logic 

    }

    return (
        <section className="flex justify-center items-center h-screen" 
                 style={{ backgroundImage: `url(${bgsi})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="w-full max-w-xs bg-gray-900 p-8 rounded-lg shadow-md bg-opacity-90">
                <h1 className="text-white text-2xl font-bold mb-6 text-center">Sign In</h1>
                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                <form onSubmit={submittedForm}>
                    <input 
                        type="text"
                        placeholder="Enter your email"
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full mb-4 p-2 rounded text-gray-900"
                    />
                    <input 
                        type="password" 
                        placeholder="Enter your password"
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full mb-6 p-2 rounded text-gray-900"
                    />
                    <input 
                        type="submit"
                        value="Sign In"
                        className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-500 w-full"
                    />
                </form>
            </div>
        </section>
    );
}

export default Signin;
