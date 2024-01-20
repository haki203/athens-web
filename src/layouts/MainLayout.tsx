import React from 'react'
import { Outlet } from 'react-router-dom'
import ShopDetailItemHeader from 'components/ShopDetailItemHeader'
import ShopDetailItemSidebar from 'components/ShopDetailItemSidebar'

function MainLayout() {
    return (
        <div className="App">
            <ShopDetailItemHeader />
            <ShopDetailItemSidebar/>
            <Outlet/>
        </div>
    )
}

export default MainLayout