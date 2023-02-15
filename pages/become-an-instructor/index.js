import { fetchData } from "../../utils/queries";

import Header from "../../components/BecomeAnInstructor/Header";
import BeginnerSteps from "../../components/BecomeAnInstructor/BeginnerSteps";
import Learn from "../../components/BecomeAnInstructor/Learn";
import Ending from "../../components/BecomeAnInstructor/Ending";
import { useEffect, useState } from "react";

const BecomeAnInstructor = () => {
    const [data, setData] = useState({});
    const getData = async () => {
        const res = await fetchData(
            `${process.env.NEXT_PUBLIC_DATA_URL}/api/data/become-instructor`
        );
        setData(res?.data?.result);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <Header data={data && data} />
            <Learn data={data && data} />
            <BeginnerSteps data={data && data} />
            <Ending />
        </>
    );
};

export default BecomeAnInstructor;