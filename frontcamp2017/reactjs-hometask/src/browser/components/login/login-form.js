import React from 'react';

const LoginForm = ({
    onSubmit,
    onChange,
    errors,
    user
}) => (
    <form action="/" onSubmit={onSubmit}>
        <h2>Login</h2>
        <p>
            <label>Email</label>
            <input type="text" name="email" onChange={onChange} value={user.email}/>
        </p>
        <p>
            <label>Password</label>
            <input type="password" name="password" onChange={onChange} value={user.password}/>
        </p>
        <p>
            <button type="submit">Login</button>
        </p>
    </form>
);

export default LoginForm;