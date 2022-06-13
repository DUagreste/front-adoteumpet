import type { NextPage } from 'next'
import Title from '../ui/components/title/title'
import List from '../ui/components/list/list'
import { Dialog, DialogActions, Grid, TextField, Button, Snackbar } from '@mui/material'
import { useState } from 'react'
import { useIndex } from '../data/hooks/pages/useIndex'


const Home: NextPage = () => { 
  const {
    listPets,
    petSelected,
    setPetSelected,
    email,
    setEmail,
    amount,
    setAmount,
    message,
    setMessage,
    adopt
  } = useIndex();



  return (
    <div>
      <Title 
        title="" 
        subtitle={
          <span>
            Com um pequeno valor mensal, você <br />
            pode <strong>adotar um pet virtual.</strong>
          </span>
        }
      />

        <List
          pets = {listPets}
          onSelect = {(pet) => setPetSelected(pet)}
        />

        <Dialog 
          open = {petSelected !== null}
          fullWidth
          PaperProps = {{ sx: { p: 5} }}
          onClose={() => setPetSelected(null)}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label={'E-mail'}
                type={'email'}
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label={'Quantia (por mês)'}
                type={'number'}
                fullWidth
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </Grid>
          </Grid>
          <DialogActions sx={{mt: 5}}>
            <Button
              color={'secondary'}
              onClick={() => setPetSelected(null)}
            >
              Cancelar
            </Button>
            <Button
              variant={'contained'}
              onClick={() => adopt()}
            >
              Confirmar adoção
            </Button>
          </DialogActions>
        </Dialog>

        <Snackbar
          open={message.length > 0}
          message={message}
          autoHideDuration={2500}
          onClose={() => setMessage('')}
        />
    </div>
  )
}

export default Home
