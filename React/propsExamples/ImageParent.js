import "../styles/Style.css"
import ImageChild from "./ImageChild.js"

//This will be my example of using images with props
import Bulbasaur from "../assets/Bulbasaur.jpg"
import Charmander from "../assets/Charmander.jpg"
import Squirtle from "../assets/Squirtle.jpg"

const bulbasaur = "the pokemon bulbasaur";
const charmander = "the pokemon charmander";
const squirtle = "the pokemon squirtle";

//some notes to myself

/*
The image tag is in the child component. For each image you should use the ImageChild component. 
You'll pass the images from here to the child. For CSS, you could set the style from the image 
tag in the child so that they're all uniform.
*/


const ImageParent = () => {
    return (
        <div className="imageContainer">
            <ImageChild imgsrc={Bulbasaur} imgalt={bulbasaur} />
            <ImageChild imgsrc={Charmander} imgalt={charmander} />
            <ImageChild imgsrc={Squirtle} imgalt={squirtle} />
        </div>
    );
}

export default ImageParent;