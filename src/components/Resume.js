import React, { Component } from "react";
import { 
  SiPhp, 
  SiPrestashop, 
  SiMysql, 
  SiDocker, 
  SiJavascript, 
  SiPostman, 
  SiJira,
  SiMongodb,
  SiExpress,
  SiReact
} from 'react-icons/si'
import { FaHtml5, FaCss3Alt, FaNodeJs, FaBootstrap, FaWordpress, FaGitSquare, FaGithub, FaStripe } from 'react-icons/fa'

export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
    <>
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Estudios</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {resumeData.education &&
              resumeData.education.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.UniversityName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span>{" "}
                        <em className="date">
                          {item.MonthOfPassing} {item.YearOfPassing}
                        </em>
                      </p>
                      <p>{item.Achievements}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Experiencia</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {resumeData.work &&
              resumeData.work.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.CompanyName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span>{" "}
                        <em className="date">
                          {item.MonthOfEnter} to {" "}
                          {item.MonthOfLeaving} {item.YearOfLeaving}
                        </em>
                      </p>
                      <p>{item.Achievements}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Soft Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <p>{resumeData.skillsDescription}</p>

            <div className="bars">
              <ul className="skills">
                {resumeData.skills &&
                  resumeData.skills.map((item) => {
                    return (
                      <li>
                        <span
                          className="bar-expand"
                          style={{ width: `${item.level}%` }}
                        ></span>
                        <em>{item.skillname}</em>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
      <div className="three columns header-col">
            <h1>
              <span>Hard Skills</span>
            </h1>
          </div>
          <div className="twelve columns">
            <ul className="hard-list">
              {/* Stack principal - Producción */}
              <li className="hard-li" title="PHP"><SiPhp style={{fontSize: "45px"}}/></li>
              <li className="hard-li" title="PrestaShop"><SiPrestashop style={{fontSize: "45px"}}/></li>
              <li className="hard-li" title="MySQL"><SiMysql style={{fontSize: "45px"}}/></li>
              <li className="hard-li" title="JavaScript"><SiJavascript style={{fontSize: "45px"}}/></li>
              
              {/* Herramientas */}
              <li className="hard-li" title="Docker"><SiDocker style={{fontSize: "45px"}}/></li>
              <li className="hard-li" title="Git"><FaGitSquare style={{fontSize: "45px"}}/></li>
              <li className="hard-li" title="GitHub"><FaGithub style={{fontSize: "45px"}}/></li>
              <li className="hard-li" title="Postman"><SiPostman style={{fontSize: "45px"}}/></li>
              <li className="hard-li" title="Jira"><SiJira style={{fontSize: "45px"}}/></li>
              
              {/* Stack secundario - Ironhack/Aprendiendo */}
              <li className="hard-li" title="Node.js"><FaNodeJs style={{fontSize: "45px"}}/></li>
              <li className="hard-li" title="Express"><SiExpress style={{fontSize: "45px"}}/></li>
              <li className="hard-li" title="MongoDB"><SiMongodb style={{fontSize: "45px"}}/></li>
              <li className="hard-li" title="React"><SiReact style={{fontSize: "45px"}}/></li>
            </ul>
          </div>
      </div>
      </section>
        </>
    );
  }
}
