import { Box, InputBase, styled } from "@mui/material";

const Component = styled(Box)({
    background:'#F6F6F6',
    '& > div':{
        margin:10,
    }
})

const BreadCrum = ({setText,setCount})=>{
    return(
        <Component>
            <InputBase
            placeholder="serach images"
            onChange={(e)=>setText(e.target.value)}
            />
            <InputBase
            placeholder="Enter Number "
            type="number"
            onChange={(e)=>setCount(e.target.value)}
            />
        </Component>
    )
}
export default BreadCrum;