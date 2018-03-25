

import React,{Component} from 'react'
import axios from 'axios'
import './index.scss'
import SmallPlayer from '../../common/SmallPlayer'

let SongItem = (props) => {
    let {onClick} = props
    let {filename} = props.data

    return (

        <li onClick={onClick} className="song-item">
            {filename}
        </li>

    )
}

class Home extends Component {


    constructor (props) {
        super(props)

        this.state = {
            songs:[],
            isPlayerShow:false,
            hash:null
        }

        this.index = 0

        this.changIndex = this.changIndex.bind(this)
    }


    getSongs () {
        axios.get('/kugou/?json=true').then( res => {
            console.log(res.data)
            this.setState({songs:res.data.data})
        } )
    }

    componentWillMount () {
        this.getSongs()
        this.setState({isPlayerShow:false})
    }

    changIndex () {
        this.index++;
        if(this.index>this.state.songs.length-1){
            this.index = 0
        }

        this.setState({
            hash:this.state.songs[this.index].hash
        })

    }

    play (hash,i) {
        this.index = i
        this.setState({
            isPlayerShow:true,
            hash
        })
    }
   
    render () {
        let {songs,isPlayerShow,hash} = this.state
        return (
            <div className="main-box home">
               <ul>
                   {
                       songs.map((item,i)=><SongItem  onClick={this.play.bind(this,item.hash,i)} key={item.audio_id} data={item} />)
                   }
               </ul>
               {
                   isPlayerShow?<SmallPlayer changIndex={this.changIndex} hash={hash} />:''
               }
                
            </div>
        )
    }
}


export default Home