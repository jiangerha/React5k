/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-10 11:36:48
 * @LastEditTime: 2019-08-19 20:58:50
 * @LastEditors: Please set LastEditors
 */
import React from 'react'
import { Toast } from 'antd-mobile';
import Http from '@/httpTool/http'
import '../index.scss'
import defaultImg from '../../../../common/imgs/my-bran-bg.png'

export default class Main extends React.Component {
    state = {
        list:[]
    }
    state = {
        data:[]
    }
    componentDidMount = () => {
      this.queryInfo()
  }

  async queryInfo(){
      const {url, id} = this.props;
      const paramId = url.indexOf("/myBranchHD") > -1 ? 'partybranch_id' : 'team_id';
      Toast.loading('加载中...', 0, null, true)
      const {data,success,msg} = await Http('get',url,{[paramId]:id});
      try{
          Toast.hide();
          success ? this.setState({data}) : Toast.fail(msg,2)
      }catch(e){
          console.log(e)
          Toast.fail(msg,2)
      }
  }
  render() {
      const {isTeam, history} = this.props;
    return (
      <div className="img-card-list">
        {
            this.state.data.map((data,idx) => (
                <div key={idx} className="card-item" onClick={() => history.push(`/details?id=undefined&data=${encodeURI(JSON.stringify({...data,isTeam}))}`)}>
                    <div className="card-mask"></div>
                    <img ref={ref => this.img = ref} src={`http://113.125.49.13:8888/tianti-module-admin${data.cover_img}` || defaultImg} onError={(e) => e.target.src = defaultImg} alt=""/>
                    <div className="text-box">
                        <p className="title">{data.hd_name || data.hd_Name}</p>
                        <p className="time">{data.start_date.substring(0,19)}</p>
                    </div>
                </div>
            ))
        }
      </div>
    );
  }
}