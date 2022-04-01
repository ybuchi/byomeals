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
import Button from '@mui/material/Button';
import OutdoorGrillIcon from '@mui/icons-material/OutdoorGrill';

const ActionCard = ({recipe, fridgeData, handleSelected, setSelectRecipe, selectRecipe}) => {
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
    function handleButtonClick(e) {
        handleSelected(recipe)
        
        fetch ('http://localhost:3004/chicken', {
            method:"POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(selectRecipe)
        })
        .then (req => req.json())
        .then (data => console.log(data))
        
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
                    <Button variant="contained" size="small" startIcon={<OutdoorGrillIcon />} onClick={handleButtonClick}>Cook</Button>
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
                    <Ingredients fridgeData={fridgeData} recipe={recipe}/>
                    </CardContent>
                </Collapse>
        </>
    )
    
}
export default ActionCard