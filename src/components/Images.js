
import { Grid } from "@mui/material";
import ShowImage from "./showImage";

const Images = ({data})=>{
    return(
        <Grid container>
            {
                data.map((image)=>{
                  <div>
                    <ShowImage image={image}/>
                  </div>
                })
            }

           


        </Grid>
    )
}

export default Images;