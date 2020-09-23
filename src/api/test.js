import fetch from '../libs/fetch'


/**
 * 用户登录
 * 
 * @param {*} username 
 * @param {*} password 
 * 
 * 使用范例
    Login(name,password)
    .then(res => {
        //todo
    })
    .catch(e => {
        //todo
        console.log(e);
    })
 */
export const Login = (username, password) => {
    const data = {
        username,
        password
    }
    return fetch.request({
        url: 'common',
        method: 'post',
        data
    })
}