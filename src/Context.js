/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 17/05/2022 - 23:00:37
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 17/05/2022
    * - Author          : 
    * - Modification    : 
**/
import React,{useContext, useState} from "react"

const AppContext =  React.createContext()

export const AppProvider = ({children}) => {
	const productPrice = 125;
	const [isSidebarOpen, SetIsSidebarOpen] = useState(false);
	const [isLightboxOpen, SetIsLightboxOpen] = useState(false);
	const [productCounter, setProductCounter] = useState(1);
	const [cart,setCart] = useState(0);
	const [showCart,setShowCart] = useState(0);

	const openSideBar = () => {
		SetIsSidebarOpen(true);
	}
	const closeSideBar = () => {
		SetIsSidebarOpen(false);
	}
	const openLightbox = () =>{
		SetIsLightboxOpen(true);
	}
	const closeLightbox = () =>{
		SetIsLightboxOpen(false);
	}
	const increamentCounter = () =>{
		let a = productCounter;
		setProductCounter(a +1);
		console.log('koko');
	}
	const decreamentCounter = () =>{
		let a = productCounter;
		if ( a > 1)
			setProductCounter(a - 1);
	}

	return (
		<AppContext.Provider
		value = {{
			openSideBar,
			isSidebarOpen,
			closeSideBar,
			openLightbox,
			closeLightbox,
			isLightboxOpen,
			SetIsLightboxOpen,
			decreamentCounter,
			increamentCounter,
			productCounter,
			productPrice,
			cart,
			setCart,
			showCart,
			setShowCart,
		}}
		>
		{children}
		</AppContext.Provider>
	)
}

export const useGlobalContext = () => {
	return useContext(AppContext);
}