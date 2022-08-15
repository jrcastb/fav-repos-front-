import { Title, SubTitle, Avatar, StyleButton, ButtonGroup, StyledFormArea, colors } from "../components/Styles";
import Logo from '../assets/logo.png';
const Profile = () => {
    return(
        <div>
            <div style={{
                position: "absolute",
                top: 30,
                left: 0,
                backgroundColor: "transparent",
                width: "100%",
                padding: "15px",
                display: "flex",
                justifyContent: "flex-start", 

            }}>
                <Avatar image={Logo}/>
            </div>
            
            <StyledFormArea bg={colors.darkest}>
                <Title size={65}>Welcome User</Title>
                <SubTitle size={25}>Edit Profile</SubTitle>
                <ButtonGroup>
                    <StyleButton to="#">Logout</StyleButton>
                    <StyleButton to="#">Back</StyleButton>
                </ButtonGroup>
            </StyledFormArea>
        </div>
    )
}
export default Profile;