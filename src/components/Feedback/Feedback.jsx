import { useState } from "react";
import { useRef } from "react"
import { useEffect } from "react"
export const Feedback = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0) 
    const [bad, setBad] = useState(0)
    const btnGood = useRef(null)
    const btnNeutral = useRef(null)
    const btnBad = useRef(null)
    useEffect(()=> {
        return ()=> {
            window.addEventListener("keydown", (e)=>{
                if (e.key === "1") {
                    btnGood.current.style.backgroundColor = buttonStyle.backgroundColor;
                    btnGood.current.style.color = buttonStyle.color;
                    btnGood.current.style.border = buttonStyle.border;
                    setGood(good + 1);
                } else if (e.key === "2") {
                    btnNeutral.current.style.backgroundColor = buttonStyle.backgroundColor;
                    btnNeutral.current.style.color = buttonStyle.color;
                    btnNeutral.current.style.border = buttonStyle.border;
                    setNeutral(neutral + 1);
                } else if (e.key === "3") {
                    btnBad.current.style.backgroundColor = buttonStyle.backgroundColor;
                    btnBad.current.style.color = buttonStyle.color;
                    btnBad.current.style.border = buttonStyle.border;
                    setBad(bad + 1);
                }
            })
        }
    }, [good, neutral, bad]) 
    const buttonStyle = {
        backgroundColor:'black',
        color: 'white',
        border: '1px solid white',
      };

      const buttonStyle1 = {
        backgroundColor:'white',
        color: 'black',
        border: '1px solid black',
        cursor: 'pointer',
      };

    const increment = (type) => {
        window.addEventListener("keydown", (e)=>{
            if (e.key === "1") {
                btnGood.current.style.backgroundColor = buttonStyle.backgroundColor;
                btnGood.current.style.color = buttonStyle.color;
                btnGood.current.style.border = buttonStyle.border;
                setGood(good + 1);
            } else if (e.key === "2") {
                btnNeutral.current.style.backgroundColor = buttonStyle.backgroundColor;
                btnNeutral.current.style.color = buttonStyle.color;
                btnNeutral.current.style.border = buttonStyle.border;
                setNeutral(neutral + 1);
            } else if (e.key === "3") {
                btnBad.current.style.backgroundColor = buttonStyle.backgroundColor;
                btnBad.current.style.color = buttonStyle.color;
                btnBad.current.style.border = buttonStyle.border;
                setBad(bad + 1);
            }
        })
        if (type == "good") {
            btnGood.current.style.backgroundColor = buttonStyle1.backgroundColor;
            btnGood.current.style.color = buttonStyle1.color;
            btnGood.current.style.border = buttonStyle1.border;
            setGood(good + 1);
        } else if (type == "neutral") {
            btnNeutral.current.style.backgroundColor = buttonStyle1.backgroundColor;
            btnNeutral.current.style.color = buttonStyle1.color;
            btnNeutral.current.style.border = buttonStyle1.border;
            setNeutral(neutral + 1);
        } else if (type == "bad") {
            btnBad.current.style.backgroundColor = buttonStyle1.backgroundColor;
            btnBad.current.style.color = buttonStyle1.color;
            btnBad.current.style.border = buttonStyle1.border;
            setBad(bad + 1);
        }
    }

    const countTotalFeedback = () => {
        return good + neutral + bad;
    };

    const countPositiveFeedbackPercentage = () => {
        const total = countTotalFeedback();
        if (good === 0) return 0;
        return Math.round((good / total) * 100);
    };
    const total = countTotalFeedback();

    return (
        <div>
            <h2>
                Please leave your feedback
            </h2>

            <div>
                <button
                    ref={btnGood}
                    onClick={() => increment("good")}
                    type="button"
                >
                    Good
                </button>

                <button
                    ref={btnNeutral}
                    onClick={() => increment("neutral")}
                    type="button"
                >
                    Neutral
                </button>

                <button
                    ref={btnBad}
                    onClick={() => increment("bad")}
                    type="button"
                >
                    Bad
                </button>
            </div>

            <div>
                {total === 0 ? (
                    <p>There is no feedback</p>
                ) : (
                    <>
                        <p>Good: {good}</p>
                        <p>Neutral: {neutral}</p>
                        <p>Bad: {bad}</p>
                        <p>Total: {total}</p>
                        <p>
                            Percent of Good: {countPositiveFeedbackPercentage()} %
                        </p>
                    </>
                )}
            </div>
        </div>
    );
}

    // increment = (increase) => {
    //             this.setState((prevState)=> {
    //                 return {[increase]: prevState[increase] + 1}
    //             })
    //         }
        
    //         countTotalFeedback = () => {
    //             return this.state.good + this.state.neutral + this.state.bad
    //         }
        
    //         countPositiveFeedbackPercentage = () => {
    //             const total = this.countTotalFeedback();
    //             if (this.state.good == 0) {
    //                 return 0
    //             }
    //             return Math.round((this.state.good / total) * 100)
    //         }
// }

// export class Feedback extends Component {

//     state = {
//         good: 0,
//         neutral: 0,
//         bad: 0
//     }

//     increment = (increase) => {
//         this.setState((prevState)=> {
//             return {[increase]: prevState[increase] + 1}
//         })
//     }

//     countTotalFeedback = () => {
//         return this.state.good + this.state.neutral + this.state.bad
//     }

//     countPositiveFeedbackPercentage = () => {
//         const total = this.countTotalFeedback();
//         if (this.state.good == 0) {
//             return 0
//         }
//         return Math.round((this.state.good / total) * 100)
//     }

//     render() {
//         return (
//             <div className={styles.container}>
//             <h2 className={styles.title}>
//                 Please leave your feedback
//             </h2>

//             <div className={styles.buttons}>
//                 <button
//                     onClick={() => this.increment("good")}
//                     type="button"
//                     className={styles.button}
//                 >
//                     Good
//                 </button>

//                 <button
//                     onClick={() => this.increment("neutral")}
//                     type="button"
//                     className={styles.button}
//                 >
//                     Neutral
//                 </button>

//                 <button
//                     onClick={() => this.increment("bad")}
//                     type="button"
//                     className={styles.button}
//                 >
//                     Bad
//                 </button>
//             </div>

//             <div className={styles.stats}>
//             {this.countTotalFeedback() === 0

//             ? (<p>There is no feedback</p>)

//             : (<><p className={styles.stat}>Good: {this.state.good}</p>
//             <p className={styles.stat}>Neutral: {this.state.neutral}</p>
//             <p className={styles.stat}>Bad: {this.state.bad}</p>
//             <p className={styles.stat}>Total: {this.countTotalFeedback()}</p>
//             <p className={styles.stat}>
//                 Percent of Good: {this.countPositiveFeedbackPercentage()} %
//             </p></>)}
                
//             </div>
//         </div>
//         )
//     }
// }