import React, { Component } from 'react'
import { Row, Col } from 'antd';
import E from 'echarts'
export default class DashBoard extends Component {
    randmColor(){  //产生随机颜色
        var r = Math.floor(Math.random()*256)  //0-255
        var g = Math.floor(Math.random()*256)  //0-255
        var b = Math.floor(Math.random()*256)  //0-255
        return '#'+r.toString(16).padStart(2,'0')+g.toString(16).padStart(2,'0')+b.toString(16).padStart(2,'0')
}
componentDidMount(){
    var myChart = E.init(this.node);

    // 指定图表的配置项和数据
    var option = {
        title: {
            text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
            data:['销量']
        },
        xAxis: {
            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    myChart.on('click', function (params) {
        window.open('https://www.baidu.com/s?wd=' + encodeURIComponent(params.name));
    });
}
    render() {
        return (
            <div>
                <Row type="flex">
                    <Col span={6} order={4} style={{'background':this.randmColor(),lineHeight:'40px','textAlign':'center'}}>
                    总访问量
                    </Col>
                    <Col span={6} order={3} style={{'background':this.randmColor(),lineHeight:'40px','textAlign':'center'}}>
                    今天访问
                    </Col>
                    <Col span={6} order={2} style={{'background':this.randmColor(),lineHeight:'40px','textAlign':'center'}}>
                    过去一周
                    </Col>
                    <Col span={6} order={1} style={{'background':this.randmColor(),lineHeight:'40px','textAlign':'center'}}>
                    过去一月
                    </Col>
                </Row>
                <div ref={(node)=>this.node=node} style={{height:"300px"}}></div>
            </div>
        )
    }
}
