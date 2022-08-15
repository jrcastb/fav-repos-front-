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
import { FiMail, FiLock, FiUser, FiCalendar} from 'react-icons/fi';
import * as Yup from 'yup';
import {ThreeCircles} from 'react-loader-spinner';
// auth & redux
import { connect } from "react-redux";
import { userSignup } from "../auth/actions/userActions";
import { useHistory } from 'react-router-dom';

const Signup = ({userSignup}) =>{
    const history = useHistory();
return(
<div>
    <StyledFormArea>
        <Avatar image={Logo} />
        <Title size={35} color={colors.green}>Sign Up</Title>
        <Formik
            initialValues={{
                email: "",
                name: "", 
                password: "",
                repeatedPassword: "",
                dateOfBirth: "",
            }}
            validationSchema={
                Yup.object({
                    email: Yup.string().email("Invalid email address")
                    .required("Required"),
                    password: Yup.string().min(8, "Password is too short")
                    .max(30, "Password is too long")
                    .required("Required"),
                    name: Yup.string().required("Required"),
                    dateOfBirth: Yup.date().required("Required"),
                    repeatedPassword: Yup.string().required("Required").oneOf([Yup.ref("password")], "Password must match")
                })
            }
            onSubmit={(values, {setSubmitting, setFieldError})=>{
                userSignup(values, history, setFieldError, setSubmitting)
            }}
        >
            {({isSubmitting})=>(
                <Form>
                    <TextInput 
                        name="name"
                        type="text"
                        label="Name"
                        placeholder="Full Name"
                        icon={<FiUser/>}
                    />
                    <TextInput 
                        name="email"
                        type="text"
                        label="Email Adress"
                        placeholder="example@domain.com"
                        icon={<FiMail/>}
                    />
                    <TextInput 
                        name="dateOfBirth"
                        type="date"
                        label="Date of Birth"
                        icon={<FiCalendar/>}
                    />
                    <TextInput 
                        name="password"
                        type="password"
                        label="Password"
                        placeholder="********"
                        icon={<FiLock/>}
                    />
                    <TextInput 
                        name="repeatedPassword"
                        type="password"
                        label="Repeat Password"
                        placeholder="********"
                        icon={<FiLock/>}
                    />
                    <ButtonGroup>
                        {!isSubmitting && <StyledFormButton type="submit">Sign Up</StyledFormButton>}
                        {isSubmitting && <ThreeCircles color={colors.green} height={49} width={100} />}
                    </ButtonGroup>
                </Form>
            )}
        </Formik>
        <ExtraText>
            Already have an account? <TextLink to="/login">Login</TextLink>
        </ExtraText>
    </StyledFormArea>
    <CopyrightText>All rights reserved &copy; 2022</CopyrightText>
</div> 
)
}
export default connect(null, {userSignup})(Signup);