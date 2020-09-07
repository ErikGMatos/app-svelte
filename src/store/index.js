import { writable } from 'svelte/store';

export const INITIAL_STATE = {
  movies: [],
  wasSearched: false,
};

export const storeMovie = writable({...INITIAL_STATE});