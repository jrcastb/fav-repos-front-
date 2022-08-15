import { Title, SubTitle, StyleButton, ButtonGroup, StyledFormButton, StyledFormArea, colors, ExtraText } from "../components/Styles";

import { connect } from "react-redux";
import { useState } from "react";
import { userLogout } from "./../auth/actions/userActions.js";
import { useHistory } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import axios from "../services/axiosConfig";
import PersonIcon from '@mui/icons-material/Person';
import PeopleIcon from '@mui/icons-material/People';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import Checkbox from "@mui/material/Checkbox";
import { FormControlLabel } from "@mui/material";

import Card from '@mui/material/Card';
import { Box } from "@mui/system";

const Dashboard = ({userLogout, user}) => {
    const history = useHistory()
    const [name, setName] = useState('');
    const [userData, setData] = useState('');
    const [userRepos, setRepos] = useState([]);
    const [favRepos, setFavRepos] = useState([]);

    const getValue = (event) =>{
        setName(event.target.value);
    }

    async function getUserData() {
        axios.get(`/${name}`)
    
        .then((res)=>{
            setData(res.data);
        }).catch(()=>{
            const msg = 'User not found!'
            setData({user: msg})
        })
        
    }
    async function getReposData() {
        axios.get(`/${name}/repos`)
        .then((res)=>{
            setRepos(res.data);
        }).catch(() =>{
            const msg = 'No repositories found'
            setRepos({repos: msg})
        })
    }
    function getFavRepos(){
        setFavRepos([])
    }

    
    return(
        <div>           
            <StyledFormArea bg={colors.darkest}>
                <Title size={65}>Welcome {user.name}</Title>
                <SubTitle size={25}>List of favorite repositories</SubTitle>
                <ExtraText color={colors.light}>{user.email}</ExtraText>
                <ExtraText color={colors.light}>{new Date(user.dateOfBirth).toLocaleDateString()}</ExtraText>
                <Box sx={{ display: 'flex', justifyContent:'space-between' }}>
                    <SearchBar onChange={getValue}/>

                    <StyledFormButton to="#" onClick={() => {
                        getUserData();
                        getReposData();
                    }}>Search</StyledFormButton>
                </Box>
                
                <Box sx={{ display: 'flex', justifyContent:'center' }}>
                    <Card sx={{ maxWidth: 300 }}>
                        <CardMedia
                            component="img"
                            image={userData.avatar_url}
                            alt="user"
                            sx ={{width: '100%'}}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            {userData.name}
                            </Typography>
                            <Box sx={{ display: 'flex', justifyContent:'space-around' }}>
                                <FileCopyIcon /> {userData.public_repos} repositories{" "}
                                <PersonIcon /> {userData.followers} followers
                                <PeopleIcon /> {userData.following} following{" "}
                            </Box>
                            
                        </CardContent>
                        
                    </Card>
                </Box>
                <div>
                    {userData.avatar_url && (   
                        <>
                        {userRepos.map((repository) => (
                            <ul style={{marginTop: "10px",
                                        backgroundColor: "#fff",
                                        listStyle:"none", 
                                        borderRadius: "10px",
                                        padding: "0px 50px"
                                        }}>
                                <li style={{padding: "10px 0"}}>{repository.id}</li>
                                <li style={{padding: "10px 0"}}>{repository.language}</li>
                                <li style={{padding: "10px 0"}}>{repository.name}</li>
                                <li style={{padding: "10px 0"}}>{repository.description}</li>
                                <FormControlLabel 
                                    control={
                                            <Checkbox 
                                                icon={<FavoriteBorder />} 
                                                checkedIcon={<Favorite />} 
                                                onChange={getFavRepos}
                                            />
                                            } label="Add to favorites" 
                                />
                                
                            </ul>
                            
                        ))}
                        </>
                    )}
                </div>
                
                
                <ButtonGroup>
                    <StyleButton to="#" onClick={()=> userLogout(history)}>Logout</StyleButton>
                </ButtonGroup>
            </StyledFormArea>
        </div>
    );
};
const mapStateToProps = ({session}) => ({
    user: session.user
})
export default connect(mapStateToProps, {userLogout})(Dashboard);

/*
<div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
</div>
*/
/*
{userRepos.map((repository) => (
                    <ul style={{marginTop: "10px", backgroundColor: "#fff", listStyle:"none"}}>
                        <li>{repository.id}</li>
                        <li>{repository.language}</li>
                        <li>{repository.name}</li>
                        <li>{repository.description}</li>
                    </ul>
                ))} */