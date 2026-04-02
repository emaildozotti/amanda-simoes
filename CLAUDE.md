# Amanda Simões — Landing Page

Repo standalone da LP. Deploy via Vercel (auto-deploy no push).

## Stack
- React 19 + Vite 6 + Tailwind v4 + Framer Motion v12
- Fontes: DM Serif Display (display) + Jost (sans)

## Estrutura
- `src/site.config.ts` — dados centralizados (nome, WA, fotos)
- `src/index.css` — @theme com 8 tokens de cor + 2 fontes
- `src/components/` — 11 componentes (layout FIXO, só copy muda)
- `public/` — foto-hero.jpg e foto-about.jpg (inserir fotos reais)

## Regras
- NUNCA modificar JSX dos componentes
- Copy SEMPRE nos objetos `const COPY` de cada componente
- Cores e fontes SEMPRE no @theme do index.css
- Mobile-first: texto SEMPRE antes da foto
