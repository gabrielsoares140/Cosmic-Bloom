import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function CosmicBloomIdentity() {
  return (
    <div className="min-h-screen bg-[#161616] text-[#F2F1ED] overflow-hidden">
      {/* Hero Section with Main Logo */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        {/* Cosmic Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-2 h-2 bg-[#F2F1ED] rounded-full animate-pulse opacity-60"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-[#B38F6F] rounded-full animate-pulse opacity-80"></div>
          <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-[#710014] rounded-full animate-pulse opacity-70"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-[#F2F1ED] rounded-full animate-pulse opacity-50"></div>
          <div className="absolute bottom-20 right-10 w-2 h-2 bg-[#B38F6F] rounded-full animate-pulse opacity-60"></div>
        </div>

        <div className="text-center z-10 max-w-4xl mx-auto">
          {/* Main Logo */}
          <div className="mb-8 relative">
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold text-[#F2F1ED] tracking-wider relative">
              <span className="relative inline-block">
                The
                <div className="absolute -top-4 -right-6 w-8 h-8 border-2 border-[#710014] rounded-full opacity-60 animate-spin-slow"></div>
              </span>
            </h1>
            <div className="relative mt-4">
              <h2 className="font-serif text-7xl md:text-9xl lg:text-[12rem] font-bold bg-gradient-to-r from-[#710014] via-[#B38F6F] to-[#710014] bg-clip-text text-transparent tracking-widest">
                COSMIC
              </h2>
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <div className="w-16 h-16 border border-[#B38F6F] rounded-full flex items-center justify-center opacity-70">
                  <div className="w-2 h-8 bg-[#710014] rounded-full"></div>
                  <div className="w-8 h-2 bg-[#710014] rounded-full absolute"></div>
                </div>
              </div>
            </div>
            <div className="relative">
              <h3 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold text-[#F2F1ED] tracking-wider">
                <span className="relative inline-block">
                  BLOOM
                  <div className="absolute -bottom-4 -left-6 w-6 h-6">
                    <div className="w-full h-full border-2 border-[#B38F6F] transform rotate-45 opacity-60"></div>
                  </div>
                </span>
              </h3>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="flex justify-center items-center space-x-8 mb-8">
            <div className="w-12 h-12 border-2 border-[#710014] rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-[#B38F6F] rounded-full"></div>
            </div>
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#B38F6F] to-transparent"></div>
            <div className="w-8 h-8 border border-[#F2F1ED] transform rotate-45 opacity-60"></div>
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#B38F6F] to-transparent"></div>
            <div className="w-12 h-12 border-2 border-[#710014] rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-[#B38F6F] rounded-full"></div>
            </div>
          </div>

          <p className="font-serif text-xl md:text-2xl text-[#B38F6F] tracking-wide opacity-90">
            VTuber Agency • Mystical • Eternal • Cosmic
          </p>
        </div>
      </section>

      {/* Color Palette Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-16 text-[#F2F1ED]">Paleta Cósmica</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Card className="bg-[#710014] border-[#710014] p-8 text-center">
              <div className="w-full h-32 bg-[#710014] rounded-lg mb-4 border-2 border-[#F2F1ED] border-opacity-20"></div>
              <h3 className="font-serif text-xl font-bold text-[#F2F1ED] mb-2">Crimson Depth</h3>
              <p className="text-[#F2F1ED] opacity-80 text-sm">#710014</p>
              <p className="text-[#F2F1ED] opacity-60 text-xs mt-2">Luxo • Mistério • Poder</p>
            </Card>
            <Card className="bg-[#B38F6F] border-[#B38F6F] p-8 text-center">
              <div className="w-full h-32 bg-[#B38F6F] rounded-lg mb-4 border-2 border-[#161616] border-opacity-20"></div>
              <h3 className="font-serif text-xl font-bold text-[#161616] mb-2">Warm Sand</h3>
              <p className="text-[#161616] opacity-80 text-sm">#B38F6F</p>
              <p className="text-[#161616] opacity-60 text-xs mt-2">Equilíbrio • Terra • Aconchego</p>
            </Card>
            <Card className="bg-[#F2F1ED] border-[#F2F1ED] p-8 text-center">
              <div className="w-full h-32 bg-[#F2F1ED] rounded-lg mb-4 border-2 border-[#161616] border-opacity-20"></div>
              <h3 className="font-serif text-xl font-bold text-[#161616] mb-2">Soft Pearl</h3>
              <p className="text-[#161616] opacity-80 text-sm">#F2F1ED</p>
              <p className="text-[#161616] opacity-60 text-xs mt-2">Leveza • Pureza • Contraste</p>
            </Card>
            <Card className="bg-[#161616] border-[#710014] p-8 text-center">
              <div className="w-full h-32 bg-[#161616] rounded-lg mb-4 border-2 border-[#F2F1ED] border-opacity-20"></div>
              <h3 className="font-serif text-xl font-bold text-[#F2F1ED] mb-2">Obsidian Black</h3>
              <p className="text-[#F2F1ED] opacity-80 text-sm">#161616</p>
              <p className="text-[#F2F1ED] opacity-60 text-xs mt-2">Cosmos • Profundidade • Base</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Logo Variations */}
      <section className="py-20 px-4 bg-[#F2F1ED]">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-16 text-[#161616]">
            Variações do Logotipo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Horizontal Version */}
            <Card className="bg-[#161616] border-[#710014] p-8 text-center">
              <div className="mb-4">
                <h3 className="font-serif text-2xl font-bold text-[#F2F1ED] mb-2">THE COSMIC</h3>
                <h4 className="font-serif text-3xl font-bold text-[#710014]">BLOOM</h4>
                <div className="flex justify-center mt-2">
                  <div className="w-8 h-1 bg-[#B38F6F]"></div>
                </div>
              </div>
              <Badge variant="outline" className="border-[#B38F6F] text-[#B38F6F]">
                Versão Horizontal
              </Badge>
            </Card>

            {/* Monogram */}
            <Card className="bg-[#710014] border-[#710014] p-8 text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-24 h-24 border-4 border-[#F2F1ED] rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-serif text-2xl font-bold text-[#F2F1ED]">TC</div>
                    <div className="font-serif text-xs text-[#B38F6F] tracking-wider">BLOOM</div>
                  </div>
                </div>
              </div>
              <Badge variant="outline" className="border-[#F2F1ED] text-[#F2F1ED]">
                Monograma
              </Badge>
            </Card>

            {/* Minimal Version */}
            <Card className="bg-[#B38F6F] border-[#B38F6F] p-8 text-center">
              <div className="mb-4">
                <div className="font-serif text-3xl font-bold text-[#161616] mb-2">COSMIC</div>
                <div className="font-serif text-xl text-[#710014]">BLOOM</div>
                <div className="flex justify-center mt-2 space-x-1">
                  <div className="w-2 h-2 bg-[#161616] rounded-full"></div>
                  <div className="w-2 h-2 bg-[#710014] rounded-full"></div>
                  <div className="w-2 h-2 bg-[#161616] rounded-full"></div>
                </div>
              </div>
              <Badge variant="outline" className="border-[#161616] text-[#161616]">
                Versão Minimal
              </Badge>
            </Card>
          </div>
        </div>
      </section>

      {/* Symbolic Elements */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-16 text-[#F2F1ED]">
            Elementos Simbólicos
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {/* Clock */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 border-2 border-[#710014] rounded-full flex items-center justify-center relative">
                <div className="w-1 h-6 bg-[#B38F6F] absolute top-2"></div>
                <div className="w-4 h-1 bg-[#B38F6F] absolute"></div>
                <div className="w-2 h-2 bg-[#710014] rounded-full"></div>
              </div>
              <p className="text-[#B38F6F] text-sm">Relógio</p>
            </div>

            {/* Key */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <div className="relative">
                  <div className="w-8 h-2 bg-[#710014] rounded-full"></div>
                  <div className="w-6 h-6 border-2 border-[#B38F6F] rounded-full absolute -left-2 -top-2"></div>
                  <div className="w-2 h-3 bg-[#710014] absolute right-0 top-1"></div>
                </div>
              </div>
              <p className="text-[#B38F6F] text-sm">Chave</p>
            </div>

            {/* Cosmic Rose */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center relative">
                <div className="w-8 h-8 border-2 border-[#710014] rounded-full"></div>
                <div className="w-4 h-4 bg-[#B38F6F] rounded-full absolute"></div>
                <div className="w-2 h-8 bg-[#710014] absolute rotate-45 opacity-60"></div>
                <div className="w-8 h-2 bg-[#710014] absolute rotate-45 opacity-60"></div>
              </div>
              <p className="text-[#B38F6F] text-sm">Rosa Cósmica</p>
            </div>

            {/* Sword */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <div className="relative">
                  <div className="w-1 h-10 bg-[#B38F6F]"></div>
                  <div className="w-4 h-1 bg-[#710014] absolute top-8 -left-1.5"></div>
                  <div className="w-2 h-2 bg-[#710014] absolute -top-1 -left-0.5"></div>
                </div>
              </div>
              <p className="text-[#B38F6F] text-sm">Espada</p>
            </div>

            {/* Moon */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <div className="w-8 h-8 bg-[#710014] rounded-full relative overflow-hidden">
                  <div className="w-6 h-8 bg-[#161616] rounded-full absolute right-0"></div>
                </div>
              </div>
              <p className="text-[#B38F6F] text-sm">Lua</p>
            </div>

            {/* Star */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center relative">
                <div className="w-2 h-8 bg-[#B38F6F] absolute"></div>
                <div className="w-8 h-2 bg-[#B38F6F] absolute"></div>
                <div className="w-6 h-2 bg-[#710014] absolute rotate-45"></div>
                <div className="w-2 h-6 bg-[#710014] absolute rotate-45"></div>
              </div>
              <p className="text-[#B38F6F] text-sm">Estrela</p>
            </div>

            {/* Crown */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <div className="relative">
                  <div className="w-10 h-2 bg-[#710014] rounded-full"></div>
                  <div className="w-2 h-4 bg-[#B38F6F] absolute left-1 -top-2"></div>
                  <div className="w-2 h-6 bg-[#B38F6F] absolute left-4 -top-3"></div>
                  <div className="w-2 h-4 bg-[#B38F6F] absolute right-1 -top-2"></div>
                </div>
              </div>
              <p className="text-[#B38F6F] text-sm">Coroa</p>
            </div>

            {/* Card */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <div className="w-8 h-12 bg-[#F2F1ED] border-2 border-[#710014] rounded flex items-center justify-center">
                  <div className="w-3 h-3 bg-[#B38F6F] rounded-full"></div>
                </div>
              </div>
              <p className="text-[#B38F6F] text-sm">Carta</p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#161616] to-[#710014]">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-16 text-[#F2F1ED]">
            Aplicações da Marca
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Business Card */}
            <Card className="bg-[#161616] border-[#B38F6F] p-6">
              <div className="aspect-[1.6/1] bg-gradient-to-br from-[#710014] to-[#161616] rounded-lg p-4 flex flex-col justify-between">
                <div>
                  <div className="font-serif text-lg font-bold text-[#F2F1ED]">THE COSMIC</div>
                  <div className="font-serif text-xl font-bold text-[#B38F6F]">BLOOM</div>
                </div>
                <div className="text-right">
                  <div className="text-[#F2F1ED] text-xs opacity-80">VTuber Agency</div>
                  <div className="w-6 h-6 border border-[#B38F6F] rounded-full mt-2 ml-auto"></div>
                </div>
              </div>
              <p className="text-[#B38F6F] text-sm mt-4 text-center">Cartão de Visita</p>
            </Card>

            {/* Social Media Cover */}
            <Card className="bg-[#161616] border-[#B38F6F] p-6">
              <div className="aspect-[16/9] bg-gradient-to-r from-[#161616] via-[#710014] to-[#161616] rounded-lg p-4 flex items-center justify-center relative overflow-hidden">
                <div className="text-center z-10">
                  <div className="font-serif text-2xl font-bold text-[#F2F1ED]">COSMIC BLOOM</div>
                  <div className="text-[#B38F6F] text-sm mt-1">VTuber Agency</div>
                </div>
                <div className="absolute top-2 right-2 w-4 h-4 border border-[#B38F6F] rounded-full opacity-60"></div>
                <div className="absolute bottom-2 left-2 w-3 h-3 bg-[#B38F6F] rounded-full opacity-40"></div>
              </div>
              <p className="text-[#B38F6F] text-sm mt-4 text-center">Capa de Redes Sociais</p>
            </Card>

            {/* Emblem */}
            <Card className="bg-[#161616] border-[#B38F6F] p-6">
              <div className="aspect-square bg-[#710014] rounded-full p-6 flex items-center justify-center relative">
                <div className="w-16 h-16 border-2 border-[#F2F1ED] rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-serif text-sm font-bold text-[#F2F1ED]">CB</div>
                    <div className="w-6 h-0.5 bg-[#B38F6F] mt-1"></div>
                  </div>
                </div>
                <div className="absolute top-4 right-6 w-2 h-2 bg-[#B38F6F] rounded-full"></div>
                <div className="absolute bottom-6 left-4 w-1.5 h-1.5 bg-[#F2F1ED] rounded-full"></div>
              </div>
              <p className="text-[#B38F6F] text-sm mt-4 text-center">Emblema Reduzido</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Typography Showcase */}
      <section className="py-20 px-4 bg-[#F2F1ED]">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-16 text-[#161616]">
            Tipografia Gótica Ornamental
          </h2>
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="font-serif text-6xl md:text-8xl font-bold text-[#710014] mb-4">THE COSMIC BLOOM</h3>
              <p className="text-[#161616] opacity-70">Logotipo Principal - Serif Bold</p>
            </div>
            <div className="text-center">
              <h4 className="font-serif text-3xl md:text-4xl font-semibold text-[#161616] mb-2">
                Mistério • Elegância • Atemporalidade
              </h4>
              <p className="text-[#161616] opacity-70">Subtítulos - Serif Semibold</p>
            </div>
            <div className="text-center max-w-3xl mx-auto">
              <p className="font-serif text-lg text-[#161616] leading-relaxed">
                Uma agência VTuber que transcende os limites entre realidade e fantasia, onde cada talento floresce como
                uma estrela no jardim cósmico eterno, carregando consigo os mistérios de Wonderland e a elegância do
                universo.
              </p>
              <p className="text-[#161616] opacity-70 mt-4">Texto Corrido - Serif Regular</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Statement */}
      <section className="py-20 px-4 bg-gradient-to-t from-[#161616] to-[#710014] text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto border-4 border-[#F2F1ED] rounded-full flex items-center justify-center mb-6">
              <div className="font-serif text-2xl font-bold text-[#F2F1ED]">∞</div>
            </div>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#F2F1ED] mb-6">Uma Floração Eterna</h2>
          <p className="font-serif text-xl text-[#B38F6F] leading-relaxed max-w-2xl mx-auto">
            Onde o mistério de um baralho mágico encontra a surrealidade de Wonderland, e cada VTuber floresce como uma
            estrela no jardim cósmico da imaginação.
          </p>
          <div className="flex justify-center items-center space-x-4 mt-8">
            <div className="w-3 h-3 bg-[#710014] rounded-full"></div>
            <div className="w-12 h-0.5 bg-[#B38F6F]"></div>
            <div className="w-4 h-4 border border-[#F2F1ED] transform rotate-45"></div>
            <div className="w-12 h-0.5 bg-[#B38F6F]"></div>
            <div className="w-3 h-3 bg-[#710014] rounded-full"></div>
          </div>
        </div>
      </section>
    </div>
  )
}
