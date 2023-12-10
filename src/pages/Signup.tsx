import { useState } from 'react'

const Signup = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("")

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

    return <section>
        <div className="">
            <h1>Signup Now</h1>
            {error && <p>{error}</p>}
            <form action="" onSubmit={(e)=>submitedForm(e)}>
                <input 
                    type="text" 
                    placeholder="Enter your username"
                    onChange={(e)=>setUsername(e.target.value)}
                />
                <input 
                    type="text"
                    placeholder="Enter your email"
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <input 
                    type="password" 
                    placeholder="Enter your passoword"
                    onChange={(e)=>setPassword(e.target.value)}    
                />
                <input 
                    type="submit"
                    value="Registration"
                />
            </form>
        </div>
    </section>
}

export default Signup