import request from './request';
// 获取业务配置列表
export const getBizList: any = (query: any) => {
  return request({
    url: '/yingkangoa/client/config/biz/list',
    method: 'get',
  });
};
