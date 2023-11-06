function calculateDaysBetweenDates(begin, end) {
    const beginDate = new Date(begin);
    const endDate = new Date(end);
    const timeDiff = endDate.getTime() - beginDate.getTime();
    const daysDiff = timeDiff / (1000 * 3600 * 24);
    return daysDiff;
}
