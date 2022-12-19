import "../styles/Style.css"
import Child from "./Child"



const someText = "Passing this text to the child using a constant"
const moreText = "Below will be props with images"

const Parent = () => {
    return (
        <div>
            <Child dataBeingPassed={someText} secondItem={moreText} />
        </div>
    );
}

export default Parent;