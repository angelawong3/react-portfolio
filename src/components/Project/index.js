import React, { Component } from "react";
import mvp from "../../assets/img/work-pj-mvp.png";
import moneymail from "../../assets/img/work-pj-moneymail.jpg";
import techBlog from "../../assets/img/work-tech-blog.png";
import system from "../../assets/img/work-system.png";
import weatherDashboard from "../../assets/img/work-weather-dashboard.png";
import codeQuiz from "../../assets/img/work-code-quiz.png";
import pwGen from "../../assets/img/work-pw-gen.jpg";
import dayPlanner from "../../assets/img/work-day-planner.png";
import starwars from "../../assets/img/work-starwars.png";
import grogu from "../../assets/img/work-grogu.png";

export default class Project extends Component {
  render() {
    return (
      <section id="section">
        <div id="title">RECENT PROJECTS</div>
        <div class="project-container">
          {/* project 1 */}
          <div class="project-card">
            <div>
              <h5 class="project-name">Pet tracker - My Valuable Pet</h5>
              <a
                href="https://mvp-pet-app.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  class="project-img"
                  src={mvp}
                  alt="project pet tracker app"
                />
              </a>
            </div>
            <div class="project-p">
              <p>
                An app that allows you to create a secure account and store
                information about your beloved pets.
              </p>
              <p>
                You can add, edit and remove pets with their relative
                information. You may view a gallery of all pets submitted by all
                users.
              </p>
            </div>
            <div class="github-link">
              <a
                href="https://github.com/angelawong3/pet-tracker"
                class="btn btn-repo2"
                target="_blank"
                rel="noreferrer"
              >
                Link to the GitHub repository
              </a>
            </div>
          </div>
          {/* project 2 */}
          <div class="project-card">
            <div>
              <h5 class="project-name">Project - MoneyMail</h5>
              <a
                href="https://angelawong3.github.io/project-moneymail/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  class="project-img"
                  src={moneymail}
                  alt="project moneymail"
                />
              </a>
            </div>
            <div class="project-p">
              <p>
                An app that allows you to exchange currencies with a click of a
                button.
              </p>
              <p>
                You can input a value to view currency exchange rate and
                retrieve relevant news regarding the chosen currencies. Enable
                you to view the rate and latest news before you commit to
                converting.
              </p>
            </div>
            <div class="github-link">
              <a
                href="https://github.com/angelawong3/project-moneymail"
                class="btn"
                target="_blank"
                rel="noreferrer"
              >
                Link to the GitHub repository
              </a>
            </div>
          </div>
          {/* project 3 */}
          <div class="project-card">
            <div>
              <h5 class="project-name">Tech Blog</h5>
              <a
                href="https://angelawong3-tech-blog.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  class="project-img"
                  src={techBlog}
                  alt="project tech blog"
                />
              </a>
            </div>
            <div class="project-p">
              <p>
                A CMS-style blog site where developers can publish their blog
                posts and comment on other developers&apos; posts.
              </p>
            </div>
            <div class="github-link">
              <a
                href="https://github.com/angelawong3/tech-blog"
                class="btn"
                target="_blank"
                rel="noreferrer"
              >
                Link to the GitHub repository
              </a>
            </div>
          </div>
          {/* project 4 */}
          <div class="project-card">
            <div>
              <h5 class="project-name">Employee Management System</h5>
              <a
                href="https://github.com/angelawong3/employee-management-system"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  class="project-img"
                  src={system}
                  alt="project employee management system"
                />
              </a>
            </div>
            <div class="project-p">
              <p>
                Using CLI to view and manage the departments, roles, and
                employees in the company.
              </p>
            </div>
            <div class="github-link">
              <a
                href="https://github.com/angelawong3/employee-management-system"
                class="btn"
                target="_blank"
                rel="noreferrer"
              >
                Link to the GitHub repository
              </a>
            </div>
          </div>
          {/* project 5 */}
          <div class="project-card">
            <div>
              <h5 class="project-name">Weather Dashboard</h5>
              <a
                href="https://angelawong3.github.io/weather-dashboard/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  class="project-img"
                  src={weatherDashboard}
                  alt="project weather dashboard"
                />
              </a>
            </div>
            <div class="project-p">
              <p>
                The app will show the current weather and 5-day forecast
                information of that city with temperature, the humidity, the
                wind speed, and the UV index.
              </p>
            </div>
            <div class="github-link">
              <a
                href="https://github.com/angelawong3/weather-dashboard/"
                class="btn"
                target="_blank"
                rel="noreferrer"
              >
                Link to the GitHub repository
              </a>
            </div>
          </div>
          {/* project 6 */}
          <div class="project-card">
            <div>
              <h5 class="project-name">Code Quiz</h5>
              <a
                href="https://angelawong3.github.io/code-quiz/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  class="project-img"
                  src={codeQuiz}
                  alt="project code quiz"
                />
              </a>
            </div>
            <div class="project-p">
              <p>
                A timed quiz on JavaScript fundamentals that stores high scores.
                You may replay the game when time's up. Have fun!
              </p>
            </div>
            <div class="github-link">
              <a
                href="https://github.com/angelawong3/code-quiz/"
                class="btn"
                target="_blank"
                rel="noreferrer"
              >
                Link to the GitHub repository
              </a>
            </div>
          </div>
          {/* project 7 */}
          <div class="project-card">
            <div>
              <h5 class="project-name">Password Generator</h5>
              <a
                href="https://angelawong3.github.io/password-generator/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  class="project-img"
                  src={pwGen}
                  alt="project password generator"
                />
              </a>
            </div>
            <div class="project-p">
              <p>
                To generate random password from your chosen criteria, including
                uppercases, lowercases, numbers, and special characters.
              </p>
            </div>
            <div class="github-link">
              <a
                href="https://github.com/angelawong3/password-generator/"
                class="btn"
                target="_blank"
                rel="noreferrer"
              >
                Link to the GitHub repository
              </a>
            </div>
          </div>
          {/* project 8 */}
          <div class="project-card">
            <div>
              <h5 class="project-name">Day Planner</h5>
              <a
                href="https://angelawong3.github.io/day-planner/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  class="project-img"
                  src={dayPlanner}
                  alt="project day planner"
                />
              </a>
            </div>
            <div class="project-p">
              <p>
                A day planner with timeblocks for standard business hours. You
                may save your events in the text area and view them even after
                refreshing the page.
              </p>
            </div>
            <div class="github-link">
              <a
                href="https://github.com/angelawong3/day-planner/"
                class="btn"
                target="_blank"
                rel="noreferrer"
              >
                Link to the GitHub repository
              </a>
            </div>
          </div>
          {/* project 9 */}
          <div class="project-card">
            <div>
              <h5 class="project-name">Star Wars Fan Site</h5>
              <a
                href="https://angelawong3.github.io/starwars-fansite/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  class="project-img"
                  src={starwars}
                  alt="project star Wars fan site"
                />
              </a>
            </div>
            <div class="project-p">
              <p>
                An advanced css website. To view information of Star Wars movies
                and recent series.
              </p>
            </div>
            <div class="github-link">
              <a
                href="https://github.com/angelawong3/starwars-fansite"
                class="btn"
                target="_blank"
                rel="noreferrer"
              >
                Link to the GitHub repository
              </a>
            </div>
          </div>
          {/* project 10 */}
          <div class="project-card">
            <div>
              <h5 class="project-name">Fan Page for Grogu</h5>
              <a
                href="https://angelawong3.github.io/my-first-repo/"
                target="_blank"
                rel="noreferrer"
              >
                <img class="project-img" src={grogu} alt="project grogu" />
              </a>
            </div>
            <div class="project-p">
              <p>
                My first repo for one of my favourite characters in Star Wars,
                Grogu, aka baby yoda. He is coming back early next year (2023)
                for season 3 of The Mandalorian.
              </p>
            </div>
            <div class="github-link">
              <a
                href="https://github.com/angelawong3/my-first-repo/"
                class="btn"
                target="_blank"
                rel="noreferrer"
              >
                Link to the GitHub repository
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
