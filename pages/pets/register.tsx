import { NextPage } from "next";
import { useRegister } from "../../data/hooks/pages/useRegister";
import Title from "../../components/title/title";
import { Paper, Grid, Button, TextField, Snackbar } from "@mui/material";

const Register: NextPage = () => {
    const {
        name,
        history,
        photo,
        message,
        setName,
        setHistory,
        setPhoto,
        setMessage,
        register,
    } = useRegister();
    return (
        <>
            <Title
                title={'Cadastro de Pets'}
                subtitle={'Preencha os dados para cadastrar novos pets'}
            />

            <Paper sx={{maxWidth: 970, mx: 'auto', p: 5}}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            label={'Nome'}
                            placeholder={'Digite o nome do pet'}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            value={history}
                            onChange={(e) => setHistory(e.target.value)}
                            label={'História'}
                            multiline
                            fullWidth
                            rows={4}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            value={photo}
                            onChange={(e) => setPhoto(e.target.value)}
                            label={'Foto'}
                            placeholder={'Digite o endereço da imagem'}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sx={{textAlign: 'center'}}>
                        <Button
                            onClick={register}
                            fullWidth
                            variant={'contained'}
                            sx={{maxWidth: {md: 200}, mt: 4}}
                        >
                            Cadastrar
                        </Button>
                    </Grid>
                </Grid>
            </Paper>

            <Snackbar
                open={message.length > 0}
                autoHideDuration={2500}
                onClose={() => setMessage('')}
                message={message}
            />
        </>
    )
}

export default Register;