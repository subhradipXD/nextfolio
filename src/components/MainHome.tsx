import { HomeLeftSide } from "./HomeLeftSide";
import { HomeRightSide } from "./HomeRightSide";

function MainHome() {
    return (
        <>
            <div className="flex flex-col lg:flex-row h-screen items-center justify-center mt-20 md:mt-0">
                <div className="w-full lg:w-1/2 p-10 lg:ml-20 lg:mr-5 mt-96 md:mt-0">
                    <HomeLeftSide />
                </div>
                <div className="w-full lg:w-1/2 p-10 lg:ml-5 lg:mr-20">
                    <HomeRightSide />
                </div>
            </div>
        </>
    );
}

export default MainHome;
