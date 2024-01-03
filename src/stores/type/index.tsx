import {Category} from '@src/api/category';
import {create} from 'zustand';

type TypeStore = {
  category?: Category[];
  setCategoryStore: (f: Category[] | undefined) => void;
};

export const useTypeStore = create<TypeStore>(set => ({
  category: undefined,
  setCategoryStore: c => set({category: c}),
}));
