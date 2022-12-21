const meetingRooms = (intervals) => {
  const counters = new Set();

  for (let i = 0; i < intervals.length; i++) {
    for (let j = intervals[i][0]; j < intervals[i][1]; j++) {
      if (counters.has(j)) return false;
      counters.add(j);
    }
  }

  return true;
};
