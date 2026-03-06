import { useState } from "react";
export const Feedback = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0) 
    const [bad, setBad] = useState(0) 

    const increment = (type) => {
        if (type == "good") {
            setGood(good + 1);
        } else if (type == "neutral") {
            setNeutral(neutral + 1);
        } else if (type == "bad") {
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
                    onClick={() => increment("good")}
                    type="button"
                >
                    Good
                </button>

                <button
                    onClick={() => increment("neutral")}
                    type="button"
                >
                    Neutral
                </button>

                <button
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