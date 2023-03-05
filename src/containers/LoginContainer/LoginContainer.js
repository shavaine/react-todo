import React, {useState} from 'react';

const currentDate = new Date().getFullYear()
const LoginContainer = ({login}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        login(username, password)
        setUsername('');
        setPassword('');
    }

    return (
        <main className="form-signin w-100 m-auto">
            <form onSubmit={handleSubmit} className='text-center'>
                <h1><i className="bi bi-person-circle"></i></h1>
                <h1 className="h3 mb-3 fw-normal">Login</h1>
                <div className="form-floating">
                <input type="text" onChange={e => setUsername(e.target.value)} value={username} className="form-control" id="floatingInput" placeholder="Username" ></input>
                <label >username</label>
                </div>
                <div className="form-floating">
                <input type="password" onChange={e => setPassword(e.target.value)} value={password}  className="form-control" id="floatingPassword" placeholder="Password" ></input>
                <label >Password</label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Login</button>
                <p className="mt-5 mb-3 text-muted">Shavaine Brown - ©{currentDate}</p>
            </form>
        </main>
    );
}

export default LoginContainer;
