export const types = [
  "movie",
  "series",
  "episode",
  "season"
];

export const yearList = () => {
  let options = [{label: "any", value:"any"},];
  for(let end = 2050; end >= 1900; end --){
    options.push({label: end, value: end})
  }
  return options;
}

