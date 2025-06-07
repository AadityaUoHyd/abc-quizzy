// src/utils/audio.js
export const playSound = (url) => {
    if (url) {
        try {
            const audio = new Audio(url);
            audio.play().catch(error => {
                console.warn("Audio playback prevented (e.g., autoplay policy):", error);
            });
        } catch (error) {
            console.error("Error creating or playing audio:", error);
        }
    }
};