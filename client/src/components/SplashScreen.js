import { Button, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useHistory } from 'react-router-dom';

export default function SplashScreen() {
    const history = useHistory();

    function handleRegister() {
        history.push('/register/');
    }

    function handleLogin() {
        history.push("/login/");
    }

    function handleGuess() {
        
    }

  return (
    <div id='splash-screen'>
      <Typography variant='h3' align='left' style={ {marginLeft: '5%'} }>
        <b>Playlister</b>
      </Typography>
      <Typography variant='h4' color={"black"} align='center' style={{paddingLeft: '15%', paddingRight: '15%', marginTop: '50px'}} gutterBottom>
        Welcome to the Playlister App
      </Typography>
      <Typography variant='body1' color={"black"} style={{paddingLeft: '15%', paddingRight: '15%', marginBottom: '150px'}} paragraph >
        An application for creating and playing playlists of YouTube music
        videos. The site will allow users to create, edit, and play playlists as
        well as share playlists so that others may then play and comment on
        them. The site will include a built-in YouTube player and will allow
        users to find others' playlists via multiple search criteria.
      </Typography>
      <Grid container justifyContent={"center"} spacing={15}>
        <Grid item>
            <Button variant="contained" size='large' color='grey' onClick={handleRegister}>
                Register
            </Button>
        </Grid>
        <Grid item>
            <Button variant="contained" size='large' color='grey' onClick={handleLogin}>
                Login
            </Button>
        </Grid>
        <Grid item>
            <Button variant="contained" size='large' color='grey' onClick={handleGuess}>
                Guess
            </Button>
        </Grid>
      </Grid>
    </div>
  );
}