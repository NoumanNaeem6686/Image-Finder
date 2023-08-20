
import { Card } from "@mui/material";

const ShowImage = ({image})=>{
    return(
    <Card>

        <img src={image.userImageURL} alt="images"/>
    </Card>
    )
}
export default ShowImage;   