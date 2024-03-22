import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {UseGlobal,InsertarUsuarios,supabase} from "../../index";
import { useNavigate } from 'react-router-dom';
const defaultTheme = createTheme();
export default function Ingresar() {
  const nav = useNavigate();
  const {setError,setLogic,token,setToken} = UseGlobal();
  const insertarusuarios = async(dataProvider)=>{
    const p = {
        nombre:dataProvider.user_metadata.first_name,
        idaouthsupabase:dataProvider.id
    };
    await InsertarUsuarios(p);
}
  const HandleLogin = async(e)=>{
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const p = {
      email: data.get("email"),
      password: data.get("Password")};
    if(Object.values(p).includes("")){
      setLogic("Todos los campos son requeridos");
      setTimeout(() => {
        setError(false);
      },2500);
      return
    }
    setLogic(null);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: p.email,
        password: p.password});
      if (error) throw error;
      setToken(data); 
      nav("/")
      await insertarusuarios(token.user);
    } catch (error) {
      nav("/ErrorSinup") 
    }
  }
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
          <Box component="form" noValidate sx={{ mt: 3 }} onSubmit={HandleLogin}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="email"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Password"
                  label="Password"
                  type="password"
                  id="Password"
                  autoComplete="Password"
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
              Iniciar Secion.
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
