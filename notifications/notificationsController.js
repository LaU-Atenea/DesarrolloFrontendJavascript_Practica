import { buildNotification } from "./notificationsView.js";

export function notificationsController(notifications){
    const removeNotification = (newNotifications) => {
        newNotifications.remove();
    }

    const showNotification = (message, type = 'error') => {
        const newNotifications = document.createElement('div');
        newNotifications.classList.add('notification')
        newNotifications.classList.add(type)
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