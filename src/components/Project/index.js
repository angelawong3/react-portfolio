import React, { Component } from "react";
import mvp from "../../assets/img/work-pj-mvp.png";

export default class Project extends Component {
  render() {
    return (
      <div class="col-md-12 p-2">
        <div class="card text-center">
          <div id="my-projects" class="card-header heading">
            RECENT PROJECTS
          </div>
          <div class="card-body">
            <h5 class="card-title project-name">
              Pet tracker - My Valuable Pet
            </h5>
            <div class="row">
              <div class="col-md-6 col-sm-12 col-xs-12">
                <a href="https://mvp-pet-app.herokuapp.com/" target="_blank">
                  <img
                    class="project"
                    src={mvp}
                    alt="project pet tracker app"
                  />
                </a>
              </div>
              <div class="col-md-6 col-sm-12 col-xs-12">
                <p class="card-text">My Valuable Pet</p>
                <p>
                  An app that allows you to create a secure account and store
                  information about your beloved pets.
                </p>
                <p>
                  You can add, edit and remove pets with their relative
                  information. You may view a gallery of all pets submitted by
                  all users.
                </p>
              </div>
              <div class="pt-2 mx-auto">
                <a
                  href="https://github.com/angelawong3/pet-tracker"
                  class="btn btn-repo2"
                  target="_blank"
                >
                  Link to the GitHub repository
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
