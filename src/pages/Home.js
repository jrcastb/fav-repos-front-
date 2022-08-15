import { Title, SubTitle, Avatar, StyleButton, ButtonGroup } from "../components/Styles";
import Logo from '../assets/logo.png';
const Home = () => {
    return(
        <div>
            <div style={{
                position: "absolute",
                top: 80,
                left: 0,
                backgroundColor: "transparent",
                width: "100%",
                padding: "15px",
                display: "flex",
                justifyContent: "flex-start", 

            }}>
                <Avatar image={Logo}/>
            </div>
            <Title size={65}>Welcome to FAV REPOS</Title>
            <SubTitle size={25}>Feel free to explore our website</SubTitle>
            <ButtonGroup>
                <StyleButton to="/Login">Login</StyleButton>
                <StyleButton to="/Signup">Sign Up</StyleButton>
            </ButtonGroup>
            
        </div>
    )
}
export default Home;