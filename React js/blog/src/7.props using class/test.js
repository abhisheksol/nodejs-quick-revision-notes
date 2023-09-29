import React from "react";
export default class abhi extends React.Component {

    render() {
        return (
            <div>
                <h2>hello abhi how are u{this.props.name}</h2>
                {/* yata jasa tula mahita class astana ami ====> this <===== use karto 
                    2. ani yata class mada function vani ki function(data)---> ani data.name asa parameter 
                    daun props la access karta nahi 
                    3.taya sathi ami ===> props <=== (built in functoin class sathi use karto)  
                    4.this.props.data_patvnar _cha_nav lihato*/}
            </div>
        )
    }
}