import { sessionService } from 'redux-react-session';

const axios = require('axios');

export const userLogin = (credentials, history, setFieldError, setSubmitting) => {

    return () => {

        axios.post("https://boiling-plateau-50666.herokuapp.com/user/login",
        credentials,
        {
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response) =>{
            const {data} = response;

            if (data.status === "FAILED") {
                const {message} = data;
                //check for specific error
                if (message.includes("credentials")) {
                    setFieldError("email", message);
                    setFieldError("password", message);
                }else if(message.includes("password")){
                    setFieldError("password", message);
                }
            }else if (data.status === "SUCCESS"){
                const userData = data.data[0];

                const token = userData._id;

                sessionService.saveSession(token).then(()=>{

                    sessionService.saveUser(userData).then(()=>{
                        history.push('/dashboard');
                    }).catch(err => console.error(err))

                }).catch(err =>console.error(err))
            }
            setSubmitting(false);
        })
        .catch(err =>console.error(err));
    }
}
export const userSignup = (credentials, history, setFieldError, setSubmitting) => {
    return (dispatch) =>{

        
        axios.post("https://boiling-plateau-50666.herokuapp.com/user/signup",
        credentials,
        {
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response) =>{
            const {data} = response;

            if (data.status === "FAILED") {
                const {message} = data;

                //checking for an specific error
                if (message.includes("name")) {
                    setFieldError("name", message)
                }else if(message.includes("email")){
                    setFieldError("email", message)
                }else if(message.includes("date")){
                    setFieldError("dateOfBirth", message)
                }else if(message.includes("password")){
                    setFieldError("password", message)
                }
                //complete submission
                setSubmitting(false)
            }else if(data.status === "SUCCESS"){
                const {email, password} = credentials;
                dispatch(userLogin({email, password}, history, setFieldError, setSubmitting))
            }
        }).catch(err=>console.error(err))
    }
}
export const userLogout = (history) => {
    return () =>{
        sessionService.deleteSession();
        sessionService.deleteUser();
        history.push("/")
    }
}
