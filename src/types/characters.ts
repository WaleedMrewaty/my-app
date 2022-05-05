type characterType = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: [string];
  url: string;
  created: string;
};
type info = {
  count: number;
  pages: number;
  next: string;
  prev: string;
};
type charactersType = {
  info: info;
  results: [characterType];
};

export type { characterType, charactersType };
