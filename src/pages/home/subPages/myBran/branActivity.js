/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-10 11:36:48
 * @LastEditTime: 2019-08-18 14:21:35
 * @LastEditors: Please set LastEditors
 */
import React from 'react'
import PublshIcon from '../../../../common/imgs/publish.png';
import NotPublshIcon from '../../../../common/imgs/not-publish.png';
import { Toast } from 'antd-mobile';
import Http from '@/httpTool/http'
import '../index.scss'
import defaultImg from '../../../../common/imgs/card.png'

const ListData = Array.from(new Array(20)).map((_val, i) => ({
    title: '向着网络强国阔步前行— —党的十八大以来 网信事业发展述评',
    time:'2019-08-01',
    tag:'人民网重庆频道',
    isPublish:false,
}));

export default class Main extends React.Component {
    state = {
        data:[]
    }
    componentDidMount = () => {
      this.queryInfo()
  }

  async queryInfo(){
      const {url, isTeam, id} = this.props;
      Toast.loading('加载中...', 0, null, true)
      const storage = window.localStorage;
      const tel = storage.getItem("user_name");
      const paramId = isTeam ? 'team_id' : 'partybranch_id'
      try{
          const {data,success} = await Http('get',url,{[paramId]:id,tel});
          success && this.setState({data})
      }catch(e){
          console.log(e)
      }finally{
          Toast.hide()
      }
  }
  render() {
      const style = {
        lineHeight: '25px',
        color: '#333',
        fontSize: '14px',
        margin: 0,
        maxHeight: '50px',
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 2,
        overflow: 'hidden',
        textOverflow:'ellipsis'
      }
    return (
      <div className="activity-card-list">
        {
            this.state.data.map((data, idx) => (
                <div className="leader-card" key={idx} onClick={() => this.props.history.push(`/details?id=undefined&data=${encodeURI(JSON.stringify(data))}`)}>
                    <div className="card-left">
                        <p className="card-title" style={style}>{data.tile}</p>
                        <div className="card-extra">
                            <span className="card-tag">{data.publisher || '红岩青松'}</span>
                            <span className="card-time">{data.create_date.substring(0,19)}</span>
                        </div>
                    </div>
                    <div className="card-img-right">
                        <img ref={ref => this.img = ref} src={`http://113.125.49.13:8888${data.cover_image_url}` || defaultImg} onError={(e) => e.target.src = defaultImg} alt=""/>
                    </div>
                </div>
            ))
        }
      </div>
    );
  }
}