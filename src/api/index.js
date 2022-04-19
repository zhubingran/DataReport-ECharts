import request from '../utils/request'

export function wordcloud(){
  return request({
    url: '/screen/wordcloud',
    method:'get',
    params:{icode:'13926EAFCAA16CC3'}
  })
}