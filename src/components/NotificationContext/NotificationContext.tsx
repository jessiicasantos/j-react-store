import { createContext, ReactNode, useContext, useEffect, useState } from "react";

const NotificationContext = createContext<any>(null);

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
    const [ notification, setNotification ] = useState<{ message: string, type: "success" | "error" | "info" } | null>(null);

    useEffect(() => {
        if(notification) {
            const timer = setTimeout(() => setNotification(null), 3000);

            return () => clearTimeout(timer);
        }
    }, [notification]);

    return (
        <NotificationContext.Provider value={{ setNotification }}>
            {children}
            {notification && (
                <div className={`popup fixed bottom-4 right-4 text-white px-4 py-2 rounded shadow z-50 shadow transition-all ${notification.type === "success" ? "bg-green-600" 
                : notification.type === "error" 
                ? "bg-red-600" 
                : "bg-indigo-600"
                }`}>
                    {notification.message}
                </div>
            )}
        </NotificationContext.Provider>
    )
}

export const useNotification = () => useContext(NotificationContext);