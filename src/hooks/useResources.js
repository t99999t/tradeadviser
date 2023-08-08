
import {cloneElement, isValidElement, useEffect, useState}from "react";
import {axiosPrivate} from "../api/axios";
const  useResources =({resourcesUrl,children})=> {
    const [state, setState] = useState(null);

    const [error, setError] = useState(null);

    useEffect(() => async () => {

        await axiosPrivate.get(resourcesUrl).then(response => {
        setState(response.data)}
        ).catch(error => {
            setError(error.response.data.message)
        })

    }, [resourcesUrl,error])
    return (
        <div>
            {
                children.map(children, child => {
                    if (isValidElement(child)) {

                        return (
                            cloneElement(child, {[resourcesUrl] : state})
                        )
                    }
                })
            }
            {error}
        </div>)
}

export default useResources


