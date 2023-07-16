import { FunctionComponent } from "react";

interface MyCompanyProps {

}

const MyCompany: FunctionComponent<MyCompanyProps> = () => {
    return (
        <>
            <div className="container vh-100 mt-5 bg-body rounded-4">
                <h1 className="text-center pt-5 display-4">My Company</h1>
            </div>
        </>
    );
}

export default MyCompany;