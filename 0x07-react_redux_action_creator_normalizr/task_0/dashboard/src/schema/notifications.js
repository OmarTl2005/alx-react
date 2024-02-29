import * as notifsData from '../../notifications.json';

function getAllNotificationsByUser(userId) {
    return notifsData.filter((notif) => notif.author.id === userId).map((notif) => notif.context)
}