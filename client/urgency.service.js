module.exports.prioritizeTasks = function prioritizeTasks(allTasks) {
  let tasks = { recent: [], urgent: [], overdue: [] };
  let now = Date.now();

  allTasks.forEach(t => {
    let timeLeft = Date.parse(t.dueBy) - now;

    if (timeLeft < 0) {
      return tasks.overdue.push(t);
    } else if (timeLeft < t.interval / 2) {
      return tasks.urgent.push(t);
    } else {
      return tasks.recent.push(t);
    }
  });

  return tasks;
};

