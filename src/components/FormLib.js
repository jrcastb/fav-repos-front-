import { useField } from "formik";
import { useState } from "react";
import {
    StyledInput,
    StyledLabel,
    StyledIcons,
    ErrorMsg,
} from './../components/Styles.js';

//button for show the password
import { FiEye, FiEyeOff } from "react-icons/fi";

export const TextInput = ({icon, ...props}) =>{
    const [field, meta] = useField(props);
    const [show, setShow] = useState(false)

    return(
        <div style= {{position:"relative"}}>
            <StyledLabel htmlFor={props.label}>
                {props.label}
            </StyledLabel>
                {props.type !== "password" && <StyledInput 
                    invalid={meta.touched && meta.error}
                    {...field}
                    {...props}
            />}
            {props.type === "password" && (
                <StyledInput
                    invalid={meta.touched && meta.error}
                    {...field} 
                    {...props}
                    type = {show ? "text": "password"}
                />
            )}
            <StyledIcons>{icon}</StyledIcons>

            {
                props.type === "password" && (
                <StyledIcons onClick={()=> setShow(!show)} right>
                    {show && <FiEye/>}
                    {!show && <FiEyeOff/>}
                </StyledIcons>
            )}
            {
            meta.touched && meta.error ? (
                <ErrorMsg>{meta.error}</ErrorMsg>
                ):(
                    <ErrorMsg style={{visibility: "hidden"}}></ErrorMsg>
                )
            } 
        </div>
    )
}