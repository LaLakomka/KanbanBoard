
import css from "./column.module.scss";
import {CardMini} from "./cardMini/cardMini";
import Scrollbars from "react-custom-scrollbars-2";
import { useState } from "react";
import { useTasks } from "../../../hooks/tasks/use-tasks";
import { useLayout } from "../../../hooks/layout/use-layout";
import { IconPlus } from "../../shared/icons/IconPlus";


export const Column = (props) => {
    const [isNewTaskInputShown, setIsNewTaskInputShown] = useState(false);
    const [inputCardName, setInputCardName] = useState();

    const [isNewTaskSelectShown, setIsNewTaskSelectShown] = useState(false);
    const [selectedTaskId, setSelectedTaskId] = useState(undefined);

    const {mainContentHeight} = useLayout();

    const {getTasksByState, getTasksByExcludedState, addTask, moveTask, removeTask } = useTasks();

    const tasks = getTasksByState(props.state);
    const hasTasks = tasks.length > 0;

    const onInputCard = (e) => {
        setInputCardName(e.target.value);
    }

    return (
        <div className={css.column}>
            <div className={css.header}>{props.name}</div>
            <div className={css.wrapper}>
                <div className={css.body}>

                    {hasTasks &&
                    <Scrollbars  autoHeightMax={450} autoHide autoHeight>
                        {
                            tasks.map((task) =>
                                <CardMini key={task.id} id={task.id} name={task.name} onRemove={(id) => {
                                    removeTask(id);
                                }
                                }/>)
                        }
                    </Scrollbars>
                    }

                    {isNewTaskInputShown &&
                    <form>
                        <input сlassName={css.input} onInput={onInputCard} tipe = "text" placeholder = "Введите название задачи"/>
                    </form>
                    }

                    {isNewTaskSelectShown &&
                    <select className={css.selectTask} onChange={(e) =>
                        setSelectedTaskId(e.target.value)}
                    >
                        <option ></option>
                        {getTasksByExcludedState(props.state).map((task) =>
                            <option key={task.id} value={task.id}>{task.name}</option>
                        )}
                    </select>
                    }
                </div>
                <div className={css.footer}>
                    {(!isNewTaskInputShown && !isNewTaskSelectShown) &&
                    <button  className={css.button} onClick={() => props.state === 'backlog'
                        ? setIsNewTaskInputShown(true)
                        : setIsNewTaskSelectShown(true)}
                    ><IconPlus/>Add card</button>
                    }

                    {(isNewTaskInputShown || isNewTaskSelectShown) &&
                    <button className={css.buttonSubmit} onClick={() => {

                        if (props.state === 'backlog') {
                            setIsNewTaskInputShown(false);
                            addTask(inputCardName);
                            setInputCardName(undefined);
                        } else {
                            setIsNewTaskSelectShown(false);
                            moveTask(selectedTaskId, props.state);
                        }
                    }}
                    >Submit</button>
                    }
                </div>
            </div>
        </div>
    )
}