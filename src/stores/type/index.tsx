import {Category, Country} from '@src/api/types';
import {create} from 'zustand';

type TypeStore = {
  category?: Category[];
  setCategoryStore: (f: Category[] | undefined) => void;
  country?: Country[];
  setCountryStore: (c: Country[] | undefined) => void;
};

export const useTypeStore = create<TypeStore>(set => ({
  category: undefined,
  setCategoryStore: c => set({category: c}),
  country: undefined,
  setCountryStore: c => set({country: c}),
}));
