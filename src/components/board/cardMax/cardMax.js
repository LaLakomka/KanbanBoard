import css from './cardMax.module.scss';
import {useParams, useNavigate} from 'react-router-dom';
import {Button} from "../../shared/button/button";
import {IconCross} from "../../shared/icons/IconCross";
import {useTasks} from "../../../hooks/tasks/use-tasks";
import {useEffect, useState} from "react";


export const CardMax = () => {
    const navigate = useNavigate();
    const {getTaskById, updateTask} = useTasks();
    const {cardId} = useParams();
    const [task, setTask] = useState();

    useEffect(() => {
        if (cardId) {
            setTask(getTaskById(cardId))
        }
    }, [cardId])

    const navigateBack = () => navigate(-1);

    return (
        <div className={css.card}>
            {task &&
            <div  className={css.body}>
                <textarea className={css.name}
                          value={task.name}
                          onChange={(e) =>
                              setTask({
                                  ...task,
                                  name: e.target.value
                              })}
                />
                <textarea className={css.description}
                          onChange={(e) =>
                              setTask({
                                  ...task,
                                  description: e.target.value
                              })}
                          value={task.description}

                />
            </div>
            }
            <Button className={css['button-close']} onClick={navigateBack}>
                <IconCross/>
            </Button>
            <div className={css.footer}>
                <button onClick={() => {
                    updateTask(task);
                    navigateBack();
                }}>Save Card</button>
            </div>
        </div>
    )
}