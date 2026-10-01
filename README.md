# 🚀 Site da Comunidade Evolui.dev

Junte-se a nós venha participar de que nos ajudamos a crescer como Dev 

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                             |
| :--------------------- | :------------------------------------------------- |
| `npm install`          | Installs dependencies                              |
| `npm run dev`          | Starts local dev server at `localhost:3000`        |
| `npm run build`        | Build your production site to `./dist/`            |
| `npm run preview`      | Preview your build locally, before deploying       |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro preview` |
| `npm run astro --help` | Get help using the Astro CLI                       |

## Cupons mensais da Udemy

Este projeto tem a skill `Cupons mensais Udemy` (`$udemy-coupon-release`) para preparar a renovação dos cupons dos cursos. Ela usa os IDs salvos em `src/data/courses.js`, gera um CSV com `custom_price=min` e validade de 31 dias, aguarda o envio manual à Udemy e, após a confirmação de que os cupons foram aceitos, atualiza os links do site e executa o build. A publicação do conteúdo de `dist/` no servidor continua manual.

Se já houver uma liberação para o mês atual, a skill pergunta se deve manter os códigos existentes ou gerar novos. Assim, um ajuste ou novo build no mesmo mês não troca os códigos sem autorização.

Ao falar sobre renovação mensal, cupons Udemy ou atualização dos links promocionais, você pode pedir: “Rode a skill Cupons mensais Udemy”.
