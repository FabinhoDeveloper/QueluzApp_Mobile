import { createStackNavigator } from '@react-navigation/stack';

import ServicesNavigation from '../screens/ServicesNavigation';
import HealthServices from '../screens/HealthServices';
import EducationServices from '../screens/EducationServices';
import AdministrationServices from '../screens/AdministrationServices';
import WorksServices from '../screens/WorksServices';
import EnvironmentServices from '../screens/EnvironmentServices';
import EconomicDevelopmentServices from '../screens/EconomicDevelopmentServices';
import ComunicationServices from '../screens/ComunicationServices';
import SocialAssistanceServices from '../screens/SocialAssistanceServices';
import CultureServices from '../screens/CultureServices';
import TripMainPage from '../screens/TripMainPage';
import TripForm from '../screens/TripForm';
import TripReview from '../screens/TripReview';
import TripSuccess from '../screens/TripSuccess';
import OuvidoriaForm from '../screens/OuvidoriaForm';
import ConsultationMainPage from '../screens/ConsultationMainPage';
import ConsultationForm from '../screens/ConsultationForm';
import ConsultationReview from '../screens/ConsultationReview';
import ConsultationSuccess from '../screens/ConsultationSuccess'

const Stack = createStackNavigator();

export default function ServicesStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="ServicesNavigation">
        <Stack.Screen name="ServicesNavigation" component={ServicesNavigation} />
        <Stack.Screen name="HealthServices" component={HealthServices}/>
        <Stack.Screen name="EducationServices" component={EducationServices}/>
        <Stack.Screen name="AdministrationServices" component={AdministrationServices}/>
        <Stack.Screen name="WorksServices" component={WorksServices}/>
        <Stack.Screen name="EnvironmentServices" component={EnvironmentServices}/>
        <Stack.Screen name="EconomicDevelopmentServices" component={EconomicDevelopmentServices}/>                
        <Stack.Screen name="ComunicationServices" component={ComunicationServices}/>
        <Stack.Screen name="CultureServices" component={CultureServices}/>
        <Stack.Screen name="SocialAssistanceServices" component={SocialAssistanceServices}/>
        <Stack.Screen name="TripMainPage" component={TripMainPage}/>
        <Stack.Screen name="TripForm" component={TripForm}/>
        <Stack.Screen name="TripReview" component={TripReview}/>
        <Stack.Screen name="TripSuccess" component={TripSuccess}/>
        <Stack.Screen name='OuvidoriaForm' component={OuvidoriaForm}/>
        <Stack.Screen name="ConsultationMainPage" component={ConsultationMainPage} />
        <Stack.Screen name="ConsultationForm" component={ConsultationForm} />
        <Stack.Screen name="ConsultationReview" component={ConsultationReview} />
        <Stack.Screen name="ConsultationSuccess" component={ConsultationSuccess} />
    </Stack.Navigator>
  );
}
