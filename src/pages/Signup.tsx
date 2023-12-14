import { useState } from 'react';
import bgsu from '../assets/su.jpg'

const Signup = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("")

    // Variable for background image

    /**
     * SubmitedForm
     * Function send registration data to the backend endpoint
     */
    const submitedForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = {
            username: username,
            email: email,
            password: password
        }

        fetch('https://your-backend-api.com/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => {
            if (response.ok) {
                console.log('Registration successful');
            } else {
                console.error('Registration failed');
                setError('Registration failed')
            }
        })
        .catch(error => {
            console.error('Error during registration:', error);
            setError('Error during registration')
        });
    }

    return (
        <section className="flex justify-center items-center h-screen" 
                 style={{ backgroundImage: `url(${bgsu})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="w-full max-w-xs bg-gray-900 p-8 rounded-lg shadow-md bg-opacity-90">
                <h1 className="text-white text-2xl font-bold mb-6 text-center">Signup Now</h1>
                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                <form onSubmit={submitedForm}>
                    <input 
                        type="text" 
                        placeholder="Enter your username"
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full mb-4 p-2 rounded text-gray-900"
                    />
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
                        value="Registration"
                        className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-500 w-full"
                    />
                </form>
            </div>
        </section>
    );
}

export default Signup;
