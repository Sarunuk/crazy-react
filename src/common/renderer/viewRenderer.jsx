import { FETCH_STATUS } from "../utils/AppUtils";

export const ViewRenderer = ({ fetchStatus, children }) => {
    switch (fetchStatus) {
        case FETCH_STATUS.SUCCESS:
            return <div>{children}</div>
        case FETCH_STATUS.ERROR:
            return <div>Something went wrong!!!</div>;
        default:
            return <div>LOADING...</div>;
    }
}