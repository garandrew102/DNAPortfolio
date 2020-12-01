import React from "react";
import "../../App.css";
import {
  Card,
  CardText,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
} from "react-mdl";
import MemePark from "../../images/MemePark.png";

export default function Projects() {
  return (
    <div className="projects">
      {/* Project 1 */}
      <Card shadow={5}>
        <CardTitle
          style={{
            color: "#fff",
            height: "172px",
            backgroundImage: `url(${MemePark})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></CardTitle>
        <CardText style={{ textAlign: "center" }}>
          <i>
            A React web application allowing users to search for memes and share
            them on social media
          </i>
        </CardText>
        <CardActions>
          <div className="project-buttons">
            <div className="visit">
              <Button
                raised
                ripple
                href="https://meme-park.herokuapp.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Visit
              </Button>
            </div>
            <div className="source-code">
              <Button
                raised
                ripple
                href="https://github.com/garandrew102/MemePark"
                rel="noopener noreferrer"
                target="_blank"
              >
                Source Code
              </Button>
              <hr />
              <h5 style={{ textAlign: "center" }}>Meme Park</h5>
            </div>
          </div>
        </CardActions>
        <CardMenu style={{ color: "#fff" }}>
          {/* <IconButton name="share"></IconButton> */}
        </CardMenu>
      </Card>
      {/* Project 1 */}
      <Card shadow={5}>
        <CardTitle
          style={{
            color: "#fff",
            height: "172px",
            backgroundImage: `url(${MemePark})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></CardTitle>
        <CardText style={{ textAlign: "center" }}>
          <i>
            A React web application allowing users to search for memes and share
            them on social media
          </i>
        </CardText>
        <CardActions>
          <div className="project-buttons">
            <div className="visit">
              <Button
                raised
                ripple
                href="https://meme-park.herokuapp.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Visit
              </Button>
            </div>
            <div className="source-code">
              <Button
                raised
                ripple
                href="https://github.com/garandrew102/MemePark"
                rel="noopener noreferrer"
                target="_blank"
              >
                Source Code
              </Button>
              <hr />
              <h5 style={{ textAlign: "center" }}>Meme Park</h5>
            </div>
          </div>
        </CardActions>
        <CardMenu style={{ color: "#fff" }}>
          {/* <IconButton name="share"></IconButton> */}
        </CardMenu>
      </Card>
    </div>
  );
}
