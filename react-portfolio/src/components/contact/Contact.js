import React from "react";

const Contact = () => {
    return (
        <div className="container">
        <div className="card">
            <div className="card-body">
                <h2 className="card-header text-info">Contact</h2>
                <form action="mailto:tding7@asu.edu" method="POST" enctype="text/plain">
                    <div className="form-group">
                        <label for="name">Name</label>
                        <input type="text" class="form-control" id="name" name="name" placeholder="Joe Cool" />
                    </div>
                    <div className="form-group">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" id="email" name="email" placeholder="example@gmail.com" />
                    </div>
                    <div className="form-group">
                        <label for="message">Message</label>
                        <textarea class="form-control" aria-label="With textarea" id="message" name="message" rows="7"></textarea>
                    </div>
                    <button type="submit" class="btn btn-info" id="submitBtn">Submit</button>
                </form>
            </div>
        </div>
    </div>
    );
};

export default Contact;