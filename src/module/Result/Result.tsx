import style from './Result.module.scss';

type Props = {};

export const Result = (props: Props) => {
  return (
    <div className={style.result}>
      <p>25&#8451;</p>
      <p>Калининград</p>
    </div>
  )
};