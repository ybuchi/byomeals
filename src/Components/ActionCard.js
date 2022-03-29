import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Ingredients from './Ingredients';
import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/material/styles';

const ActionCard = ({recipe, fridgeStock}) => {
    const {title} = recipe
    const [expanded, setExpanded] = useState(false);
    const ExpandMore = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
      })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
    }));
    const handleExpandClick = (e) => {
        setExpanded(!expanded);
    }
    
    return (
        <>
        <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                    <ShareIcon />
                    </IconButton>
                    <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                    
                    >
                    <ExpandMoreIcon value={title}/>
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" collapsedSize="50px" unmountOnExit>
                    <CardContent>
                    <Typography paragraph>Instructions:</Typography>
                    <Ingredients fridgeStock={fridgeStock} recipe={recipe}/>
                    </CardContent>
                </Collapse>
        </>
    )
    
}
export default ActionCard