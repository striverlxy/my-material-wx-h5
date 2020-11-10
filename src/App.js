import React, { useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import BatteryCharging90Icon from '@material-ui/icons/BatteryCharging90';
import GpsFixedIcon from '@material-ui/icons/GpsFixed';
import PersonIcon from '@material-ui/icons/Person';

import { Map, Marker } from 'react-amap';
import { Block } from '@material-ui/icons';

import JBSMap from './map'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
    marginLeft: theme.spacing(5),
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  map: {
    flexGrow: 1,
    width: "100vw",
    height: "100vh"
  },
  backBtn: {
      position: "absolute",
      left: 5,
      top: 5,
      width: 30,
      height: 30,
      borderRadius: '50%',
      background: 'black',
      opacity: 0.5,
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
  },
  chargingBtn: {
    position: "absolute",
    left: '50%',
    transform: 'translate(-50%, 0)',
    bottom: 40,
    width: 110,
    height: 110,
    borderRadius: '50%',
    backgroundImage: 'linear-gradient(to bottom right, #a0df99, #006d00)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gpsBtn: {
    position: "absolute",
    left: '20%',
    transform: 'translate(-50%, 0)',
    bottom: 70,
    width: 40,
    height: 40,
    borderRadius: '50%',
    background: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userBtn: {
    position: "absolute",
    left: '80%',
    transform: 'translate(-50%, 0)',
    bottom: 70,
    width: 40,
    height: 40,
    borderRadius: '50%',
    background: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
}));

const App = () => {
  const classes = useStyles();

  useEffect(() => {
      document.title = '充电桩'
  }, [])

    // let mapOptions = {
    //     city: "北京",
    //     mapCenter:[116.418261, 39.921984],  //城市定位，经纬度定位只能选择1个
    //     mapStyle: 'amap://styles/whitesmoke',
    //     mapZoom: 13, //地图缩放
    //     mapKey: '95065ba531f10772260db34e27b35866',   //你的高德key
    //     status: { //是否支持放大拖拽
    //         zoomEnable: true,
    //         dragEnable: true,
    //     },
    //     mapMaker :[  //marker标记点(list)
    //         {lnglat:[116.401728,39.911984],text:'要显示的内容1'},
    //         {lnglat:[116.436691,39.921984],text:'要显示的内容2'}
    //     ],
    //     plugins:['ToolBar']
    // }

  return (
    <div className={classes.root}>
        <div className={classes.backBtn}>
            <ArrowBackIcon style={{color: 'white'}} />
        </div>
      <div className={classes.map}>
        {/* <Map 
            amapkey={mapOptions.mapKey} 
            city={mapOptions.city} 
            zoom={mapOptions.mapZoom} 
            center={mapOptions.mapCenter} 
            status={mapOptions.status} 
            plugins={mapOptions.plugins} 
        /> */}
        <JBSMap lat={111} />
      </div>
      <div className={classes.gpsBtn}>
          <GpsFixedIcon style={{color: '#006600', fontSize: 30}} />
      </div>
      <div className={classes.chargingBtn}>
        <BatteryCharging90Icon style={{color: 'white', fontSize: 60}} />
      </div>
      <div className={classes.userBtn}>
        <PersonIcon style={{color: '#006600', fontSize: 30}} />
      </div>
    </div>
  );
}

export default App