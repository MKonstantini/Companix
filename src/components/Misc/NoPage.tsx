import { FunctionComponent } from "react";

interface NoPageProps {

}

const NoPage: FunctionComponent<NoPageProps> = () => {
    return (
        <>
            <h1>Error 404 - Page Not Found!</h1>
        </>
    );
}

export default NoPage;