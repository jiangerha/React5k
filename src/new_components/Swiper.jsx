import React from 'react'
import { Carousel, List } from 'antd-mobile';
import defaultImg from '../common/imgs/banner1.png'

const returnImgCon = (num) => {
    return {
        img:require(`../common/imgs/banner${num}.png`),
        title:`${num}铜陵市人大常${num}委会预算工委听取民生工程绩效${num}听取民生工程绩`
    }
}

const data = [
    returnImgCon(1),
    returnImgCon(2),
    returnImgCon(3)
]

const dotStyle = {
    width:10,
    height:2,
    marginRight:3,
    background:'#ccc'
}

const dotActiveStyle = {
    ...dotStyle,
    background:'#fe543a'
}

const swiperCon = {
    dotStyle,
    dotActiveStyle
}

export default class Swiper extends React.PureComponent {
  state = {
    data,
    imgHeight: 170,
    swiperIndex:0,
  }
  componentDidMount() {
  }
  render() {
    //   const {data, swiperIndex} = this.state;
      const {swiperIndex} = this.state;
      const {list} = this.props;
      const data = list.length >= 5 ? list.slice(0,5) : list;
      console.log(this.props.list,data)
    return (
        <div className="swiper-box">
            <Carousel
            {...swiperCon}
            autoplay={true}
            infinite
            afterChange={index => this.setState({swiperIndex:index})}
        >
            {data.length > 0 && data.map(({coverImageUrl, href},idx) => (
                <a
                    className="item"
                    key={idx}
                    href={!href || href === "#" ? "javascript:;" : href}
                    style={{ display: 'inline-block', width: '100%'}}
                >
                    <img
                        className="swiper-img"
                        src={coverImageUrl && `http://113.125.49.13:8888/tianti-module-admin${coverImageUrl}` || defaultImg} 
                        onError={(e) => e.target.src = defaultImg}
                        alt=""
                        style={{ width: '100%', verticalAlign: 'top' }}
                        onLoad={() => {
                            window.dispatchEvent(new Event('resize'));
                        }}
                    />
                    
                </a>
            ))}
            
      </Carousel>
      <div className="text-bottom">
        <span className="bg"></span>
        <p>{data.length > 0 && data[swiperIndex].title}</p>
      </div>
      <div className="swiper-bottom"></div>
    </div>
    );
  }
}