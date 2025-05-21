import React, { useState, useEffect, useCallback } from "react";
import Col from "react-bootstrap/Col";
import Skeleton from "react-loading-skeleton";
import axios from "axios";
import '../../scss/custom.scss';

const PLACEHOLDER_IMG = "https://via.placeholder.com/420x220?text=Project+Image";
const LEARN_MORE_LINK = "https://www.igmfinancial.com/";

const LEARN_MORE_LINKS = {
  'Single-Cycle-RISCV-Processor': 'https://github.com/AryanKarnati/Single-Cycle-RISCV-Processor',
  'STM32-Bootloader': 'https://github.com/AryanKarnati/STM32-Bootloader/blob/main/CustomBootloader_Report.pdf',
  'Spatial-Mapping-LIDAR-System': 'https://github.com/AryanKarnati/Spatial-Mapping-LIDAR-System/blob/main/COMPENG%202DX3_FinalProjectReport_AryanKarnati.pdf',
  'QonnectR': 'https://qonnectr.vercel.app/'
};

const ProjectCard = ({ value }) => {
  const {
    name,
    description,
    svn_url,
    stargazers_count,
    languages_url,
    pushed_at,
    image // Optionally add image to your repo data if available
  } = value;
  const learnMoreLink = LEARN_MORE_LINKS[name] || LEARN_MORE_LINK;
  return (
    <Col xs={12} md={6} className="d-flex align-items-stretch">
      <div className="modern-project-card">
        <h3 className="project-title">{name || <Skeleton />}</h3>
        <img
          src={image || PLACEHOLDER_IMG}
          alt={name}
          className="project-image"
        />
        <p className="project-description">{(!description) ? "" : description || <Skeleton count={3} />}</p>
        <div className="project-buttons">
          <a
            className="project-btn"
            href={svn_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Repo
          </a>
          <a
            className="project-btn"
            href={learnMoreLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </a>
        </div>
        <hr />
      </div>
    </Col>
  );
};

const Language = ({ languages_url, repo_url }) => {
  const [data, setData] = useState([]);

  const handleRequest = useCallback(async () => {
    try {
      const response = await axios.get(languages_url);
      return setData(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }, [languages_url]);

  useEffect(() => {
    handleRequest();
  }, [handleRequest]);

  const array = [];
  let total_count = 0;
  for (let index in data) {
    array.push(index);
    total_count += data[index];
  }

  return (
    <div className="pb-3">
      Languages:{" "}
      {array.length
        ? array.map((language) => (
          <a
            key={language}
            className="card-link"
            href={repo_url + `/search?l=${language}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="badge bg-light text-dark">
              {language}: {Math.trunc((data[language] / total_count) * 1000) / 10} %
            </span>
          </a>
        ))
        : "code yet to be deployed."}
    </div>
  );
};

const CardFooter = ({ star_count, repo_url, pushed_at }) => {
  const [updated_at, setUpdated_at] = useState("0 mints");

  const handleUpdatetime = useCallback(() => {
    const date = new Date(pushed_at);
    const nowdate = new Date();
    const diff = nowdate.getTime() - date.getTime();
    const hours = Math.trunc(diff / 1000 / 60 / 60);

    if (hours < 24) {
      if (hours < 1) return setUpdated_at("just now");
      let measurement = hours === 1 ? "hour" : "hours";
      return setUpdated_at(`${hours.toString()} ${measurement} ago`);
    } else {
      const options = { day: "numeric", month: "long", year: "numeric" };
      const time = new Intl.DateTimeFormat("en-US", options).format(date);
      return setUpdated_at(`on ${time}`);
    }
  }, [pushed_at]);

  useEffect(() => {
    handleUpdatetime();
  }, [handleUpdatetime]);

  return (
    <p className="card-text">
      <a
        href={repo_url + "/stargazers"}
        target="_blank"
        className="text-dark text-decoration-none"
      >
        <span className="text-dark card-link mr-4">
          <i className="fab fa-github" /> Stars{" "}
          <span className="badge badge-dark">{star_count}</span>
        </span>
      </a>
      <small className="text-muted">Updated {updated_at}</small>
    </p>
  );
};

export default ProjectCard;
