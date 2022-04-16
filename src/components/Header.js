import {StyleSheet, View, Pressable, Text} from 'react-native'

const Header = ({
  title="Título",
  left,
  right,
  onLeft=() => alert('Esquerda'),
  onRight=() => alert('Direita'),
}) => {
  return (
    <View style={styles.topBar}>
      {left && (
        <Pressable 
          onPress={onLeft}
          style={({pressed}) => [styles.filterButton, { borderRightWidth: 1, backgroundColor: pressed ? '#2B529D' : '#3E67B1'}]}
          >
          <Text style={styles.filterButtonText}>{left}</Text>
        </Pressable>
      )}
      <Text style={styles.title}>{title}</Text>
      {right && (
        <Pressable 
          onPress={onRight}
          style={({pressed}) => [styles.filterButton, { borderLeftWidth: 1, backgroundColor: pressed ? '#2B529D' : '#3E67B1'}]}
          >
          <Text style={styles.filterButtonText}>{right}</Text>
        </Pressable>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#2B529D',
    height: 90,
    paddingTop: 30,
  },
  title: {
    flex:1,
    fontSize: 20,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  filterButton: {
    height: 20,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  filterButtonText: {
    fontSize: 16,
    paddingHorizontal: 20,
    color: '#fff',
  },
})

export default Header