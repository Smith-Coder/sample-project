import { useState } from "react";
export default function FavColor() {
    const [color, setColor] = useState("Red");
    return (
        <div>
            <h1>Default color is {color}</h1>
            <button onClick={() => {
                setColor("Green")
            }}>Click</button>
        </div>
    );
}