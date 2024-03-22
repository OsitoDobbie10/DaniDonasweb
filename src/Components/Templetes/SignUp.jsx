import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {UseGlobal,supabase} from '../../index';
const defaultTheme = createTheme();
export default function SignUp() {
    const {setAnimandoModal3,
           setShow,setLogic,setError} = UseGlobal();
    const handleSubmit = async(event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const p = {
            nombre: data.get('Nombre'),
            email: data.get('email'),
            password: data.get('password')};
            if(Object.values(p).includes("")){
              setLogic("Todos los campos son requeridos");
              setTimeout(() => {
                setError(false);
              },2500);
              return
            }
            setLogic(null);
            try {
              const { data, error } = await supabase.auth.signUp(
                {
                  email: p.email,
                  password: p.password,
                  options: {
                    data: {
                      first_name: p.nombre
                    }
                  }
                }
              )
              setShow("Revisa tu Email para poder ingresar..")
              setTimeout(()=>{
                setAnimandoModal3(false);
              },3500)
            } catch (error) {
              alert(error)
            }
      };
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          </Avatar>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="Nombre"
                  required
                  fullWidth
                  id="Nombre"
                  label="Nombre"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color="success"
            >
              Registrarse.
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
