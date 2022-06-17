import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="https://res.cloudinary.com/djersm2h6/image/upload/v1655478956/imagesportfolio/1645705689976_hujgkc.jpg" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>Sobre Mi</h2>
               <p>
               {
                 resumeData.aboutme
               }
               </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h2>Detalles de Contacto</h2>
                  <p className="address">
       						<span>{resumeData.name}</span>
                           <br></br>
       					   <span>
                     {resumeData.address}
                    </span>
                    <br></br>
                    <span>{resumeData.website}</span>
       					   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}