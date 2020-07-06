export function generateInitials(name) {
    const nameSplit = name.split(' ');
    const initials = nameSplit[0].charAt(0).toUpperCase() + nameSplit[1].charAt(0).toUpperCase();
    return initials;
}
