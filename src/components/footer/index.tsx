import css from './index.module.css'

export const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <span>Ylab</span>
        <a href="https://github.com/Ernian/YLab-form" target='_blank'>GitHub</a>
      </div>
    </footer>
  )
}