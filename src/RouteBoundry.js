import { isRouteErrorResponse, useRouteError } from "react-router-dom";

function RouteBoundry(){
    const error = useRouteError();

    if(isRouteErrorResponse(error)){
        if(error.status=== 404){
            return <>Ths Page Does'nt exist</>
        } else {
            return <>Ths Page Does'nt exist...</>
        }
    }
}

export default RouteBoundry;