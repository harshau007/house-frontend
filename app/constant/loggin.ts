import { useState } from "react"

const shareableLogginState = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return { isLoggedIn, setIsLoggedIn };
}

export default shareableLogginState;