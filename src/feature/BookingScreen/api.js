import {callApi} from "helpers/call-api";
import {BOOKING_SCREEN_GET_SEAT} from './constants';

export const getSeats = callApi(BOOKING_SCREEN_GET_SEAT,"seats");
