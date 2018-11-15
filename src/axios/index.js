/**
 *  on 2017/4/16.
 */
import axios from 'axios';
import { get } from './tools';

const GIT_OAUTH = 'https://github.com/login/oauth';

export const gitOauthToken = code => axios.post('https://cors-anywhere.herokuapp.com/' + GIT_OAUTH + '/access_token', {...{client_id: '792cdcd244e98dcd2dee',
    client_secret: '81c4ff9df390d482b7c8b214a55cf24bf1f53059', redirect_uri: 'http://localhost:3006/', state: 'reactAdmin'}, code: code}, {headers: {Accept: 'application/json'}})
    .then(res => res.data).catch(err => console.log(err));

export const gitOauthInfo = access_token => axios({
    method: 'get',
    url: 'https://api.github.com/user?access_token=' + access_token,
}).then(res => res.data).catch(err => console.log(err));

// 管理员权限获取
export const admin = () => get({url: 'https://www.easy-mock.com/mock/597b5ed9a1d30433d8411456/auth/admin'});

// 访问权限获取
export const guest = () => get({url: 'https://www.easy-mock.com/mock/597b5ed9a1d30433d8411456/auth/visitor'});