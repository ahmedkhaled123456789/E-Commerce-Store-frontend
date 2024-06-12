import React, { useEffect, useState } from 'react';

const ProtectedRouteHook = () => {
    const [userData, setUserData] = useState(() => {
        try {
            const data = localStorage.getItem("user");
            return data ? JSON.parse(data) : null;
        } catch (error) {
            console.error("Error parsing user data from localStorage:", error);
            return null;
        }
    });
    
    const [isUser, setIsUser] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        if (userData) {
            if (userData.role === "user") {
                setIsUser(true);
                setIsAdmin(false);
            } else if (userData.role === "admin") {
                setIsUser(false);
                setIsAdmin(true);
            } else {
                setIsUser(false);
                setIsAdmin(false);
            }
        } else {
            setIsUser(false);
            setIsAdmin(false);
        }
    }, [userData]);

    return [isUser, isAdmin, userData];
};

export default ProtectedRouteHook;
