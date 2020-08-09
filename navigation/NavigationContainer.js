import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import AdminShopNavigator from './AdminShopNavigator';
import ShopNavigator from './ShopNavigator';

const NavigationContainer = props => {
    const navRef = useRef();
    const isAuth = useSelector(state => !!state.auth.token);
    const isAdmin = useSelector(state => !!state.auth.isAdmin);

    useEffect(() => {
        if (!isAuth) {
            navRef.current.dispatch(NavigationActions.navigate({ routeName: 'Auth' })
            );
        }
    }, [isAuth]);

    if (isAdmin) {
        return <AdminShopNavigator ref={navRef}/>;
    }
    else {
        return <ShopNavigator ref={navRef}/>;
    }    
};

export default NavigationContainer;