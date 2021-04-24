import { connect } from "react-redux"

const CounterRedux = (props) => {

    return (
        <div>
            <h1>Counter : {props.counter}</h1>
            <button onClick={() => props.onIncrementCounter}>Increment</button>
            <button onClick={() => props.onDicrement}>Dicrement</button>
            <input 
            type="text"
            onChange={props.onChangeInput}
            name="name"
            id="name"
            />
           <button>tambah</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter,
        name: state.name
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementCounter: () => dispatch({type:"INCREMENT"}),
        onDecrementCounter: () => dispatch({type: "DICREMENT"})
        
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterRedux);
