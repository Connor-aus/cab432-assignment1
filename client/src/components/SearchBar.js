import ".././App.css";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Container, Col } from "react-bootstrap";

export function SearchBar(props) {
  const [searchText, setsearchText] = useState("");
  const placeholderText = " enter a video game you enjoy . . .";

  return (
    <Container>
      <Col>
            <input
              type="text"
              placeholder={placeholderText}
              value={searchText}
              onChange={(e) => setsearchText(e.target.value)}
              style={{minWidth: "300px", borderRadius: "10px", paddingTop: "5px", paddingBottom: "5px", paddingLeft: "5px"}}
            />
            <Button
              variant="warning"
              onClick={() => props.onSubmit(searchText)}
              style={{marginLeft: "15px", marginBottom: "5px"}}
            >Search</Button>
      </Col>
    </Container>
  );
}
