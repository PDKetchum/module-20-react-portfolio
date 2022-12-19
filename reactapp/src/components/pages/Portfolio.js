import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions, Button, Grid } from "@mui/material";

export default function Portfolio() {
  return (
    <Grid>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea href="https://pdketchum.github.io/project-1-AniMeal/">
          <CardMedia
            component="img"
            height="140"
            image="./images/AniMeal.png"
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
        <CardActions>
          <Button
            size="small"
            color="primary"
            href="https://github.com/PDKetchum/project-1-AniMeal"
          >
            GitHub Repo
          </Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea href="https://backstock-23.herokuapp.com/">
          <CardMedia
            component="img"
            height="140"
            image="./images/BackStock.png"
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
        <CardActions>
          <Button
            size="small"
            color="primary"
            href="https://github.com/PDKetchum/project-2-BackStock"
          >
            GitHub Repo
          </Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea href="https://pdketchum-module-14-tech-blog.herokuapp.com/">
          <CardMedia
            component="img"
            height="140"
            image="./images/TechBlog.png"
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
        <CardActions>
          <Button
            size="small"
            color="primary"
            href="https://github.com/PDKetchum/module-14-tech-blog"
          >
            GitHub Repo
          </Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea href="https://pdketchum.github.io/module-4-javascript-quiz/">
          <CardMedia
            component="img"
            height="140"
            image="./images/Quiz.png"
            alt="Javascript Quiz Screenshot"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Quiz
            </Typography>
            <Typography variant="body2" color="text.secondary">
              JavaScript timed quiz.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Technologies used: Javascript, HTML, CSS.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            href="https://github.com/PDKetchum/module-4-javascript-quiz"
          >
            GitHub Repo
          </Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea href="https://pdketchum.github.io/module-6-weather-dashboard/">
          <CardMedia
            component="img"
            height="140"
            image="./images/Weather.png"
            alt="Weather Dashboard Screenshot"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Weather Dashboard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Type in a city and view the forcast.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Technologies used: Javascript, HTML, CSS, Third-party API,
              BootStrap.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            href="https://github.com/PDKetchum/module-6-weather-dashboard"
          >
            GitHub Repo
          </Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea href="https://pxiong-note-taker.herokuapp.com/notes">
          <CardMedia
            component="img"
            height="140"
            image="./images/Notetaker.png"
            alt="Notetaker Screenshot"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Note Taker
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Note taking application to keep track of tasks, chores, reminders,
              etc.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Technologies used: Javascript, HTML, CSS, Node.js, Express.js.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            href="https://github.com/PDKetchum/module-11-note-taker"
          >
            GitHub Repo
          </Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea href="https://pdketchum-prima-materia.herokuapp.com/">
          <CardMedia
            component="img"
            height="140"
            image="./images/PrimaMateria.png"
            alt="Prima Materia App"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Prima Materia
            </Typography>
            <Typography variant="body2" color="text.secondary">
              A responsive Magic the Gathering App that displays searched cards,
              saved cards on your wishlist, and the option to create decks.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Technologies used: Javascript, HTML, CSS, Node.js, Express.js,
              Mongoose, MongoDB, Material UI, React, and React Spring.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            href="https://github.com/PDKetchum/Prima-Materia/tree/main"
          >
            GitHub Repo
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
