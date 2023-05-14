import {put, takeEvery,takeLatest} from 'redux-saga/effects'
import { USER_LIST,SET_USER_DATA } from './constants';


function* userList() {
    // console.log('saga function called')
    const url ='https://dummyjson.com/users';
    let data =yield fetch(url);
    data=yield data.json();
    yield put({
        type:SET_USER_DATA,data
    }) 
    // console.log('data in saga',data)
}

 function* sagaData() {
    yield takeEvery(USER_LIST,userList);
}

export default sagaData;