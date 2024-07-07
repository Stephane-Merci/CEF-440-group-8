import React from 'react'
import { View, Text } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native'
import Navbar from './Navbar'

const DestinationDetails = ({distance, duration, startNavigation, cancel}) => {
    return (
        <View style={{ backgroundColor: '#fff', paddingLeft: 20, paddingRight: 20, borderTopLeftRadius: 40, borderTopRightRadius: 40, position: 'absolute', bottom: 0, width: '100%' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30, }}>
                <View style={{ marginTop: 10, }}>
                    <Text style={{ fontSize: 20, fontWeight: '800' }}>University of Buea</Text>
                    <Text style={{ fontSize: 16, fontWeight: '300', color: 'rgba(156, 163, 175, 0.7)' }}>Public University</Text>
                </View>
                <TouchableOpacity onPress={cancel}>
                    <AntDesign name="close" size={32} color="rgba(156, 163, 175, 0.5)" />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', marginTop: 20 }}>
                <Text style={{ fontWeight: '300', color: 'rgba(156, 163, 175, 0.7)', paddingHorizontal: 8 }}>{distance} km</Text>
                <View style={{ flexDirection: 'row', borderColor: '#41B5CF', borderWidth: 1, paddingHorizontal: 8, paddingVertical: 3, borderRadius: 20, alignItems: 'center' }}>
                    <MaterialCommunityIcons name="timer-sand" size={18} color="#41B5CF" />
                    <Text style={{ fontWeight: '300', color: '#41B5CF', marginLeft: 2 }}>{duration} mins</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 30, gap: 15, marginBottom: 100 }}>
                <TouchableOpacity style={{ backgroundColor: '#41B5CF', borderRadius: 20, paddingVertical: 8, alignItems: 'center', flexBasis: '50%', flexDirection: 'row', justifyContent: 'center', gap: 5 }} onPress={startNavigation}>
                    <FontAwesome5 name="car" size={24} color="#ffffff" />
                    <Text style={{ color: '#fff', fontSize: 15, fontWeight: '700' }}>Start Navigation</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ borderColor: '#41B5CF', borderWidth: 1, borderRadius: 20, paddingVertical: 8, alignItems: 'center', flexBasis: '50%', flexDirection: 'row', justifyContent: 'center', gap: 5 }}>
                    <Ionicons name="add-circle-outline" size={28} color="#41B5CF" />
                    <Text style={{ color: '#41B5CF', fontSize: 15, fontWeight: '700' }}>Save Location</Text>
                </TouchableOpacity>
            </View>

            <Navbar Explore={true}/>
        </View>
    )
}

export default DestinationDetails