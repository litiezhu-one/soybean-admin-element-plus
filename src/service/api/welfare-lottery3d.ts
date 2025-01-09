import { request } from '../request';
export function welfareLotteryList(data?: Api.WelfareLottery.LotterySearchParams) {
  return request<Api.WelfareLottery.WelfareLotteryList>({
    url: '/welfareLottery3d/list',
    method: 'post',
    data
  });
}

export function welfareLottery3dRespDtoList(data?: Api.WelfareLottery.WelfareLottery3dRespDtoParams) {
  return request<Api.WelfareLottery.WelfareLottery3dRespDtoList>({
    url: `/welfareLottery3d/search/${data?.month}`,
    method: 'get',
    data
  });
}
