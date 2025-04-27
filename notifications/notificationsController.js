import { buildNotification } from "./notificationsView.js";

export function noticationsController(notifications){
    const removeNotification = (newNotifications) => {
        newNotifications.remove();
    }

    const showNotification = (message) => {
        const newNotifications = document.createElement('div');
        newNotifications.innerHTML = buildNotification(message)

        notifications.appendChild(newNotifications)

        const closeButton = newNotifications.querySelector("button");

        closeButton.addEventListener("click", () => {
            removeNotification(newNotifications)
        });

        setTimeout(() => {
            removeNotification(newNotifications)
        }, 5000);
    }

    return {
        showNotification
    }
}