import Avatar from '@material-ui/core/Avatar'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core/styles'
import {Dog} from './DogTypes'

const useStyles = makeStyles(theme => ({
  dog: {
    margin: theme.spacing(1),
    padding: theme.spacing(1),
    textAlign: 'center',
  },
  dogName: {
    paddingTop: theme.spacing(1),
  },
  picture: {
    width: 'initial',
    height: 'initial',
  },
}))

const DogCard = (dog: Dog) => {
  const classes = useStyles()
  return (
    <Grid item xs={6} sm={4} md={2} key={dog.Name}>
      <Link href={dog.ProfileUrl} target="blank">
        <Paper className={classes.dog}>
          <div>
            <Avatar
              alt={dog.Name}
              src={dog.ImgSrc}
              className={classes.picture}
              variant="rounded"
            />
          </div>
          <Typography variant="subtitle1" className={classes.dogName}>
            {dog.Name}
          </Typography>
        </Paper>
      </Link>
    </Grid>
  )
}

export default DogCard
