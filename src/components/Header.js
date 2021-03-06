// import React from 'react'
// import { View, Text } from 'react-native'

// const styles = {
//     viewStyle: {
//       backgroundColor: '#F8F8F8',
//       justifyContent: 'center',
//       alignItems: 'center',
//       height: 60,
//       shadowColor: '#000',
//       shadowOffset: { width: 0, height: 2 },
//       shadowOpacity: 0.2,
//       elevation: 2,
//       position: 'relative'
//     },
//     textStyle: {
//       fontSize: 25
//     }
// }

// const Header = (props) => {
//     const {textStyle, viewStyle} = styles;
//     return (
//         <View style={viewStyle} >
//             <Text style={textStyle}>{ props.headerText}</Text>
//         </View>
//     )
// }

// export default Header

import React from 'react';
import { View, Text } from 'react-native';

const styles = {
    viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
    },
    textStyle: {
    fontSize: 25
    }
};

// const Header = () => {
//     const { textStyle, viewStyle } = styles;
//     return (
//     <View style={viewStyle}>
//         <Text style={textStyle}>Albums</Text>
//     </View>
//     );
// };

const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
    <View style={viewStyle}>
        <Text style={textStyle}>{ props.headerText }</Text>
    </View>
    );
};

export default Header;