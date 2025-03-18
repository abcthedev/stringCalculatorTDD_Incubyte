import React, { useState } from "react";
import { addString } from "../stringCalc";
import { Button, TextField, Typography } from "@mui/material";


const StringCalculator: React.FC = () => {
    const [val, setVal] = useState<string>("");
    const [result, setResult] = useState<number | null>(null);
    const [error, setError] = useState<string>("");

    const handleCalculate = () => {
        try {
            setResult(addString(val));
            setError("");
        } catch (err) {
            setError(err instanceof Error ? err.message : "An error occurred");
            setResult(null);
        }
    };


    return (
        <div>
            <Typography variant="h3" component="h1" sx={{ my: 4 }} color="primary">
                String Calculator
            </Typography>
            <div>
                <TextField
                    multiline
                    value={val}
                    placeholder="Enter numbers..."
                    onChange={(e) => setVal(e.target.value)}
                />
            </div>
            <div>
                <Button variant="contained" onClick={handleCalculate} sx={{ my: 4 }}>Calculate</Button>
            </div>

            {!!result && <Typography variant="h4" color="success">
                Result : {result}
            </Typography>}

            {!!error && <Typography variant="h5" color="error">
                {error}
            </Typography>}

        </div>
    )
}

export default StringCalculator