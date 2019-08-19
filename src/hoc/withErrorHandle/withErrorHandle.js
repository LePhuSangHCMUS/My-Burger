import React, { Component } from 'react'
import Aux from '../Auxx/Auxx'
import Modal from '../../components/UI/Modal/Modal'
import AxiosInstance from '../../axios-orders-instance'
// export default (WrapperComponent) => {
//     return (props) => {
//         state={
//             showPurchasingModal:true
//         }
//         // hiddenPurchasingModalHandle={this.hiddenPurchasingModalHandle.bind(this)

//        return ( <Aux>
//             <Modal showPurchasingModal={this.state.showPurchasingModal}>Someting Didn't Work</Modal>
//             <WrapperComponent {...props} />
//         </Aux>)
//     }
// }

//===> Do Phai Dung State nen chuyen sang Class
export default (WrapperComponent) => {
    return class extends Component {
        state = {
            showPurchasingModal: false//Mac dinh khong co loi
        }
        hiddenPurchasingModalHandle() {
            this.setState({ showPurchasingModal: false })

        }
        componentDidMount() {
            //Khi MOunt Xong thi bat loi trong ca 2 qua trinh res va req
            AxiosInstance.interceptors.request.use(request => {
                console.log('Request HOC ', request);
                return request;//Nho return 

            }, err => {
                console.log('Request Error HOC', err);
                this.setState({ showPurchasingModal: true })

            })
            AxiosInstance.interceptors.response.use(response => {
                console.log('Response HOC', response);
                return response;//Nho return 

            }, err => {
                console.log('Response Error HOC', err);
                this.setState({ showPurchasingModal: true })

            })
        }
        // hiddenPurchasingModalHandle={this.hiddenPurchasingModalHandle.bind(this)
        render() {
            return (<Aux>
                <Modal showPurchasingModal={this.state.showPurchasingModal}
                    hiddenPurchasingModalHandle={this.hiddenPurchasingModalHandle.bind(this)}
                >Someting Didn't Work</Modal>

                <WrapperComponent {...this.props} />
            </Aux >)
        }

    }
}