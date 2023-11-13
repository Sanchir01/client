import style from '@/styles/desctop/About.module.scss'
import { FC } from 'react'

export interface ITextProps {
	title: string
	desc: string
}

const Text: FC<ITextProps> = ({ title, desc }) => {
	return (
		<>
			<div className={style.about__text}>
				<div className={style.about__text__left}>
					<div className={style.about__text__left__descr}>{title}</div>
				</div>
				<div className={style.about__text__right}>
					<p className={style.about__text__right__content}>{desc}</p>
				</div>
			</div>
		</>
	)
}

export default Text
