import {DetailFilm, DetailFilmServerDaum} from '@src/api/types';
import {create} from 'zustand';

type FilmStore = {
  film?: DetailFilm;
  episode?: DetailFilmServerDaum;
  setFilmStore: (f: DetailFilm | undefined) => void;
  setEpisode: (e: DetailFilmServerDaum | undefined) => void;
};

export const useFilmStore = create<FilmStore>(set => ({
  film: undefined,
  episode: undefined,
  setFilmStore: f => set({film: f}),
  setEpisode: e => set({episode: e}),
}));
