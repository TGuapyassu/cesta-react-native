import { Image, Text, View, StyleSheet } from "react-native"

const Item = ({ item: { nome, imagem } }) => {

    return(
        <View key={nome} style={estilos.item}>
            <Image style={estilos.imagem} source={imagem} />
            <Text style={estilos.nome} > {nome} </Text>
        </View>
    )
}

const estilos = StyleSheet.create({
    item: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ECECEC',
        paddingVertical: 16,
        marginHorizontal: 16,
        alignItems: 'center'
    },
    imagem: {
        width: 46,
        height: 46
    },
    nome: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: '#464646'
    }
})

export default Item