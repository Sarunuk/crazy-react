import { useEffect } from "react";
import { ACTION_TYPE } from "../../common/utils/AppUtils";
import { useAccountContext } from "../context/accountContext";

export const AccountInfo = (props) => {
    const [state, dispatch] = useAccountContext();
    const selectedAccId = props.match.params.id;
    const displayFields = ['id', 'name', 'username', 'email', 'phone', 'website'];

    useEffect(() => {
        dispatch({ type: ACTION_TYPE.SELECTED_ACC, payload: selectedAccId });
    }, [selectedAccId]);

    return <div>
        <ul>
            {state.selectedAccount && displayFields.map(field => <li key={field}>{state.selectedAccount[field]}</li>)}
        </ul>
    </div>
}
