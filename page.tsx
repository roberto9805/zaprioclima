import type React from "react"
import {
  Phone,
  AirVent,
  Thermometer,
  Droplet,
  Snowflake,
  CheckCircle,
  Clock,
  Star,
  Shield,
  MapPin,
  Wrench,
  Lightbulb,
  CreditCard,
  QrCode,
  Banknote,
} from "lucide-react"

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-cyan-600 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-white/20 p-4 rounded-full">
              <AirVent className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-4 leading-tight">Roberto Alves Zap Rio</h1>
          <h2 className="text-2xl font-light mb-6 text-cyan-100">
            Instalação e Manutenção de Ar Condicionado Split, Inverter e VRF
          </h2>
          <p className="text-xl text-cyan-100 max-w-2xl mx-auto leading-relaxed">
            Instalação, Conserto e Manutenção com **Garantia de Fábrica Preservada** no Rio de Janeiro.
          </p>
          <div className="flex justify-center items-center mt-6 space-x-6">
            <div className="flex items-center text-cyan-100">
              <Star className="w-5 h-5 text-yellow-300 mr-1" />
              <span>Mais de 15 anos de experiência</span>
            </div>
            <div className="flex items-center text-cyan-100">
              <Shield className="w-5 h-5 text-green-300 mr-1" />
              <span>Certificação em Inverter e VRF</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Nossos Serviços */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Nossos Serviços Especializados</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluções completas para seu sistema de climatização, com foco em tecnologia e preservação da sua garantia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {[
              {
                icon: Snowflake,
                title: "Instalação Inverter & VRF",
                desc: "Instalação técnica que preserva a garantia de fábrica e otimiza a performance do seu equipamento.",
              },
              {
                icon: Wrench,
                title: "Conserto e Reparo Avançado",
                desc: "Diagnóstico e reparo de falhas em sistemas Inverter, VRF e convencionais, com peças originais.",
              },
              {
                icon: Droplet,
                title: "Limpeza e Higienização Profunda",
                desc: "Remoção de fungos, bactérias e ácaros para um ar mais puro e saudável em seu ambiente.",
              },
              {
                icon: Thermometer,
                title: "Manutenção Preventiva",
                desc: "Planos de manutenção para prolongar a vida útil do seu AC, evitar quebras e otimizar o consumo de energia.",
              },
              {
                icon: Lightbulb,
                title: "Otimização de Performance",
                desc: "Ajustes e calibrações para garantir que seu ar condicionado opere com máxima eficiência e economia.",
              },
              {
                icon: Clock,
                title: "Atendimento Rápido e Agendado",
                desc: "Serviço ágil e pontual, com agendamento flexível para sua comodidade.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-cyan-600 to-blue-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Tecnologias e Marcas que Dominamos</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {["Inverter", "VRF", "Daikin", "Fujitsu", "LG", "Samsung", "Carrier", "Springer Midea"].map((item) => (
                <div key={item} className="bg-white/20 rounded-lg py-3 px-4 font-medium">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Por que Escolher Roberto Alves Zap Rio? */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Seu Conforto e Segurança em Primeiro Lugar</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  {[
                    {
                      icon: Shield,
                      title: "Garantia de Fábrica Preservada",
                      desc: "Nossas instalações seguem rigorosamente as normas dos fabricantes, assegurando a validade da sua garantia.",
                    },
                    {
                      icon: Lightbulb,
                      title: "Especialistas em Inverter e VRF",
                      desc: "Técnicos certificados e com profundo conhecimento nas tecnologias mais avançadas do mercado.",
                    },
                    {
                      icon: CheckCircle,
                      title: "Peças Originais e Qualidade",
                      desc: "Utilizamos apenas componentes genuínos para garantir a durabilidade e performance do seu equipamento.",
                    },
                    {
                      icon: Star,
                      title: "Experiência e Confiança",
                      desc: "Mais de 15 anos de atuação no mercado, com centenas de clientes satisfeitos no RJ.",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-green-100 p-2 rounded-full">
                        <item.icon className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 text-lg">{item.title}</h3>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Nosso Compromisso com Você</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Oferecer um serviço de excelência que vai além do reparo. Garantimos a instalação perfeita, a
                  manutenção que prolonga a vida útil e o conserto eficaz, sempre com a segurança de que seu
                  investimento está protegido.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Atendimento e Localização */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Atendimento Personalizado</h2>
            <p className="text-xl text-gray-600">Escolha a melhor opção para sua necessidade!</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Atendimento Residencial */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-orange-400 text-blue-800 px-3 py-1 rounded-full text-sm font-bold">
                PARA SUA CASA
              </div>
              <div className="flex items-center mb-4">
                <div className="bg-white/20 p-3 rounded-full mr-4">
                  <MapPin className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold">Serviço Residencial</h3>
              </div>
              <div className="text-5xl font-bold mb-4">Orçamento Sob Medida</div>
              <p className="text-blue-100 text-lg mb-6">
                Instalação, conserto e manutenção de ar condicionado split, Inverter e VRF em sua residência.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>Conforto e comodidade no seu lar</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>Atendimento com hora marcada</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>Técnicos especializados em todas as marcas</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>Garantia de fábrica preservada</span>
                </div>
              </div>
            </div>

            {/* Atendimento Comercial */}
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-yellow-400 text-green-800 px-3 py-1 rounded-full text-sm font-bold">
                PARA SUA EMPRESA
              </div>
              <div className="flex items-center mb-4">
                <div className="bg-white/20 p-3 rounded-full mr-4">
                  <AirVent className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold">Soluções Comerciais</h3>
              </div>
              <div className="text-5xl font-bold mb-4">Orçamento Personalizado</div>
              <p className="text-green-100 text-lg mb-6">
                Projetos e manutenção para sistemas de climatização de grande porte (VRF, Multi Split) e ambientes
                comerciais.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>Manutenção preventiva e corretiva</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>Atendimento prioritário para empresas</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>Otimização de consumo de energia</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>Contratos de serviço flexíveis</span>
                </div>
              </div>
            </div>
          </div>

          {/* Áreas de Atendimento */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Atendemos Todo o Rio de Janeiro</h3>
              <p className="text-xl text-gray-600">Chegamos onde você precisar, com agilidade e eficiência.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏙️</span>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Zona Sul</h4>
                <p className="text-gray-600">Copacabana, Ipanema, Leblon, Botafogo e adjacências.</p>
              </div>

              <div className="text-center p-6 bg-green-50 rounded-xl">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏡</span>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Zona Norte e Oeste</h4>
                <p className="text-gray-600">Tijuca, Barra da Tijuca, Recreio, Jacarepaguá e mais.</p>
              </div>

              <div className="text-center p-6 bg-orange-50 rounded-xl">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📍</span>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Grande Rio</h4>
                <p className="text-gray-600">Niterói, São Gonçalo, Baixada Fluminense (consulte).</p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-xl text-center">
              <h4 className="text-2xl font-bold text-gray-800 mb-2">❄️ Não Passe Calor!</h4>
              <p className="text-gray-700 text-lg">
                <strong>Agende sua visita agora mesmo</strong> - Atendimento rápido e eficiente para seu conforto!
              </p>
            </div>
          </div>
        </section>

        {/* Formas de Pagamento */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Formas de Pagamento Flexíveis</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Facilitamos o pagamento para você! Escolha a opção que melhor se adapta às suas necessidades.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Pix */}
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <QrCode className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Pix</h3>
              <p className="text-gray-600 mb-4">
                Pagamento instantâneo e seguro, disponível 24 horas por dia, 7 dias por semana. A forma mais rápida de
                quitar seu serviço!
              </p>
              <div className="text-green-600 font-semibold">Agilidade e Praticidade</div>
            </div>

            {/* Cartão de Débito */}
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Banknote className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Cartão de Débito</h3>
              <p className="text-gray-600 mb-4">
                Pague diretamente da sua conta bancária, sem burocracia. Aceitamos as principais bandeiras.
              </p>
              <div className="text-blue-600 font-semibold">Simplicidade e Segurança</div>
            </div>

            {/* Cartão de Crédito */}
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Cartão de Crédito</h3>
              <p className="text-gray-600 mb-4">
                Parcele seu serviço em até X vezes (a definir) sem juros ou com as melhores taxas. Mais flexibilidade
                para seu orçamento!
              </p>
              <div className="text-purple-600 font-semibold">Flexibilidade e Parcelamento</div>
            </div>
          </div>
        </section>

        {/* Contato */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-4xl font-bold mb-4">Fale Conosco</h2>
            <p className="text-xl mb-8 text-green-100">
              Agende seu serviço ou tire suas dúvidas. Estamos prontos para te atender!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a
                href="tel:+5521980554107" // Placeholder number, replace with actual
                className="bg-white text-green-600 font-bold py-4 px-8 rounded-full hover:bg-green-50 transition-all duration-300 flex items-center space-x-3 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Phone className="w-6 h-6" />
                <span>(21) 98055-4107</span>
              </a>

              <a
                href="https://wa.me/5521980554107" // Placeholder number, replace with actual
                className="bg-green-700 text-white font-bold py-4 px-8 rounded-full hover:bg-green-800 transition-all duration-300 flex items-center space-x-3 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <span>💬</span>
                <span>WhatsApp</span>
              </a>
            </div>

            <div className="bg-white/20 rounded-xl p-6 inline-block">
              <div className="flex items-center justify-center space-x-2 text-green-100">
                <Clock className="w-5 h-5" />
                <span className="font-medium">Atendimento: Segunda a Sábado, das 8h às 18h</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8 mt-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-cyan-600 p-3 rounded-full">
              <AirVent className="w-6 h-6 text-white" />
            </div>
          </div>
          <p className="text-lg">© 2025 Roberto Alves Zap Rio. Todos os direitos reservados.</p>
          <p className="text-gray-400 mt-1">CNPJ: 34.695.574/0001-43</p>
          <p className="text-gray-400 mt-2">
            Especialistas em instalação, conserto e manutenção de ar condicionado Split, Inverter e VRF no Rio de
            Janeiro.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
