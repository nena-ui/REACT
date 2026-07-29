import { useParams } from "react-router-dom"

function Coursedetailpage() {

//params

const params = useParams()

    return(
     <h1 className="text-center">This is course page of{params.name}</h1>

    )
}

export default Coursedetailpage