import * as React from 'react'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { red } from '@mui/material/colors'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { addFav } from '../state/user'
import { useDispatch, useSelector } from 'react-redux'

const ExpandMore = styled((props) => {
    const { expand, ...other } = props
    return <IconButton {...other} />
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}))

export default function RecipeReviewCard({ movies, key }) {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const user = useSelector((state) => state.user)

    const [expanded, setExpanded] = React.useState(false)

    const handleExpandClick = () => {
        setExpanded(!expanded)
    }

    const description = movies.overview.length >= 110 ? movies.overview.substring(0, 110) + '...' : movies.overview
    const title = movies.title.length > 15 ? movies.title.substring(0, 15) + '...' : movies.title

    return (
        <Card sx={{ maxWidth: 330, margin: '5vh' }}>
            <CardHeader
                sx={{ textAlign: 'center', textAlignLast: 'fill', fontSize: 'x-smal' }}
                action={<IconButton aria-label="settings"></IconButton>}
                // title={title}
                subheader={title}
            />
            <CardMedia
                component="img"
                image={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}
                alt=""
                sx={{
                    objectFit: 'fill',
                    height: '21rem',
                    width: '80%',
                    margin: 'auto',
                }}
                onClick={() => navigate(`movie/${movies.id}`)}
            />

            {/* <CardContent sx={{ height: "50px" }}>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent> */}
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon
                        onClick={() => {
                            dispatch(addFav(movies))
                        }}
                    />
                </IconButton>

                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography>{movies.overview}</Typography>
                </CardContent>
            </Collapse>
        </Card>
    )
}
