
// 的post请求
export function fetch(url, params) {
  return new Promise((resolve, reject) => {
    uni.request({
        url: url, //仅为示例，并非真实接口地址。
        data:params,
        header: {
            'custom-header': 'hello' //自定义请求头信息
        },
        success: (res) => {
            console.log(res.data);
			resolve(res.data);
            
        }
    });
  })
}

export default {
  mockdata(url, params) {
    return fetch(url, params);
  }
}