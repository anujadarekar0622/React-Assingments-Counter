import React, { useState } from "react";

const FeedbackCollector = () => {
    const [feedback, setFeedback] = useState("");
    const [count, setCount] = useState(0);

    const handleFeedback = (type) => {
        setFeedback(type);
        setCount(count + 1);
    };

    return (
        <div className="container feedback-container">

            <h1 className="title">
                <i className="fa-solid fa-comments"></i> Feedback Collector
            </h1>

            <div className="feedback-buttons">

                <button
                    className="btn btn-success"
                    onClick={() => handleFeedback("Good")}
                >
                    <i className="fa-solid fa-thumbs-up"></i> Good
                </button>

                <button
                    className="btn btn-warning"
                    onClick={() => handleFeedback("Average")}
                >
                    <i className="fa-solid fa-face-meh"></i> Average
                </button>

                <button
                    className="btn btn-danger"
                    onClick={() => handleFeedback("Poor")}
                >
                    <i className="fa-solid fa-thumbs-down"></i> Poor
                </button>

            </div>

            <div className="feedback-card">

                <h3>Selected Feedback</h3>

                <p className="selected-feedback">
                    {feedback || "No Feedback Selected"}
                </p>

                <h4>Total Feedback Given</h4>

                <p className="feedback-count">{count}</p>

                <div className="message-box">

                    {feedback === "Good" && (
                        <p className="good-message">
                            Thank you for your positive feedback!
                        </p>
                    )}

                    {feedback === "Average" && (
                        <p className="average-message">
                            We'll try to improve.
                        </p>
                    )}

                    {feedback === "Poor" && (
                        <p className="poor-message">
                            Sorry for the inconvenience.
                        </p>
                    )}

                </div>

            </div>

        </div>
    );
};

export default FeedbackCollector;