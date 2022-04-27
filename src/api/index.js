import request from '../utils/request'

export function screenData() {
    return request({
        url: '/screen/data',
        method: 'get'
    })
}

export function wordCloud() {
    return request({
        url: '/screen/wordcloud',
        method: 'get'
    })
}

export function mapScatter() {
    return request({
        url: '/screen/map/scatter',
        method: 'get'
    })
}
