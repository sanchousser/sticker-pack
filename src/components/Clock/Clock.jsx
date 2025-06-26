import { useEffect, useRef, useState } from "react";
import css from './Clock.module.css'

// class Clock extends Component {
//     state = {
//         time: new Date()
//     }

//     intervalId = null;

//     componentDidMount() {
//         this.intervalId = setInterval(() => {
//             this.setState({ time: new Date })
//         }, 1000);
//     }

//     componentWillUnmount() {
//         this.stop();
//     }


//     stop = () => {
//         clearInterval(this.intervalId)
//     }


//     render() {
//         return (
//             <div className={css.container}>
//                 <p className={css.clock}>Current time: {this.state.time.toLocaleTimeString()}</p>
//                 <button onClick={this.stop} type="button">Stop</button>
//             </div>
//         );
//     }
// }

const Clock = () => {

    const [time, setTime] = useState(() => new Date())

    const intervalId = useRef(null)

    useEffect(() => {
        intervalId.current = setInterval(() => {
            setTime(new Date())
        }, 1000);

        return () => {
            stop()
        }

    }, []);

    const stop = () => {
        clearInterval(intervalId.current)
    }

    return (
        <div className={css.container}>
            <p className={css.clock}>Current time: {time.toLocaleTimeString()}</p>
            <button onClick={stop} type="button">Stop</button>
        </div>
    );

}

export default Clock;