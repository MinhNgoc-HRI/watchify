import {Item} from '@src/api/film';
import {create} from 'zustand';

type FilmStore = {
  film?: Item;
  setFilmStore: (f: Item | undefined) => void;
};

export const useFilmStore = create<FilmStore>(set => ({
  film: undefined,
  setFilmStore: f => set({film: f}),
}));
