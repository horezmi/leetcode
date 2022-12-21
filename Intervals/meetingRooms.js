const canAttendMeetings = (intervals) => {
  const counters = new Set();

  for (let i = 0; i < intervals.length; i += 1) {
    for (let j = intervals[i][0]; j < intervals[i][1]; j += 1) {
      if (counters.has(j)) {
        return false;
      } else {
        counters.add(j);
      }
    }
  }

  return true;
};
