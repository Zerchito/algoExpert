export function optimalFreelancing(jobs: Record<string, number>[]) {
  // Write your code here.
  const WEEK_LENGTH = 7;
  let profit = 0;
  jobs = jobs.sort((a,b) => b.payment - a.payment);
  const timeline = [];
  timeline[6] = null;

  for (let job of jobs) {
    const maxTime = Math.min(job.deadline, WEEK_LENGTH);
    for (let time = maxTime; time > 0; time--) {
      if(!timeline[time]){
        timeline[time] = true;
        profit += job.payment;
        break;
      }
    }
  }
  return profit;
}