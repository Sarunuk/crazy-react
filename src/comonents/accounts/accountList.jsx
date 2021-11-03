import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../../common/hooks/useFetch";
import userImg from '../../common/imgs/user.png';
import { ViewRenderer } from "../../common/renderer/viewRenderer";
import { FETCH_STATUS } from "../../common/utils/AppUtils";
import { useAccountContext } from "../context/accountContext";
import classes from './accounts.module.css';

export const AccountList = () => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const [, dispatch] = useAccountContext();

    const { data = [], status } = useFetch({ url });

    useEffect(() => {
        if (status !== FETCH_STATUS.PENDING) {
            dispatch({ type: FETCH_STATUS.SUCCESS, payload: data });
        }
    }, [status]);

    return <ViewRenderer fetchStatus={status}>
        <div>
            {(data || [])?.map(record => <div className={classes['box-container']}>
                <div className={classes['flex-container']}>
                    <div><img className={classes['user-img']} src={userImg} /></div>
                    <div>
                        <b>{record.name}</b>
                        <div>{record.username}</div>
                    </div>
                </div>
                <div>
                    <Link className={classes['link']} to={"/details/" + record.id}>View Details &gt;</Link>
                </div>
            </div>)}
        </div>
    </ViewRenderer>
}
