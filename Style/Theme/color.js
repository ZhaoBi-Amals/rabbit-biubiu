export function black(alpha = 1) {
    return `rgba(0, 0, 0, ${alpha})`
}

export function bg(alpha = 1) {
    return { 'backgroundColor': black(alpha) }
}

export function fg(alpha = 1) {
    return { 'color': `rgba(255, 255, 255, ${alpha})` }
}
