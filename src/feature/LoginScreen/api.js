import {callApis} from "helpers/call-api";
import {LOGIN_SCREEN_GET_ACCOUNTS} from './constants';

export const getAccounts = callApis(LOGIN_SCREEN_GET_ACCOUNTS,"account");
