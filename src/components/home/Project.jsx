import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";
import Row from "react-bootstrap/Row";
import ProjectCard from "./ProjectCard";
import axios from "axios";

const dummyProject = {
  name: null,
  description: null,
  svn_url: null,
  stargazers_count: null,
  languages_url: null,
  pushed_at: null,
};
const API = "https://api.github.com";
// const gitHubQuery = "/repos?sort=updated&direction=desc";
// const specficQuerry = "https://api.github.com/repos/hashirshoaeb/";

const Project = ({ heading, username, length, specfic }) => {
  const allReposAPI = `${API}/users/${username}/repos?sort=updated&direction=desc`;
  const specficReposAPI = `${API}/repos/${username}`;
  const dummyProjectsArr = new Array(length + specfic.length).fill(
    dummyProject
  );

  const [projectsArray, setProjectsArray] = useState([]);

  const fetchRepos = useCallback(async () => {
    let repoList = [];
    try {
      // getting all repos
      const response = await axios.get(allReposAPI);
      // slicing to the length
      repoList = [...response.data.slice(0, length)];
      // adding specified repos
      try {
        for (let repoName of specfic) {
          const response = await axios.get(`${specficReposAPI}/${repoName}`);
          repoList.push(response.data);
        }
      } catch (error) {
        console.error(error.message);
      }
      // setting projectArray
      // TODO: remove the duplication.
      setProjectsArray(repoList);
    } catch (error) {
      console.error(error.message);
    }
  }, [allReposAPI, length, specfic, specficReposAPI]);

  useEffect(() => {
    fetchRepos();
  }, [fetchRepos]);

  // Map project names to images
  const projectImages = {
    'personal-portfolio': require('../../assets/img/pp.png'),
    'spatial-mapping-lidar-system': require('../../assets/img/Lidar.png'),
    'Spatial-Mapping-LIDAR-System': require('../../assets/img/Lidar.png'),
    'lidar mapping': require('../../assets/img/Lidar.png'),
    'Lidar Mapping': require('../../assets/img/Lidar.png'),
    'single-cycle-riscv-processor': require('../../assets/img/processor.png'),
    'Single-Cycle-RISCV-Processor': require('../../assets/img/processor.png'),
    'processor': require('../../assets/img/processor.png'),
    'stm32-bootloader': require('../../assets/img/STM32.png'),
    'STM32-Bootloader': require('../../assets/img/STM32.png'),
    'stm32': require('../../assets/img/STM32.png'),
    'STM32': require('../../assets/img/STM32.png'),
    'qonnector': require('../../assets/img/Qonnector.png'),
    'Qonnector': require('../../assets/img/Qonnector.png'),
    'QonnectR': require('../../assets/img/Qonnector.png'),
  };

  // Add image property to each project if available (case-insensitive)
  const projectsWithImages = projectsArray.map((project) => {
    const name = project.name || '';
    const image =
      projectImages[name] ||
      projectImages[name.toLowerCase()] ||
      projectImages[name.toUpperCase()] ||
      undefined;
    return { ...project, image };
  });

  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      <Container className="">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <Row>
          {projectsWithImages.length
            ? projectsWithImages.map((project, index) => (
              <ProjectCard
                key={`project-card-${index}`}
                id={`project-card-${index}`}
                value={project}
              />
            ))
            : dummyProjectsArr.map((project, index) => (
              <ProjectCard
                key={`dummy-${index}`}
                id={`dummy-${index}`}
                value={project}
              />
            ))}
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Project;
