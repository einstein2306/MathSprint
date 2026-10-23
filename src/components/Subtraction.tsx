import { useState } from "react";

export default function Subtraction() {
    type Task = {
        num1: number;
        num2: number;
        score: number;
        response: string;
        incorrect: boolean;
        showAlert: boolean;
    };

    const [state, setState] = useState<Task>({
        num1: 1,
        num2: 2,
        score: 0,
        response: "",
        incorrect: false,
        showAlert: false
    });

    function checkData() {
        if (state.response === "") {
            setState((prev: Task) => ({
                ...prev,
                showAlert: true
            }));
        } else {
            const answer: number = parseInt(state.response);
            if (answer === state.num1 - state.num2) {
                setState((prev: Task) => ({
                    ...prev,
                    num1: Math.ceil(Math.random() * 10),
                    num2: Math.ceil(Math.random() * 10),
                    response: "",
                    score: prev.score + 1,
                    incorrect: false,
                }));
            } else {
                setState((prev: Task) => ({
                    ...prev,
                    response: "",
                    incorrect: true,
                }));
            }
        }
    }


    function UpdateInput(event: React.ChangeEvent<HTMLInputElement>) {

        setState((prev: Task) => ({
            ...prev,
            response: event.target.value
        }));
    }


    return (
        <div className="container">
            <div className="mt-4">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div style={{backgroundColor:"#fffcf7"}} className="shadow shadow-sm border rounded px-5 py-3 text-center">
                            <h2 style={{color:"#352b25"}} className="mb-4">Subtraction</h2>
                            {state.showAlert &&
                                (<div className="alert alert-danger p-1 fade dismissible show text-muted" role='alert'>
                                    <strong>Warning! </strong>Please enter valid input
                                    <button  className="float-end btn btn-link text-decoration-none p-0 btn-sm" data-bs-dismiss="alert" onClick={() => setState((prev: Task) => ({ ...prev, showAlert: false }))}>&times;</button>
                                </div>)
                            }
                            <h2 className={state.incorrect ? "incorrect text-muted" : "text-muted"}>{state.num1} - {state.num2}</h2>
                            <div className="input-group">
                                <input onChange={UpdateInput} className="form-control form-control-sm shadow-none" placeholder="enter value here" value={state.response} />
                                <input onClick={checkData} type="submit" className="btn btn-primary btn-sm" />
                            </div>
                            <div>
                                <div style={{ fontSize: '27px' }} className="score text-center text-muted">Score: {state.score}</div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}