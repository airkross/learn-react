import CustomReactLink from "../../components/common/custom-react-link";
import InfoBox from "../../components/common/info-box";
import { Variants } from "../../components/common/info-box/constants";

import styles from './styles.module.css'

export default function ErrorPage() {
    return (
        <div className={styles.errorPage}>
            <InfoBox info={['Ууупс!', 'Страница не найдена.']} variants={Variants.DANGER}/>
            <CustomReactLink className={styles.goHome} to={'/'}>
                Перейти на главную
            </CustomReactLink>
        </div>
    );
}