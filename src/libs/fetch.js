import axios from 'axios'
import config from '../config'
import qs from 'qs';
class HttpRequest {
    constructor(baseUrl = baseURL) {
        this.baseUrl = baseUrl
        this.queue = {}
    }
    getInsideConfig() {
        const config = {
            baseURL: this.baseUrl,
            headers: {

            }
        }
        return config
    }
    destroy(url) {
        delete this.queue[url]
    }
    interceptors(instance, url) {
        // 请求拦截
        instance.interceptors.request.use(config => {
            this.queue[url] = true
            return config
        }, error => {
            return Promise.reject(error)
        })
        // 响应拦截
        instance.interceptors.response.use(res => {
            this.destroy(url)
            const {
                data,
                status
            } = res
            return {
                data,
                status
            }
        }, error => {
            this.destroy(url)
            return Promise.reject(error)
        })
    }
    request(options) {
        const instance = axios.create()
        if (options.data != null) {
            options.data = qs.stringify(options.data)
        }
        options = Object.assign(this.getInsideConfig(), options)
        this.interceptors(instance, options.url)
        return instance(options)
    }
}

const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro
const fetch = new HttpRequest(baseUrl)

export default fetch