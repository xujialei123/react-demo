
import './index.scss'
import React,{Component} from 'react'
import {Link} from 'react-router'
import axios from 'axios'

class SmallPlayer extends Component {


    constructor (props) {
        super(props)
        this.state = {
            info:{},
            play:true
        }
        this.audio = document.getElementById('audio')

        this.playAndPause = this.playAndPause.bind(this)
    }

    componentWillReceiveProps (props) {
        console.log(props.hash)
        if(props.hash!==this.props.hash){
            this.getSongInfo(props.hash)
            this.setState({play:true})
        }
    }

    shouldComponentUpdate(props,state){
        if(state.play!==this.state.play) {
            let method = state.play?'play':'pause'
            this.audio[method]()
            return true;
        }

        if(state.info === this.state.info) {
            return false
        }else{
            this.audio.src=state.info.url
            this.audio.play()
            return true;
        }
    }


    getSongInfo (hash) {
        axios.get('/kugou/app/i/getSongInfo.php',{
            params:{
                cmd:'playInfo',
                hash,
                from:'mkugou'
            }
        }).then( res =>{
            console.log(res.data)
            this.setState({info:res.data})
        } )
    }

    componentWillMount () {
        this.getSongInfo(this.props.hash)
    }
   
    render () {

       let {position = 'bottom',changIndex} = this.props
       let {info,play} = this.state
       let style = {};style[position] = 0;

       let imgUrl = info.imgUrl?info.imgUrl.replace('{size}','200'):''
        return (
            <div style={style} className="small-player">
              <Link to="/detail" className="todetail left">
                <div className="img-box">
                    <img src={imgUrl} alt=""/>
                </div>
                <div className="info">
                    <p className="song-name">{info.songName}</p>
                    <p className="singer-name">{info.singerName}</p>
                </div>
              </Link>
              <div className="right">
                 <span><i onClick={this.playAndPause}  className={"fa fa-"+(play?'pause':'play')}></i></span>
                 <span><i onClick={changIndex} className="fa fa-step-forward"></i></span>
              </div>
            </div>
        )
    }

    playAndPause () {
        this.setState(prev => {
            return {play:!prev.play}
        })
    }
}


export default SmallPlayer