import { createStore} from "redux";
import { Provider} from "react-redux";

const data = {
    thong_tin_ca_nhan: "",
    tien_an_tien_su:[],
    signIn: '',
    than_nhan:'',
    all_citizen: '',
    all_canbo: '',
    schedule:'',
    notification:[]
}
const reducer =(state=data, action)=>{
    switch (action.type){

        case 'SIGN_IN':
            return { ...state, signIn:action.signIn };
        case 'SIGN_OUT':
            return { ...state, thong_tin_ca_nhan:"", tien_an_tien_su:[], signIn:'', than_nhan:"" };
        case 'GET_ALL_CITIZEN':
            return { ...state, all_citizen:action.all_citizen };
        case 'GET_ALL_OFFICIALS':
            return { ...state, all_canbo:action.all_canbo };
        case 'GET_INFO':
            return { ...state, thong_tin_ca_nhan: action.info}
        case 'GET_VIOLATE':
            return { ...state, tien_an_tien_su: action.tien_an_tien_su}
        case 'GET_HOME':
            return { ...state, than_nhan: action.than_nhan}
        case 'GET_SCHEDULE':
            return {... state, schedule: action.schedule}
        case 'GET_NOTIFICATION':
            return {... state, notification: action.notification}
        default:
            break;
    }
    return state;
  }
  const store = createStore(reducer);
  export { store }