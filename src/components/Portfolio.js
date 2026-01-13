import React, { Component } from 'react';
import { FaGithub } from 'react-icons/fa';
import { MdHttp } from 'react-icons/md'
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Mis proyectos</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    
                      <img src={item.imgurl} className="item-img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                          <ul className='hard-list'>
                          {item.giturlf && <a href={`${item.giturlf}`} target="_blank">
                              <li className="hard-li" title="GithubFront"><FaGithub style={{fontSize: "35px", color:"white"}}/></li>
                            </a>}
                          {item.giturlb && <a href={`${item.giturlb}`} target="_blank">
                              <li className="hard-li" title="GithubBack"><FaGithub style={{fontSize: "35px", color:"white"}}/></li>
                            </a>}
                          {item.url && <a href={`${item.url}`} target="_blank">
                              <li className="hard-li" title="Web"><MdHttp style={{fontSize: "35px", color:"white"}}/></li>
                            </a>}  
                            
                          </ul>
                        </div>
                      </div>
                  </div>
                </div>
              )
            })
          }
          </div>
          <div>
            <h1>Proyectos En Desarrollo</h1>
            {
              resumeData.development && resumeData.development.map((item) => {
                return (
                  <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href={`${item.url}`} target="_blank">
                      <img src={item.imgurl} className="item-img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                          <ul className='hard-list'>
                          {item.giturlf && <a href={`${item.giturlf}`} target="_blank">
                              <li className="hard-li" title="GithubFront"><FaGithub style={{fontSize: "35px", color:"white"}}/></li>
                            </a>}
                          {item.giturlb && <a href={`${item.giturlb}`} target="_blank">
                              <li className="hard-li" title="GithubBack"><FaGithub style={{fontSize: "35px", color:"white"}}/></li>
                            </a>}
                          {item.url && <a href={`${item.url}`} target="_blank">
                              <li className="hard-li" title="Web"><MdHttp style={{fontSize: "35px", color:"white"}}/></li>
                            </a>}  
                            
                          </ul>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                )
              })
            }
          </div>
        </div>
      </div>
  </section>
        );
  }
}