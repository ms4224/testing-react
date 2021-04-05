import React from "react";

class Greeter extends React.Component<IProps, IState> {
    constructor(public props: IProps) {
        super(props);
        this.state = {
            luckyNumber: 24,
            showYolo: false
        }
        this.yolo = this.yolo.bind(this);
    }

    render() {
        const showYolo = <div>My lucky number is {this.state.luckyNumber}</div>;
        return (
            <div>
                Hello {this.props.firstName} {this.props.lastName}
                <button onClick={this.yolo}>log a yolo</button>
                {this.state.showYolo ? showYolo : <></>}
            </div>
        )
    }

    yolo() {
        console.log('my lucky number is:', this.state.luckyNumber)
        this.setState({
            showYolo: true
        });
        this.props.yoloActivated(this.state.luckyNumber);
    }
}

interface IProps {
    firstName: string,
    lastName: string,
    yoloActivated: (luckyNumber: number) => void
}

interface IState {
    luckyNumber: number;
    showYolo: boolean;
}

export default Greeter;