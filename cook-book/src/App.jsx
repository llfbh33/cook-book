import { useState } from 'react'
import moustache from './assets/moustache.png'
import viteLogo from '/vite.svg'
import { Grid2, Box, Button, Typography, Autocomplete } from '@mui/material'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div> */}
        <Grid2 container spacing={2} justifyContent="center">
          <Grid2 item>
            <Box
              component="img"
              src={moustache}
              alt="Cheif with Moustache"
              sx={{
                width: 250,
                height: 250,
                objectFit: 'cover',
              }}
            />
          </Grid2>
        </Grid2>
        <Typography variant="h2">Cook Book</Typography>
        <Autocomplete>
          
        </Autocomplete>
    </>
  )
}

export default App
