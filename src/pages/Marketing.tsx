import { useNavigate } from 'react-router-dom'
import { ArrowRight, Trophy, Users, Dumbbell, Calendar, Mail, Waves, Sparkles, Target, Star, Shield, Heart } from 'lucide-react'
import { Footer } from '../components/Footer'
import { useParallax } from '../components/ScrollParallax'
import { useState } from 'react'
import { AuthModal } from '../components/AuthModal'
import { FeatureModal } from '../components/FeatureModal'

export function Marketing() {
  const navigate = useNavigate()
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login')
  const [selectedFeature, setSelectedFeature] = useState<{
    title: string;
    description: string;
    icon: any;
  } | null>(null)

  const handleAuthClick = (mode: 'login' | 'register') => {
    setAuthMode(mode)
    setShowAuthModal(true)
  }

  const features = [
    {
      title: 'Pistas de Pádel',
      description: '6 pistas profesionales con la última tecnología, iluminación LED y superficie de última generación. Perfectas para todos los niveles de juego.',
      icon: Trophy,
      gradient: 'from-blue-400 to-blue-600',
    },
    {
      title: 'Área Wellness',
      description: 'Zona de fitness y bienestar completa con equipamiento de última generación, clases dirigidas y entrenadores personales.',
      icon: Dumbbell,
      gradient: 'from-purple-400 to-purple-600',
    },
    {
      title: 'Piscina',
      description: 'Piscina climatizada y zona de relax con spa, sauna y baño turco. El lugar perfecto para recuperarte después del ejercicio.',
      icon: Waves,
      gradient: 'from-cyan-400 to-blue-500',
    },
  ]

  return (
    <div className="min-h-screen bg-[var(--surface-color)]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-[70px] rounded-3xl" />
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=2070')] bg-cover bg-center opacity-20"
          style={{ filter: 'blur(8px)' }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="w-24 h-24 neumorph-avatar flex items-center justify-center mx-auto mb-8">
              <Trophy className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Padel Cygnus
            </h1>
            <p className="text-xl md:text-2xl text-[var(--text-secondary)] mb-12">
              Descubre una nueva forma de vivir el pádel y el bienestar en nuestras instalaciones de última generación
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => handleAuthClick('register')}
                className="px-8 py-4 neumorph-button text-lg font-semibold hover:translate-y-[-4px] transition-all duration-300"
              >
                Comenzar Ahora
              </button>
              <button
                onClick={() => handleAuthClick('login')}
                className="px-8 py-4 neumorph-button text-lg font-semibold hover:translate-y-[-4px] transition-all duration-300"
              >
                Iniciar Sesión
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="w-12 h-12 neumorph-avatar flex items-center justify-center">
              <Star className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent" />
            </div>
            <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Nuestras Instalaciones
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group cursor-pointer"
                onClick={() => setSelectedFeature(feature)}
              >
                <div className="card-container">
                  <div className="p-8 neumorph hover-lift text-center">
                    <div className="w-20 h-20 mx-auto neumorph-avatar flex items-center justify-center mb-6">
                      <feature.icon className={`w-10 h-10 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`} />
                    </div>
                    <h3 className={`text-xl font-semibold bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent mb-4`}>
                      {feature.title}
                    </h3>
                    <p className="text-[var(--text-secondary)]">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10">
        <div className="container mx-auto text-center">
          <div className="w-20 h-20 mx-auto neumorph-avatar flex items-center justify-center mb-8">
            <Shield className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent" />
          </div>
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            ¿Listo para unirte?
          </h2>
          <p className="text-xl text-[var(--text-secondary)] mb-12 max-w-2xl mx-auto">
            Descubre nuestras membresías y comienza tu viaje hacia un estilo de vida más activo y saludable.
          </p>
          <button
            onClick={() => handleAuthClick('register')}
            className="px-8 py-4 neumorph-button text-lg font-semibold hover:translate-y-[-4px] transition-all duration-300"
          >
            Comenzar Ahora
          </button>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="card-container">
            <div className="p-8 neumorph text-center">
              <div className="w-16 h-16 mx-auto neumorph-avatar flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent" />
              </div>
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Mantente Informado
              </h2>
              <p className="text-[var(--text-secondary)] mb-8">
                Suscríbete a nuestro newsletter para recibir las últimas novedades y ofertas especiales.
              </p>
              <form className="flex gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="flex-1 p-4 neumorph-inset focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-6 neumorph-button hover:translate-y-[-2px] transition-transform"
                >
                  Suscribirse
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <AuthModal 
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        initialMode={authMode}
      />
      <FeatureModal
        isOpen={!!selectedFeature}
        onClose={() => setSelectedFeature(null)}
        title={selectedFeature?.title || ''}
        description={selectedFeature?.description || ''}
        icon={selectedFeature?.icon || Trophy}
      />
    </div>
  )
}