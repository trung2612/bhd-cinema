import {callApi} from "helpers/call-api";
import {
    GLOBAL_STATE_GET_SOCIALS,
    GLOBAL_STATE_GET_LOGO,GLOBAL_STATE_GET_HELPERS
} from "./constants";

export const getSocials = callApi(GLOBAL_STATE_GET_SOCIALS,"socials");

export const getLogo = callApi(GLOBAL_STATE_GET_LOGO, "logo");

export const getHelpers = callApi(GLOBAL_STATE_GET_HELPERS, "helpers");