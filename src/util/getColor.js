const colors = ['#8c8c8c', '#3540ff', '#41de83', '#ffaf14'];

export function getColor(index) {
    if (index < colors.length) {
        return colors[index];
    }
    return colors[index % colors.length]
}
