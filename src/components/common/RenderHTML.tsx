import IframeRenderer, {iframeModel} from '@native-html/iframe-plugin';
import TableRenderer, {tableModel} from '@native-html/table-plugin';
import React from 'react';
import {Linking} from 'react-native';
import RenderHtml, {
  HTMLContentModel,
  HTMLElementModel,
} from 'react-native-render-html';
import WebView from 'react-native-webview';
import Colors from '../../constants/Colors';
import FontFamily from '../../constants/FontFamily';
import {sizeFont, sizeWidth} from '../../helpers/resize';

interface Props {
  html: string;
  color?: string;
  width?: number;
}

const RenderHTML: React.FC<Props> = props => {
  const htmlProps = {
    WebView,
    renderers: {
      table: TableRenderer,
      iframe: IframeRenderer,
    },
    renderersProps: {
      a: {
        onPress: (evt: any, href: any) => {
          Linking.openURL(href);
        },
      },
      table: {
        animationType: 'animated',
        tableStyleSpecs: {
          fontSizePx: sizeWidth(16),
          fitContainerWidth: true,
        },
        displayMode: 'expand',
      },
    },

    computeEmbeddedMaxWidth: (contentWidth: number, tagName: string) => {
      if (tagName === 'table') {
        return sizeWidth(311);
      }
      if (tagName === 'img') {
        return sizeWidth(311);
      }
      return contentWidth;
    },
    tagsStyles: {
      table: {
        flex: 1,
      },
      img: {
        flex: 1,
      },
    },
    customHTMLElementModels: {
      table: tableModel,
      iframe: iframeModel,
      font: HTMLElementModel.fromCustomModel({
        tagName: 'font',
        contentModel: HTMLContentModel.block,
      }),
    },
  };

  const {html, color} = props;
  return (
    <RenderHtml
      systemFonts={['Roboto-Regular', 'Roboto-Bold']}
      source={{html: html}}
      contentWidth={props.width ? sizeWidth(props.width) : sizeWidth(311)}
      baseStyle={{
        fontSize: sizeFont(16),
        fontFamily: FontFamily.RobotoRegular,
        color: color ? color : Colors.N600,
        width: props.width ? sizeWidth(props.width) : sizeWidth(311),
      }}
      defaultWebViewProps={{
        opacity: 0.99,
        androidLayerType: 'software',
      }}
      {...htmlProps}
      ignoredStyles={['height', 'width', 'maxWidth', 'fontFamily']}
    />
  );
};

export default React.memo(RenderHTML);
