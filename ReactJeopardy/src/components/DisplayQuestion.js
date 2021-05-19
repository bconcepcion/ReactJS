import React, {useState} from 'react'
import Score from './Score'


const ShowInfo = (props) => {

    const [questions, setQuestion] = useState(props.question)
    const [showAnswer, setShowAnswer] = useState(false)

    const handleAnswerChange = (evt) => { 
        evt.preventDefault();
        setShowAnswer(!showAnswer)
    }

    const handleGetData = (evt) => { 
        evt.preventDefault();
        setShowAnswer(false)
        props.getData();
     }

    return (
        <div id="content">
            <div className="ui cards">
                <div className="card">
                    
                    <Score />
                    <div className="content">
                        <h2>Let's Play</h2>
                        <button style={{ marginTop: "0em" }} onClick={handleGetData}>Get Question</button>
                    </div>
                    <div>

                        <p><b>Category: </b>{(props.question !== undefined) && (props.question.length > 0) ? props.question[0].category.title : "No Category"}</p>

                        <p><b>Points: </b>{(props.question !== undefined) && (props.question.length > 0) ? props.question[0].value : "No Points"}</p>

                        <p><b>Answer: </b>{(props.question !== undefined) && (props.question.length > 0) ? props.question[0].question : "No Question"}</p>

                    </div>
                    <div>
                        <div onClick={handleAnswerChange}>
                            {showAnswer ? (<p><b>Question: </b>{(props.question !== undefined) && (props.question.length > 0) ? props.question[0].answer : "No Answer"} </p>) : (<p>Click to Reveal Question</p>) }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )


}

export default ShowInfo