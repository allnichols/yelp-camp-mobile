import axios from "axios";


export const useSignUp = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const signUp = async (email, password) => {
        console.log('handleSubmit');
        setLoading(true);
        try {
            const response = await axios.post('http://localhost:4000/api/auth/signup', {
                email,
                password,
            });
            console.log(response.data);
            setUser(response.data);
            setLoading(false);


        } catch (error) {
            console.log(error);
            setError(error);
            setLoading(false);
        }
    }

    return { user, error, loading, signUp };
}