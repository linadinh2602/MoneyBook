import React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

const FacebookIcon = (props) => (
  <Svg width={30} height={30} viewBox="0 0 30 30" fill="none" {...props}>
    <Circle cx={15} cy={15} r={15} fill="#425AF2" />
    <Path
      d="M13.0823 23.8281V15.9311H10.4225V12.793H13.0823V10.3204C13.0823 7.63403 14.733 6.17188 17.1431 6.17188C18.2979 6.17188 19.2897 6.25809 19.5776 6.29602V9.10309H17.9061C16.5952 9.10309 16.3421 9.72382 16.3421 10.6308V12.793H19.3001L18.8944 15.9311H16.3421V23.8281"
      fill="white"
    />
  </Svg>
);

export default FacebookIcon;
