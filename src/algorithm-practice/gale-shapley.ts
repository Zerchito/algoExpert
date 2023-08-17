export function stableInternships(interns: number[][], teams: number[][]) {
  let available = new Array(interns.length).fill(true);
  let matchings = new Array(teams.length).fill(null);
  while(available.some(i => i)) {
    for (let intern = 0; intern < interns.length; intern++) {
      if(!available[intern]) {
        continue;
      }
      let team: number = interns[intern].shift();
      if (matchings[team] === null) {
        available[intern] = false;
        matchings[team] = intern;
      } else if(teams[team].indexOf(intern) < teams[team].indexOf(matchings[team])) {
        available[matchings[team]] = true;
        available[intern] = false;
        matchings[team] = intern;
      }
      
    }
  }
  return matchings.map((intern, team) => [intern, team]);
}
