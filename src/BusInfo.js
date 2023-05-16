import { View, Text } from 'react-native';
import AlramButton from './AlramButton';
import BookmarkButton from './BookmarkButton';
import { COLOR } from './color';
import NextBusinfo from './NextBusinfo';

export default ({

    isBookmarked,
    onPress,
    num,
    numColor,
    directionDescription,
    processedNextBusInfos,

}) => {
    return (
        <View style={{ flexDirection: "row", height: 75, backgroundColor: "#FFF" }}>
            <View style ={{ flex: 1, flexDirection: "row", alignItems: "center"}}>
                <BookmarkButton
                    size={20} 
                    isBookmarked={isBookmarked}
                    onPress={onPress}
                    style={{ paddingHorizontal: 10 }}
                />
                
                <View style={{ flex: 1}}>
                    <Text style={{ color: numColor, fontSize: 20 }}>{num}</Text>
                    <Text style={{ fontSize: 13, color: COLOR.GRAY_3 }}>{directionDescription} 방향</Text>
                </View>
            </View>
            <View style ={{ flex: 1, flexDirection: "row", alignItems: "center"}}>
                
                <View style={{flex: 1}}>
                {processedNextBusInfos.map((info, index) => (
                    <NextBusinfo
                        key={`next-bus-info-${index}`}
                        hasInfo={info.hasInfo}
                        remainedTimeText={info.remainedTimeText}
                        numOfRemainedStops={info.numOfRemainedStops}
                        seatStatusText={info.seatStatusText}
                    />
                ))}
                    
                </View>
                
                <AlramButton onPress={() => {}} style={{ paddingHorizontal: 15 }} />
            </View>
        </View>
    );
}