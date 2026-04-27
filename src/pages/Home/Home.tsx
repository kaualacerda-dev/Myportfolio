import loginImage from "../../assets/img/login.png";
import frontHomeImage from "../../assets/img/Alay-front/frontHome.png";

const stacks = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "PrismaORM",
  "Nest.js",
];

function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#07030d] text-violet-50">
      <section className="flex min-h-screen flex-col bg-[radial-gradient(circle_at_top,_rgba(109,40,217,0.22),_transparent_36%),linear-gradient(180deg,_#07030d_0%,_#0d0718_55%,_#140a22_100%)] px-5 pb-16 pt-6 sm:px-8 lg:px-12">
        <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col">
          <div className="flex flex-1 flex-col justify-center py-14 sm:py-20">
            <div className="flex max-w-4xl flex-col">
              <span className="text-center text-base font-medium uppercase tracking-[0.35em] text-violet-300 sm:text-lg lg:text-left">
                Hello World!
              </span>

              <div className="mt-10 flex flex-col">
                <span className="text-5xl font-black leading-none text-white sm:text-7xl md:text-8xl">
                  Eu sou
                </span>
                <h1 className="mt-2 text-5xl font-black leading-none text-violet-200 sm:text-7xl md:text-[7rem]">
                  {"kau\u00e3"}
                </h1>
                <p className="mt-5 text-xl font-semibold text-fuchsia-300 sm:text-2xl">
                  Desenvolvedor Full Stack
                </p>
              </div>

              <p className="mt-8 max-w-2xl text-sm leading-7 text-zinc-300 sm:text-base">
                Construindo interfaces e aplicações completas com foco em
                simplicidade, performance e boa experiencia para o usuário.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                {stacks.map((stack) => (
                  <div
                    key={stack}
                    className="flex items-center rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-2 text-sm text-violet-100"
                  >
                    <span>{stack}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#projetos"
                  className="flex items-center justify-center rounded-full bg-violet-300 px-6 py-3 text-sm font-semibold text-[#140a22] transition hover:bg-violet-200"
                >
                  Ver projetos
                </a>
                <a
                  href="/cvkaualacerda.pdf"
                  download
                  className="flex items-center justify-center rounded-full border border-violet-500/20 px-6 py-3 text-sm font-semibold text-zinc-100 transition hover:border-violet-300/40 hover:text-violet-200"
                >
                  Baixar Curriculo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="projetos"
        className="flex flex-col border-t border-violet-500/10 bg-[#09040f] px-5 py-16 sm:px-8 lg:px-12"
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col">
          <div className="flex flex-col">
            <span className="text-sm font-medium uppercase tracking-[0.3em] text-violet-300">
              Projetos
            </span>
          </div>

          <article className="mt-10 flex flex-col overflow-hidden rounded-[2rem] border border-violet-500/10 bg-[#12091d] md:flex-row">
            <div className="flex w-full md:w-1/2">
              <img
                src={loginImage}
                alt="Tela de login do projeto painel administrativo"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex w-full flex-col justify-center px-5 py-6 sm:px-6 md:w-1/2 md:px-8">
              <h3 className="text-2xl font-semibold text-white sm:text-3xl">
                Painel Administrativo
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-300 sm:text-base">
                Sistema desenvolvido para a gestao interna de uma loja, com foco
                em login administrativo, acompanhamento operacional, cadastro,
                estoque de produtos e organizacao de processos do dia a dia.
              </p>
              <a
                href="#/adm-details"
                className="mt-6 flex w-fit items-center justify-center rounded-full bg-violet-300 px-6 py-3 text-sm font-semibold text-[#140a22] transition hover:bg-violet-200"
              >
                Ver detalhes do projeto
              </a>
            </div>
          </article>

          <article className="mt-8 flex flex-col overflow-hidden rounded-[2rem] border border-violet-500/10 bg-[#12091d] md:flex-row">
            <div className="flex w-full md:w-1/2">
              <img
                src={frontHomeImage}
                alt="Tela inicial do projeto Alay front-end da loja"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex w-full flex-col justify-center px-5 py-6 sm:px-6 md:w-1/2 md:px-8">
              <h3 className="text-2xl font-semibold text-white sm:text-3xl">
                Alay (Front-end da loja)
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-300 sm:text-base">
                Interface da loja desenvolvida para apresentar os produtos ao
                cliente, com telas de home, listagem, busca, carrinho e login,
                mantendo a experiencia de compra conectada ao restante do
                sistema Alay.
              </p>
              <a
                href="#/alay-front-details"
                className="mt-6 flex w-fit items-center justify-center rounded-full bg-violet-300 px-6 py-3 text-sm font-semibold text-[#140a22] transition hover:bg-violet-200"
              >
                Ver detalhes do projeto
              </a>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Home;
