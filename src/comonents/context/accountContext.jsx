import React, { useContext, useReducer } from 'react';
import { ACTION_TYPE } from '../../common/utils/AppUtils';

// Expose the context in case not using the context hook.
const AccountContext = React.createContext();

// REDUCER
function accountReducer(state, { type, payload = [] }) {
    switch (type) {
        case ACTION_TYPE.SUCCESS:
            return { accounts: [...payload] };

        case ACTION_TYPE.SELECTED_ACC:
            const selectedAccount = state.accounts.find(acc => acc.id === +payload);
            return { ...state, selectedAccount };

        default:
            return state;
    }
}

// PROVIDER
function AccountProvider({ children }) {
    return <AccountContext.Provider value={useReducer(accountReducer, { accounts: [] })}>
        {children}
    </AccountContext.Provider>
}

// Context hook for access the context values.
function useAccountContext() {
    const context = useContext(AccountContext);
    if (context) {
        return context;
    }
    throw new Error('context is not configured');
}


export { AccountProvider, useAccountContext };

