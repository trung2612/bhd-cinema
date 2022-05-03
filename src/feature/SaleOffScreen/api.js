import {callApi} from "helpers/call-api";
import {SALEOFF_SCREEN_GET_SALEOFF,SALEOFF_SCREEN_GET_EVENTS} from './constants';

export const getSaleoff = callApi(SALEOFF_SCREEN_GET_SALEOFF,"saleoff");

export const getEvents = callApi(SALEOFF_SCREEN_GET_EVENTS,"events");
