const colors = ['#3540ff', '#ffaf14'];

export function randomColor() {
    const index = Math.round(Math.random());
    return colors[index];
}