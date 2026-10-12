import { useRef } from "react";
import { useEffect, useState } from "react";



const MyForm = () => {
    const [name, setName] = useState("");
    const [age, setage] = useState("");
    const [salary, setsalary] = useState("");


    const ip = useRef();
    useEffect(() => {
        ip.current.focus();
    },[] )


    return (
        <div>
            <input type="text"
                placeholder='Enter name'
                value={name}
                ref={ip}
                onChange={(e) => setName(e.target.value)}
            /> <br />
            <h4>{name}</h4>

            <input type="number"
                value={age}
                placeholder="Enter age"
                onChange={(e) => setage(e.target.value)}
            /><br />
            <h4>{age}</h4>

            <input type="number"
                value={salary}
                placeholder="Enter salary"
                onChange={(e) => setsalary(e.target.value)} />
            <h4>{salary}</h4>


        </div>
    )
}

export default MyForm