import { SpinnerDotted } from "spinners-react";

function Loading() {
    return (
        <div className="fixed top-0 right-0 bottom-0 left-0 bg-white h-screen w-screen flex justify-center items-center">
            <SpinnerDotted color="#000000"/>
        </div>
    );
}

export default Loading;