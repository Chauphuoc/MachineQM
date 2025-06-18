import { View, Text,StyleSheet, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors';
import CommonStyles from '../../constants/CommonStyles';
import LinearGradient from 'react-native-linear-gradient';
import { AppIcon } from '../../assets';

interface Props {
  title: string;
  gradient?: boolean; //header có gradient hay ko
  hideBack?: boolean; // Ẩn nút trở về
  onBack?: () => void; // override go back func
  search?: () => void;
  hideSearch?: boolean
}

const Header = (props : Props) => {
    const {title,gradient,hideBack,onBack,search,hideSearch} = props
    return (
        <LinearGradient
      colors={gradient ? [Colors.B400, Colors.B400] : [Colors.N0, Colors.N0]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={styles.header}>
      {!hideBack ? (
        <TouchableOpacity
          onPress={() => {
            onBack ? onBack() : goBack();
          }}
          style={styles.left}>
          <Image
            source={AppIcon.chevron_left}
            style={[
              styles.icon,
              {tintColor: gradient ? Colors.N0 : Colors.N500},
            ]}
          />
        </TouchableOpacity>
      ) : (
        <View style={styles.left}></View>
      )}

      <View style={styles.center}>
        <Text
          style={[
            commonStyles.f18_22_bold,
            {color: gradient ? Colors.N0 : Colors.N700},
          ]}
          numberOfLines={1}
          ellipsizeMode="tail">
          {title}
        </Text>
      </View>

      
      {
        !hideSearch && (
          <TouchableOpacity
            onPress={() => {search}}
            style={styles.right}>
            <Image
              source={AppIcon.search}
              style={[
                {height: sizeHeight(23), width: sizeHeight(23), bottom: sizeHeight(8),tintColor: Colors.N0},
                {tintColor: gradient ? Colors.N0 : Colors.N500},
              ]}
            />
          </TouchableOpacity>
        )
      }

      <View style={styles.right}></View>

      {!gradient && (
        <View style={{position: 'absolute', bottom: 0}}>
          <Spacing
            height={sizeHeight(1)}
            width={sizeWidth(500)}
            bg={Colors.N200}
          />
        </View>
      )}
    </LinearGradient>
    )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.mainColor,
    flexDirection: 'row',
    height: 80,
    paddingHorizontal:16,
    alignItems: 'flex-end',
    // justifyContent: 'space-around'
  },
  headerConfirm: {
    backgroundColor: Colors.N0,
    flexDirection: 'row',
    height: 80,
    paddingHorizontal:16,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: Colors.N100,
    paddingBottom: 10,
  },
  left: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
  },
  center: {
    paddingBottom: 13,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal:12,
  },
  right: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
  },

  icon: {
    height: 32,
    width: 32,
    bottom: 3,
    tintColor: Colors.N0,
  },

  badge: {
    width: 8,
    height: 8,
    backgroundColor: Colors.R500,
    borderRadius: 100,
  },
  badgeRound: {
    position: 'absolute',
    width: 11,
    height: 11,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.N100,
    borderRadius: 100,
    top: -8,
    right: -2
  },
  confirmText: {
    ...CommonStyles.f14_h17_bold,
    color: Colors.B500,
  },
});



export default Header