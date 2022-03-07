import { Guitar } from 'types/Guitars';

export type State = {
  guitars: StateGuitars;
};

export type StateGuitars = Guitar[];
