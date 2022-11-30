import { StyleSheet, View, FlatList, Text } from 'react-native';
import Detalhes from './Components/detalhes';
import Item from './Components/item';
import Topo from './Components/topo';

const Cesta = ({ topo, detalhes, itens }) => {
    return (
        <>
            <FlatList
                data={itens.lista}
                renderItem={Item}
                keyExtractor={({ nome }) => nome}
                ListHeaderComponent={() => {
                    return (
                        <>
                            <Topo {...topo} />
                            <View style={estilos.cesta}>
                                <Detalhes {...detalhes} />
                                <Text style={estilos.titulo}>{itens.titulo}</Text>
                            </View>
                        </>
                    )
                }}
            />
        </>
    )
};

const estilos = StyleSheet.create({
    titulo: {
        color: '#464646',
        fontWeight: 'bold',
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32
    },
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    }
})

export default Cesta;
