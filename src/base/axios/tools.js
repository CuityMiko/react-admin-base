/**
 * http通用工具函数
 */
import { message } from 'antd';
import http from './http'

/**
 * 公用get请求
 * @param url       接口地址
 * @param msg       接口异常提示
 * @param headers   接口所需header配置
 */
export const get = ({url, msg = '接口异常', headers = {}}) =>
    http.get(url, headers).then(res => res.data).catch(err => {
       console.log(err);
       message.warn(msg);
    });

/**
 * 公用post请求
 * @param url       接口地址
 * @param data      接口参数
 * @param msg       接口异常提示
 * @param headers   接口所需header配置
 */
export const post = ({url, data, msg = '接口异常', headers = {}}) =>
    http.post(url, data, headers).then(res => res.data).catch(err => {
        console.log(err);
        message.warn(msg);
    });
