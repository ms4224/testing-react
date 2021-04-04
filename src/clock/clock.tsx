import React from "react";

class Clock extends React.Component<IClockProps, IClockState> {
    private clock: NodeJS.Timeout;

    constructor(public props: any) {
        super(props);
        this.state = {
            time: new Date()
        }
    }

    render() {
        return (
            <div>
                <div>It is currently {this.state.time.toLocaleTimeString()}</div>
            </div>
        )
    }

    componentDidMount() {
        this.clock = setInterval(() => {
            this.setState({
                time: new Date(),
            })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.clock);
    }
}

interface IClockState {
    time: Date
}

interface IClockProps {

}

export default Clock;