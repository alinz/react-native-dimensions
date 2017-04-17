import { Dimensions, PixelRatio, Platform } from 'react-native'

const deviceWindow = Dimensions.get('window')

// window is an enhanced version which brings information about visible width and height

const window = {
  width: deviceWindow.width,
  height: deviceWindow.height,
  scale: deviceWindow.scale,
  fontScale: PixelRatio.getFontScale(),
  softMenuHeight: 0
}

if (Platform.OS === 'android') {
  window.softMenuHeight = (Dimensions.get('screen').height - window.height) / window.scale
  window.height -= window.softMenuHeight
}

export { window }
