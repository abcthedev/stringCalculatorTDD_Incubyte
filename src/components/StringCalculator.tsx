import React from "react";


const StringCalculator: React.FC = () => {
    return (
        <div>
            <div>String Calculator</div>
            <div>
                <input placeholder="Enter numbers..." />
            </div>
            <div>
                <button>Calculate</button>
            </div>
        </div>
    )
}

export default StringCalculator