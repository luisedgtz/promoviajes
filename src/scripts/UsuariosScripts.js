import React from 'react'

import NavBar from '../components/NavBar';
import Usuarios from '../components/Usuarios';


export default class Nombre extends React.Component{
    
    componentDidMount(){
        const M=window.M;
        M.AutoInit();
    }

    createUser=()=>{
        
    }

    render(){
        return(
            <div>
                <NavBar></NavBar>
                <Usuarios></Usuarios>
            </div>
        )

    }
}