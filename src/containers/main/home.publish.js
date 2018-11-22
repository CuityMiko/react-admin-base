/**
 * 发布消息模块
 */
import PubSub from 'pubsub-js'

export function homePub (key, data) {
    PubSub.publish(key, data);
}