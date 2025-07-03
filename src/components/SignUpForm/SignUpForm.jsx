
import css from './SignUpForm.module.css'
import { useLocalStorage } from 'hooks/useLocalStorage';



function SignUpForm() {

    const [email, setEmail] = useLocalStorage('email', '')
    const [password, setPassword] = useLocalStorage('password', '')

    const handleChange = (e) => {
        const { name, value } = e.target
        switch (name) {
            case 'email':
                setEmail(value)
                break;
            case 'password':
                setPassword(value)
                break;
            default: return;
        }
    }


    return (
        <form>
            <label>email
                <input onChange={handleChange} type="email" name="email" value={email} />
            </label>
            <label>password
                <input onChange={handleChange} type="password" name='password' value={password} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

export default SignUpForm;