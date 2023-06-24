import { useParams } from "react-router-dom"
import StepWrapper from "../features/StepWrapper"
import GeoData from "./Auth/GeoData"
import PersonalData from "./Auth/PersonalData"
import MainData from "./Auth/MainData"
import { useTranslation } from 'react-i18next';


const Register = () => {
    const {step} = useParams()
    const {t} = useTranslation()

    return (
        <StepWrapper activeStep={+step} steps={[t('main-information'), t('client-information'), t('geo-information')]}>
            {+step === 1 && <MainData/>}
            {+step === 2 && <PersonalData/>}
            {+step === 3 && <GeoData/>}
        </StepWrapper>
    )
}

export default Register