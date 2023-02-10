import React, { Component } from "react";
import { SiReact, SiJavascript, SiExpress, SiHandlebarsdotjs, SiMongodb, SiTailwindcss, SiPrestashop, SiTypescript, SiBabel, SiNextdotjs } from 'react-icons/si'
import { FaHtml5, FaCss3Alt, FaNodeJs, FaBootstrap, FaWordpress, FaGitSquare, FaGithub } from 'react-icons/fa'
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
                          className={`bar-expand ${item.skillname.toLowerCase()}`}
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
            <li className="hard-li" title="Html5"><FaHtml5 style={{fontSize: "45px"}}/></li>
            <li className="hard-li" title="Css3"><FaCss3Alt style={{fontSize: "45px"}}/></li>
            <li className="hard-li" title="JavaScript"><SiJavascript style={{fontSize: "45px"}}/></li>
            <li className="hard-li" title="TypeScript"><SiTypescript style={{fontSize: "45px"}}/></li>
            <li className="hard-li" title="React"><SiReact style={{fontSize: "45px"}}/></li>
            <li className="hard-li" title="NextJS"><SiNextdotjs style={{fontSize: "45px"}}/></li>
            <li className="hard-li" title="NodeJS"><FaNodeJs style={{fontSize: "45px"}}/></li>
            <li className="hard-li" title="ExpressJS"><SiExpress style={{fontSize: "45px"}}/></li>
            <li className="hard-li" title="Git"><SiBabel style={{fontSize: "45px"}}/></li>
            <li className="hard-li" title="Handlebars"><SiHandlebarsdotjs style={{fontSize: "45px"}}/></li>
            <li className="hard-li" title="MongoDB / Mongoose"><SiMongodb style={{fontSize: "45px"}}/></li>
            <li className="hard-li" title="Tailwinds"><SiTailwindcss style={{fontSize: "45px"}}/></li>
            <li className="hard-li" title="Bootstrap"><FaBootstrap style={{fontSize: "45px"}}/></li>
            <li className="hard-li" title="Github"><FaGithub style={{fontSize: "45px"}}/></li>
            <li className="hard-li" title="Git"><FaGitSquare style={{fontSize: "45px"}}/></li>
            <li className="hard-li" title="Wordpress"><FaWordpress style={{fontSize: "45px"}}/></li>
            <li className="hard-li" title="Prestashop"><SiPrestashop style={{fontSize: "45px"}}/></li>
          </ul>
        </div>
      </div>
      </section>
        </>
    );
  }
}
