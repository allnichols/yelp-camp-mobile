import { useState } from 'react';
import { useSignup } from '../../services/useSignUp';
import { StyleSheet, SafeAreaView, Text, TextInput, Button } from 'react-native';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { user, error, loading, signUp } = useSignup();

    const handleSubmit = () => {
        console.log('handleSubmit');
        signUp(email, password);
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Sign Up</Text>
            <TextInput
                style={styles.input}
                placeholder='Email'
                onChangeText={setEmail}
                value={email} />
            <TextInput
                style={styles.input}
                placeholder='Password'
                onChangeText={setPassword}
                value={password} />
            <Text>{error && error.message}</Text>
            <Text>{loading && 'Loading...'}</Text>
            <Text>{user && user.email}</Text>
            <Button title='Sign Up' onPress={handleSubmit} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '95%',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 50,
    },  
    input: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        margin: 10,
        padding: 10,
    }
});



export default SignUp;
