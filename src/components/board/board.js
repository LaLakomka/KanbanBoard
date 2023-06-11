import css from './board.module.scss';
import { Column } from "./column/column";
import { useTasks } from "../../hooks/tasks/use-tasks";


export const Board = () => {
    const {states} = useTasks();
    return (
        <div className={css.board}>
            {states.map
                (
                (state) =>
                    <Column key={state.id} name={state.name} state={state.state}/>
            )
            }
        </div>
    )
}