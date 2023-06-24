import { Button, ButtonGroup } from "@mui/material"
import { useTranslation } from 'react-i18next';

const LanguageChanger = () => {
    const {i18n: {changeLanguage}} = useTranslation()

    return (
        <ButtonGroup color="inherit">
            <Button color='inherit' onClick={() => changeLanguage('en')}>EN</Button>
            <Button color='inherit' onClick={() => changeLanguage('ru')}>РУС</Button>
        </ButtonGroup>
    )
}

export default LanguageChanger