import React, { useEffect } from 'react'
import AMapLoader from '@amap/amap-jsapi-loader';

const JBSMap = props => {

    useEffect(() => {
        initMap()
    }, [])

    const initMap = () => {
        AMapLoader.load({
            "key": "95065ba531f10772260db34e27b35866",// 申请好的Web端开发者Key，首次调用 load 时必填
            "version": "1.4.15",   // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
            "plugins": ['AMap.Geolocation'],           // 需要使用的的插件列表，如比例尺'AMap.Scale'等
            "AMapUI": {             // 是否加载 AMapUI，缺省不加载
                "version": '1.1',   // AMapUI 缺省 1.1
                "plugins":[],       // 需要加载的 AMapUI ui插件
            },
            "Loca":{                // 是否加载 Loca， 缺省不加载
                "version": '1.3.2'  // Loca 版本，缺省 1.3.2
            },
        }).then((AMap)=>{
            var map = new AMap.Map('container', {
                viewMode: '2D',
                pitch: 50,
                mapStyle: 'amap://styles/whitesmoke',
                zoom: 13,
                center: [116.418261, 39.921984]
            });


            var geolocation = new AMap.Geolocation({
                // 是否使用高精度定位，默认：true
                enableHighAccuracy: true,
                // 设置定位超时时间，默认：无穷大
                timeout: 10000,
                // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
                buttonOffset: new AMap.Pixel(10, 20),
                //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
                zoomToAccuracy: true,     
                //  定位按钮的排放位置,  RB表示右下
                buttonPosition: 'RB'
              })
              map.addControl(geolocation);
              geolocation.getCurrentPosition(function(status,result){
                    if(status=='complete'){
                        console.log(result)
                        // onComplete(result)
                    }else{
                        console.log(result)
                        // onError(result)
                    }
              });
        }).catch(e => {
            console.log(e);
        })
    }

    return (
        <div id="container" style ={{width:"100%",height:"100%"}}></div>
    )
}

export default JBSMap