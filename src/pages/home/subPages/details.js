/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-10 15:58:19
 * @LastEditTime: 2019-08-18 14:21:43
 * @LastEditors: Please set LastEditors
 */
import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as routerAction from '@actions/routerAction'
import { Toast, Button } from 'antd-mobile';
import api from '@/httpTool/httpUrls'
import Http from '@/httpTool/http'
import Scroll from '@components/Scroll'
import voiceIcon from '../../../common/imgs/voice.png'
import './index.scss'

const {teamSignIn, branchSignIn} = api;

class Main extends React.PureComponent{

    state = {
        content:'',
        title:'',
        createDate:'',
        publisher:'',
        voiceUrl:'',
        isPlay:false,
        hd_id:'',
        isTeam:false
    }

    componentDidMount = () => {
        this.queryDetail()
    }

    signInDetails = (search) => {
        const arr = search.split("&data=");
        const data = JSON.parse(decodeURI(arr[1]));
        const {content, tile, publisher, create_date, start_date, voice_url,hd_id, isTeam} = data || {};
        data && this.setState({
            hd_id,
            content,
            title:tile,
            publisher,
            voiceUrl:voice_url,
            createDate:(create_date || start_date).substring(0,19),
            isTeam
        },() => {
            this.content.innerHTML = content;
        })
    }

    signIn = async() => {
        const {hd_id, isTeam} = this.state;
        const storage = window.localStorage;
        const tel = storage.getItem("user_name");
        Toast.loading('加载中...', 0, null, true)
        const {success, msg} = await Http('get',isTeam ? teamSignIn : branchSignIn,{tel,hd_id});
        try{
            Toast.hide();
            success ? Toast.success('报名成功',2) : Toast.fail(msg,2)
        }catch(e){
            Toast.fail(msg,2)
            console.log(e)
        }
    }

    async queryDetail(){
        const {search} = this.props.location;
        if(search.indexOf("?id=undefined&") > -1) return this.signInDetails(search)
        const articleId = search.split("=")[1];
        Toast.loading('加载中...', 0, null, true)
        const {data:{content, title, publisher, createDate, voiceUrl},success, msg} = await Http('get',api.detail,{articleId});
        try{
            Toast.hide();
            success ? this.setState({
                content,
                title,
                publisher,
                createDate,
                voiceUrl
            },()=>{
                this.content.innerHTML = content;
            }) : Toast.fail(msg,2)
        }catch(e){
            Toast.fail(msg,2)
            console.log(e)
        }
    }

    isPlayAudio = () => {
        const {isPlay} = this.state;
        isPlay ? this.audio.play() : this.audio.pause()
    }

    /**
     * 监听播放结束事件
     */
    voiceEnd = (voice) => {
        let isGoOn = false;
        let index = 0;
        const targetUrl = this.audio.src;
        voice.map((i,idx) => {
            if(targetUrl.indexOf(i) > -1  && idx < voice.length - 1){
                isGoOn = true;
                index = idx + 1;
                return;
            }
        })
        if(isGoOn){
            this.audio.src = voice[index];
            this.audio.play()
        }
    }

    render(){
        const {content, title, publisher, createDate, voiceUrl, isPlay, hd_id} = this.state;
        const voice = (voiceUrl || '').split(";");
        voice.length > 1 && voice.splice(voice.length-1,1)
        return(
            <Scroll>
                {
                    content && 
                    <div className="details-page">
                        <p className="title">{title}</p>
                        <div className="extra-info">
                            <span>作者：{publisher || '红岩青松'}</span>
                            <span>发布时间：{createDate}</span>
                            {voiceUrl &&
                                <div>
                                    <img src={voiceIcon} alt="" onClick={() => this.setState({isPlay:!isPlay},this.isPlayAudio)}/>
                                     <audio ref={e => this.audio = e} src={`http://113.125.49.13:8888${voice[0]}`} type="audio/wav" onEnded={() => this.voiceEnd(voice)}></audio>
                                </div>
                            }
                        </div>
                        <div ref={e => this.content = e} className="content"></div>
                        {
                            hd_id && <Button onClick={this.signIn}>报名</Button>
                        }
                    </div>
                }
            </Scroll>
            
        )
    }
}


export default connect(
    null,
    (dispatch)=>{
        return {
            router:bindActionCreators(routerAction,dispatch)
        }
    }
)(Main)