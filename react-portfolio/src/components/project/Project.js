import React from "react";
import "./Project.css";

const Project = () => {
    return (
        <>
            <h2 className="card-header text-white">Portfolio</h2>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <a href="https://universal-storage.herokuapp.com/">
                            <img src="./assets/Lock'd.png" className="img-fluid col-12 portfolioImage" alt="Lock'd" />
                        </a>
                        <div className="carousel-caption d-block bg-dark">
                            <a href="https://github.com/schwynf/Universal-Storage">
                                <h6>Project: Lock'd</h6>
                            </a>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <a href="https://nddarnell.github.io/Hungry_or_Bored-Project-1/">
                            <img src="./assets/Hungryorbored.png" className="img-fluid col-12 portfolioImage" alt="HungryOrBored" />
                        </a>
                        <div className="carousel-caption d-block bg-dark">
                            <a href="https://github.com/nddarnell/Hungry_or_Bored-Project-1">
                                <h6>Project: Hungry or Bored</h6>
                            </a>
                        </div>
                    </div>
                </div>

                <br />

                <div className="row">
                    <div className="col-12 col-md-6">
                        <a href="https://dttnotetaker.herokuapp.com/">
                            <img src="./assets/NoteTaker.png" className="img-fluid col-12 portfolioImage"
                                alt="NoteTaker" />
                        </a>

                        <div className="carousel-caption d-block bg-dark">
                            <a href="https://github.com/tongtongding/11-Note-Taker">
                                <h6>Note Taker</h6>
                            </a>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <a href="https://tongtongding.github.io/06-Server-Side-APIs-HW/">
                            <img src="./assets/Weatherdashboard.png" className="img-fluid col-12 portfolioImage"
                                alt="Weatherdashboard" />
                        </a>

                        <div className="carousel-caption d-block bg-dark">
                            <a href="https://github.com/tongtongding/06-Server-Side-APIs-HW">
                                <h6>Weather Dashboard</h6>
                            </a>
                        </div>
                    </div>
                </div>

                <br />

                <div className="row">
                    <div className="col-12 col-md-6">
                        <a href="https://tongtongding.github.io/05-Third-Party-APIs-HW/">
                            <img src="./assets/WorkdaySchedule.png" className="img-fluid col-12 portfolioImage"
                                alt="WorkdaySchedule" />
                        </a>
                        <div className="carousel-caption d-block bg-dark">
                            <a href="https://github.com/tongtongding/05-Third-Party-APIs-HW">
                                <h6>Workday Schedule</h6>
                            </a>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <a href="https://tongtongding.github.io/04-Web-APIs-HW/">
                            <img src="./assets/Codingquiz.png" className="img-fluid col-12 portfolioImage" alt="CodingQuiz" />
                        </a>
                        <div className="carousel-caption d-block bg-dark">
                            <a href="https://github.com/tongtongding/04-Web-APIs-HW">
                                <h6>Coding Quiz</h6>
                            </a>
                        </div>
                    </div>
                </div>

            </div>

        </>

    )
}

export default Project;