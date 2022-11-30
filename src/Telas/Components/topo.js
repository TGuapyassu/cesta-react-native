import { Image, StyleSheet, Text, Dimensions } from 'react-native';
import topo from '../../../assets/topo.png';

const width = Dimensions.get('screen').width;

const Topo = ( { titulo } ) => {
    return (
        <>
            <Image style={estilos.topo} source={topo} />
            <Text style={estilos.titulo}>{ titulo }</Text>
        </>
    )
}

const estilos = StyleSheet.create ({
    topo: {
        width: '100%',
        height: 578 / 768 * width
    },
    titulo: {
        width: '100%',
        color: '#fff',
        textAlign: 'center',
        position: 'absolute',
        fontSize: 16,
        lineHeight: 26,
        fontWeight: 'bold',
        padding: 16
    }
})

export default Topo