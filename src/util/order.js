import request from './orderRequest'

//登记访客信息
export function visitInfo(params){
  return  request({
    url: 'api/v1/visitInfo',
    method: 'get',
    params
  })
}

//失效订单
export function unclaim(params){
  return  request({
    url: 'web/v1/user_order/claim',
    method: 'post',
    params
  })
}
//查询未认领订单
export function claimList(params){
  return  request({
    url: 'web/v1/user_order/claim_list',
    method: 'post',
    params
  })
}