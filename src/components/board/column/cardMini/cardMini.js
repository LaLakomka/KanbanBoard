import css from './cardMini.module.scss';
import {IconCross} from "../../../shared/icons/IconCross";
import { Button } from "../../../shared/button/button"
import {useNavigate} from "react-router-dom";

export const CardMini = (props) => {
    
    const navigate = useNavigate();
   
    return (            
        <div className={css.cardMini} onClick={() => navigate(`/tasks/${props.id}`)}>
            <span>{props.name} </span>
            <Button className={css['button-remove']} onClick={
                (e) =>
                {
                    props.onRemove(props.id)
                    e.stopPropagation();
                }}>
            <IconCross />
            </Button>
        </div>
    )
}