import React from "react";

const Home = () => {
    return (

        <div className="container">
            <div className="row">
                <div className="col-md-9">
                    <div className="card">
                        <h2 className="card-header">About Me</h2>
                        <div className="card-body">
                            <p className="card-text">
                                <img src={process.env.PUBLIC_URL +"/assets/WechatIMG7.jpeg"} className="float-left col-12 col-md-5" alt="Me" />

                                    Hi, I am Tongtong Ding aka Doris. I studied Supply Chain Management and Global Logistics in
                                    Arizona State University. All I learned are related to business. Now I am working in a
                                    cosmetic ingredients company as a Sales. At the meantime, I am really interested in coding
                                    since it is cool and fun to build a website from the basics.
                                
                                    One day I will combine my experience from business and coding to creat a website, and start my own business. Good Luck to Me!
                               
                                    Please feel free to contact me if you have any question.
                                             <div id="icons">
                                                <a href="https://www.linkedin.com/in/tongtongding/" >
                                                    <i className="fab fa-linkedin fa-2x"></i>
                                                </a>
                                                <a href="https://github.com/tongtongding" >
                                                    <i className="fab fa-github fa-2x" ></i>
                                                </a>
                                                <a href="./assets/Tongtong Ding resume.pdf" >
                                                    <i className="fas fa-file-alt fa-2x"></i>
                                                </a>
                                            </div>
                            </p>

                        </div>

                    </div>

                </div>

             </div>

         </div>

    
    );
};

export default Home;