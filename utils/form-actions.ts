import { createAction } from "./create-action";


export enum FORM_ACTION_TYPES  {
    START = 'form/LOADING_START',
    SUCCESS = 'form/LOADING_SUCCESS',
    FAILED = 'form/LOADING_FAILED',
}



export const start = () => createAction(FORM_ACTION_TYPES.START);
export const success = () => createAction(FORM_ACTION_TYPES.SUCCESS);
export const failed = (payload: string) => createAction(
    FORM_ACTION_TYPES.FAILED, 
    payload
);