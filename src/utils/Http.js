import Taro from '@tarojs/taro'

class Http {

  getFn(url, params={}, header={}) {
    return Taro.request({
      url,
      header,
      data: params,
    })
  }

  postFn(url, data, header={}) {
    return Taro.request({
      url,
      data,
      header,
      method: 'POST',
    })
  }
}

export default new Http