import { useState } from 'react';
import { StyleSheet, SafeAreaView, Text, View, TextInput } from 'react-native';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
