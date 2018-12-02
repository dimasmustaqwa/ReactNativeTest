import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  containerCalendar: {
    backgroundColor: '#1F0808',
  },
  headerCalendar: {
    height: 60,
    width: '100%',
    color: '#999999',
    paddingHorizontal: 15,
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
    backgroundColor: 'white'
  },
  textCalendar: {
    fontFamily: 'roboto-regular',
    fontSize: 18,
    flex: 1,
    marginBottom: 5,
  },
  containerListCalendar: {
    width: '100%',
    marginTop: 15,
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: 'white',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  imageListCalendar: {
    width: 100,
    height: 100,
    marginRight: 15,
    borderRadius: 5,
  },
  image: {
    borderRadius: 5,
  },
  rowWithImage: {
    flexDirection: 'row',
    alignItems: 'center'
  },
})
