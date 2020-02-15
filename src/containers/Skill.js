import React, { Component } from "react";
import styled from "styled-components";

import { CenteredHeader } from "./App.js";
import { ColorScheme } from "../theme/styleConstants";



export const PortButton = styled.a`
  padding: 10px 15px;
  background: 0 0;
  border: 2px solid ${ColorScheme.secondary};
  border-radius: 3px;
  margin: 0 5px;
  color: ${ColorScheme.secondary};
  font-family: Gotham, Helvetica, Arial, sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  transition: all 0.3s ease;
  &:hover {
    background: ${ColorScheme.primary};
    color: #fff;
    border-color: ${ColorScheme.primary};
  }

  @media (max-width: 600px) {
    padding: 5px 7px;
  }
`;



class Code extends Component {
  render() {
    return (
      <div>
        <div>
          <CenteredHeader>Skills:</CenteredHeader>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4">
              <h5>Front-end:</h5>
              <ul>
                <li>JavaScript (ES6)(ES7)</li>
                <li>React</li>
                <li>Redux</li>
                <li>GraphQL</li>
                <li>Apollo</li>
                <li>Apollo Client</li>
                <li>HTML5</li>
                <li>CSS3/Sass</li>
                <li>jQuery</li>
                <li>AJAX</li>
                <li>Typescript</li>
                <li>Bootstrap 4</li>
                <li>Material-UI</li>
                <li>Semantic-UI</li>
                <li>Moment JS</li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <h5>Back-end:</h5>
              <ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>KOA</li>
                <li>Ruby</li>
                <li>Ruby on Rails</li>
                <li>Firebase</li>
                <li>SQL/NoSQL</li>
                <li>MongoDB</li>
                <li>PostgreSQL</li>
                <li>Python</li>
                <li>Django</li>
              
                
                
              </ul>
              <h5>DevOps</h5>
              <ul>
                <li>AWS</li>
                <li>Jenkins CI/CD</li>
                <li>Docker</li>
                <li>Vagrant</li>
                <li>GitLab CI</li>
                          
              </ul>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <h5>Other:</h5>
              <ul>
              
              <li>Microservices</li>
              <li>Jira</li>
              <li>Kanban</li>
              <li>Scrum</li>
              <li>Confluence</li>
              <li>Trello</li>
              <li>Agile Methodology</li>
              <li>KPI</li>
              <li>C++</li>
              <li>Alogrithms</li>
              <li>Web architecture</li>
              <li>Git</li>
              <li>Webpack</li>
                <li>JSON</li>
                <li>Rest API</li>
                <li>Jest</li>
                <li>enzyme</li>
                
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div>
          
        </div>
      </div>
    );
  }
}

export default Code;
