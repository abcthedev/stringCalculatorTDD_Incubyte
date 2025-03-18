import React, { useState } from "react";
import { addString } from "../stringCalc";


const StringCalculator: React.FC = () => {
    const [val, setVal] = useState("");
    const [result, setResult] = useState<number | null>(null);

    const handleCalculate = () => {
        setResult(addString(val));
    };

    return (
        <div>
            <div>String Calculator</div>
            <div>
                <input
                    value={val}
                    placeholder="Enter numbers..."
                    onChange={(e) => setVal(e.target.value)}
                />
            </div>
            <div>
                <button onClick={handleCalculate}>Calculate</button>
            </div>

            {!!result && <div>
                Result : {result}
            </div>}
        </div>
    )
}

export default StringCalculator