
 import SwaggerUI from "swagger-ui-react"
         import "swagger-ui-react/swagger-ui.css"

function Api (){



    return(
        <div className ='content'>
            <div className = 'container'>
            <h1>Api</h1>

        <SwaggerUI url={'api.json'} />
        </div>
        </div>
    )
}

export default Api;