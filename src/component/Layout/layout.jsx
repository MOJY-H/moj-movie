    import React from 'react';

const Layout =({children}) =>{
    return(
        <>
        <div>
            <SideBar/>
            <Sides/>
            <Backdrop/>
        </div>
        <main>{children}</main>
        </>
    )
}

export default Layout;