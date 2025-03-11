export const useEditorialUtils = () => {
  const timeAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const seconds = Math.floor(
      (now.getTime() - date.getTime()) / 1000
    );

    let interval = Math.floor(seconds / 31536000);
    if (interval >= 1) return `${interval} anni fa`;

    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) return `${interval} mesi fa`;

    interval = Math.floor(seconds / 86400);
    if (interval >= 1) return `${interval} giorni fa`;

    interval = Math.floor(seconds / 3600);
    if (interval >= 1) return `${interval} ore fa`;

    interval = Math.floor(seconds / 60);
    if (interval >= 1) return `${interval} minuti fa`;

    return `poco fa`;
  };

  return {
    timeAgo,
  };
};
