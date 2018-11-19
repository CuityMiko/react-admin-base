import { get } from './tools';

// 管理员权限获取
export const admin = () => get({url: 'https://www.easy-mock.com/mock/597b5ed9a1d30433d8411456/auth/admin'});

// 访问权限获取
export const guest = () => get({url: 'https://www.easy-mock.com/mock/597b5ed9a1d30433d8411456/auth/visitor'});