import auth from "@react-native-firebase/auth";
import Snackbar from "@react-native/snackbar";

import database from "@react-native-firebase/database";



export const signUp =(data)=> async(dispatch)=>{
    
    console.log(data)
    const {name,instaUsername,bio,email,password,country,image} = data

    auth().createUserwithEmailandPassword(email,password)
        .then((data)=>{
            console.log(data)
            console.log("user creation success")

            database()
                .ref('/users/' + data.user.uid)
                .set({
                    name,
                    instaUsername,
                    password,
                    country,
                    bio,
                    uid: data.user.uid
                })
                    .then(()=>console.log('Data set Success'))
                    .Snackbar.show({
                        text: 'account created successfully',
                        textColor: 'white',
                        backgroundColor: '#1b262c'
                    })
        })
        .catch((error)=>{
            console.log(error)
        Snackbar.show({
            text: 'SignUp Failed',
            textColor: 'white',
            backgroundColor: 'red'
        })
    })
}


export const signIn = (data) => async(disaptch)=>{
    console.log(data)
    const { email, password } = data

    auth()
        .signInWithEmailAndPassword(email,password)
            .then(()=>{
                console.log('sign In Success')
                Snackbar.show({
                    text: 'Logged in sucessfully',
                    textColor: 'white',
                    backgroundColor: '1b262c'
                })
            })
            .catch((error)=>{
                console.log(error)
            Snackbar.show({
                text: 'Login failed',
                textColor: 'white',
                backgroundColor: 'red'
            })
})
}

export const signOut = () = async(dispatch)=>{
    auth().
        signOut()
            .then(()=>{
                console.log('sign In Success')
                Snackbar.show({
                    text: 'Logged out sucessfully',
                    textColor: 'white',
                    backgroundColor: '#1b262c'
                })
            })
            .catch((error)=>{
                console.log(error)
            Snackbar.show({
                text: 'LogOut Failed',
                textColor: 'white',
                backgroundColor: 'red'
            })
})
}