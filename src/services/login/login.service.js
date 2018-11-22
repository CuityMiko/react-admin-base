import request from '@/axios/http'

/**
 * 发送验证码
 * @param {*} url 
 * @param {*} data 
 */
export function sendCode (url, data) {
    return new Promise((resolve, reject) => {
        request({
            url: url,
            method: 'post',
            data
        }).then((res) => {
            resolve(res.data)
        }).catch((err) => {
            reject(err)
        })
    })
}

/**
 * 登录
 * @param {*} url 
 * @param {*} data 
 */
export function login (url, data) {
    return new Promise((resolve, reject) => {
        request({
            url: url,
            method: 'post',
            data
        }).then((res) => {
            resolve(res.data)
        }).catch((err) => {
            reject(err)
        })
    })
}