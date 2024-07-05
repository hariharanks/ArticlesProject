import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

function ArticleCard({ article }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  console.log("article=====", article);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={article.title}
        subheader={article.published_date}
      />
      {article.media.length > 0 && (
        <CardMedia
          component="img"
          height="194"
          image={article.media[0]['media-metadata'][2].url} // Using the mediumThreeByTwo440 format
          alt={article.title}
        />
      )}
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {article.abstract}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          {/* <ExpandMoreIcon /> */}
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Details:</Typography>
          <Typography paragraph>
            Byline: {article.byline}
          </Typography>
          <Typography paragraph>
            Source: {article.source}
          </Typography>
          <Typography paragraph>
            Published Date: {article.published_date}
          </Typography>
          <Typography paragraph>
            Updated: {article.updated}
          </Typography>
          <Typography paragraph>
            Section: {article.section}
          </Typography>
          <Typography>
            {article.type} - {article.title}
          </Typography>
        </CardContent>
      </Collapse>
      <CardActions>
        <Button size="small" href={article.url}>Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default ArticleCard;
