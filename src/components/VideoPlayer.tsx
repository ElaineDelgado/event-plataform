import { DefaultUi, Player, Youtube } from "@vime/react"
import { CaretRight, DiscordLogo, FileArrowDown, Lightning } from "phosphor-react"
import '@vime/core/themes/default.css'
import { useGetLessonBySlugQuery } from "../graphql/generated"
interface VideoProps {
  lessonsSlug: string
}

export  const VideoPlayer = (props: VideoProps) => {
  const {data} = useGetLessonBySlugQuery({
    variables: {
      slug: props.lessonsSlug
    }
  })
  
  if(!data || !data.lesson) {
    return (
      <div className="flex-1">
        <p>Carregando...</p>
      </div>
    )
  }

  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-h-[60vh] max-w-[990px] aspect-video">
          <Player>
            <Youtube videoId={data.lesson.videoId} key={data.lesson.videoId}/>
            <DefaultUi/>
          </Player>
        </div>
      </div>
      <div className="p-8 max-w-[1100px] mx-auto">
          <div className="flex items-start gap-16">
            <div className="flex-1">
              <h1 className="text-2xl font-bold">{data.lesson.title}</h1>
              <p className="text-green-200 mt-4 leading-relaxed">
                {data.lesson.description}
              </p>

              {data.lesson.teacher && (
                <div className="flex items-center gap-4 mt-6">
                <img 
                className="h-16 w-16 rounded-full border-2 border-blue-500"
                src={data.lesson.teacher.avatarURL} 
                alt="Elaine Delgado" />
                <div className="leading-relaxed">
                  <strong className="font-bold text-2xl block">
                    {data.lesson.teacher.name}
                  </strong>
                  <span className="text-gray-200 text-sm block">
                    {data.lesson.teacher.bio}
                  </span>
                </div>
              </div>
              )}

            </div>
            <div className="flex flex-col gap-4">
              <a href="#" className="p-4 bg-green-500 text-sm flex items-center justify-center font-bold rounded gap-2 uppercase hover:bg-green-700 transition-colors">
                <DiscordLogo size={24} />
                Comunidade Discord
              </a>
              <a href="#" className="p-4 border border-blue-500 text-blue-500 text-sm flex items-center justify-center font-bold rounded gap-2 uppercase hover:bg-blue-500 hover:text-gray-900 transition-colors">
                <Lightning size={24} />
                Acesse o Desafio
              </a>
            </div>
          </div>

          <div className="gap-8 mt-20 grid grid-cols-2">

            <a href="#" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
                <div className="bg-green-700 h-full p-6 flex items-center">
                  <FileArrowDown size={40} />
                </div>
                <div className="py-6 leading-relaxing">
                  <strong  className="text-2xl">
                    Material Complementar
                    <p className="text-sm text-gray-200 mt-2">
                      Acesse o amterial complementar para acelerar o seu desenvolvimento.
                    </p>
                  </strong>
                </div>
                <div className="h-full p-6 flex items-center">
                  <CaretRight size={24} />
                </div>
            </a>

            <a href="#" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
                <div className="bg-green-700 h-full p-6 flex items-center">
                  <FileArrowDown size={40} />
                </div>
                <div className="py-6 leading-relaxing">
                  <strong  className="text-2xl">
                    Wallpapers exclusivos
                    <p className="text-sm text-gray-200 mt-2">
                      Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina.
                    </p>
                  </strong>
                </div>
                <div className="h-full p-6 flex items-center">
                  <CaretRight size={24} />
                </div>
            </a>
            
          </div>
      </div>
    </div>
  )
}