import path from 'path';

const {TouchBar, nativeImage} = require('electron');

const {TouchBarButton, TouchBarSpacer, TouchBarPopover, TouchBarSlider, TouchBarLabel} = TouchBar;

const widthLabel = new TouchBarLabel({
  label: '512px'
});
const updateWidth = newValue => {
  console.log(newValue);
  console.log(`widthLabel : ${widthLabel.label}`);
  widthLabel.label = `${newValue}px`;
};

const widthSlider = new TouchBarSlider({
  label: 'width',
  value: 512,
  minValue: 0,
  maxValue: 1600,
  change: newValue => {
    updateWidth(newValue);
  }
});
const heightLabel = new TouchBarLabel({
  label: '512px'
});
const updateHeight = newValue => {
  console.log(`heightLabel : ${heightLabel.label}`);
  heightLabel.label = `${newValue}px`;
};
const heightSlider = new TouchBarSlider({
  label: 'height',
  value: 900,
  minValue: 0,
  maxValue: 900,
  change: newValue => {
    updateHeight(newValue);
  }
});
let gif = null;
let mp4 = null;
let webm = null;
const updateSelectedFormat = selectetFormat => {
  gif.backgroundColor = '#2D2D2D';
  webm.backgroundColor = '#2D2D2D';
  mp4.backgroundColor = '#2D2D2D';
  console.log(selectetFormat);
  switch (selectetFormat) {
    case 'mp4':
      mp4.backgroundColor = '#3B99FC';
      break;
    case 'webm':
      webm.backgroundColor = '#3B99FC';
      break;
    case 'gif':
      gif.backgroundColor = '#3B99FC';
      break;
    default:
      return;
  }
};

// gif button
gif = new TouchBarButton({
  label: '🎬 GIF',
  backgroundColor: '#2D2D2D',
  click: () => {
    updateSelectedFormat('gif');
  }
});
// webm button
webm = new TouchBarButton({
  label: '🎬 WEBM',
  backgroundColor: '#2D2D2D',
  click: () => {
    updateSelectedFormat('webm');
  }
});

// mp4 button
mp4 = new TouchBarButton({
  label: '🎬 MP4',
  backgroundColor: '#2D2D2D',
  click: () => {
    updateSelectedFormat('mp4');
  }
});

// Mic button
const mic = new TouchBarButton({
  label: '🎤 Mic On',
  backgroundColor: '#2D2D2D',
  click: () => {
    console.log('Mic Button clicked');
  }
});
// record button
const crop = new TouchBarPopover({
  label: 'Crop',
  icon: nativeImage.createFromPath(path.join(__dirname, '..', '..', 'static', 'cropIcon.png')),
  items: [widthSlider, widthLabel, heightSlider, heightLabel]
});

const touchBar = new TouchBar([
  crop,
  new TouchBarSpacer({size: 'small'}),
  mic,
  new TouchBarSpacer({size: 'small'}),
  gif,
  webm,
  mp4
]);

export default touchBar;
