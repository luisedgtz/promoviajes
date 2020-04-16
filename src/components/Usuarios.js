import React from 'react'


export default class Nombre extends React.Component{

    componentDidMount(){
        const M=window.M;
        M.AutoInit();
    }

    render(){
        return(
            <div style={{height: "93vh"}} className="valign-wrapper">
            <div class="row container">
                <div class="col s10 push-s2">
                  <div style={{height:"80vh"}} class="card blue-grey lighten-5">
                    <div class="card-content">
                        <span style={{fontWeight:'bold', WebkitTextFillColor:'#263238'}} class="card-title">Usuarios</span>
                        <ul id="tabs-swipe-demo" class="tabs blue-grey lighten-5">
                            <li class="tab col s6"><a href="#test-swipe-1">Promoviajes</a></li>
                            <li class="tab col s6"><a href="#test-swipe-2">Infocenter</a></li>
                        </ul>
                            <div class="card-content blue-grey lighten-5">
                            <div id="test-swipe-1" class="col s12">
                                <div class="row">
                                    <ul class="collection">
                                        <li class="collection-item avatar">
                                        <i class="circle medium material-icons deep-orange lighten-2">account_circle</i>
                                        <span class="black-text title">Raquel Saenz Pardo</span>
                                        <p class="black-text">Gerente General</p>
                                        <div class="secondary-content row">
                                            <div><a href="#!"><i class="material-icons black-text">edit</i></a></div>
                                            <div><a href="#!"><i id="btndelete" class="material-icons black-text">delete</i></a></div>
                                        </div>
                                        
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div id="test-swipe-2" class="col s12"></div>
                            </div>
                    </div>
                    <a class="btn-floating btn-large halfway-fab waves-effect waves-light deep-orange lighten-2"><i class="material-icons">add</i></a>
                  </div>
                </div>
            </div>
            
            </div>
        )
    }
}