import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              ¿Quieres contactar conmigo?
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>
                  Telf: 625-222-369
                </h4>
                <h4>
                  Email: annattar@gmail.com
                </h4>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}