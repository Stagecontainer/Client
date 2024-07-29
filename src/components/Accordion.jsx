import { useState } from "react";

const Accordion = () => {
    const [isCollapse, setIsCollapse] = useState(false);
    
    return (
        <div>
            <header>
                <button>열기</button>
            </header>
            <div className="contentWrapper">

            </div>
        </div>
    );
}