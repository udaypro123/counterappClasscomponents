import { Component } from "react";


class CounterClassCompo extends Component {

    constructor(props){
        super(props);
        this.state={
         count:0,
        }
    }

    increamnet =()=>{
        this.setState({
            count:this.state.count+1
        })
    }

    decreamnet =()=>{
        this.setState({
            count:this.state.count-1
        })
    }
    reset =()=>{
        this.setState({
            count:0
        })
    }

    render() {
        return (
            <>
                <div className='couterdiv'>

                    <div className='couterdiv1'>
                        {
                            this.state.count
                        }
                    </div>
                    <div className='couterdiv2'>
                        <button onClick={this.increamnet}>increament</button>
                        <button onClick={this.reset}>reset</button>
                        <button onClick={this.decreamnet}>decrement</button>
                    </div>
                </div>
            </>
        )
    }
}

export default CounterClassCompo;