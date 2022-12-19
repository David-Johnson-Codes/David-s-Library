import "../styles/Style.css"

const Child = (props) => {
    return (
        <div>
            <h1>
                {props.dataBeingPassed}
            </h1>
            <h1>
                {props.secondItem}
            </h1>
        </div>
    );
}

export default Child;