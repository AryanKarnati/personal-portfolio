import React from 'react';

import {
  Col,
} from "react-bootstrap";

const ExperienceCard = ({ data }) => {
  const bgImage = data.backgroundImage ? data.backgroundImage : data.companylogo;
  return (
    <Col lg="6">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
            <div className="flip-card-front-overlay"></div>
            <div className="flip-card-front-content">
              <img className="company-logo bg-white mb-3" src={data.companylogo} alt="" />
              <h3 className="company-name">{data.company}</h3>
              <p className="role">{data.role}</p>
              <p className="date">{data.date}</p>
            </div>
          </div>
          <div className="flip-card-back">
            <h3>{data.role}</h3>
            <h4>{data.company}</h4>
            <ul>
              {data.details && data.details.length > 0 ? (
                data.details.map((item, idx) => <li key={idx}>{item}</li>)
              ) : (
                <li>More details coming soon...</li>
              )}
            </ul>
            {data.link ? (
              <a
                className="view-more-btn"
                href={data.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View More
              </a>
            ) : (
              <button className="view-more-btn" disabled>View More</button>
            )}
          </div>
        </div>
      </div>
    </Col>
  );
}

export default ExperienceCard;