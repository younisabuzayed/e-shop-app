import React from 'react'
import { View, Text, Image } from 'react-native'
import Swiper from 'react-native-swiper';
import styles from './styles';
const images = [
    'https://cdn.mos.cms.futurecdn.net/CAZ6JXi6huSuN4QGE627NR-320-80.jpg',
    'https://cdn.mos.cms.futurecdn.net/rLaCmsPH3BP9XnuyifTaCW-970-80.jpeg.webp',
    'https://cdn.mos.cms.futurecdn.net/K9aX36RbvgAG3fFXbdZ5AC-970-80.jpg.webp',
]
const Banner = () => {
    const [bannerData, setBannerData] = React.useState([]);
    React.useEffect(() => {
       setBannerData(images);

       return () =>
       {
           setBannerData([]);
       }
    }, [])
    return (
        <View
          style={styles.container}>
            <View
              style={styles.swiper}>
                <Swiper
                  showsButtons={false}
                  autoplay={true}
                  autoplayTimeout={2} >
                    {bannerData.map( (item, index) =>
                        {
                            return (
                                <Image
                                  style={styles.image}
                                  key={index}
                                  resizeMode="contain"
                                  source={{uri: item}} />
                            )
                        })}
                </Swiper>
            </View>
        </View>
    )
}

export default Banner;
