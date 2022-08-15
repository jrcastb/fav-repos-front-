import {
            StyledFormArea, 
            StyledFormButton, 
            Avatar, 
            Title, 
            colors, 
            ButtonGroup, 
            ExtraText,
            TextLink,
            CopyrightText
        } from "../components/Styles";
import Logo from '../assets/logo.png';
import { Formik, Form } from "formik";
import { TextInput } from "./../components/FormLib";
import { FiMail, FiLock} from 'react-icons/fi';
import * as Yup from 'yup';
import {ThreeCircles} from 'react-loader-spinner';
// auth & redux
import { connect } from "react-redux";
import { userLogin } from "../auth/actions/userActions";
import { useHistory } from 'react-router-dom';

const Login = ({userLogin}) =>{
    const history = useHistory();
    return(
        <div>
            <StyledFormArea>
                <Avatar image={Logo} />
                <Title size={35} color={colors.green}>Login</Title>
                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                    }}
                    validationSchema={
                        Yup.object({
                            email: Yup.string().email("Invalid email address")
                            .required("Required"),
                            password: Yup.string().min(8, "Password is too short")
                            .max(30, "Password is too long")
                            .required("Required")
                        })
                    }
                    onSubmit={(values, {setSubmitting, setFieldError})=>{
                        console.log(values);
                        userLogin(values, history, setFieldError, setSubmitting);
                    }}
                >
                    {({isSubmitting})=>(
                        <Form>
                            <TextInput 
                                name="email"
                                type="text"
                                label="Email Adress"
                                placeholder="example@domain.com"
                                icon={<FiMail/>}
                            />
                            <TextInput 
                                name="password"
                                type="password"
                                label="Password"
                                placeholder="********"
                                icon={<FiLock/>}
                            />
                            <ButtonGroup>
                                {!isSubmitting && <StyledFormButton type="submit">Login</StyledFormButton>}
                                {isSubmitting && <ThreeCircles color={colors.green} height={49} width={100} />}
                            </ButtonGroup>
                        </Form>
                    )}
                </Formik>
                <ExtraText>
                    New here? <TextLink to="/signup">Sign Up</TextLink>
                </ExtraText>
            </StyledFormArea>
            <CopyrightText>All rights reserved &copy; 2022</CopyrightText>
        </div>
    )
}
export default connect(null, {userLogin}) (Login);