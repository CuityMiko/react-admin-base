import React, {Component} from 'react'

export default class MemberCardSetting extends Component {
    state = {
        title: '会员卡设置'
    }

    componentDidMount() {
        let data = {
            menus: [],
            others: []
        }
        const temp1 = {
            menus: [
                {id: 1, name: 'zhangsan'},
                {id: 2, name: 'lisi'}
            ],
            others: []
        }
        const temp2 = {
            menus: [
                {id: 3, name: 'wangwu'},
                {id: 4, name: 'zhaoliu'}
            ],
            others: [
                {id: 1, name: 'zhaoliu2', age: 20}
            ]
        }
        const temp3 = {
            menus: [
                {id: 5, name: 'hdas445'}
            ],
            others: [
                {id: 2, name: 'aaa2', age: 30},
                {id: 3, name: 'bbb2', age: 40},
                {id: 4, name: 'ccc2', age: 50}
            ]
        }
        data.menus = [...temp1.menus, ...temp2.menus, ...temp3.menus]
        data.others = [...temp1.others, ...temp2.others, ...temp3.others]
        // data.menus = data.menus.concat(temp1.menus, temp2.menus, temp3.menus)
        // data.others = data.others.concat(temp1.others, temp2.others, temp3.others)
        console.log(data);
    }

    render() {
        return (
            <div>{this.state.title}</div>
        )
    }
}