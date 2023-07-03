import { Action, ActionWithPayload } from "@/utils/create-action";
import { FORM_ACTION_TYPES } from "@/utils/form-actions";
import SuccessCheck from "./success-check/success-check";



export type FormLoaderAction  = 
    Action<FORM_ACTION_TYPES.START> |
    Action<FORM_ACTION_TYPES.SUCCESS> |
    ActionWithPayload<FORM_ACTION_TYPES.FAILED, string> |
    undefined;

type FormLoaderProps = {
    action: FormLoaderAction
}




const FormLoader = ({ action }: FormLoaderProps) => {

    if(action === undefined) {
        return;
    };
    
    if(action.type === FORM_ACTION_TYPES.START) {
        return;
    }

    if(action.type === FORM_ACTION_TYPES.SUCCESS) {
        return <SuccessCheck />
    }

    if(action.type === FORM_ACTION_TYPES.FAILED) {
        return <h2 className="text-red-600">{action.payload}</h2>
    }
}


export default FormLoader;