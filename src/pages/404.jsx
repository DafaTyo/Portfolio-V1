import { useRouteError } from "react-router-dom";

const ErrorPage = () => {  
    const error = useRouteError();
    
    return (
        <div className="flex flex-col justify-center items-center h-screen" id="error-page">
            <h1 className="text-3xl font-bold ">Oops!</h1>
            <p className="my-4 text-xl">Sorry, an unexpected error has occurred.</p>
            <p className="text-lg">
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}

export default ErrorPage