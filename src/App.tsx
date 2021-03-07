import React, {useState, useEffect} from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteOutlined from '@material-ui/icons/FavoriteBorderOutlined'
import Slider from '@material-ui/core/Slider'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import {makeStyles} from '@material-ui/core/styles'
import {
  getDogCharacteristics,
  getDogsByCharacteristics,
} from './services/dogService'
import {CharacteristicFilter} from './FilterTypes'
import DogCard from './DogCard'
import Characteristics, {moreIsBetter} from './Characteristics'

const useStyles = makeStyles(theme => ({
  selectParent: {
    margin: theme.spacing(1),
    marginTop: theme.spacing(1.5),
  },
  formControl: {
    width: '100%',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  paper: {
    margin: theme.spacing(1),
    padding: '20px 30px',
  },
  favIcon: {
    verticalAlign: 'middle',
    color: '#f57a9c',
    paddingBottom: '4px',
    marginRight: '5px',
  },
}))

function App() {
  const [characteristics, setCharacteristics] = useState<string[]>([])
  const [activeFilters, setActiveFilters] = useState<CharacteristicFilter[]>([])
  useEffect(() => {
    setCharacteristics(
      getDogCharacteristics().filter(
        c => !activeFilters.find(a => a.char === c),
      ),
    )
  }, [activeFilters])
  const handleChange = (e: React.ChangeEvent<{value: unknown}>) => {
    const char = e.target.value as string
    const selectedChar = Characteristics.find(c => c.label === char)
    setActiveFilters(prev => [
      ...prev,
      {char, rating: selectedChar?.moreIsBetter ? 5 : 1},
    ])
    setCharacteristics(prev => prev.filter(c => c !== e.target.value))
  }
  const onCharacteristicChange = (name: string, rating: number) => {
    const charToUpdate = activeFilters.findIndex(f => f.char === name)
    activeFilters.splice(charToUpdate, 1, {
      ...activeFilters[charToUpdate],
      rating,
    })
    setActiveFilters([...activeFilters])
  }
  const onRemoveFilter = (char: string) => {
    setActiveFilters(prev => [...prev.filter(f => f.char !== char)])
  }
  const classes = useStyles()
  const dogs =
    activeFilters.length > 0 ? getDogsByCharacteristics(activeFilters) : []
  return (
    <div className="App">
      <CssBaseline />
      <div className="hola">
        <Grid container spacing={0}>
          <Grid item xs={12} sm={4} md={3}>
            <Paper className={classes.selectParent}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Characteristic
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  onChange={handleChange}
                  label="Characteristic"
                  value=""
                >
                  <MenuItem value="">
                    <em>Select</em>
                  </MenuItem>
                  {characteristics.map(c => (
                    <MenuItem value={c} key={c}>
                      {c}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Paper>
            {activeFilters.map(a => (
              <Paper className={classes.paper} key={a.char}>
                <Typography id={a.char} gutterBottom>
                  {moreIsBetter(a.char) ? (
                    <FavoriteIcon className={classes.favIcon} />
                  ) : (
                    <FavoriteOutlined className={classes.favIcon} />
                  )}
                  {a.char}
                  <IconButton
                    aria-label="delete"
                    onClick={() => onRemoveFilter(a.char)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Typography>
                <Slider
                  defaultValue={a.rating}
                  aria-labelledby={a.char}
                  valueLabelDisplay="auto"
                  step={1}
                  marks
                  min={1}
                  max={5}
                  onChange={(e, value) =>
                    onCharacteristicChange(a.char, value as number)
                  }
                />
              </Paper>
            ))}
          </Grid>
          <Grid item xs={12} sm={8} md={9}>
            <Grid container>
              {dogs.map(dog => (
                <DogCard {...dog} />
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default App
