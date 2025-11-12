import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useAuth } from '../contexts/AuthContext';
import { useNavigation } from '@react-navigation/native';

export default function CustomDrawerContent(props) {
    const { user, logout } = useAuth()
    const navigation = useNavigation()

    return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.container}
    >
      {/* Cabeçalho */}
      <View style={styles.header}>
        {user ? (
            <>
            <Text style={styles.userType}>Olá, {user.primeiroNome}</Text>
            <Text style={styles.link}>Navegue pelas opções!</Text>
            </>
        ) : (
            <>
            <Text style={styles.userType}>Olá, Visitante</Text>

            <View style={styles.linkArea}>
                <TouchableOpacity onPress={() => logout()}>
                  <Text style={styles.link}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => logout()}>
                  <Text style={styles.link}>Fazer cadastro</Text>
                </TouchableOpacity>
            </View>
            </>
        )}
        </View>


      {/* Linha divisória */}
        <View style={styles.divider} />
      {/* Lista de opções */}
      <View style={styles.menu}>
        <DrawerItemList {...props} />
      </View>

        { user && 
            <View style={styles.exitArea}>
                <TouchableOpacity style={{ flexDirection: 'row', gap: 5 }} onPress={() => logout()}>
                    <MaterialIcons name="exit-to-app" size={24} color="white" />
                    <Text style={styles.exitLink}>Sair</Text>
                </TouchableOpacity>
            </View>
        }
      
    </DrawerContentScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0C447F',
    paddingTop: 0,
  },
  header: {
    justifyContent: 'center',
    height: '25%',
    backgroundColor: '#0C447F',
    marginHorizontal: 26
  },
  userType: {
    fontSize: 27,
    fontFamily: 'Poppins_700Bold',
    color: '#fff',
    marginBottom: 10,
  },
  link: {
    color: '#FFF',
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
    textDecorationLine: 'underline',
  },
  divider: {
    height: 1,
    backgroundColor: '#1666BC',
    marginBottom: 10,
  },
  menu: {
    flex: 1,
    marginHorizontal: 16,
    backgroundColor: '#0C447F',
  },
  exitArea: {
    marginHorizontal: 16
  },
  exitLink: {
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'Poppins_400Regular',
  },
})
