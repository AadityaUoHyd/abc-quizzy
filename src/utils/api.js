export const useApi = () => {
    const makeRequest = async (endpoint, options = {}) => {
        const token = localStorage.getItem("auth_token");
        if (!token) {
            throw new Error("No authentication token found");
        }

        const defaultOptions = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
        };

        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/${endpoint}`, {
            ...defaultOptions,
            ...options,
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => null);
            if (response.status === 429) {
                throw new Error("Daily quota exceeded");
            }
            throw new Error(errorData?.detail || "An error occurred");
        }

        return response.json();
    };

    return { makeRequest };
};