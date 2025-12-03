"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Clock, Key, Star, Crown, Heart, Sparkles, Moon, Users, Mic, Video, Play, ExternalLink, X } from "lucide-react"

interface Talent {
  name: string
  role: string
  status: string
  debut: string
  description: string
  image: string
  subscribers: string
  specialty: string
  youtube?: string
  tiktok?: string
  twitter?: string
  twitch?: string
  discord?: string
  fullBio?: string
  achievements?: string[]
  schedule?: string
  favoriteGames?: string[]
}

export function CosmicBloomWebsite() {
  const [currentSection, setCurrentSection] = useState("home")
  const [isScrolled, setIsScrolled] = useState(false)
  const [selectedTalent, setSelectedTalent] = useState<Talent | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = ["home", "about", "mascot", "founders", "talent", "news", "audition", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(section)
            break
          }
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (selectedTalent) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [selectedTalent])

  const scrollToSection = (sectionId: string) => {
    setCurrentSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Mensagem enviada! Entraremos em contato em breve através das dimensões cósmicas.")
  }

  const navigationItems = [
    { en: "home", pt: "INÍCIO" },
    { en: "about", pt: "SOBRE" },
    { en: "mascot", pt: "MASCOTE" },
    { en: "founders", pt: "FUNDADORES" },
    { en: "talent", pt: "TALENTOS" },
    { en: "news", pt: "NOTÍCIAS" },
    { en: "audition", pt: "AUDIÇÕES" },
    { en: "contact", pt: "CONTATO" },
  ]

  const founders: Talent[] = [
    {
      name: "Ayla Elara",
      role: "Demônio Morcego",
      status: "Ativa",
      debut: "2025",
      description: "Meta-humana meio morcego, meio demônio, navegando entre dimensões sombrias",
      image: "/ayla-elara.png",
      subscribers: "Em crescimento",
      specialty: "Horror Games & Conteúdo Noturno",
      youtube: "https://youtube.com/@aquelamorcega?si=AVsk77dlfAybouLl",
      tiktok: "https://www.tiktok.com/@ayla.luminna?_t=ZM-8yvqCqIwQaL&_r=1",
      fullBio:
        "Ayla Elara é uma entidade única que habita entre as sombras e a luz. Nascida nas profundezas de uma dimensão esquecida, ela carrega consigo a essência de morcego e demônio, criando uma presença hipnotizante e misteriosa. Sua jornada no mundo digital começou como uma forma de conectar-se com almas que apreciam o lado sombrio da existência.",
      achievements: [
        "Primeira stream com 500+ viewers",
        "Colaboração com criadores de horror",
        "Comunidade dedicada de night owls",
      ],
      schedule: "Streams noturnos: Ter, Qui, Sáb - 22h às 2h",
      favoriteGames: ["Resident Evil Series", "Silent Hill", "Phasmophobia", "Dead by Daylight"],
    },
    {
      name: "Charlotte",
      role: "Gata Coelho",
      status: "Ativa",
      debut: "2024",
      description: "Gata híbrida com coelho, de personalidade curiosa e fofa que adora expressar sua criatividade",
      image: "/charlotte.png",
      subscribers: "Em crescimento",
      specialty: "Desenhos & Artes, Lives de Gameplay",
      youtube: "https://youtube.com/@liriovtuber?si=_9s4HwhYpMs4-Oi0",
      tiktok: "https://www.tiktok.com/@sweet.lirioo?_t=ZM-8yvsGmQd1VN&_r=1",
      twitter: "https://x.com/ShichihaA16227?t=PSiadiw4w9EAiXm6RXfTPA&s=09",
      fullBio:
        "Charlotte é uma criatura mágica nascida da fusão entre a graça felina e a doçura de um coelho. Sua personalidade vibrante e criativa ilumina cada stream, onde ela compartilha sua paixão por arte e jogos. Com orelhas que se movem com suas emoções e uma cauda fofa, Charlotte conquistou corações em todo o universo digital.",
      achievements: [
        "100+ desenhos criados em stream",
        "Comunidade artística engajada",
        "Colaborações com outros artistas VTubers",
      ],
      schedule: "Streams de arte: Seg, Qua, Sex - 19h às 22h",
      favoriteGames: ["Stardew Valley", "Animal Crossing", "Genshin Impact", "Minecraft"],
    },
    {
      name: "Kogitsu",
      role: "Lobo Escritor",
      status: "Ativo",
      debut: "2024",
      description: "Lobo de três caudas que tece histórias tranquilas entre dimensões",
      image: "/kogitsu.png",
      subscribers: "Em crescimento",
      specialty: "Storytelling & Conversas Relaxantes",
      youtube: "",
      tiktok: "https://www.tiktok.com/@whitewolf",
      fullBio:
        "Kogitsu é um lobo místico de três caudas que vagou por incontáveis dimensões, coletando histórias e sabedoria. Sua voz suave e presença calma criam um refúgio para aqueles que buscam paz no caos digital. Cada cauda representa uma era de conhecimento que ele compartilha através de narrativas envolventes.",
      achievements: [
        "Série de contos originais",
        "Comunidade de escritores e leitores",
        "Sessões de leitura relaxantes",
      ],
      schedule: "Streams de storytelling: Dom, Ter, Qui - 20h às 23h",
      favoriteGames: ["Visual Novels", "Disco Elysium", "Hades", "Hollow Knight"],
    },
  ]

  const vtubers: Talent[] = [
    {
      name: "BunnyDoll",
      role: "Coelhinha Cósmica",
      status: "Ativa",
      debut: "2024",
      description: "Personagem híbrida metade coelho e metade humana, com personalidade doce e cativante",
      image: "/bunnydoll.png",
      subscribers: "Em crescimento",
      specialty: "Conteúdo Fofo & Interação com Chat",
      youtube: "",
      tiktok: "https://www.tiktok.com/@sweetbee_s2",
      twitch: "https://twitch.tv/bunnydoll_s2",
      fullBio:
        "Oi oi~ eu sou a Bonny, uma VTuber que adora se divertir jogando e conhecendo gente nova! Eu gosto de explorar vários mundos diferentes nos games e sempre tento deixar minhas lives leves, cheias de risadas e boas vibes.",
      achievements: [
        "Eu jogo de tudo um pouco! Gosto de testar jogos diferentes, conversar com o chat e cantar as músicas que tocam enquanto jogo",
        "Quero criar um espacinho acolhedor onde todo mundo possa se divertir comigo, rir, relaxar e esquecer um pouquinho dos problemas do dia",
        "Continuar crescendo como VTuber pra alcançar mais coraçõezinhos por aí",
      ],
      schedule: "Faço lives à noite — normalmente entre 17h30 e 20h30, de segunda a quinta-feira",
      favoriteGames: ["Valorant", "Survival Games", "Jogos Casuais", "Qualquer jogo divertido!"],
    },
    {
      name: "Kami Izuka",
      role: "Elfo Imortal Amaldiçoado",
      status: "Ativo",
      debut: "2024",
      description: "Rei de um povo de híbridos do reino de Cidanya, trazendo alegria e piadas ruins para o chat",
      image: "/kami-izuka.png",
      subscribers: "Em crescimento",
      specialty: "Gameplay & Reacts",
      youtube: "https://www.youtube.com/@KamizVtuber/featured",
      twitter: "https://x.com/SouzShin",
      tiktok: "",
      twitch: "",
      fullBio:
        "Sou um Elfo imortal amaldiçoado e rei de um povo de híbridos de um reino chamado Cidanya. Gosto de jogar bastante, produzir reacts e alegrar o chat com piadas ruins.",
      achievements: [
        "Produzir o máximo de conteúdo possível",
        "Crescer junto com meus amigos",
        "Bater 2k até o ano que vem",
      ],
      schedule: "Faço live das 19:30 às 00:00 ou 17:00 às 20:00 seg, quarta, sexta, domingo",
      favoriteGames: ["Roblox", "Minecraft", "Dead by Daylight", "Batman (qualquer um)"],
    },
    {
      name: "Hayato Solís Takahashi",
      role: "O Guardião Das Almas",
      status: "Ativo",
      debut: "2024",
      description: "Vaga pelo Multiverso levando Sonhos, sorrisos e esperança para aqueles que precisam",
      image: "/hayato-takahashi.png",
      subscribers: "Em crescimento",
      specialty: "Conversas & Dicas de Vida",
      youtube: "https://www.youtube.com/@Hayato_Takahashi_OFC",
      twitter: "https://x.com/TheGuardianVTBR?t=9CEmRHQ3NjMkEiftfgf09A&s=09",
      tiktok: "https://www.tiktok.com/@ultimo_guardiao.ofc?_t=ZM-90ltpQTVvcR&_r=1",
      twitch: "https://www.twitch.tv/hayato_takahashi_",
      fullBio:
        "O Guardião Das Almas que vaga pelo Multiverso levando Sonhos, sorrisos e esperança para aqueles que precisam. Converso, jogo e dou dicas sobre a vida e tento ajudar aqueles que posso durante esses momentos de conversa.",
      achievements: [
        "Ajudar todos os que precisam de uma felicidade a mais no dia",
        "Criar conexões genuínas através de conversas significativas",
        "Espalhar esperança e positividade pelo multiverso digital",
      ],
      schedule: "Terça às 17:20, Quinta às 17:20, Sexta às 17:20",
      favoriteGames: ["Minecraft", "Need for Speed Underground 2", "Resident Evil 2", "Pressure no Roblox"],
    },
    {
      name: "Jurakoto",
      role: "Lobo Humano Artificial",
      status: "Ativo",
      debut: "2024",
      description:
        "VTuber meio lobo meio humano artificial, criado para ser soldado de guerra perfeito, mas fugiu para viver livre",
      image: "/jurakoto.png",
      subscribers: "Em crescimento",
      specialty: "Gameplay & Entretenimento",
      youtube: "https://youtube.com/@jurakoto?si=Tl1EhMJmpWjeVJ4Y",
      tiktok: "https://www.tiktok.com/@jurakoto?is_from_webapp=1&sender_device=pc",
      discord: "https://discord.com/invite/UwncFFMRBG",
      twitter: "",
      twitch: "",
      fullBio:
        "Somos VTubers meio lobo meio humano artificiais, criados para ser soldados de guerra perfeitos, mas fugimos por não querermos lutar e vivemos livres agora. Jogo jogos, converso, sou humilhado por ser ruim, humilho por ser bom, dou risada de tudo e converso com o chat.",
      achievements: [
        "Conquistar 100 mil inscritos",
        "Partir para 1M de inscritos",
        "Fazer collab com os VTubers que eu amo",
      ],
      schedule: "Faço live toda quarta e sexta no YT, mas alguns dias faço lives especiais (mas aviso no Server)",
      favoriteGames: ["The Last of Us Part 2", "Hollow Knight Silksong", "Cuphead"],
    },
    {
      name: "???",
      role: "Enigma das Estrelas",
      status: "Audições Fechadas",
      debut: "TBA",
      description: "Entre as constelações, uma nova história está prestes a nascer...",
      image: "/ornamental-clocks-placeholder.png",
      subscribers: "???",
      specialty: "Mistério",
      youtube: "",
      tiktok: "",
      fullBio:
        "As estrelas guardam segredos que em breve serão revelados. Uma presença misteriosa está formando nas profundezas do cosmos, preparando-se para emergir e compartilhar sua luz única com o mundo.",
      achievements: ["???"],
      schedule: "Em breve...",
      favoriteGames: ["???"],
    },
  ]

  const news = [
    {
      date: "2024-12-15",
      title: "Luna Starweaver Atinge 125K Inscritos!",
      description: "Nossa feiticeira cósmica celebra este marco especial com uma live de 12 horas!",
      image: "/anime-cosmic-girl.png",
      category: "Milestone",
    },
    {
      date: "2024-12-10",
      title: "Novo Projeto Colaborativo: 'Cosmic Tales'",
      description: "Todas as nossas VTubers se unem para criar histórias interativas únicas.",
      image: "/anime-alice-cards.png",
      category: "Projeto",
    },
    {
      date: "2024-12-05",
      title: "Raven Nightbloom - Novo Cover Musical",
      description: "Um cover gótico de uma música clássica que vai arrepiar sua alma.",
      image: "/gothic-anime-girl.png",
      category: "Música",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav
        className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-xl border-b-2 border-primary/30 shadow-xl shadow-primary/20"
            : "bg-background/90 backdrop-blur-lg border-b-2 border-primary/20 shadow-lg shadow-primary/10"
        }`}
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center bg-primary/10 rounded-full border border-primary/20 w-56 h-24">
                <img src="/cosmic-bloom-logo.png" alt="The Cosmic Bloom Logo" className="object-contain w-56 h-20" />
              </div>
              <span className="font-serif text-2xl font-bold cosmic-text-gradient">The Cosmic Bloom</span>
            </div>
            <div className="hidden md:flex space-x-2 bg-card/80 backdrop-blur-sm rounded-full p-2 border-2 border-primary/30 shadow-lg">
              {navigationItems.map((item) => (
                <Button
                  key={item.en}
                  onClick={() => scrollToSection(item.en)}
                  className={`px-6 py-3 rounded-full text-sm font-bold tracking-wider transition-all duration-300 ${
                    currentSection === item.en
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/40 scale-105"
                      : "text-foreground hover:text-primary hover:bg-primary/20 hover:scale-105"
                  }`}
                >
                  {item.pt}
                </Button>
              ))}
            </div>
            <div className="md:hidden">
              <Button
                variant="outline"
                size="sm"
                className="border-primary/30 bg-card/80 backdrop-blur-sm"
                onClick={() => {
                  const mobileMenu = document.getElementById("mobile-menu")
                  if (mobileMenu) {
                    mobileMenu.classList.toggle("hidden")
                  }
                }}
              >
                Menu
              </Button>
            </div>
          </div>
          <div
            id="mobile-menu"
            className="hidden md:hidden mt-4 bg-card/90 backdrop-blur-sm rounded-lg border border-primary/20 p-4"
          >
            <div className="flex flex-col space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.en}
                  onClick={() => {
                    scrollToSection(item.en)
                    document.getElementById("mobile-menu")?.classList.add("hidden")
                  }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium text-left transition-all duration-300 ${
                    currentSection === item.en
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:text-primary hover:bg-primary/10"
                  }`}
                >
                  {item.pt}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <div className="section-separator">
        <section
          id="home"
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #0a0a0a 0%, #4a0008 30%, #710014 50%, #4a0008 70%, #0a0a0a 100%)",
            backgroundColor: "#0a0a0a",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 overflow-hidden">
            <Star className="absolute top-20 left-10 w-4 h-4 text-accent animate-twinkle" />
            <Moon className="absolute top-32 right-20 w-6 h-6 text-muted animate-float" />
            <Key className="absolute bottom-40 left-20 w-5 h-5 text-primary animate-spin-slow" />
            <Crown className="absolute top-40 right-40 w-5 h-5 text-accent animate-float" />
            <Clock className="absolute bottom-20 right-10 w-6 h-6 text-muted animate-spin-slow" />
          </div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <h1 className="font-serif text-6xl md:text-8xl font-bold mb-6 text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] [text-shadow:_2px_2px_4px_rgb(0_0_0_/_80%)]">
                The Cosmic Bloom
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/95 font-light drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] [text-shadow:_1px_1px_2px_rgb(0_0_0_/_70%)]">
                想いは、次元を選ばない。
              </p>
              <p className="text-lg mb-12 text-white/90 drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)] [text-shadow:_1px_1px_2px_rgb(0_0_0_/_60%)]">
                Onde os sonhos transcendem a realidade e as estrelas nascem da imaginação
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="section-separator border-t-4 border-primary/20">
        <section id="about" className="py-24 bg-card relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
            <div className="w-12 h-4 bg-primary rounded-full opacity-60"></div>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 cosmic-text-gradient">SOBRE</h2>
            <p className="text-lg mb-8 text-muted-foreground leading-relaxed">
              {
                "A Cosmic Bloom é uma agência VTuber criada com o propósito de reunir talentos apaixonados por entretenimento digital, oferecendo suporte completo para que cada artista possa desenvolver sua identidade única e conquistar seu espaço no universo virtual. Nosso foco é promover conexões genuínas entre criadores e fãs, valorizando a criatividade, autenticidade e inovação em cada projeto.\n\n\n\n\n\n"
              }
            </p>
            <p className="text-base text-muted-foreground mb-12">
              Nossos talentos criam conteúdo que transcende dimensões, conectando corações através de histórias
              atemporais e experiências místicas.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => scrollToSection("founders")}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Conheça Nossos Fundadores
            </Button>
          </div>
        </section>
      </div>

      {/* <!-- CHANGE --> Added agency mascot section */}
      <div className="section-separator border-t-4 border-primary/20">
        <section id="mascot" className="py-24 bg-background relative overflow-hidden">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
            <div className="w-12 h-4 bg-primary rounded-full opacity-60"></div>
          </div>

          {/* Decorative background elements */}
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <Star className="absolute top-20 left-10 w-8 h-8 text-primary animate-twinkle" />
            <Heart className="absolute top-40 right-20 w-6 h-6 text-accent animate-float" />
            <Sparkles className="absolute bottom-40 left-20 w-7 h-7 text-primary animate-twinkle" />
            <Crown className="absolute bottom-20 right-40 w-6 h-6 text-accent animate-float" />
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 cosmic-text-gradient">
                MASCOTE DA AGÊNCIA
              </h2>
              <p className="text-lg text-muted-foreground">
                Conheça a guardiã cósmica que representa o espírito da The Cosmic Bloom
              </p>
            </div>

            <Card className="bg-card border-2 border-primary/30 shadow-2xl shadow-primary/20 overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image Section */}
                  <div className="relative bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center p-8">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
                      <img
                        src="/mabel-takahashi.png"
                        alt="Mabel Takahashi"
                        className="relative w-full max-w-md h-auto object-contain drop-shadow-2xl"
                        style={{
                          imageRendering: "-webkit-optimize-contrast",
                          filter: "contrast(1.05) saturate(1.1) drop-shadow(0 10px 30px rgba(0,0,0,0.3))",
                        }}
                      />
                    </div>
                  </div>

                  {/* Info Section */}
                  <div className="p-8 md:p-12 space-y-6 flex flex-col justify-center">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="font-serif text-3xl md:text-4xl font-bold cosmic-text-gradient">
                          Mabel Takahashi
                        </h3>
                        <span className="bg-gradient-to-r from-primary to-accent text-white px-3 py-1 rounded-full text-xs font-medium">
                          MASCOTE
                        </span>
                      </div>
                      <p className="text-xl text-foreground font-medium mb-3">Warden Cósmica</p>
                      <p className="text-muted-foreground leading-relaxed">
                        Olá, sou Mabel Takahashi, uma Warden criada em um grande laboratório por dois cientistas, uma em
                        várias tentativas, feita com o objetivo de ser uma caçadora de outras criaturas, mas que agora
                        fugiu totalmente do seu objetivo e tá procurando seguir o caminho que deseja.
                      </p>
                    </div>

                    <div className="space-y-3 pt-4 border-t border-border">
                      <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-sm mb-1">Horários</p>
                          <p className="text-sm text-muted-foreground">
                            Segunda, terça e sexta feira, começa entre as 14 e 15 horas (depende de quanto tempo eu vou
                            demorar pra ir pra casa)
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Video className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-sm mb-1">O que faço em live?</p>
                          <p className="text-sm text-muted-foreground">
                            Jogo alguns jogos, converso, faço react de algo que acho interessante ou do que me pedem
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Play className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-sm mb-1">Jogos Favoritos</p>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {[
                              "Stardew Valley",
                              "Teatro dos Finais Infelizes",
                              "FNAF",
                              "Minecraft",
                              "E muitos outros!",
                            ].map((game, index) => (
                              <span
                                key={index}
                                className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs border border-primary/20"
                              >
                                {game}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Star className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-sm mb-1">Objetivos</p>
                          <p className="text-sm text-muted-foreground">
                            No geral, quero virar uma dubladora e V-tuber famosa com oq eu gosto e sempre dando meu
                            melhor
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <p className="text-xs text-muted-foreground italic text-center">
                        "Representando o espírito livre e criativo da The Cosmic Bloom" ✨
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
      {/* <!-- /CHANGE --> */}

      <div className="section-separator border-t-4 border-primary/20">
        <section id="founders" className="py-24 bg-background relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
            <div className="w-12 h-4 bg-primary rounded-full opacity-60"></div>
          </div>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 cosmic-text-gradient">FUNDADORES</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Os visionários que deram vida ao universo The Cosmic Bloom, cada um trazendo sua magia única para nossa
              dimensão cósmica.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
            {founders.map((founder, index) => (
              <Card
                key={index}
                className="group bg-background border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 cursor-pointer"
                onClick={() => setSelectedTalent(founder)}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={founder.image || "/placeholder.svg"}
                      alt={founder.name}
                      className="w-full h-80 object-contain object-center bg-card/50 group-hover:scale-105 transition-transform duration-300"
                      style={{
                        imageRendering: "-webkit-optimize-contrast",
                        filter: "contrast(1.05) saturate(1.1)",
                        backfaceVisibility: "hidden",
                        transform: "translateZ(0)",
                      }}
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-gradient-to-r from-primary to-accent text-white px-3 py-1 rounded-full text-xs font-medium">
                        FUNDADOR
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-bold mb-1">{founder.name}</h3>
                    <p className="text-foreground font-medium text-sm mb-2">{founder.role}</p>
                    <p className="text-muted-foreground text-sm mb-3">{founder.description}</p>
                    <div className="space-y-1 text-xs text-muted-foreground">
                      <p>
                        <strong>Debut:</strong> {founder.debut}
                      </p>
                      <p>
                        <strong>Inscritos:</strong> {founder.subscribers}
                      </p>
                      <p>
                        <strong>Especialidade:</strong> {founder.specialty}
                      </p>
                    </div>
                    <div className="flex gap-2 mt-4 flex-wrap">
                      {founder.youtube && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 min-w-0 bg-transparent"
                          asChild
                          onClick={(e) => e.stopPropagation()}
                        >
                          <a href={founder.youtube} target="_blank" rel="noopener noreferrer">
                            <Video className="w-3 h-3 mr-1" />
                            YouTube
                          </a>
                        </Button>
                      )}
                      {founder.tiktok && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 min-w-0 bg-transparent"
                          asChild
                          onClick={(e) => e.stopPropagation()}
                        >
                          <a href={founder.tiktok} target="_blank" rel="noopener noreferrer">
                            <Play className="w-3 h-3 mr-1" />
                            TikTok
                          </a>
                        </Button>
                      )}
                      {founder.twitter && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 min-w-0 bg-transparent"
                          asChild
                          onClick={(e) => e.stopPropagation()}
                        >
                          <a href={founder.twitter} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-3 h-3 mr-1" />X
                          </a>
                        </Button>
                      )}
                      {founder.twitch && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 min-w-0 bg-transparent"
                          asChild
                          onClick={(e) => e.stopPropagation()}
                        >
                          <a href={founder.twitch} target="_blank" rel="noopener noreferrer">
                            <Mic className="w-3 h-3 mr-1" />
                            Twitch
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>

      <div className="section-separator border-t-4 border-primary/20">
        <section id="talent" className="py-24 bg-card relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
            <div className="w-12 h-4 bg-primary rounded-full opacity-60"></div>
          </div>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 cosmic-text-gradient">TALENTOS</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nossos talentos emergentes que florescem no jardim cósmico, cada um trazendo sua própria magia para o
              universo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
            {vtubers.map((vtuber, index) => (
              <Card
                key={index}
                className="group bg-background border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 cursor-pointer"
                onClick={() => setSelectedTalent(vtuber)}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={vtuber.image || "/placeholder.svg"}
                      alt={vtuber.name}
                      className="w-full h-[600px] object-cover object-center bg-card/50 group-hover:scale-105 transition-transform duration-300"
                      style={{
                        imageRendering: "-webkit-optimize-contrast",
                        filter: "contrast(1.05) saturate(1.1)",
                        backfaceVisibility: "hidden",
                        transform: "translateZ(0)",
                      }}
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        {vtuber.status}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-bold mb-1">{vtuber.name}</h3>
                    <p className="text-foreground font-medium text-sm mb-2">{vtuber.role}</p>
                    <p className="text-muted-foreground text-sm mb-3">{vtuber.description}</p>
                    <div className="space-y-1 text-xs text-muted-foreground">
                      <p>
                        <strong>Debut:</strong> {vtuber.debut}
                      </p>
                      <p>
                        <strong>Inscritos:</strong> {vtuber.subscribers}
                      </p>
                      <p>
                        <strong>Especialidade:</strong> {vtuber.specialty}
                      </p>
                    </div>
                    <div className="flex gap-2 mt-4 flex-wrap">
                      {vtuber.youtube && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 min-w-0 bg-transparent"
                          asChild
                          onClick={(e) => e.stopPropagation()}
                        >
                          <a href={vtuber.youtube} target="_blank" rel="noopener noreferrer">
                            <Video className="w-3 h-3 mr-1" />
                            YouTube
                          </a>
                        </Button>
                      )}
                      {vtuber.twitter && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 min-w-0 bg-transparent"
                          asChild
                          onClick={(e) => e.stopPropagation()}
                        >
                          <a href={vtuber.twitter} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-3 h-3 mr-1" />X
                          </a>
                        </Button>
                      )}
                      {vtuber.tiktok && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 min-w-0 bg-transparent"
                          asChild
                          onClick={(e) => e.stopPropagation()}
                        >
                          <a href={vtuber.tiktok} target="_blank" rel="noopener noreferrer">
                            <Play className="w-3 h-3 mr-1" />
                            TikTok
                          </a>
                        </Button>
                      )}
                      {vtuber.discord && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 min-w-0 bg-transparent"
                          asChild
                          onClick={(e) => e.stopPropagation()}
                        >
                          <a href={vtuber.discord} target="_blank" rel="noopener noreferrer">
                            <Users className="w-3 h-3 mr-1" />
                            Discord
                          </a>
                        </Button>
                      )}
                      {vtuber.twitch && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 min-w-0 bg-transparent"
                          asChild
                          onClick={(e) => e.stopPropagation()}
                        >
                          <a href={vtuber.twitch} target="_blank" rel="noopener noreferrer">
                            <Mic className="w-3 h-3 mr-1" />
                            Twitch
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>

      <div className="section-separator border-t-4 border-primary/20">
        <section id="news" className="py-24 bg-background relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
            <div className="w-12 h-4 bg-primary rounded-full opacity-60"></div>
          </div>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 cosmic-text-gradient">NOTÍCIAS</h2>
          </div>
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-background border border-border rounded-lg p-12">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <Star className="w-12 h-12 text-primary animate-twinkle" />
              </div>
              <h3 className="font-serif text-3xl font-bold mb-6 cosmic-text-gradient">Em Breve</h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                As estrelas estão se alinhando para trazer notícias cósmicas extraordinárias. Fique atento às nossas
                redes sociais para não perder nenhuma novidade do universo The Cosmic Bloom.
              </p>
              <div className="flex justify-center space-x-4">
                <Key className="w-6 h-6 text-primary animate-float" />
                <Clock className="w-6 h-6 text-accent animate-spin-slow" />
                <Moon className="w-6 h-6 text-muted animate-float" />
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="section-separator border-t-4 border-primary/20">
        <section id="audition" className="py-24 bg-card relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
            <div className="w-12 h-4 bg-primary rounded-full opacity-60"></div>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 cosmic-text-gradient">AUDIÇÕES</h2>
            <div className="bg-card border border-border rounded-lg p-12">
              <div className="w-24 h-24 bg-muted/20 rounded-full flex items-center justify-center mx-auto mb-8">
                <Mic className="w-12 h-12 text-muted" />
              </div>
              <div className="inline-block bg-red-500/10 border border-red-500/30 text-red-500 px-4 py-2 rounded-full text-sm font-medium mb-6">
                AUDIÇÕES FECHADAS
              </div>
              <h3 className="font-serif text-2xl font-bold mb-6">Audições Temporariamente Fechadas</h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                No momento, não estamos aceitando novas candidaturas. Estamos focados em apoiar e desenvolver nossos
                talentos atuais para que possam florescer completamente em nosso jardim cósmico.
              </p>
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
                <p className="text-muted-foreground mb-4">
                  Quer ser notificado quando as audições reabrirem? Junte-se à nossa comunidade no Discord e fique por
                  dentro de todas as novidades!
                </p>
                <Button size="lg" variant="outline" className="bg-transparent" asChild>
                  <a href="https://discord.gg/WhpZPY4Mj" target="_blank" rel="noopener noreferrer">
                    <Crown className="w-4 h-4 mr-2" />
                    Entrar no Discord
                  </a>
                </Button>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Users className="w-8 h-8 text-muted mx-auto mb-2" />
                  <h4 className="font-semibold mb-1">Comunidade</h4>
                  <p className="text-sm text-muted-foreground">Construa conexões genuínas</p>
                </div>
                <div className="text-center">
                  <Star className="w-8 h-8 text-muted mx-auto mb-2" />
                  <h4 className="font-semibold mb-1">Criatividade</h4>
                  <p className="text-sm text-muted-foreground">Expresse sua arte única</p>
                </div>
                <div className="text-center">
                  <Crown className="w-8 h-8 text-muted mx-auto mb-2" />
                  <h4 className="font-semibold mb-1">Suporte</h4>
                  <p className="text-sm text-muted-foreground">Tratamento real para talentos</p>
                </div>
              </div>
            </div>
            {/* </CHANGE> */}
          </div>
        </section>
      </div>

      <div className="section-separator border-t-4 border-primary/20">
        <section className="py-24 bg-background relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
            <div className="w-12 h-4 bg-primary rounded-full opacity-60"></div>
          </div>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 cosmic-text-gradient">Serviços Místicos</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Oferecemos suporte abrangente para ajudar nossos talentos a florescer no reino digital cósmico.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Sparkles,
                title: "Criação de Conteúdo",
                description: "Conteúdo mágico que cativa audiências através das dimensões",
              },
              {
                icon: Star,
                title: "Desenvolvimento de Marca",
                description: "Criando identidades únicas que brilham como estrelas",
              },
              {
                icon: Heart,
                title: "Construção de Comunidade",
                description: "Fomentando comunidades leais de sonhadores e crentes",
              },
              { icon: Clock, title: "Suporte Técnico", description: "Tecnologia de ponta para apoiar sua jornada" },
              {
                icon: Moon,
                title: "Estratégia de Marketing",
                description: "Iluminando caminhos para o sucesso no cosmos digital",
              },
              {
                icon: Crown,
                title: "Gestão de Talentos",
                description: "Tratamento real para nossas preciosas gemas cósmicas",
              },
            ].map((service, index) => (
              <Card key={index} className="bg-background border-border hover:border-primary transition-colors group">
                <CardContent className="p-6">
                  <service.icon className="w-12 h-12 text-primary mb-4 group-hover:animate-float" />
                  <h3 className="font-serif text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>

      <div className="section-separator border-t-4 border-primary/20">
        <section id="contact" className="py-24 bg-card relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
            <div className="w-12 h-4 bg-primary rounded-full opacity-60"></div>
          </div>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 cosmic-text-gradient">
              Comece Sua Jornada Cósmica
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Pronto para florescer em nosso jardim místico? Envie-nos uma mensagem e vamos criar magia juntos.
            </p>
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <form className="space-y-6" onSubmit={handleFormSubmit}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Seu Nome"
                      className="bg-background border-border focus:border-primary"
                      required
                    />
                    <Input
                      type="email"
                      placeholder="Seu Email"
                      className="bg-background border-border focus:border-primary"
                      required
                    />
                  </div>
                  <Input placeholder="Assunto" className="bg-background border-border focus:border-primary" required />
                  <Textarea
                    placeholder="Conte-nos sobre seus sonhos cósmicos..."
                    rows={5}
                    className="bg-background border-border focus:border-primary"
                    required
                  />
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <Star className="w-4 h-4 mr-2" />
                    Enviar Mensagem às Estrelas
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>

      <div className="section-separator border-t-4 border-primary/20">
        <section className="py-24 bg-background relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
            <div className="w-12 h-4 bg-primary rounded-full opacity-60"></div>
          </div>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 cosmic-text-gradient">Onde Nos Encontrar</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Junte-se à nossa comunidade cósmica e acompanhe nossas aventuras através das dimensões digitais.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-background border-border hover:border-primary transition-all duration-300 group hover:shadow-lg hover:shadow-primary/20">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4">TikTok</h3>
                <p className="text-muted-foreground mb-6">
                  Momentos mágicos e conteúdo viral que transcende realidades
                </p>
                <Button
                  className="w-full text-white border-0 shadow-lg"
                  style={{
                    backgroundColor: "#ec4899",
                    backgroundImage: "linear-gradient(to right, #ec4899, #9333ea)",
                  }}
                  asChild
                >
                  <a
                    href="https://www.tiktok.com/@tcb.agency?_t=ZM-90lwna7g44a&_r=1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Heart className="w-4 h-4 mr-2" />
                    Seguir no TikTok
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-background border-border hover:border-primary transition-all duration-300 group hover:shadow-lg hover:shadow-primary/20">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4">YouTube</h3>
                <p className="text-muted-foreground mb-6">Aventuras épicas e histórias que ecoam através do cosmos</p>
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white border-0" asChild>
                  <a href="https://www.youtube.com/@ThecosmicBloomofficial" target="_blank" rel="noopener noreferrer">
                    <Star className="w-4 h-4 mr-2" />
                    Inscrever-se
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-background border-border hover:border-primary transition-all duration-300 group hover:shadow-lg hover:shadow-primary/20">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.076.076 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4">Discord</h3>
                <p className="text-muted-foreground mb-6">Nossa comunidade secreta onde sonhadores se reúnem</p>
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white border-0" asChild>
                  <a href="https://discord.gg/WhpZPY4Mj" target="_blank" rel="noopener noreferrer">
                    <Crown className="w-4 h-4 mr-2" />
                    Entrar no Servidor
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>

      <footer className="py-12 cosmic-gradient border-t-4 border-primary/30">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-10 h-10 flex items-center justify-center">
                <img src="/cosmic-bloom-logo.png" alt="The Cosmic Bloom Logo" className="w-8 h-8 object-contain" />
              </div>
              <span className="font-serif text-2xl font-bold text-primary-foreground">The Cosmic Bloom</span>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Onde os sonhos transcendem a realidade e as estrelas nascem da imaginação
            </p>
            <p className="text-primary-foreground/60 text-sm">
              © 2025 The Cosmic Bloom. Todos os direitos reservados. Feito com magia cósmica.
            </p>
          </div>
        </div>
      </footer>

      {selectedTalent && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300"
          onClick={() => setSelectedTalent(null)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-background border-2 border-primary/30 rounded-2xl shadow-2xl shadow-primary/20 animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedTalent(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-background/90 hover:bg-primary/20 rounded-full border border-primary/30 transition-all duration-300 hover:scale-110"
            >
              <X className="w-6 h-6 text-foreground" />
            </button>

            <div className="grid md:grid-cols-5 gap-0">
              <div className="relative md:col-span-2 h-[600px] md:h-auto bg-card/50 flex items-center justify-center">
                <img
                  src={selectedTalent.image || "/placeholder.svg"}
                  alt={selectedTalent.name}
                  className="object-cover object-center w-full h-full mx-7 rounded-xl"
                  style={{
                    imageRendering: "-webkit-optimize-contrast",
                    filter: "contrast(1.05) saturate(1.1)",
                    backfaceVisibility: "hidden",
                    transform: "translateZ(0)",
                  }}
                />
              </div>

              <div className="md:col-span-3 p-8 space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="font-serif text-4xl font-bold cosmic-text-gradient">{selectedTalent.name}</h2>
                    <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-medium border border-primary/30">
                      {selectedTalent.status}
                    </span>
                  </div>
                  <p className="text-xl text-foreground font-medium mb-2">{selectedTalent.role}</p>
                  <p className="text-muted-foreground">{selectedTalent.description}</p>
                </div>

                <div className="space-y-3 pt-4 border-t border-border">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-primary" />
                    <span className="text-sm">
                      <strong>Debut:</strong> {selectedTalent.debut}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="text-sm">
                      <strong>Inscritos:</strong> {selectedTalent.subscribers}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-primary" />
                    <span className="text-sm">
                      <strong>Especialidade:</strong> {selectedTalent.specialty}
                    </span>
                  </div>
                  {selectedTalent.schedule && selectedTalent.schedule !== "???" && (
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-sm">
                        <strong>Horários:</strong> {selectedTalent.schedule}
                      </span>
                    </div>
                  )}
                </div>

                {selectedTalent.fullBio && selectedTalent.fullBio !== "???" && (
                  <div className="pt-4 border-t border-border">
                    <h3 className="font-serif text-xl font-bold mb-3 flex items-center gap-2">
                      <Heart className="w-5 h-5 text-primary" />
                      História
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{selectedTalent.fullBio}</p>
                  </div>
                )}

                {selectedTalent.achievements && selectedTalent.achievements[0] !== "???" && (
                  <div className="pt-4 border-t border-border">
                    <h3 className="font-serif text-xl font-bold mb-3 flex items-center gap-2">
                      <Crown className="w-5 h-5 text-primary" />
                      Conquistas
                    </h3>
                    <ul className="space-y-2">
                      {selectedTalent.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Star className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedTalent.favoriteGames && selectedTalent.favoriteGames[0] !== "???" && (
                  <div className="pt-4 border-t border-border">
                    <h3 className="font-serif text-xl font-bold mb-3 flex items-center gap-2">
                      <Play className="w-5 h-5 text-primary" />
                      Jogos Favoritos
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedTalent.favoriteGames.map((game, index) => (
                        <span
                          key={index}
                          className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs border border-primary/20"
                        >
                          {game}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap gap-3 pt-4">
                  {selectedTalent.youtube && (
                    <Button variant="outline" className="flex-1 bg-transparent" asChild>
                      <a href={selectedTalent.youtube} target="_blank" rel="noopener noreferrer">
                        <Video className="w-4 h-4 mr-2" />
                        YouTube
                      </a>
                    </Button>
                  )}
                  {selectedTalent.tiktok && (
                    <Button variant="outline" className="flex-1 bg-transparent" asChild>
                      <a href={selectedTalent.tiktok} target="_blank" rel="noopener noreferrer">
                        <Play className="w-4 h-4 mr-2" />
                        TikTok
                      </a>
                    </Button>
                  )}
                  {selectedTalent.twitter && (
                    <Button variant="outline" className="flex-1 bg-transparent" asChild>
                      <a href={selectedTalent.twitter} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />X
                      </a>
                    </Button>
                  )}
                  {selectedTalent.twitch && (
                    <Button variant="outline" className="flex-1 bg-transparent" asChild>
                      <a href={selectedTalent.twitch} target="_blank" rel="noopener noreferrer">
                        <Mic className="w-4 h-4 mr-2" />
                        Twitch
                      </a>
                    </Button>
                  )}
                  {selectedTalent.discord && (
                    <Button variant="outline" className="flex-1 bg-transparent" asChild>
                      <a href={selectedTalent.discord} target="_blank" rel="noopener noreferrer">
                        <img src="/discord-icon.svg" alt="Discord" className="w-4 h-4 mr-2" />
                        Discord
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
