export default function Container() {

  return (
    <div>
      <h1>Utiliser des évènements</h1>
      {/* On peut ajouter un évènement directement dans le JSX avec une fonction anonyme, mais ce n'est pas pratique s'il y a beaucoup de code */}

      {/* Mauvaise pratique, peu maintenable */}


      {/* On lui préfère en général ceci */}


      {/* Attention, si on veut passer un argument, il faut obligatoirement utiliser une fonction anonyme */}


      {/* Si on veut l'objet d'évènement ET passer un ou des arguments, on code ceci */}

    </div>
  )
}
