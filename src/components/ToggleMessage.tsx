import { useState } from "react";

function ToggleMessage() {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div>
        <button onClick ={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide Message" : "Show Message"}
        
        </button>
        {isVisible && <p>Toggle Message</p>}


        
        </div>
    )
}
export default ToggleMessage;