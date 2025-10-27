import { useEffect, useState } from "react"
import styles from "./Love.module.css"

const Love = () => {

  const inicio = new Date("2024-11-03")

  const [tempoJuntos, setTempoJuntos] = useState({
    anos: 0,
    meses: 0,
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0
  })


  const calcularTempoJuntos = () => {
    const agora = new Date()

    let anos = agora.getFullYear() - inicio.getFullYear()
    let meses = agora.getMonth() - inicio.getMonth()
    let dias = agora.getDate() - inicio.getDate()
    let horas = agora.getHours() - inicio.getHours()
    let minutos = agora.getMinutes() - inicio.getMinutes()
    let segundos = agora.getSeconds() - inicio.getSeconds()

    // Ajustes de negativos
    if (segundos < 0) {
      segundos += 60
      minutos--
    }

    if (minutos < 0) {
      minutos += 60
      horas--
    }

    if (horas < 0) {
      horas += 24
      dias--
    }

    if (dias < 0) {
      meses--
      const ultimoDiaMesAnterior = new Date(agora.getFullYear(), agora.getMonth(), 0)
      dias += ultimoDiaMesAnterior.getDate()
    }

    if (meses < 0) {
      anos--
      meses += 12
    }

    setTempoJuntos({ anos, meses, dias, horas, minutos, segundos })
  }

  useEffect(() => {
    calcularTempoJuntos()
    const timer = setInterval(calcularTempoJuntos, 1000) // atualiza a cada segundo
    return () => clearInterval(timer)
  })

  return (
    <nav className={styles.shapeCard} >
      <h1>Nosso Amor</h1>
      <ul className={styles.display}>
        <ul className={styles.timer}>
          <li>Anos: {tempoJuntos.anos} </li>
          <li>Meses: {tempoJuntos.meses} </li>
          <li>Dias: {tempoJuntos.dias} </li>
        </ul>
        <ul className={styles.timer}>
          <li>Horas: {tempoJuntos.horas} </li>
          <li>Minutos: {tempoJuntos.minutos} </li>
          <li>Segundos: {tempoJuntos.segundos} </li>
        </ul>
      </ul>
      <div className={styles.Photo}>
        <h1>08/12/2024</h1>
        <img src="/images/casamento.jpg" className={styles.img} />
        <p>Nesse dia postamos nossa primeira foto juntos no insta, nos assumindo para o mundo, ainda receosos sobre o futuro, mas graças a Deus tudo deu certo</p>
      </div>
      <div className={styles.Photo}>
        <h1>29/12/2024</h1>
        <img src="/images/rio.jpg" className={styles.img} />
        <p>Por muito tempo essa foi minha foto favorita nossa, foi a primeira foto que a gente pareceu mais casados que namorados</p>
      </div>
      <div className={styles.Photo} >
        <h1>31/12/2024</h1>
        <img src="images/anonovo.jpeg" className={styles.img} />
        <p>Nossa primeira virada de ano juntos, deixando um ano tão conturbado para trás e começando um novo ciclo, esse Pedro Antônio e essa Monalysa nem imaginavam o que nos tornaríamos</p>
      </div>
      <div className={styles.Photo} >
        <h1>01/02/2025</h1>
        <img src="images/motofest.jpeg" className={styles.img} />
        <p>Nossa fotinha no motofest, a primeira foto que você postou e eu repostei, lembro de você ter matutado muito sobre qual musica botar</p>
      </div>
      <div className={styles.Photo} >
        <h1>22/02/2025</h1>
        <img src="images/aniversario.jpeg" className={styles.img} />
        <p>primeira vez que me vesti mais social porque queria parecer mais homem aos seus olhos, o primeiro Efeito Namorada em mim foi esse aniversario</p>
      </div>
      <div className={styles.Photo} >
        <h1>16/03/2025</h1>
        <img src="images/shopping.jpeg" className={styles.img} />
        <p>Primeira vez que a gente foi pro shopping juntos, foi muito legal correr de kart enquanto você me assistia, é muito legal fazer algo e ficar me amostranndo igual criança para você</p>
      </div>
      <div className={styles.Photo} >
        <h1>02/06/2025</h1>
        <img src="images/coracao.jpeg" className={styles.img} />
        <p>Esse foi o primeiro dia que a gente foi ver o movimento de São João na rua, nesse dia eu vi que os próximos São Joãos da  minha vida seriam muito mais divertidos, porque tenho você ao meu lado</p>
      </div>
      <div className={styles.Photo} >
        <h1>08/06/2025</h1>
        <img src="images/casinhas.jpeg" className={styles.img} />
        <p>A fotinha do porta retrato, eu amo tanto os portas retratos que você me deu, todo dia eu posso olhar para nossas fotos neles e ver o quanto minha vida é mais colorida e feliz com você</p>
      </div>
    </nav>
  )
}

export default Love