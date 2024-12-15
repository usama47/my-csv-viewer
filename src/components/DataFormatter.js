export const formatDate = (dateStr) => {
    if (!dateStr) return "";
    return new Date(dateStr).toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });
};

export const formatPhone = (phone) => {
    return phone ? `https://wa.me/${phone.replace(/[^0-9]/g, "")}` : "";
};

export const formatEmail = (email) => `mailto:${email}`;


export const formatLink = (url) => url && url.startsWith("http") ? url : `https://${url}`;
