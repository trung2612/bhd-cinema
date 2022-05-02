import {callApi,callApis} from "helpers/call-api";
import {MOVIE_SCREEN_GET_MOVIES} from './constants';

export const getMovies = callApis(MOVIE_SCREEN_GET_MOVIES,"movies");
