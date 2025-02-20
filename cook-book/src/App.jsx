import { useState } from 'react'
import moustache from './assets/moustache.png'
import recipes from './assets/recipes'
import Navigation from './components/navigation'
import { Grid2, Box, Button, Typography, Autocomplete, TextField } from '@mui/material'
import './App.css'

function App() {
  const [selectedRecipe, setSelectedRecipe] = useState(null)

  const handleReset = () => {
    setSelectedRecipe(null)
  };

  return (
    <Box sx= {{ width: '100vw', height: '100vw', justifyContent: 'center'}} >
            <Navigation />
      <Box container sx={{ width: '85vw' }}>

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
        <Typography variant="h2" sx={{margin: '16px' }}>Cook Book</Typography>
        <Grid2>
          <Autocomplete
              options={recipes}
              width={'100%'}
              getOptionLabel={(option) => option.name} // Ensure it displays the recipe name
              onChange={(event, newValue) => setSelectedRecipe(newValue)} // Update selectedRecipe
              renderInput={(params) => (
                  <TextField {...params} label="Select a Recipe" variant="outlined" sx={{ backgroundColor: 'white' }} />
              )}
          />
          {selectedRecipe && <Button onClick={handleReset}>Reset</Button>}
        </Grid2>

        <Grid2 container spacing={2} sx={{ marginTop: '20px', justifyContent: 'center' }}>
          {selectedRecipe ? (
                        <Grid2 item xs={12} sm={6} md={4} >
                        <Box
                          sx={{
                            height: '150px',
                            width: '250px',
                            border: '1px solid #ccc',
                            borderRadius: '8px',
                            padding: '16px',
                          }}
                        >
                          <Typography variant="h5">{selectedRecipe.name}</Typography>
                          <Typography variant="body1">Prep Time: {selectedRecipe.prepTime}</Typography>
                          <Typography variant="body1">Cook Time: {selectedRecipe.cookTime}</Typography>
                          <Typography variant="body1">Servings: {selectedRecipe.servings}</Typography>
                        </Box>
                      </Grid2>
          ) : recipes ? (
            recipes.map((recipe, index) => (
              <Grid2 item xs={12} sm={6} md={4} key={index} >
                <Box
                  sx={{
                    height: '150px',
                    width: '250px',
                    border: '1px solid #ccc',
                    borderRadius: '8px',
                    padding: '16px',
                  }}
                >
                  <Typography variant="h5">{recipe.name}</Typography>
                  <Typography variant="body1">Prep Time: {recipe.prepTime}</Typography>
                  <Typography variant="body1">Cook Time: {recipe.cookTime}</Typography>
                  <Typography variant="body1">Servings: {recipe.servings}</Typography>
                </Box>
              </Grid2>
            ))
          ) : null}
        </Grid2>
        </Box>
    </Box>
  )
}

export default App
