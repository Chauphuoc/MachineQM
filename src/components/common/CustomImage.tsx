import React, {useState} from 'react';
import {Image, ImageResizeMode, ImageStyle} from 'react-native';
import {AppImage} from '../../assets';
import {sizeHeight} from '../../helpers/resize';
interface Props {
  source: any;
  style?: ImageStyle | Array<ImageStyle | null>;
  resizeMode?: ImageResizeMode;
  color?: string;
  size?: number;
}
const CustomImage: React.FC<Props> = props => {
  const {size = 24, source, style, resizeMode, color} = props;
  const [image, setimage] = useState(AppImage.default);
  const [error, setError] = useState(false);
  if (error) {
    return (
      <Image
        resizeMode="contain"
        {...props}
        source={image}
        style={[
          {
            height: sizeHeight(size),
            width: sizeHeight(size),
          },
          style,
          {tintColor: color},
        ]}
      />
    );
  } else {
    return (
      <Image
        resizeMode="contain"
        {...props}
        source={source}
        style={[
          {
            height: sizeHeight(size),
            width: sizeHeight(size),
          },
          style,
          {tintColor: color},
        ]}
        onError={(err: any) => {
          setError(true);
        }}
      />
    );
  }
};
export default CustomImage;
