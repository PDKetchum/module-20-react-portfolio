import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function Portfolio() {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="/images/AniMeal.png"
            alt="AniMeal ScreenShot"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              AniMeal
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Website that allows users to search for anime and meal
              recommendations.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Technologies used: Third-party APIs, TailWind, HTML, CSS,
              JavaScript, and JQuery.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="/images/BackStock.png"
            alt="BackStock Screenshot"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              BackStock
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Full stack inventory management application where a user can
              search for and add items into the database.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Technologies used: Javascript, HTML, CSS, Anime.js, Bootstrap,
              Animate.css, Handlebars.js, Node.js, Sequelize.js, SQL, and
              RESTful API.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="/images/TechBlog.png"
            alt="Tech Blog Screenshot"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Tech Blog
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Responsive full stack tech blog where a user can create, edit, and
              delete posts/comments.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Technologies used: Javascript, HTML, CSS, Handlebars.js,
              Bootstrap, Node.js, Sequelize.js, SQL, and RESTful API.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
