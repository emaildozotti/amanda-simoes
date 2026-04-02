import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { FadeIn } from './FadeIn'

// ════════════════════════════════════════════════════════════════════
// COPY — SUBSTITUIR POR CLIENTE (lp-copy.md → Bloco 8 FAQ)
// ════════════════════════════════════════════════════════════════════
const COPY = {
  eyebrow: 'dúvidas frequentes',
  heading: 'Tudo o Que Você Precisa Saber Antes de Dar o Próximo Passo',
  faqs: [
    {
      q: 'Como funciona a Radiestesia Integrada?',
      a: 'Meu método utiliza uma Mesa de Radiestesia que integra 10 terapias em um único processo de análise. O campo vibracional do paciente indica, com precisão, qual técnica é necessária naquele momento. Não trabalho com intuição aleatória: trabalho com leitura do campo, combinada ao meu embasamento em Psicologia com Mestrado, para identificar e dissolver a causa raiz do que está travando a sua vida.',
    },
    {
      q: 'É necessário acreditar no vibracional para que funcione?',
      a: 'Não. Eu não peço fé antes da experiência. O que eu peço é disposição para se autoinvestigar com honestidade. O campo vibracional responde independente das crenças prévias do paciente. O que sustenta o processo é a ciência por trás das redes neurais e o protocolo terapêutico, não a crença.',
    },
    {
      q: 'Quantas sessões são necessárias?',
      a: 'Eu não trabalho com pacotes fechados porque cada campo vibracional é único. O número de sessões depende do que a análise inicial revela e da profundidade dos registros que precisam ser dissolvidos. O que eu posso garantir é que o processo é direcionado e tem propósito em cada etapa.',
    },
    {
      q: 'O atendimento é online ou presencial?',
      a: 'Eu trabalho com ambas as modalidades. O campo vibracional não depende de proximidade física para ser acessado. O que importa é a qualidade da conexão entre paciente e processo, e isso eu garanto em qualquer formato.',
    },
    {
      q: 'O que diferencia esse trabalho de uma terapia convencional?',
      a: 'A terapia convencional, em geral, trabalha no plano mental: falar sobre o problema, identificar padrões, desenvolver estratégias cognitivas. Isso tem valor, mas tem um limite. Eu trabalho na causa raiz, no campo vibracional onde os registros ocultos ficam armazenados. A integração entre Psicologia Acadêmica e Radiestesia Integrada permite um nível de precisão que a abordagem puramente cognitiva não alcança.',
    },
  ],
}
// ════════════════════════════════════════════════════════════════════

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  const toggle = (i: number) => setOpen(open === i ? null : i)

  return (
    <section
      className="section-padding"
      style={{ backgroundColor: 'var(--color-bg-warm)' }}
    >
      <div className="container-ultra">
        {/* Section header */}
        <FadeIn>
          <div className="flex items-center gap-4 mb-4">
            <div
              style={{
                width: '2px',
                height: '40px',
                backgroundColor: 'var(--color-secondary)',
                opacity: 0.7,
                flexShrink: 0,
              }}
              aria-hidden="true"
            />
            <span className="eyebrow-ultra" style={{ color: 'var(--color-secondary)' }}>
              {COPY.eyebrow}
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2
            className="text-3xl md:text-4xl mb-10 md:mb-14"
            style={{
              fontFamily: 'var(--font-display)',
              color: 'var(--color-primary)',
              fontWeight: 400,
              lineHeight: 1.2,
            }}
          >
            {COPY.heading}
          </h2>
        </FadeIn>

        {/* Accordion */}
        <div className="flex flex-col gap-0">
          {COPY.faqs.map((faq, i) => (
            <FadeIn key={i} delay={0.05 * i}>
              <div
                style={{
                  borderTop: `1px solid color-mix(in srgb, var(--color-primary) 12%, transparent)`,
                  ...(i === COPY.faqs.length - 1
                    ? { borderBottom: `1px solid color-mix(in srgb, var(--color-primary) 12%, transparent)` }
                    : {}),
                }}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-6 py-5 md:py-6 text-left cursor-pointer"
                  style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    padding: '1.25rem 0',
                  }}
                  aria-expanded={open === i}
                >
                  <span
                    className="text-base md:text-lg"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      color: 'var(--color-primary)',
                      fontWeight: 400,
                      lineHeight: 1.4,
                    }}
                  >
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: open === i ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="shrink-0"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ stroke: 'var(--color-secondary)' }}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p
                        className="text-sm md:text-base leading-relaxed pb-6"
                        style={{
                          fontFamily: 'var(--font-sans)',
                          color: 'var(--color-primary)',
                          fontWeight: 300,
                          lineHeight: 1.85,
                          opacity: 0.8,
                          maxWidth: '680px',
                        }}
                      >
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
